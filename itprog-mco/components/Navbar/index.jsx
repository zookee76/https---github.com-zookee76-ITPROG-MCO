import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

const Navbar = () => {

    const headingStyle = {
        marginRight: '30px',
        color: 'black',
    };

    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <h3 style={headingStyle}>Sweet Tooth Inc.</h3>
                    <NavLink to="/homepage">Home</NavLink>
                    <NavLink to="/shoppage">Shop</NavLink>
                    <NavLink to="/aboutuspage">About Us</NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
