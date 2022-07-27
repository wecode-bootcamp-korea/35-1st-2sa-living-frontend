import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MyInfo from '../MyInfo/MyInfo';
import './Nav.scss';
function Nav() {
  let [slideOn, setSlideOn] = useState(false);
  let [item, setItem] = useState([]);

  let navigate = useNavigate();

  let goToCardList = id => {
    navigate(`/cardsbox/${id}`);
  };
  const moveSide = () => {
    setSlideOn(!slideOn > slideOn);

    fetch('http://10.58.7.204:8000/carts', {
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
          <Link to="/">
            <div className="logo">
              <img src="/images/main/logo.png" alt="logo" width="99" />
            </div>
          </Link>
          <ul className="menu">
            {LISTDATA.map((els, idx) => {
              return (
                <li
                  key={idx}
                  onClick={() => {
                    goToCardList(idx + 1);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  {els}
                </li>
              );
            })}
          </ul>
          <div className="icon-box">
            <img
              src="/images/main/user.png"
              alt="내정보아이콘"
              className="icons"
            />
            <img
              src="/images/main/bag.png"
              alt="장바구니아이콘"
              className="icons"
              onClick={moveSide}
            />
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

const LISTDATA = ['CHAIR', 'SOFA', 'TABLE', 'BED', 'CLOSET'];

export default Nav;
