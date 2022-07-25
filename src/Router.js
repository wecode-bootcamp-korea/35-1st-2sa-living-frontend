import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Modal from './pages/Login/Modal';

import MyInfo from './components/MyInfo/MyInfo';

import CardsBox from './pages/CardsBox/CardsBox';
function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <MyInfo />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/nonmemberModal" element={<Modal />} />
        <Route path="/cardsbox" element={<CardsBox />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
