import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Cards from './pages/Cards/Cards';
import Card from './pages/Cards/Card/Card';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
