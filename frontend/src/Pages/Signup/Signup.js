import React from 'react'
import {useForm} from 'react-hook-form'
import { NavLink } from 'react-router-dom';
import './Signup.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';

function Signup() {
    let {register,handleSubmit,}=useForm();
    let navigate=useNavigate();
    let [err,setErr]=useState('');

    async function handleFormSubmit(userObj){
        try{
           
            if(userObj.userType==='user'){
            let res=await axios.post('http://localhost:3000/userapi/user',userObj);
           
            if(res.data.message==='user created'){
                navigate('/signin');
            }
            else{
                setErr(res.data.message);
            }}
            else if(userObj.userType==='restaurant'){
                let res=await axios.post('http://localhost:3000/restaurantapi/owner',userObj);
               
                if(res.data.message==='Restaurant registered'){
                    navigate('/signin');
                }
                else{
                    setErr(res.data.message);
                }
            }
        }catch (error) {
            setErr(error.response.data.message);
        }
           
        }
    
  return (
  
    <div className='d-flex gap-3 ' style={{ backgroundColor: "#1F2544" }} >
    <div className='row col-7 px-3 mt-3 mb-3'>
      <img src='https://t3.ftcdn.net/jpg/04/46/37/36/360_F_446373646_uYHx1cGEL6zrndv4xlcElHtHdfa0BF0j.jpg' id='sign' alt='' />
    </div>
      <form className='d-block mx-auto w-50 card px-5 mt-3 mb-3 me-3 fs-5 bg-light' style={{fontFamily:"italic"}} onSubmit={handleSubmit(handleFormSubmit)}>
        <h2 className='text-center mt-5 text-primary' style={{fontFamily:"cursive"}}> Welcome to EmBabuThinnara!!</h2>
          <h3 className='text-center mt-3 '>Registration form</h3>
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
                <label htmlFor='email' className='form-label'>Email</label>
                <input className='form-control' id='email' placeholder='Enter Email' {...register('email',{required:true})}/>
            </div>
          <div className='m-3'>
              <label htmlFor='password' className='form-label'>Password</label>
              <input className='form-control' id='password' placeholder='Enter Password' {...register('password',{required:true})}/>
          </div>
          <button type='submit' className='btn btn-warning d-block mx-auto'>Register</button>
          <h4 className='text-center mt-2'>Already have a account <NavLink style={{textDecoration:"none",color:"red"}} to='/signin'>Login here</NavLink></h4>
      </form>
      
  </div>
  )
}

export default Signup;