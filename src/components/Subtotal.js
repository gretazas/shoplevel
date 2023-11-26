import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from  '../StateProvider';

function Subtotal() {
    const [{basket}, dispatch]= useStateValue();
    const subtotal = basket.reduce((acc, item) => acc + item.price, 0);
return (
    <div className="subtotal m-5">
    <CurrencyFormat
        renderText={(value) =>(
            <>
                <p>
                    Subtotal({basket.length} items):
                    <strong>{value}</strong>
                </p>
                <small className="subtotal-gift my-5">
                    <input type="checkbox" /> this order contains a gift
                </small>
            </>
        )}
        decimalScale={2}
        value={subtotal}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"€"}
        />
       <br></br> 
  <button className='proceed__btn my-2 rounded'>Proceed to checkout</button>
  {/* <button
                onClick={() =>
                    dispatch({
                        type: 'ADD_TO_BASKET',
                        item: / provide the item data you want to add /,
                    })
                }
            >
                Add to Basket
   </button> */}
        
    </div>
)
}


export default Subtotal
