import React from 'react';
import './Card.css';

const Card = ({ title, description, imageUrl }) => {
    return (
        <div className="card animated-border">
            {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
            <div className="card-content">
                <div className="card-title">{title}</div>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
};

export default Card;