import React from 'react'
import './Product.css'


function Product({id, title, img, price, rating}) {
  return (
    <div className='product m-2'>
        <div className='product__info col'>
          <img className='product_img row p-0' src={img} alt='product with category {}' />
          <div className="d-flex justify-content-center">
            <button className='btn btn-warning btn-sm row' type="button" data-toggle="button" aria-pressed="false" autocomplete="off">
              Add to basket
            </button>
          </div>
          <p className='row m-2'>{title}</p>
          <p className="product__price row">
              <strong className='col-1'>€</strong>
              <strong className='col p-0'>{price}</strong>
          </p>
          <div className="row product__rating  d-flex">
              {Array(rating).fill().map((_, i) => (
                <span className='col p-0'>⭐</span>
              ))}
          </div>
        </div>
    </div>
  )
}

export default Product
