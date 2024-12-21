import React from 'react';
import logo from "./logo.png";
import cart from './cart.png';
import './Navstyles.css';

function Nav({ totalprods }) {
    return (
        <>
            <div className="nav-container">
                <div className="logo">
                    <a href="/"><img src={logo} alt="logo" /></a>
                </div>
                <div className="cart">
                    <a href="/cart"><img src={cart} alt="cart" /></a>
                    <span className='items' >{totalprods}</span>
                </div>
            </div>
        </>
    );
}

export default Nav;
