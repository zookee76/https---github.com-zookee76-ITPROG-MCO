import React, { useState, useLayoutEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './createaccpage.css'; 

function createaccpage() {

    const navigate = useNavigate();
    
    const navigateSignIn = () => {
        navigate('/signinpage');
        setShowNavbar(true);
    }

    return (
        <div className="createacc-fullscreen">
            <div className="form-container">
                <div className="form-left">
                    <div className="sign-text">Create Account</div>
                    
                    <form className="createacc-form">
                        <div className="input-group">
                            <input
                                id="fullname"
                                type="fullname"  
                                placeholder="Full Name"
                            />
                        </div>
                        <div className="input-group">
                            <input
                                id="email"
                                type="email"  
                                placeholder="Email"
                            />
                        </div>
                        <div className="input-group">
                            <input
                                id="password"
                                type="password"  
                                placeholder="Password"  
                            />
                        </div>
                        <div className="remember-forgot">
                        </div>
                        <button type="submit" className="signin-button">Sign in</button>
                    </form>
   
                   <button onClick={navigateSignIn} className="text-button">Back</button>
                    
                </div>

                <div className="form-right">
                    <img src="./images/bakery.webp" alt="bakery" /> {/* will replace this with the logo lanz makes */}
                </div>
            </div>
        </div>
    );
}

export default createaccpage;
