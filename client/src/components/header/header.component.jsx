import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = _ => {
    return (
        <div className="header">
            <div className="headerLogoContainer">
                <Link to='/' className="logo">
                    projectMarcus
                </Link>
            </div>
            <div className="headerSideBar">
                <Link to='/blog' className="option blogButton">BLOG</Link>
                <Link to='/login' className="option loginContainer">Log in</Link>
                <Link to='/signup' className="option signupContainer">Sign up</Link>
                <div className="option logoutContainer">Logout</div>
            </div>
        </div>
    );
}

export default Header;