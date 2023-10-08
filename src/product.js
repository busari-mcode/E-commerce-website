import React from 'react'
import Productdetail from './productdetail';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import './product.css';
const Product = () => {
  return (
    <>
    <div className='products'>
      <h2># Products</h2>
      <p>Home . products</p>
      <div className='container'>
        <div className='filter'>
          <div className='categories'>
            <h3>categories</h3>
            <ul>
              <li>Tablet</li>
              <li>Smart Watch</li>
              <li>Headphone</li>
              <li>Camera</li>
              <li>Gaming</li>
            </ul>
          </div>
        </div>
        <div className='productbox'>
          <div className='contant'>
            {
              Productdetail.map((curElm) =>
              {
                return(
                  <>
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
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Product