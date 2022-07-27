import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import CardsBox from './pages/CardsBox/CardsBox';
import Orders from './pages/Orders/Orders';
import Mypage from './pages/Mypage/Mypage';
import Product from './pages/Product/Product';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
function Router() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cardsbox/:id" element={<CardsBox />} />
        <Route path="/order/:id" element={<Orders />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
