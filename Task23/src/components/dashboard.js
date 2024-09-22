import React from "react";
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="sidebar">
                <img src="https://via.placeholder.com/150" alt="Pencil" className="sidebar-img"/>
                <div className="sidebar-content">
                    <h2>My Name</h2>
                    <p>Just me, myself, and I, exploring the universe of the unknown. I have a heart of love and a 
                    passion for exploring. I want to share my world with you.</p>
                </div>
                <div className="sidebar-footer">
                    <h3>Popular Posts</h3>
                    <ul>
                        <li>Lorem</li>
                        <li>Sed mattis nunc</li>
                    </ul>
                </div>
            </div>

            <div className="main-content">
                <h1>TITLE HEADING</h1>
                <p className="post-meta">Title description, April 7, 2014</p>
                <p className="post-body">Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. 
                Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultrices mi non congue ullamcorper. 
                Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                <button className="read-more-btn">READ MORE</button>
                <div className="comments-section">
                    <p>Comments</p>
                    <span className="comments-count">0</span>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
