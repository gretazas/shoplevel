import React from 'react'
import './Product.css'
import rating from 'react'
import { useStateValue } from '../StateProvider'


function Product({ id, title, img, price, rating }) {
      const [{ basket }, dispatch] = useStateValue();
      console.log('This is the basket', basket);
      const addToBasket = () => {
        //dispatch item into data layer
        dispatch({
          type: 'ADD_TO_BASKET',
          item: {
            id: id,
            title: title,
            img: img,
            price: price,
            rarting: rating,
          },
        });
      };
  return (
    <div className='product m-2'>
        <div className='product__info col'>
          <img className='product_img row p-0' src='/media/sopping_bags.jpg' alt='product with category {}' />
          <div className="d-flex justify-content-center">
            <button onClick={addToBasket} className='btn btn-warning btn-sm row' type="button" data-toggle="button" aria-pressed="false" autoComplete="off">
              Add to basket
            </button>
          </div>
          <p className='row m-2'>jdghiaudfhd lfiusdfh ;</p>
          <p className="product__price row">
              <strong className='col-1'>€</strong>
              <strong className='col p-0'>29.59</strong>
          </p>
          <div className="row product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p className='col p-0'>⭐</p>
                )
              )}
          </div>
        </div>
    </div>
  )
}

export default Product
