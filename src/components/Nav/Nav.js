import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Nav() {
  const navigate = useNavigate;
  const location = useLocation();

  const tokenValid = localStorage.getItem('jwt');

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
  }, [location.pathname, tokenValid]);

  return (
    <NavContainer>
      <NavInner>
        <Logo>
          <img src="/images/main/logo.png" alt="logo" width="99" />
        </Logo>
        <NavMenu>
          {LISTDATA.map((els, idx) => {
            return (
              <li key={idx}>
                <Link to="/">{els}</Link>
              </li>
            );
          })}
        </NavMenu>
        <NavIconBox>
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
        </NavIconBox>
      </NavInner>
    </NavContainer>
  );
}

const LISTDATA = ['SOFA', 'CHAIR', 'BED', 'TABLE', 'DRAWER'];

export default Nav;

const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 99;
`;

const NavInner = styled.div`
  position: relative;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 30px;
  height: 105px;
  display: flex;
`;

const Logo = styled.div`
  position: absolute;
  top: 45px;
  left: 30px;
  z-index: 50;
`;

const NavMenu = styled.ul`
  padding: 63px 0 0 140px;
  li {
    float: left;
    margin-right: 30px;
    font-family: 'Barlow', 'Noto Sans', sans-serif;
    font-size: 26px;
    color: #333;
    line-height: 41px;
    font-weight: 700;
    letter-spacing: 1.3px;

    a {
      position: relative;
      display: block;
      font-size: 26px;
      color: #333;
      line-height: 41px;
      font-weight: 700;
      letter-spacing: 1.3px;
      cursor: pointer;
      text-decoration: none;
    }
    a:after {
      content: '';
      position: absolute;
      top: 0;
      left: auto;
      right: 0;
      width: 0;
      height: 3px;
      background: #333;
      transition: width 0.5s ease;
    }
    a:before {
      content: '';
      position: absolute;
      bottom: 100%;
      left: 6px;
      width: 3px;
      height: 0;
      margin-bottom: -3px;
      border-bottom: 3px solid #fff;
      background: #333;
      transition: height 0.55s 0s ease;
      z-index: 1;
    }
    a:hover {
      color: #ff5000;
    }
    a:hover:after {
      width: 100%;
      right: auto;
      left: 0;
    }
    a:hover:before {
      height: 6px;
      background: #ff5000;
      transition-delay: 0.5s;
    }
    a:hover:after {
      background: #ff5000;
    }
  }
`;

const NavIconBox = styled.div`
  position: absolute;
  top: 63px;
  right: 30px;
  z-index: 50;

  i {
    font-size: 24px;
    margin-left: 30px;
    cursor: pointer;
  }
`;
