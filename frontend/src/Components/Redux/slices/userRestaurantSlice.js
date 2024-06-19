import {createSlice,createAsyncThunk, isPending, current} from '@reduxjs/toolkit'
import axios from 'axios';
export const userRestaurantLoginThunk=createAsyncThunk('user-restaurant-login',async(userCredObj,thunkApi)=>{
    try{
    if(userCredObj.userType==='user'){
    
       let res=await axios.post('http://localhost:3000/userapi/login',userCredObj);
       console.log(res);
       if(res.data.message==='login success'){
        //store token in local storage
        localStorage.setItem('token',res.data.token);
       

       }
       else{
        return thunkApi.rejectWithValue(res.data.message);
       }
       return res.data;
    }
    if(userCredObj.userType==='restaurant'){
        let res=await axios.post('http://localhost:3000/restaurantapi/login',userCredObj);
        console.log(res);
        if(res.data.message==='login success'){
            //store in local storage
            localStorage.setItem('token',res.data.token);

        }
        else{
            return thunkApi.rejectWithValue(res.data.message);
        }
        return res.data;
    }}
    catch(err){
        return thunkApi.rejectWithValue(err);
    }
})

export const userRestaurantSlice=createSlice({
    name:"user-restaurant-login",
    initialState:{
        isPending:false,
        loginUserStatus:false,
        currentUser:{},
        errorOccured:false,
        errMsg:''
    },
    reducers:{
        resetState:(state,action)=>{
            state.isPending=false;
            state.currentUser={};
            state.loginUserStatus=false;
            state.errorOccured=false;
            state.errMsg='';
        }
    },
    extraReducers:builder=>builder.addCase(userRestaurantLoginThunk.pending,(state,action)=>{
        state.isPending=true;

    }).addCase(userRestaurantLoginThunk.fulfilled,(state,action)=>{
        state.isPending=false;
        state.currentUser=action.payload.user;
        state.loginUserStatus=true;
        state.errMsg='';
        state.errorOccured=false;

    }).addCase(userRestaurantLoginThunk.rejected,(state,action)=>{
        state.isPending=false;
        state.currentUser={};
        state.loginUserStatus=false;
        state.errMsg=action.payload;
        state.errorOccured=true;

    })
})

export const {resetState}=userRestaurantSlice.actions;
export default userRestaurantSlice.reducer;