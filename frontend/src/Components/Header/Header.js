import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";

function Header() {
  return (
    <div className='d-flex flex-row justify-content-between text-white' style={{ backgroundColor: "#1F2544" }}>
      <div className='d-flex flex-row flex-item align-items-center'>
        <img src='https://i.pinimg.com/originals/58/59/e0/5859e005823cfecf3033f6a4a9dbb3f6.png' id='logo' alt='logo' />
        <h2>
          <NavLink className='mx-2 nav-link' to=''>
            EmBabuThinnara!!
          </NavLink>
        </h2>
      </div>
      <div></div>
      <div className='d-flex justify-content-end align-items-center flex-row flex-item'>
        <NavLink className='fs-5 me-3 nav-link' to=''>Home</NavLink>
        <NavLink className='fs-5 me-3 nav-link' to=''>Dishes</NavLink>
        <NavLink className='fs-5 me-3 nav-link' to=''>Order</NavLink>
        <NavLink className='fs-5 me-3 nav-link' to=''>Contact</NavLink>
      </div>
      <div className='d-flex justify-content-end align-items-center flex-row flex-item'>
      <NavLink className='fs-5 me-3 nav-link' to='search'><FaSearch className='fs-5' /></NavLink>
      <NavLink className='fs-5 me-3 nav-link' to='favourites'><MdFavoriteBorder className='fs-5'/></NavLink>
      <NavLink className='fs-5 me-3 nav-link' to='cart'><FiShoppingCart className='fs-5 '/></NavLink>
      <button className='btn btn-warning me-4 '><NavLink style={{textDecoration:"none",color:"white"}}  to='signin'>Signin</NavLink></button>
      </div>
     
    </div>
  );
}

export default Header;
