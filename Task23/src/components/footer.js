import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <p>© 2024 Upskii Mafia All rights reserved.</p>
            <Link to="/SignUpForm"><button className="register-btn">Register for free</button></Link>
        </div>
    );
};

export default Footer;
