import React from 'react';
import styled from 'styled-components';

const Slideitem = ({ items: { imgUrl, userName, content } }) => {
  return (
    <Item>
      <ItemImg>
        <img src={imgUrl} alt="썸네일" />
      </ItemImg>
      <ItemId>{userName}</ItemId>
      <ItemTxt>{content}</ItemTxt>
    </Item>
  );
};

export default Slideitem;

const Item = styled.li`
  width: 277px;
  height: 403px;
  float: left;
  padding: 23px;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  :not(:last-child) {
    margin-right: 33px;
  }
`;
const ItemImg = styled.div`
  width: 231px;
  height: 231px;
  background-color: red;
  img {
    width: 100%;
    height: 100%;
  }
`;

const ItemId = styled.div`
  display: inline-block;
  margin: 20px 0;
  padding-left: 16px;
  color: #1b1b1b;
  font-weight: 600;
  line-height: 1;
  background: url('https://www.casa.co.kr/images/icon/main_insta.gif') no-repeat
    left 1px;
`;

const ItemTxt = styled.div`
  height: 32px;
  color: #858585;
  font-size: 12px;
  line-height: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
