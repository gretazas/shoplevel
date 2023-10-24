import React from 'react';
import './Home.css';
import Product from'./Product';

function Home() {
  return (
    <div className='home row'>
      
      {/* <img className='shoppingBag col-4 p-0'  src="/media/sopping_bags.jpg" alt="shopping_bags" /> */}
      <div className="home_container col m-5">
        <div className='home__row d-flex justify-content-between m-2'>
            < Product id='3232323244' title='Shopping bag' img='/media/sopping_bags.jpg' price={29.99} rating={4} />
            < Product id='3232993244' title='Shopping bagg' img='/media/sopping_bags.jpg' price={29.99} rating={1}/>
            < Product id='3232553244' title='Shopping baggg' img='/media/sopping_bags.jpg' price={29.99} rating={3}/>
            < Product id='3232333244' title='Shopping bagggg' img='/media/sopping_bags.jpg' price={29.99} rating={4}/>
            
        </div>
      </div>
      <hr></hr>
    </div>
  )
}

export default Home
