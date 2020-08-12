import React from 'react';
import './CheckoutProduct.css';
import {useStateValue} from './StateProvider';

function CheckoutProduct({id,title,image,price}) {
    const [{basket}, dispatch]= useStateValue();
    const removeFromBasket =() =>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        });

    }
    return (
        <div className="checkoutProduct">
            <img src={image} className="checkoutProduct__image" alt=""/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                   <small>$</small>
                    <strong>{price}</strong>        
                </p>
                <button onClick={removeFromBasket}> Remove Item</button>
            </div>
           
                  
            

            
        </div>
    )
}

export default CheckoutProduct;
