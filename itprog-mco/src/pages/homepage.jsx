import React, { useState, useLayoutEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './homepage.css'; 

function homepage({ setShowNavbar }) {

    useLayoutEffect(() => {
        setShowNavbar(true);
    }, [])

    return (
        <div className="home-fullscreen">
            <img src="./images/swtooth.png" alt="logo" /> 
        </div>
    );
}

export default homepage;