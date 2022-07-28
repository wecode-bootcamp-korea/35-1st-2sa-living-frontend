import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Orders from './pages/Orders/Orders';
import CardsBox from './pages/CardsBox/CardsBox';
import Mypage from './pages/Mypage/Mypage';

function Router() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cardsbox" element={<CardsBox />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
