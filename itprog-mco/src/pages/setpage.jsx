import React, { useState, useLayoutEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './setpage.css';
import { BsFillCakeFill } from "react-icons/bs";
import { GiChocolateBar } from "react-icons/gi";
import { TbCandy } from "react-icons/tb";
import { LuCroissant } from "react-icons/lu"; 

function setpage({ setShowNavbar }) {

    useLayoutEffect(() => {
        setShowNavbar(true);
    }, [])
    return (
        <div className="set-fullscreen">
            <div className="set-container"> 
                <div className="set-header">
                    <h2>Make a Confectionary Set</h2>
                </div>

                <div className="set-products">
                    <div className="individual-set-product-container">
                        <div className="individual-set-product-header">
                            <h3>Chocolate</h3>
                        </div>
                        <GiChocolateBar/>
                        <select id="productDropdown" name="productDropdown">
                            <option value="" disabled selected hidden>Select an option</option> {/* hardcoded options, needs to be replaced with backend */}
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                        <div className="individual-product-footer">
                            <div className="indiv-set-stock-container">
                                Quantity:  
                            </div>
                            <div className="indiv-set-price-container">
                                Price:
                            </div>
                        </div>
                    </div>
                    <div className="individual-set-product-container">
                        <div className="individual-product-header">
                            <h3>Candy</h3>
                        </div>
                        <TbCandy/>
                        <select id="productDropdown" name="productDropdown">
                            <option value="" disabled selected hidden>Select an option</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                        <div className="individual-product-footer">
                            <div className="indiv-set-stock-container">
                                    Quantity:  
                                </div>
                                <div className="indiv-set-price-container">
                                    Price:
                                </div>
                            </div>
                        </div>
                    <div className="individual-set-product-container">
                        <div className="individual-product-header">
                            <h3>Pastries</h3>
                        </div>
                        <LuCroissant/>
                        <select id="productDropdown" name="productDropdown">
                            <option value="" disabled selected hidden>Select an option</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                        <div className="individual-product-footer">
                            <div className="indiv-set-stock-container">
                                Quantity: 
                            </div>
                            <div className="indiv-set-price-container">
                                Price: 
                            </div>
                        </div>
                    </div>
                    <div className="individual-set-product-container">
                        <div className="individual-product-header">
                            <h3>Cake</h3>
                        </div>
                        <BsFillCakeFill/>
                        <select id="productDropdown" name="productDropdown">
                            <option value="" disabled selected hidden>Select an option</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                        <div className="individual-product-footer">
                        <div className="indiv-set-stock-container">
                                Quantity: 
                            </div>
                            <div className="indiv-set-price-container">
                                Price: 
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="set-footer">
                    <div className="set-price-container">
                        Total Price: 
                    </div>
                    
                    <button className="add-to-cart-button">
                    Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default setpage;