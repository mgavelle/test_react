import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Header from './components/Header';
import './styles/main.scss';

const App = () => (
  <Router className="container">
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Routes>
  </Router>
);

export default App;
