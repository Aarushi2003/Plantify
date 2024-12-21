import React , { useState }from 'react';
import Button from '../button.jsx';
import './Cardstyles.css'; 
function Card({id,name,price,imgurl,incart,qty,updatecart })
{   
    
    const [localQty, setLocalQty] = useState(qty);
    
    const decrementqty=()=>{
        const newQty = Math.max(localQty - 1, 0);
        setLocalQty(newQty);
        updatecart(id, newQty); // Update parent state
    };

    const incrementqty=()=>{
        const newQty = localQty + 1;
        setLocalQty(newQty);
        updatecart(id, newQty); // Update parent state
    }; 

    const handleAddToCart = () => {
        if (localQty === 0) {
            const newQty = 1;
            setLocalQty(newQty);
            updatecart(id, newQty); // Add to cart with qty 1
    }};

    return (
        <>
            <div className='card-frame'>
                <img className='plant-img' src={imgurl}>
                </img>
                <h1 className='card-title'>{name}</h1>
                <div className="misc-box">
                    <div className='misc-box-1'>
                        <h2 className='card-price'>Rs.{price}</h2>
                        <Button
                        title={incart ? "Added to Cart" : "Add to Cart" }
                        onClick={handleAddToCart}
                        disabled={incart && localQty>0} // Disable the button if added
                        style={{
                            backgroundColor: incart && localQty>0 ? "#808080" : "#3b6c6d", // Change color to grey if added
                            color: "white",
                            cursor: incart && localQty > 0 ? "not-allowed" : "pointer", // Change cursor style
                            padding: "10px 20px",
                            borderRadius: "5px",
                            fontWeight: "bold",
                            fontSize: "0.8rem",
                            border: "none",
                        }}
                        />
                    </div>
                    <div className="qty">
                        <button className='minus'onClick={decrementqty} style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>-</button>
                        <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{localQty}</span>
                        <button className='plus' onClick={incrementqty } style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>+</button>
                    </div>
                </div>
            </div>
        </>);
    }
export default Card;
