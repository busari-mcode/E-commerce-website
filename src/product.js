import React from 'react'
import Productdetail from './productdetail';
import { BsEye } from 'react-icons/bs';
import { AiOutlineCloseCircle, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import './product.css';
const Product = ({product, setProduct, detail, view, close, setClose}) => {
  const filterproduct = (product) =>
  {
    const update = Productdetail.filter((x) =>
    {
      return x.Cat === product;
    })
    setProduct(update);
  }
  const AllProducts = () =>
  {
    setProduct(Productdetail)
  }
  return (
    <>
    {
      close ?
      <div className='product_detail'>
      <div className='container'>
        <button onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle /></button>
        {
          detail.map((curElm)=>
          {
            return(
              <div className='productbox'>
                <div className='img-box'>
                  <img src={curElm.Img} alt={curElm.Title}></img>
                </div>
                <div className='detail'>
                  <h4>{curElm.Cat}</h4>
                  <h2>{curElm.Title}</h2>
                  <p>A Screen Everyone Will Love: Whether your family is streaming or video chatting with friends tablet A8...</p>
                  <h3>{curElm.Price}</h3>
                  <button>Add To Cart</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div> : null
    }
    <div className='products'>
      <h2># Products</h2>
      <p>Home . products</p>
      <div className='container'>
        <div className='filter'>
          <div className='categories'>
            <h3>categories</h3>
            <ul>
              <li onClick={()=>AllProducts()}>All Products</li>
              <li onClick={()=>filterproduct("Tablet")}>Tablet</li>
              <li onClick={()=>filterproduct("Smart Watch")}>Smart Watch</li>
              <li onClick={()=>filterproduct("Headphone")}>Headphone</li>
              <li onClick={()=>filterproduct("Camera")}>Camera</li>
              <li onClick={()=>filterproduct("Gaming")}>Gaming</li>
            </ul>
          </div>
        </div>
        <div className='productbox'>
          <div className='contant'>
            {
              product.map((curElm) =>
              {
                return(
                  <>
                    <div className='box' key={curElm.id}>
                      <div className='img_box'>
                       <img src={curElm.Img} alt={curElm.Title}></img>
                       <div className='icon'>
                         <li><AiOutlineShoppingCart /></li>
                         <li onClick={()=> view(curElm)}><BsEye /></li>
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