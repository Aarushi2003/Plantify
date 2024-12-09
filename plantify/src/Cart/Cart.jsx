import React from "react";
import "./cartstyles.css";
import Nav from "../Nav/Nav.jsx";
import CartCard from "../CartCard/CartCard.jsx";
function Cart()
{
    
    return(
    <>
        <Nav></Nav>
        <div className="cart-container">
            <div className="Total-amt" style={{fontSize:"larger", fontWeight:"bold"}}>Total Cart Amount - Rs.230</div>
            <h1 >Cart Items</h1>
            <div className="cart-items-container">
                <CartCard name="cactus1" price="220" qty="5"></CartCard>
                <CartCard name="cactus2" price="520" qty="2"></CartCard>
                <CartCard name="indoor1" price="560" qty="6"></CartCard>
            </div>
        </div>
    </>
    );
}
export default Cart;