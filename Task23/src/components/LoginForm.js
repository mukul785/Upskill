import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
    return (
        <div className="container">
            <div className="form-wrapper">
                <h2 className="header">Login</h2>
                <form className="form">
                    <div className="input-group">
                        <label htmlFor="email" className="label">Email:</label>
                        <input type="email" id="email" className="input" placeholder="Enter your email" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password" className="label">Password:</label>
                        <input type="password" id="password" className="input" placeholder="Enter your password" />
                    </div>

                    <button type="submit" className="button">LOGIN</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
