import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './CartContext';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import PaymentPage from './components/PaymentPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className="main">
              <ProductList />
              <Cart />
            </div>
          } />
          <Route path="/payment" element={
            <div className="main">
              <PaymentPage />
              <Cart />
            </div>
          } />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
