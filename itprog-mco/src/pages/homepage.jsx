import React, { useState, useLayoutEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './homepage.css'; 

function homepage({ setShowNavbar }) {

    useLayoutEffect(() => {
        setShowNavbar(true);
    }, [])

    return (
        <div className="home-fullscreen">
            Welcome to Sweet Tooth Inc.
        </div>
    );
}

export default homepage;