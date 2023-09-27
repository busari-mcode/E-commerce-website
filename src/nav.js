import React from 'react'
import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import './nav.css';
const Nav = () => {
  return (
    <>
    <div className='free'>
          <div className='icon'>
          <FaTruckMoving />
          </div> 
          <p>FREE shipping when shopping upto $1000</p>
    </div>
    <div className='main_header'>
      <div className='container'>
        <div className='logo'>
          <img src='./img/logo.svg' alt='logo'></img>
        </div>
        <div className='search_box'>
          <input type='text' value='' placeholder='Search Your Product...' autoComplete='off'></input>
          <button>Search</button>
        </div>
        <div className='icon'>
          <div className='account'>
            <div className='user_icon'>
            <AiOutlineUser />
            </div>
            <p>Hello, user</p>
          </div>
          <div className='second_icon'>
          <p><AiOutlineHeart /></p>
          <p><BsBagCheck /></p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Nav