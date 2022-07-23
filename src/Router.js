import { useState, React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import MyInfo from './components/MyInfo/MyInfo';
function Router() {
  let [sideOn, setSideOn] = useState('');
  return (
    <BrowserRouter>
      <Nav sideOn={sideOn} setSideOn={setSideOn} />
      <MyInfo sideOn={sideOn} setSideOn={setSideOn} />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
