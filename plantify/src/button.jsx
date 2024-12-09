import React, { useState } from 'react';
function Button({ title ,onClick}) 
{ // Correctly destructuring `title`
    const [hover, setHover] = useState(false); // State to track hover

    const handleMouseEnter = () => {
        setHover(true); // Set hover state to true on mouse enter
    };

    const handleMouseLeave = () => {
        setHover(false); // Reset hover state to false on mouse leave
    };

    return ( 
        <button 
        onClick={onClick}
        onMouseEnter={handleMouseEnter} // Trigger on mouse enter
            onMouseLeave={handleMouseLeave} // Trigger on mouse leaveonClick={onClick}
            style={{
            backgroundColor: "#3b6c6d",
            fontSize: "0.7rem",
            fontWeight: "bold",
            padding: "10px 22px",
            border: "rgb(255, 254, 254) solid 1px",
            borderRadius: "6px",
            cursor: "pointer",
            height: "auto",
            color:"white",
            transform: hover ? "scale(1.1)" : "scale(1)", // Zoom in on hover
            transition: "transform 0.3s ease-in-out", // Smooth transition
        }}>
            {title} {/* Render the title */}
        </button>
    );

}
export default Button;