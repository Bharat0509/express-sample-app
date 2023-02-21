import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import './Cart.css'
import CardItemCard from './CartItemCard.jsx'
const Cart = () => {
    const dispatch = useDispatch();
    const { cartItems } = useSelector(state => state.cart)
    console.log(cartItems);
    return (
        <>
            <div className="cartPage">
                <div className="cartHeader">
                    <p>Product</p>

                    <p>Quantity</p>

                    <p>Subtotal</p>
                </div>
                {
                    cartItems && cartItems.map((item) => (
                        <div className="cartContainer">
                            <CardItemCard item={item} />
                            <div className='cartInput'>
                                <button>-</button>
                                <input type="number" value={item.quantity} readOnly />
                                <button>+</button>

                            </div>
                            <p className='cartSubtotal'>{`₹${item.price * item.quantity}`}</p>
                        </div>
                    ))
                }

                <div className="cartGrossTotal">
                    <div></div>
                    <div className='cartGrossTotalBox'>
                        <p>Gross Total</p>
                        <p>{`₹600`}</p>
                    </div>
                    <div></div>
                    <div className="checkOutBtn">
                        <button>Check Out</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart
