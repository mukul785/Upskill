import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CartItem from './CartItem';
import { CartContext } from '../CartContext';

function Cart() {
    const { cartItems, increaseQuantity, decreaseQuantity, calculateTotal } = useContext(CartContext);
    const location = useLocation();
    const CartIsEmpty = cartItems.length === 0;

    return (
        <div className="cart">
            <div className="cart-inner">
                <div className="heading">Cart</div>
                {CartIsEmpty ? (
                    <div className="text-danger">
                        <span className="">&#9888;</span> Add items to cart to proceed.
                    </div>
                ) : (
                    <div className="cart-main">
                        {cartItems.map(item => (
                            <CartItem
                                key={item.id}
                                item={item}
                                increaseQuantity={increaseQuantity}
                                decreaseQuantity={decreaseQuantity}
                            />
                        ))}
                    </div>
                )}
                <div className="total">
                    <div className="text">Total: </div>
                    <div className="total-sum">${calculateTotal().toFixed(2)}</div>
                </div>
            </div>
            {(location.pathname==='/') && (
                <div className="refer">
                    <Link to="/payment"><button>Proceed to Payment</button></Link>
                </div>
            )}
            {(location.pathname==='/payment') && (
                <div className="refer">
                    <Link to="/"><button>Go back to Shopping</button></Link>
                </div>
            )}
        </div>
    );
}

export default Cart;
