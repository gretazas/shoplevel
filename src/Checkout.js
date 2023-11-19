import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <div className='checkout'>
         <h1>Shopping Bag</h1>
      <div className="checkout_col col m-5">
        <div className="checkout_row row">
            <div className="quantity col-1  fw-bold">1</div>
            <div className="description col-5">hgfsodgo ueryfdbiua feudyreg f urgeurfyg gg</div>
            <img className='col-1 rounded-4' src='/media/sopping_bags.jpg' alt='shopping bag'/>
            <div className="price col-1 fw-bold">€ 29.99</div>
        </div>
      </div>
      <div>
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
