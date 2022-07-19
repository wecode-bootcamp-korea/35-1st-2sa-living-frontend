import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  return (
    <nav>
      <div className="inner">
        <div className="logo">
          <img src="/images/main/logo.png" alt="logo" width="99" />
        </div>
        <ul className="menu">
          <li>
            <Link to="/">SOFA</Link>
          </li>
          <li>
            <Link to="/">CHAIR</Link>
          </li>
          <li>
            <Link to="/">BED</Link>
          </li>
          <li>
            <Link to="/">TABLE</Link>
          </li>
          <li>
            <Link to="/">DRAWER</Link>
          </li>
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
