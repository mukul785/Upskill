import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import Dashboard from './components/dashboard';
import Footer from './components/footer';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/SignUpForm" element={<SignUpForm/>} />
          <Route path="/LoginForm" element={<LoginForm/>} />
        </Routes>
        <Footer/>
      </Router>
    </React.StrictMode>
  );
}

export default App;
