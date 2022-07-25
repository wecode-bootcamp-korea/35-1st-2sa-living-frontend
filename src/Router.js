import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import MyInfo from './components/MyInfo/MyInfo';
import Orders from './pages/Orders/Orders';
import CardsBox from './pages/CardsBox/CardsBox';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <MyInfo />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cardsbox" element={<CardsBox />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
