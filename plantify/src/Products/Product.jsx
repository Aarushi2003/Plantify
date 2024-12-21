import React ,{useState,useEffect} from "react";
import Card from "./Card.jsx";
import './Productstyles.css';
import Nav from "../Nav/Nav.jsx";
import Button from "../button.jsx";
import data from "../data.jsx";
function Product()
{
    const [products,setproducts]=useState(data); //centralised state for cart management 
    const [filterdropdown,setFilterdropdown] =useState(false);
    const [sortdropdown,setSortdropdown]=useState(false);
    
    const ToggleFilterDropdown=()=> setFilterdropdown(!filterdropdown);
    const ToggleSortDropdown=()=>setSortdropdown(!sortdropdown);
    
    const updatecart=(id,qty)=>{
        setproducts((prevproducts)=>
            prevproducts.map((product)=>
                product.id===id
                    ?{...product,
                        incart : qty > 0 ? 1 : 0, 
                        qty:qty
                    }
                        :product)
                    );
                };
    
    const filterprods=(type)=>{
        if(type!="ALL")
        setproducts(data.filter((product)=>product.type===type));
        else
        setproducts(data);
    }

    const sortprods=(criteria)=>{
        let sortedProducts = [...products];
        if (criteria === "Price: High to Low") {
            sortedProducts.sort((a, b) => b.price - a.price);
        } else if (criteria === "Price: Low to High") {
            sortedProducts.sort((a, b) => a.price - b.price);
        }
        setproducts(sortedProducts);
    };

    const uniqueCartItems = products.filter(product => product.qty > 0).length;
    //whereever the qty is non zero
    
    useEffect(() => {
        console.log("Updated products:", products);
    }, [products]);

    return(
        <>
            <Nav totalprods={uniqueCartItems}></Nav>
            <div className="non-nav">
                <div className="top-box">
                    <div className="intro">Discover Your Perfect Green Companion!
                        Explore our curated selection of plants to bring life and freshness to your space.</div>
                    <div className="filters">
                        <div className="dropdown">
                        <Button className="filter-button" onClick={ToggleFilterDropdown} title="FILTER"></Button>
                        {filterdropdown && (
                            <div className="dropdown-menu">
                                <button onClick={()=> filterprods("Indoor")}>Indoor</button>
                                <button onClick={()=> filterprods("Flowering")}>Flowering</button>
                                <button onClick={()=> filterprods("Succulent")}>Succulent</button>
                                <button onClick={()=> filterprods("ALL")}>ALL</button>
                            </div>
                        )}
                        </div>
                        <div className="dropdown">
                        <Button className="sort-button" onClick={ToggleSortDropdown} title="Sort By"></Button>
                        {sortdropdown && (
                            <div className="dropdown-menu">
                                <button>Best Selling</button>
                                <button onClick={()=> sortprods("Price: High to Low")}>Price: High to Low</button>
                                <button onClick={()=> sortprods("Price: Low to High")}>Price: Low to High</button>
                                <button>Date: New to Old</button>
                                <button>Date: Old to New</button>
                            </div>
                        )}
                        </div>  
                    </div>
                </div>
                <div className="product-container">
                    {products.map((element) => (
                    <div key={element.id}>
                        <Card
                        id={element.id}
                        name={element.name}
                        price={element.price}
                        imgurl={element.imgUrl}
                        incart={element.incart}
                        qty={element.qty}
                        updatecart={updatecart}
                        />
                    </div>
                    ))}
                </div>
            </div>
        </>
    );
}
export default Product;
