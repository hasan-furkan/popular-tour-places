import React from 'react';
import './Navbar.css';

const navbar = () => {
    return (
        <div className="navbar-bar">
            <ul>
                <li><a href="#">ABOUT US</a></li>
                <li><a href="#">FOR YOU</a></li>
                <li><a href="#">SERVICES</a></li>
                <li><a href="#">BLOG</a></li>
                <li><a href="#">VLOG</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
        </div>
     )
};

export default navbar;
