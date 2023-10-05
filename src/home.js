import React from 'react';
import { Link } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';
import './home.css'
const Home = () => {
  return (
    <>
    <div className='top_banner'>
      <div className='container'>
        <div className='detail'>
          <h2>The Best Note Book Collection</h2>
          <Link to='/product' className='link'>Shop Now <BsArrowRight /></Link>
        </div>
        <div className='img_box'>
          <img src='./img/slider-img.png' alt='slidering'></img>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home