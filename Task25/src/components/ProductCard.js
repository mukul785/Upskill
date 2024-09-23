import React from 'react';

function ProductCard({ product, addToCart }) {
    return (
        <div className="card">
            <img src={product.image} alt={product.name} />
            <div className="name bold">{product.name}</div>
            <div className="price bold">${product.price.toFixed(2)}</div>
            <div className="updateCard">
                <button onClick={() => addToCart(product)}>Add to cart</button>
            </div>
        </div>
    );
}

export default ProductCard;
