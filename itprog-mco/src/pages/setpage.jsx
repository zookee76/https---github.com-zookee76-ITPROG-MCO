import React, { useState, useLayoutEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './shoppage.css'; 

function setpage({ setShowNavbar }) {

    useLayoutEffect(() => {
        setShowNavbar(true);
    }, [])
    return (
        <div className="shop-fullscreen">
            <div className="shop-container">
                <div className="shop-header">
                    <h2>Shop Individual Items</h2>
                </div>

                <div className="shop-products">
                    hi
                </div>
                
            </div>
        </div>
    );
}

export default setpage;