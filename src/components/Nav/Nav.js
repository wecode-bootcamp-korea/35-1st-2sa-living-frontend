import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  const navigate = useNavigate;
  const location = useLocation();

  const tokenValid = localStorage.getItem('jwt');

  console.log(location);
  const [login, setLogin] = useState(false);

  const moveSide = () => {
    let bg = document.querySelector('.background');
    let side = document.querySelector('.quick');
    bg.style.display = 'block';
    side.style.right = '0';
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
  }, [location]);

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

          {login ? (
            <>
              <i className="fa-solid fa-user" />
              <i
                className="fa-solid fa-arrow-right-from-bracket"
                onClick={logoutFunction}
              />
            </>
          ) : (
            <i className="fa-solid fa-user" />
          )}

          <i className="fa-solid fa-basket-shopping" onClick={moveSide} />
        </div>
      </div>
    </nav>
  );
}

const LISTDATA = ['SOFA', 'CHAIR', 'BED', 'TABLE', 'DRAWER'];

export default Nav;
