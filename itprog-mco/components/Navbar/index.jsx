import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";
import { FaHome } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { FaBox } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";

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
                    <NavLink to="/aboutuspage"><IoMdInformationCircle style={{ marginRight: '5px' }} />About Us</NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;