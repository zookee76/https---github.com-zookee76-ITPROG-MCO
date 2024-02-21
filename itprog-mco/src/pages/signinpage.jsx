import React, { useState, useLayoutEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './signinpage.css'; 

function signinpage({ setShowNavbar }) {

    const navigate = useNavigate();
    
    const navigateCreateAccount = () => {
        navigate('/createaccpage');
        setShowNavbar(true);
    }

    const navigateHome = () => {
        navigate('/homepage');
        setShowNavbar(true);
    }

    useLayoutEffect(() => {
        setShowNavbar(false);
    }, [])

    return (
        <div className="signin-fullscreen">
            <div className="form-container">
                <div className="form-left">
                    <div className="sign-text">Sign In</div>
                    
                    <form className="login-form" onSubmit={navigateHome}>
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
   
                    No account yet? <button onClick={navigateCreateAccount} className="text-button">Sign Up</button>
                    
                </div>

                <div className="form-right">
                    <img src="./images/bakery.webp" alt="bakery" /> {/* will replace this with the logo lanz makes */}
                </div>
            </div>
        </div>
    );
}

export default signinpage;
