import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Mypage from './pages/Mypage/Mypage';
import CardsBox from './pages/CardsBox/CardsBox';

function Router() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/cardsbox" element={<CardsBox />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
