import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  const moveSide = () => {
    let bg = document.querySelector('.background');
    let side = document.querySelector('.quick');
    bg.style.display = 'block';
    side.style.right = '0';
  };
  return (
    <nav>
      <div className="inner">
        <div className="logo">
<<<<<<< HEAD
          <img
            src="https://www.casa.co.kr/images/common/logo_new.gif"
            alt="logo"
            width="99"
          />
        </div>
        <ul className="menu">
          <li>FURNITURE</li>
          <li>HOMEWARE</li>
          <li>LIGHTING</li>
          <li>LIFE</li>
        </ul>
        <div className="icon-box">
          <i class="fa-solid fa-magnifying-glass" />
          <i class="fa-solid fa-user" />
          <i class="fa-solid fa-basket-shopping" />
=======
          <img src="/images/main/logo.png" alt="logo" width="99" />
        </div>
        <ul className="menu">
          {LISTDATA.map((els, idx) => {
            return (
              <li key={idx}>
                <Link to="/">{els}</Link>
              </li>
            );
          })}
        </ul>
        <div className="icon-box">
          <i className="fa-solid fa-magnifying-glass" />
          <i className="fa-solid fa-user" />
          <i className="fa-solid fa-basket-shopping" onClick={moveSide} />
>>>>>>> b4db441610680b4ea8539a22bf1fe8d1851e8e38
        </div>
      </div>
    </nav>
  );
}

const LISTDATA = ['SOFA', 'CHAIR', 'BED', 'TABLE', 'DRAWER'];

export default Nav;
