import React from "react";
import "./cartstyles.css";
import Nav from "../Nav/Nav.jsx";
import CartCard from "../CartCard/CartCard.jsx";
import data from "../data.jsx";
function Cart({products})
{
    const cartItems = products.filter((product) => product.incart === 1);
    const totalAmount = cartItems.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );
    return(
    <>
        <Nav></Nav>
        <div className="cart-container">
            <div className="Total-amt" style={{fontSize:"larger", fontWeight:"bold"}}>Total Cart Amount - Rs.{totalAmount}</div>
            <h1 >Cart Items</h1>
            <div className="cart-items-container">
                {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <CartCard
                                key={item.id}
                                name={item.name}
                                price={item.price}
                                qty={item.qty}
                            />
                        ))
                    ) : (
                        <p>No items in the cart</p>
                    )}
            </div>
        </div>
    </>
    );
}
export default Cart; 