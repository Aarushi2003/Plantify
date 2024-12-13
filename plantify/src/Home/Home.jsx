import React from 'react';
import Nav from "../Nav/Nav.jsx";
import './Homestyles.css';
import Button from '../button.jsx';
import { useNavigate } from "react-router-dom";//used to go navigate to a diff page

function Home()
{
    const navigate = useNavigate();
    const handleGetStarted = () => {
    navigate("/prods");
    };

    return(
    <>
        <Nav></Nav>
        <div className='home-container'>
            <div id='tagline'>
            <h1 style={{ fontSize: "4rem" }}>Plantify</h1>
            <h2> Where Green Dreams Take Root.</h2>
            <Button title="Get Started" onClick={handleGetStarted}></Button>
            </div>
            <div id='about'>
            <p1>Welcome to Plantify – your go-to app for all things green and beautiful! </p1>
            <p2>Whether you're a seasoned gardener or just starting, we’re here to help you grow. Explore a curated collection of plants, tools, and accessories tailored to your needs. Get expert tips, personalized recommendations, and an effortless shopping experience to transform your space into a lush haven. At Plantify, every plant tells a story – let’s grow yours together!</p2>       
            </div>
        </div>
    </>
    )
}
export default Home;