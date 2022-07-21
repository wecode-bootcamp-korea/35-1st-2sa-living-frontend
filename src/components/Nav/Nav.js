import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  const moveSide = () => {
    let bg = document.querySelector('.background');
    let side = document.querySelector('.quick');
    bg.classList.toggle('on');
    side.classList.toggle('on');
  };
  return (
    <nav>
      <div className="inner">
        <div className="logo">
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
        </div>
      </div>
    </nav>
  );
}

const LISTDATA = ['SOFA', 'CHAIR', 'BED', 'TABLE', 'DRAWER'];

export default Nav;
