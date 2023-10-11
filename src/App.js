import React from 'react'
import { useState } from 'react';
import Nav from './nav';
import Rout from './rout';
import { BrowserRouter } from 'react-router-dom'
import Footer from './footer';
import Productdetail from './productdetail';
const App = () => {
  //product Detail
  const [close, setClose] = useState(false)
  const [detail, setDetail] = useState([]);
  //fiter product
  const [product, setProduct] = useState(Productdetail);
  const searchbtn = (product) =>
  {
    const change = Productdetail.filter((x)=>
    {
      return x.Cat === product
    })
    setProduct(change)
  }
  //product detail
  const view = (product) =>
  {
    setDetail([{...product}])
    setClose(true)
  }
  return (
    <>
    <BrowserRouter>
    <Nav searchbtn={searchbtn}/>
    <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose}/>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App