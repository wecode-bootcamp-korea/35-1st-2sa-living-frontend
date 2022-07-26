import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MyInfo from '../MyInfo/MyInfo';
import './Nav.scss';

function Nav() {
  let [slideOn, setSlideOn] = useState(false);
  let [item, setItem] = useState([]);
  const moveSide = () => {
    setSlideOn(!slideOn > slideOn);

    fetch('http://10.58.1.126:8000/carts/cart', {
      headers: {
        Authorization: localStorage.getItem('jwt'),
      },
    })
      .then(response => response.json())
      .then(data => setItem(data.carts));
  };

  return (
    <>
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
      <MyInfo
        slideOn={slideOn}
        setSlideOn={setSlideOn}
        item={item}
        setItem={setItem}
      />
    </>
  );
}

const LISTDATA = ['SOFA', 'CHAIR', 'BED', 'TABLE', 'DRAWER'];

export default Nav;
