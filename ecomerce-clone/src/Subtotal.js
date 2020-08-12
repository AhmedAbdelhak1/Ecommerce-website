import React from 'react';
import './Subtotal.css';
import {useStateValue} from './StateProvider';
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from "./reducer";

function Subtotal() {
    const [{basket}, dispatch]= useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
           renderText={(value)=>(
            <>
                <p>
           Subtotal ({basket.length} items):<strong>{`${value}`}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox"/> this is contains
                </small>
            </> 
       )} 
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousndSeparator={true}
        prefix={"$"}
            />
           <button> Procced to checkout</button>  
            
        </div>
    )
}

export default Subtotal
