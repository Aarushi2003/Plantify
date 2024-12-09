
import React,{ useState } from 'react';
import './App.css';
import Home from './Home/Home.jsx';
import Product from './Products/Product.jsx';
import Cart from './Cart/cart.jsx';
import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() 
{
  const [cartitem,setcartitems]=useState([]);

      return (
      <BrowserRouter>
          <div className="App">
              <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="/prods" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
          </div>
      </BrowserRouter>
      )
}
export default App;
