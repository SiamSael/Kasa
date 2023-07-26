import React from 'react';
import { createRoot } from 'react-dom/client'; 
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Logement from './pages/Logement';
import './App.css';

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About/" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/logement/:logementId" element={<Logement />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
