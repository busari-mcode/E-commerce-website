import React from 'react'
import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { CiLogin } from 'react-icons/ci';
import { Link } from 'react-router-dom';
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
          <Link to="/" className='link'><AiOutlineHeart /></Link>
          <Link to="/cart" className='link'><BsBagCheck /></Link>
          </div>
        </div>
      </div>
    </div>
    <div className='header'>
      <div className='container'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/product'>Product</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
        <div className='auth'>
          <CiLogin />
        </div>
      </div>
    </div>
    </>
  )
}

export default Nav