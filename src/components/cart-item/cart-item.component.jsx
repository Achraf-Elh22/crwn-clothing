import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, name, quantity, price } }) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item' />
        <div className="item-details">
            <span className='name' >{name}</span>
            <span>{quantity} * ${price} </span>
        </div>
    </div>
)

export default CartItem;