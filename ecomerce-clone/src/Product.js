import React from 'react';
import './Product.css';
import {useStateValue} from './StateProvider';

function Product({id,title,price,image}) {
    const [{basket},dispatch]= useStateValue();
    const addToBasket = ()=>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{id,title,price,image}
        })

    } 
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
                </p>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add Item</button>
            
        </div>
    )
}

export default Product

