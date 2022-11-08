import React from 'react';
import Slidebox from './Slidebox';
import styled from 'styled-components';

const Main02Compo = () => {
  return (
    <Main02>
      <h3>
        <span>CSLV 리뷰클럽</span>
      </h3>
      <Main02Contents>
        <Slidebox />
      </Main02Contents>
    </Main02>
  );
};

export default Main02Compo;

const Main02 = styled.div`
  max-width: none !important;
  padding: 70px 0 80px;
  background: #f2f2f2;

  h3 {
    text-align: center;
    margin-bottom: 50px;

    span {
      padding-top: 10px;
      color: #333;
      font-size: 20px;
      font-weight: 400;
      border-top: solid 2px #333;
    }
  }
`;

const Main02Contents = styled.div`
  position: relative;
  padding: 0 115px;
`;
