import React from 'react';
import Nav from './Nav';

const Header = (props) => {
    return (
        <header>
            <Nav reset={props.reset}/>
        </header>
    );
}

export default Header;