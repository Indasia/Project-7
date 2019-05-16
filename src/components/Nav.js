import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="main-nav">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/angels">Angels</NavLink></li>
            <li><NavLink to="/crystals">Crystals</NavLink></li>
            <li><NavLink to="/unicorns">Unicorns</NavLink></li>
        </nav>
    );
};