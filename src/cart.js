import React from 'react'

const Cart = ({cart, setCart}) => {
  return (
    <>
    <div className='container'>
        <div className='contant'>
            {
                cart.map((curElm) =>
                {
                    return(
                        <div className='cart_item'>
                            <div className='img_box'></div>
                        </div>
                    )
                })
            }
        </div>
    </div>
    </>
  )
}

export default Cart