import React , { useState }from 'react';
import Button from '../button.jsx';
import './CartCardstyles.css'; 
function CartCard({imgurl,name,price,qty})
{   
    return (
        <>
            <div className='cartcard-frame'>
                <div className="img-contnr">
                    <img className='pimg' src={imgurl}></img>
                </div>
                <div className="others">
                    <h1 className='card-title'>{name}</h1>
                    <div className="price-qty">
                        <h2 className='price'>Rs.{price}</h2>
                        <p1 className='qty'>Qty: {qty}</p1>
                    </div>
                    <div className="subtotal-delete">
                        <h2 className='subtotal'>Subtotal : Rs.{qty*price}</h2>
                        <Button
                        title={"Delete"}
                        style={{
                            backgroundColor: "red", // Change color to grey if added
                            color: "white",
                            cursor: "pointer",
                            borderRadius: "5px",
                            fontWeight: "bold",
                            fontSize: "0.8rem",
                            border: "none",
                        }}
                        />

                    </div>
                </div>
            </div>
        </>);
    }
export default CartCard;
