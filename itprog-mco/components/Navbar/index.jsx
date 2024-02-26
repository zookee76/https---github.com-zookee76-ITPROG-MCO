import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";
import { FaHome } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { FaBox } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

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
                    <NavLink to="/homepage"><FaHome style={{ marginRight: '5px' }} />Home</NavLink>
                    <NavLink to="/shoppage"><FaShop style={{ marginRight: '5px' }} />Shop</NavLink>
                    <NavLink to="/setpage"><FaBox style={{ marginRight: '5px' }} />Make a Set</NavLink>
                    <NavLink to="/cartpage"><IoCartOutline style={{ marginRight: '5px' }} />Cart</NavLink>
                    <NavLink to="/signinpage"><MdLogout style={{ marginRight: '5px' }} />Log Out</NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;