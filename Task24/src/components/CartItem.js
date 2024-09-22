import React from 'react';

function CartItem({ item, increaseQuantity, decreaseQuantity }) {
    return (
        <div className="cart-item">
            <div className="item-name bold">{item.name}</div>
            <div className="text-center">
                <div className="item-quantity bold">
                    <button className="quantity-btn" onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button className="quantity-btn" onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <div className="item-price bold">${(item.price * item.quantity).toFixed(2)}</div>
            </div>
        </div>
    );
}

export default CartItem;
