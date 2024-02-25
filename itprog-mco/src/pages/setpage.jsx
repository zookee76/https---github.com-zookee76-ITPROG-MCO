import React, { useState, useLayoutEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './setpage.css'; 

function setpage({ setShowNavbar }) {

    useLayoutEffect(() => {
        setShowNavbar(true);
    }, [])
    return (
        <div className="set-fullscreen">
            <div className="set-container">
                <div className="set-header">
                    <h2>Shop Individual Items</h2>
                </div>

                <div className="set-products">
                    hi
                </div>
                
            </div>
        </div>
    );
}

export default setpage;