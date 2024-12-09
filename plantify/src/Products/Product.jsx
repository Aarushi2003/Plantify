import React ,{useState} from "react";
import Card from "./Card.jsx";
import './Productstyles.css';
import Nav from "../Nav/Nav.jsx";
import Button from "../button.jsx";
function Product()
{
    const [filterdropdown,setFilterdropdown] =useState(false);
    const [sortdropdown,setSortdropdown]=useState(false);
    const ToggleFilterDropdown=()=> setFilterdropdown(!filterdropdown);
    const ToggleSortDropdown=()=>setSortdropdown(!sortdropdown);

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
                    <div>
                    <Card name="cactus1" price="520" ></Card>
                    <Card name="cactus2" price="420" ></Card>
                    </div>
                    <div>
                    <Card name="flower1" price="320" ></Card>
                    <Card name="flower2" price="450" ></Card>
                    </div>
                    <div>
                    <Card name="indoor1" price="620" ></Card>
                    <Card name="indoor2" price="420" ></Card>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Product;
