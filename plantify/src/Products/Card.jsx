import React , { useState }from 'react';
import Button from '../button.jsx';
import './Cardstyles.css'; 

function Card({name,price,imgurl,qty})
{  
    const [isAdded, setIsAdded] = useState(false);

    const decrementqty=()=>{
        if(qty>0)
        {
            qty=qty-1;
            if (newqty === 0) {
                setIsAdded(false);
        }
        updateTotalCost(qty);
        }
    };

    const incrementqty=()=>{
        qty=qty+1;

        if (!isAdded) {
            handleAddToCart();//everytime we increase the qty the add to cart is turned to added
        }
        updateTotalCost(qty); 
    }; 

    const handleAddToCart = () => {
        if(qty===0){
            qty=1;//qty has to be 1 if add to cart button is pressed when initially it was 0
            setIsAdded(true); // Mark the item as added to cart
            updateTotalCost(1);
        }
    };

    const updateTotalCost = (currentQty) => {
        settotalcost(currentQty * (price)); // Update total cost based on current quantity
    };

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
                        title={isAdded ? "Added to Cart" : "Add to Cart" }
                        onClick={handleAddToCart}
                        disabled={isAdded && qty>0} // Disable the button if added
                        style={{
                            backgroundColor: isAdded && qty>0 ? "#808080" : "#3b6c6d", // Change color to grey if added
                            color: "white",
                            cursor: isAdded && qty > 0 ? "not-allowed" : "pointer", // Change cursor style
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
                        <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{qty}</span>
                        <button className='plus' onClick={incrementqty } style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>+</button>
                    </div>
                </div>
            </div>
        </>);
    }
export default Card;
