import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <nav>
      <div className="inner">
        <div className="logo">
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
          <i className="fa-solid fa-magnifying-glass" />
          <i className="fa-solid fa-user" />
          <i className="fa-solid fa-basket-shopping" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
