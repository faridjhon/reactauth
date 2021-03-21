import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import header from '../images/Bg.png';


const Header = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    
                </ul>
            </nav>
            <div className="title-container">
                <h1>Uber</h1>
                <h2>A global Services for You </h2>
            </div>
        </div>
    );
};

export default Header;