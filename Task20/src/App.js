import './App.css';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: "Sneaker#001", price: 70, image: "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?t=st=1726468778~exp=1726472378~hmac=6884283c5c58ec75e1ea6b33c5b25f844ddfb7a11ba8df2c8eaf0140043e9951&w=740" },
    { id: 2, name: "Sneaker#002", price: 70, image: "https://img.freepik.com/free-photo/close-up-futuristic-sneakers-showcase_23-2151005675.jpg?ga=GA1.1.1490474753.1726164427&semt=ais_hybrid" },
    { id: 3, name: "Sneaker#003", price: 70, image: "https://img.freepik.com/free-photo/white-high-top-sneaker-white-background_53876-111185.jpg?t=st=1726491274~exp=1726494874~hmac=9f36a84d7c2208760599ed1fd02e768c416bc400f1aa7a8d18d8349cca2caa9e&w=1060" },
    { id: 4, name: "Sneaker#004", price: 70, image: "https://img.freepik.com/free-photo/sport-running-shoes_1203-3414.jpg?t=st=1726492654~exp=1726496254~hmac=9502701490ca39d527f3c4da955226534ae77def95bbbc4e69135657e88aec47&w=1060" },
    { id: 5, name: "Sneaker#005", price: 70, image: "https://image.cdn2.seaart.ai/2024-09-16/crk2oile878c73bjh9fg/5442acebce5e6e6c488f59dfed82a71d9a39ea78_high.webp" },
    { id: 6, name: "Sneaker#006", price: 70, image: "https://image.cdn2.seaart.ai/2024-09-16/crk2oile878c73bjh9fg/3c6ebe2a934c43818f3c8dd6e3e080d052d989e8_high.webp" },
    { id: 7, name: "Sneaker#007", price: 70, image: "https://img.freepik.com/free-photo/close-up-basketball-shoes_23-2150847380.jpg?t=st=1726491996~exp=1726495596~hmac=e08f1a0c75b847ab15dd5ef5be3497c4c17d7dd3fa879a60e12c7ecd1223c837&w=1060" },
    { id: 8, name: "Sneaker#008", price: 70, image: "https://image.cdn2.seaart.ai/2024-09-16/crk2q75e878c73bjs730/76094987c2c3186397ea1b23242e4a122799bbb1_high.webp" },
    { id: 9, name: "Sneaker#009", price: 70, image: "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7526.jpg?t=st=1726492081~exp=1726495681~hmac=442f6b91fd8af88d257867806427488ee832c58eac53ec05112d0397f3fece0a&w=1060" },
    { id: 10, name: "Sneaker#010", price: 70, image: "https://img.freepik.com/free-photo/men-shoes_1203-8654.jpg?t=st=1726492146~exp=1726495746~hmac=e65ac6bf8f01906390388f000572d40a440742515725b98fe54c8e507fcfec43&w=1060" },
    { id: 11, name: "Sneaker#011", price: 70, image: "https://img.freepik.com/free-photo/men-shoes_1203-8387.jpg?t=st=1726492176~exp=1726495776~hmac=6791c1cad21c9567d6dffaf869ccfc9fbe5bc8fd8ae1766a07ae883654d77513&w=1060" },
    { id: 12, name: "Sneaker#012", price: 70, image: "https://img.freepik.com/free-photo/cool-canvas-sneakers-men-s-apparel-summer-fashion-photoshoot_53876-105542.jpg?t=st=1726492711~exp=1726496311~hmac=06371a23570511dd37ec4286a28bbc93528868329c045398431d2d6ab522045f&w=1060" },
  ];


  const CartIsEmpty = cartItems.length === 0;

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    setCartItems(cartItems
      .map(item =>
        item.id === id && item.quantity > 0 
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      )
      .filter(item => item.quantity > 0)
    );
};


  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <>
      <nav>
        <div className="logo bold">Shoe Collection</div>
        <div className="links">
          <a href="./">Home</a>
          <a href="./">Categories</a>
          <a href="./">About Us</a>
        </div>
        <div className="login bold">Login</div>
      </nav>

      <div className="main">
        <div className="collection">
          {products.map(product => (
            <div className="card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="name bold">{product.name}</div>
              <div className="price bold">${product.price.toFixed(2)}</div>
              <div className="updateCard">
                <button onClick={() => addToCart(product)}>Add to cart</button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart">
          <div className="heading">Cart</div>
          {CartIsEmpty ? (
            <div className="text-danger">
              <span className="">&#9888;</span> Add items to cart to proceed.
            </div>
          ) : (
            <div className="cart-main">
              {cartItems.map(item => (
                <div className="cart-item" key={item.id}>
                  <div className="item-name bold">{item.name}</div>
                  <div className="text-center">
                    <div className="item-quantity bold">
                      <button className="quantity-btn" onClick={() => decreaseQuantity(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button  className="quantity-btn" onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>
                    <div className="item-price bold">${(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="total">
            <div className="text">Total: </div>
            <div className="total-sum">${calculateTotal().toFixed(2)}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
