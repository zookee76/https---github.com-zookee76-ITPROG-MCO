import React, { useState, useLayoutEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './signinpage.css'; 

function homepage({ setShowNavbar }) {

    useLayoutEffect(() => {
        setShowNavbar(true);
    }, [])

    return (
        <div className="home-fullscreen">
            hi
        </div>
    );
}

export default homepage;