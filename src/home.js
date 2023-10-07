import React from 'react';
import { Link } from "react-router-dom";
import { BsArrowRight, BsCurrencyDollar } from 'react-icons/bs';
import { FiTruck } from 'react-icons/fi';
import { BiHeadphone } from 'react-icons/bi';
import { CiPercent } from 'react-icons/ci';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import Homeproduct from './homeproduct';
import './home.css'
const Home = () => {
  return(
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
    <div className='product_type'>
      <div className='container'>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/Mobile Phone.png' alt='mobile'></img>
          </div>
          <div className='detail'>
            <p>23 products</p>
          </div>
        </div>

        <div className='box'>
          <div className='img_box'>
            <img src='./img/smart watch.png' alt='watch'></img>
          </div>
          <div className='detail'>
            <p>18 products</p>
          </div>
        </div>

        <div className='box'>
          <div className='img_box'>
            <img src='./img/headphone.png' alt='headphone'></img>
          </div>
          <div className='detail'>
            <p>52 products</p>
          </div>
        </div>

        <div className='box'>
          <div className='img_box'>
            <img src='./img/cpu.jpg' alt='cpu'></img>
          </div>
          <div className='detail'>
            <p>63 products</p>
          </div>
        </div>

      </div>
    </div>
    <div className='about'>
      <div className='container'>
        <div className='box'>
          <div className='icon'>
            <FiTruck />
          </div>
          <div className='detail'>
            <h3>Free shipping</h3>
            <p>Order above $1000</p>
          </div>
        </div>

        <div className='box'>
          <div className='icon'>
            <BsCurrencyDollar />
          </div>
          <div className='detail'>
            <h3>Return & Refund</h3>
            <p>Money back Guaranty</p>
          </div>
        </div>

        <div className='box'>
          <div className='icon'>
            <CiPercent />
          </div>
          <div className='detail'>
            <h3>Member Discount</h3>
            <p>On every Order</p>
          </div>
        </div>

        <div className='box'>
          <div className='icon'>
            <BiHeadphone />
          </div>
          <div className='detail'>
            <h3>Customer Support</h3>
            <p>Every Time Call Support</p>
          </div>
        </div>
      </div>
    </div>
    <div className='product'>
      <h2>Top Products</h2>
      <div className='container'>
        {
          Homeproduct.map((curElm)=>
          {
            return(
               <div className='box' key={curElm.id}>
                 <div className='img_box'>
                  <img src={curElm.Img} alt={curElm.Title}></img>
                  <div className='icon'>
                    <li><AiOutlineShoppingCart /></li>
                    <li><BsEye /></li>
                    <li><AiOutlineHeart /></li>
                  </div>
                 </div>
                 <div className='detail'>
                  <p>{curElm.Cat}</p>
                  <h3>{curElm.Title}</h3>
                  <h4>{curElm.Price}</h4>
                 </div>
               </div>
            )
          })
        }
      </div>
    </div>
    <div className='banner'>
        <div className='container'>
          <div className='detail'>
            <h4>LATEST TECHNOLOGY ADDED</h4>
            <h3>Apple iPad 10.2 9th Gen - 2021</h3>
            <p>$ 986 </p>
            <Link to='/product' className='link'>Shop Now <BsArrowRight /></Link>
          </div>
          <div className='img_box'>
           <img src='./img/slider-img.png' alt='sliderimg'></img>
          </div>
        </div>
    </div>
    </>
  )
}

export default Home