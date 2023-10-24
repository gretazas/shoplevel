import { StopRounded } from '@mui/icons-material'
import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css '

function Subtotal() {
  return (
      <div className='subtotal'>
        <CurrencyFormat
            renderText={(value) => (
                <>
                <p>
                Subtotal (0items): <strong>0</strong>
                </p>
                <small className='subtotal__gift'>
                    <input type='checkbox' /> This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"€"}
            />
    </div>
  );
}

export default Subtotal
