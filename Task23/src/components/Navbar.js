import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <Link to="/dashboard"><img src="https://imgs.search.brave.com/BMEe-sBLJhddWXIfP1BgtRvKBQXnVGnC40t99t3OWbg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90ZWFt/dmlld2VyLnNjZW5l/Ny5jb20vaXMvaW1h/Z2UvdGVhbXZpZXdl/cmdtYmgvbG9nby11/cHNraWxsLWxhbmRz/Y2FwZS0xP2Rwcj1v/ZmY" alt="logo" /></Link>
            <Link to="/"><button>Home</button></Link>
            <div className="nav-btn">
                <Link to="/SignUpForm"><button>Signup</button></Link>
                <Link to="/LoginForm"><button>Login</button></Link>
            </div>
        </nav>
    )
}


export default Navbar
