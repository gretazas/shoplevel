import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className="checkout-container">
      <h2 className='m-5'>Shopping Basket</h2>
        <div className='checkout row m-3 w-100 '>
            <div className='quantity col-1 fw-bold'>Qty</div>
            <div className='discription col-6 fw-bold'>Product Description</div>
            <div className="checkout-img col-1"></div>
            <div className="price col-1 fw-bold">Price</div>
        </div>
        <div className='checkout row m-3 d-flex align-items-end'>
            <div className='quantity col-1'>3</div>
            <div className='discription col-6'>Product Description goes here, all ainfo about the product</div>
            <img className="checkout-img col-1 border-0 rounded-4" src='/media/sopping_bags.jpg' alt='dd' />
            <div className="price col-1 d-flex justify-self-center mx-4 fw-bold">€ 29.99</div>
        </div>
        <hr></hr>
        <Subtotal />
    </div>
  )
}

export default Checkout
