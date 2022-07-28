import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MyInfo from '../MyInfo/MyInfo';
import './Nav.scss';
function Nav() {
  let navigate = useNavigate();
  const location = useLocation();
  let [slideOn, setSlideOn] = useState(false);
  let [item, setItem] = useState([]);
  let [likes, setLikes] = useState([]);
  const tokenValid = localStorage.getItem('jwt');

  const [login, setLogin] = useState(false);

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

    fetch('http://10.58.7.204:8000/users/likes', {
      headers: {
        Authorization: localStorage.getItem('jwt'),
      },
    })
      .then(response => response.json())
      .then(data => setLikes(data.results));
  };

  const logoutFunction = () => {
    setLogin(false);
    localStorage.removeItem('jwt');
    alert('로그아웃 되었습니다!');
    navigate('/');
  };

  useEffect(() => {
    if (!tokenValid) {
      setLogin(false);
      return;
    }
    setLogin(true);
  }, [location.pathname, tokenValid]);

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
                  <Link to="/">{els}</Link>
                </li>
              );
            })}
          </ul>

          <div className="icon-box">
            {login ? (
              <>
                <Link to="/mypage">
                  <img
                    src="/images/main/user.png"
                    alt="내정보아이콘"
                    className="icons"
                  />
                </Link>

                <img
                  src="/images/main/logout.png"
                  alt="내정보아이콘"
                  className="icons"
                  onClick={logoutFunction}
                />
              </>
            ) : (
              <Link to="/login">
                <img
                  src="/images/main/user.png"
                  alt="내정보아이콘"
                  className="icons"
                />
              </Link>
            )}

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
        likes={likes}
        setLikes={setLikes}
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
