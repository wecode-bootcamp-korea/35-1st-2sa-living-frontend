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
          <li>SOFA</li>
          <li>CHAIR</li>
          <li>BED</li>
          <li>TABEL</li>
          <li>DRAWER</li>
        </ul>
        <div className="icon-box">
          <i class="fa-solid fa-magnifying-glass" />
          <i class="fa-solid fa-user" />
          <i class="fa-solid fa-basket-shopping" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
