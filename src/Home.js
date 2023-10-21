import React from 'react';
import './Home.css';
import Product from'./Product';

function Home() {
  return (
    <div className='home row'>
      {/* <img className='shoppingBag col-4 p-0'  src="/media/sopping_bags.jpg" alt="shopping_bags" /> */}
      <div className="home_container col m-5">
        <div className='home__row d-flex justify-content-between m-2'>
            < Product />
            < Product />
            < Product />
            < Product />
        </div>
      </div>
    </div>
  )
}

export default Home
