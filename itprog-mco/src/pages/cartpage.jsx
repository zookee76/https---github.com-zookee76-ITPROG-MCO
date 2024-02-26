import React, { useState, useLayoutEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './cartpage.css'; 
import { BsFillCakeFill } from "react-icons/bs";
import { GiChocolateBar } from "react-icons/gi";
import { TbCandy } from "react-icons/tb";
import { LuCroissant } from "react-icons/lu"; 
import { FaTrashCan } from "react-icons/fa6";
import { PiForkKnifeBold } from "react-icons/pi";
import { CiViewList } from "react-icons/ci";

function cartpage({ setShowNavbar }) {

    useLayoutEffect(() => {
        setShowNavbar(true);
    }, [])


    return (
        <div className="cart-fullscreen">
            <div className="cart-container">
                <div className="cart-header">
                    <h2>Shopping Cart</h2>
                </div>
                <div className="cart-subheader">
                    <PiForkKnifeBold/>
                    <div className="item-name">
                        Product Name
                    </div>
                    <div className="item-price">
                        Price
                    </div>
                    <div className="item-quantity">
                        Quantity
                    </div>
                    <div className="item-total">
                        Total
                    </div>
                    <FaTrashCan/>
                </div>
                <div className="cart-products">
                    <div className="cart-product-row">
                        <BsFillCakeFill/>
                        <div className="product_name">
                            <h4>Product Name</h4>
                        </div>
                        <div className="price">
                            Price    
                        </div>
                        <div className="quantity">
                            Quantity 
                        </div>
                        <div className="total">
                            Total 
                        </div>
                        <FaTrashCan/>
                    </div>
                    <div className="cart-product-row">
                        <GiChocolateBar/>
                        <div className="product_name">
                            <h4>Product Name</h4>
                        </div>
                        <div className="price">
                            Price    
                        </div>
                        <div className="quantity">
                            Quantity 
                        </div>
                        <div className="total">
                            Total 
                        </div>
                        <FaTrashCan/>
                    </div>
                    <div className="cart-product-row">
                        <TbCandy/>
                        <div className="product_name">
                            <h4>Product Name</h4>
                        </div>
                        <div className="price">
                            Price    
                        </div>
                        <div className="quantity">
                            Quantity 
                        </div>
                        <div className="total">
                            Total 
                        </div>
                        <FaTrashCan/>
                    </div>
                    <div className="cart-product-row">
                        <LuCroissant/>
                        <div className="product_name">
                            <h4>Product Name</h4>
                        </div>
                        <div className="price">
                            Price    
                        </div>
                        <div className="quantity">
                            Quantity 
                        </div>
                        <div className="total">
                            Total 
                        </div>
                        <FaTrashCan/>
                    </div>
                </div>
                
            </div>
            <div className="checkout-container">
                <div className="checkout-header">
                    <h2>Checkout</h2>
                </div>
                <div className="checkout-pay">
                    <div className="checkout-pay-header">
                        <CiViewList/>Order Summary
                    </div>
                    <div className="checkout-pay-details">
                        <div className="checkout-subtotal">
                            Subtotal: ₱
                        </div>
                       
                        <div className="checkout-discount">
                            Discount: ₱
                        </div>
                        <hr class="separator"></hr>
                        <div className="checkout-grandtotal">
                            Grand Total: ₱
                        </div>
                    </div>
                </div>

                <div className="payment">
                ₱
                    <input
                        id="payment-amount"
                        type="payment-amount"  
                        placeholder="Payment Amount"  
                    />
                </div>

                <button className="checkout-button">
                    Checkout
                </button>
            </div>
        </div>
    );
}

export default cartpage;