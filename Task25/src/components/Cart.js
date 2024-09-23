import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../slices/cartSlice';
import CartItem from './CartItem';
import { Link, useLocation } from 'react-router-dom';

function Cart() {
    const cartItems = useSelector((state) => state.cart.cartItems) || []; 
    const dispatch = useDispatch();
    const location = useLocation();
    const CartIsEmpty = cartItems.length === 0;
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

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
                        {cartItems.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                increaseQuantity={() => dispatch(increaseQuantity(item.id))}
                                decreaseQuantity={() => dispatch(decreaseQuantity(item.id))}
                            />
                        ))}
                    </div>
                )}
                <div className="total">
                    <div className="text">Total: </div>
                    <div className="total-sum">${total.toFixed(2)}</div>
                </div>
            </div>
            {location.pathname === '/' && (
                <div className="refer">
                    <Link to="/payment"><button>Proceed to Payment</button></Link>
                </div>
            )}
            {location.pathname === '/payment' && (
                <div className="refer">
                    <Link to="/"><button>Go back to Shopping</button></Link>
                </div>
            )}
        </div>
    );
}

export default Cart;
