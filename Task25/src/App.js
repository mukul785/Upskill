import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import PaymentPage from './components/PaymentPage';
import store from './store';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
