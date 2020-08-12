import React from 'react';
import {useStateValue} from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
 
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket}]= useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__ad"  src="https://blog.snappa.com/wp-content/uploads/2019/03/Instagram-Ad-Size-1.jpg" alt=""/>
        {basket?.length === 0 ? (
            <div>
                <h2>Your shopping basket are empty</h2> 
            </div>
        ) : (
            <div>
                <h2 className="checkout__title">Your shopping basket </h2> 
                {basket?.map(item=>(
                    
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}/>
                    ))
                    }
            </div>

        )}
            
        </div>
        {basket.length > 0 && (
            <div className="checkout__right">
                
               <Subtotal />

            </div>

        ) }
        </div>
    )
}

export default Checkout
