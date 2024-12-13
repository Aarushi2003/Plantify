import React from "react";
import "./cartstyles.css";
import Nav from "../Nav/Nav.jsx";
import CartCard from "../CartCard/CartCard.jsx";
import products from "../carddata.jsx";
function Cart()
{
    
    return(
    <>
        <Nav></Nav>
        <div className="cart-container">
            <div className="Total-amt" style={{fontSize:"larger", fontWeight:"bold"}}>Total Cart Amount - Rs.230</div>
            <h1 >Cart Items</h1>
            <div className="cart-items-container">
                {products.map((product) => (
                       <CartCard imgurl={product.imgUrl} name={product.name} price={product.price} qty={product.qty}></CartCard>
                    ))}
            </div>
        </div>
    </>
    );
}
export default Cart;