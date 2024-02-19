import React from 'react';
import './signinpage.css'; 

function signinpage() {
    return (
        <div className="signin-fullscreen">
            <div className="form-container">
                <div className="form-left">
                    <div className="sign-text">Sign In</div>
                    
                    <form className="login-form">
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
                </div>

                <div className="form-right">
                    <img src="./images/bakery.webp" alt="bakery" /> {/* will replace this with the logo lanz makes */}
                </div>
            </div>
        </div>
    );
}

export default signinpage;
