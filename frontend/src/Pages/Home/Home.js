import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'
function Home() {
  return (
    <div>
      <div className='' id='container' style={{fontFamily:"sans-serif"}}>
        <div>
          <img src='https://static.vecteezy.com/system/resources/previews/035/328/163/non_2x/ai-generated-homemade-hamburger-with-fresh-vegetables-and-french-fries-on-dark-background-photo.jpg' id='image1' alt='Home' className=' rounded'/>
        </div>
        <div id='overlay' className=' text-white'>
        <h1 style={{fontFamily:"italic"}} id='overlay-1'>Welcome to Tomato</h1>
        <h2 style={{fontFamily:"italic"}} id='overlay-2'>A Delicious Food Delivery Platform</h2>
        </div>
        <div id='overlay-5'>
          <input type='text' placeholder='Search' className='rounded-5  px-2' id='search'/>
        </div>
        <div id='overlay-3'>
          <p className='bg-dark text-white rounded px-3 py-3 mx-5'>A food website is a digital platform to share recipes, cooking tips, or information about food products and services. Creating an excellent food website can be challenging, particularly in terms of presenting content in an appealing way.A food website is a digital platform to share recipes, cooking tips, or information about food products and services. Creating an excellent food website can be challenging, particularly in terms of presenting content in an appealing way.A food website is a digital platform to share recipes, cooking tips, or information about food products and services. Creating an excellent food website can be challenging, particularly in terms of presenting content in an appealing way</p>
        </div>
        <div id='overlay-4' className='d-flex justify-content-between'>
          <button className='btn  rounded flex-item me-5  text-white' id='btn'><NavLink style={{textDecoration:"none"}} className='text-white fs-5' to='signup'>Register</NavLink></button>
          <button className='btn  rounded flex-item me-5 ' id='btn'><NavLink style={{textDecoration:"none"}} className='text-white fs-5'  to='signin'>Login</NavLink></button>
        </div>
      </div>
    </div>
  )
}

export default Home