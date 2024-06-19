import React ,{useEffect}from 'react'
import {useForm} from 'react-hook-form'
import './Signin.css'
import { NavLink } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { userRestaurantLoginThunk } from '../../Components/Redux/slices/userRestaurantSlice';
function Signin() {
   
    let {register,handleSubmit}=useForm();
    let{loginUserStatus,errorOccured,errMsg,currentUser}=useSelector(state=>state.userRestaurantLoginReducer)
    let dispatch=useDispatch();
    let navigate=useNavigate();

    function handleFormSubmit(userObj){
        console.log(userObj);
        dispatch(userRestaurantLoginThunk(userObj));
    }
    useEffect(()=>{
        if(loginUserStatus===true){
            if(currentUser.userType==='user'){
        navigate('/userProfile');}
           else if(currentUser.userType==='restaurant'){
            navigate('/restaurantProfile');
           }}
    },[loginUserStatus,currentUser.userType,navigate])
  return (
    
    <div className='d-flex gap-3 ' style={{ backgroundColor: "#1F2544" }} >
      <div className='row col-7 px-3 mt-3 mb-3'>
        <img src='https://us.123rf.com/450wm/tommisch/tommisch1711/tommisch171100516/89227218-fast-food-dish-top-view-meat-burger-potato-chips-and-wedges-take-away-composition-french-fries.jpg?ver=6' id='sign' alt='' />
      </div>
        <form className='d-block mx-auto w-50 card px-5 mt-3 mb-3 me-3 fs-5 bg-light' style={{fontFamily:"italic"}} onSubmit={handleSubmit(handleFormSubmit)}>
        <h2 className='text-center mt-5 text-danger' style={{fontFamily:"cursive"}}> Welcome to EmBabuThinnara!!</h2>
            <h3 className='text-center mt-3 text-primary' style={{fontFamily:"cursive"}}>Login form</h3>
            <div className='m-3 '>
            <label htmlFor='userType form-label'>UserType</label>
            <br></br>
            <div className='d-flex '>
            <div className='me-3'>
            <input type='radio' id='user' value='user' name='userType' {...register('userType',{required:true})} />
            <label htmlFor='user' className='form-label'>User</label>
            </div>
            <div className='me-3'>
            <input type='radio' id='restaurant' value='restaurant' name='userType' {...register('userType',{required:true})}/>
            <label htmlFor='restaurant' className='form-label'>Restaurant</label>
            </div>
            </div>
            </div>
            
            <div className='m-3'>
                <label htmlFor='username' className='form-label'>Username</label>
                <input className='form-control' id='username' placeholder='Enter Username' {...register('username',{required:true})}/>
            </div>
            
            <div className='m-3'>
                <label htmlFor='password' className='form-label'>Password</label>
                <input className='form-control' id='password' placeholder='Enter Password' {...register('password',{required:true})}/>
            </div>
            <button type='submit' className='btn btn-primary d-block mx-auto'>Login</button>
            <h4 className='text-center mt-2'>If you dont have account <NavLink style={{textDecoration:"none",color:"red"}} to='/signup'>Register here</NavLink></h4>
        </form>
        
    </div>
  )
}
export default Signin;