import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="main-nav">
            <ul><NavLink exact to="/">Home</NavLink></ul>
            <ul><NavLink to="/angels">Angels</NavLink></ul>
            <ul><NavLink to="/crystals">Crystals</NavLink></ul>
            <ul><NavLink to="/unicorns">Unicorns</NavLink></ul>
        </nav>
    );
};

export default Nav;