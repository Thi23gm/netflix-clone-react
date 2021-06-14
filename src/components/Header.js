import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <Link to="/">
                    <img src="https://fontmeme.com/permalink/210609/7807cf69799e8a5925514becb1c256c6.png" />
                </Link>
            </div>
            <div className="header--search">
                <Link to="/search">
                    <img src="https://icon-library.com/images/search-bar-icon-png/search-bar-icon-png-14.jpg"/>
                </Link>
            </div>
        </header>
    );
}