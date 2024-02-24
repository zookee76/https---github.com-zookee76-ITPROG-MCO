import React, { useState, useLayoutEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './shoppage.css'; 
import ProductList from '/components/productList';

function shoppage({ setShowNavbar }) {

    useLayoutEffect(() => {
        setShowNavbar(true);
    }, [])

    const [count, setCount] = useState(0);

    const increment = () => setCount(prevCount => prevCount + 1);
    const decrement = () => setCount(prevCount => prevCount - 1);

    return (
        <div className="shop-fullscreen">
            <div className="shop-container">
                <div className="shop-header">
                    <h2>Shop Individual Items</h2>
                </div>

                <div className="shop-products">
                    <ProductList />
                </div>
                
            </div>
        </div>
    );
}

export default shoppage;