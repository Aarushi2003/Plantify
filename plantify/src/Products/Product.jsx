import React ,{useState} from "react";
import Card from "./Card.jsx";
import Nav from "../Nav/Nav.jsx";
import Button from "../button.jsx";
import products from "../carddata";  // Now the file is in the src directory
import './Productstyles.css';

function Product()
{
    const [filterdropdown,setFilterdropdown] =useState(false);
    const [sortdropdown,setSortdropdown]=useState(false);
    
    const ToggleFilterDropdown=()=> setFilterdropdown(!filterdropdown);
    const ToggleSortDropdown=()=>setSortdropdown(!sortdropdown);

    function dividearray(array, size) {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    }
    const group = dividearray(products,3);//each row has only 3 cards

    return(
        <>
            <Nav></Nav>
            <div className="non-nav">
                <div className="top-box">
                    <div className="intro">Discover Your Perfect Green Companion!
                        Explore our curated selection of plants to bring life and freshness to your space.</div>
                    <div className="filters">
                        <div className="dropdown">
                        <Button className="filter-button" onClick={ToggleFilterDropdown} title="FILTER"></Button>
                        {filterdropdown && (
                            <div className="dropdown-menu">
                                <button>Indoor</button>
                                <button>Flowering</button>
                                <button>Succulent</button>
                            </div>
                        )}
                        </div>
                        <div className="dropdown">
                        <Button className="sort-button" onClick={ToggleSortDropdown} title="Sort By"></Button>
                        {sortdropdown && (
                            <div className="dropdown-menu">
                                <button>Best Selling</button>
                                <button>Price: High to Low</button>
                                <button>Price: Low to High</button>
                                <button>Date: New to Old</button>
                                <button>Date: Old to New</button>
                            </div>
                        )}
                        </div>  
                    </div>
                </div>
                <div className="product-container">
                    {group.map((product) => (
                        <Card key={product.id} name={product.name} price={product.price} imgurl={product.imgUrl} />
                    )
                    )}
                </div>
            </div>
        </>
    );
}
export default Product;
