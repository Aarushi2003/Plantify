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
                {data.some((element) => element.incart === 1) ? (
                    data.map((element) => {
                        if (element.incart === 1) {
                            totcartamt+={price}*{qty};
                            return (
                                <div key={element.id}>
                                    <CartCard name={element.name} price={element.price} qty={element.qty} />
                                </div>
                            );
                        }
                        return null; // Skip items not in the cart
                    })
                ) : (
                    <p1>No items in the cart</p1>
                )}
            </div>
        </div>
    </>
    );
}
export default Cart;