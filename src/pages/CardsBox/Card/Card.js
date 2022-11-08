import React from 'react';

import '../../../styles/variables.scss';
import Heart from '../../../components/Heart/Heart';

import styled from 'styled-components';

const Card = ({ cardList }) => {
  return (
    <>
      {cardList.map(
        ({
          id,
          thumbnail_image_url,
          brand_name,
          furniture_korean_name,
          price,
        }) => (
          <CardBox key={id}>
            <ImgContainer>
              <img
                className="card-img"
                src={thumbnail_image_url}
                alt="product"
              />
              <ImgHover className="img-hover ">
                <ImgHoverItem>
                  <i className="fas fa-shopping-cart" />
                  <Heart />
                </ImgHoverItem>
              </ImgHover>
            </ImgContainer>
            <BrandName>{brand_name}</BrandName>
            <CardName>{furniture_korean_name}</CardName>
            <CardPrice>{price}</CardPrice>
          </CardBox>
        )
      )}
    </>
  );
};

export default Card;

const CardBox = styled.div`
  transition: 1s;
  width: 22.5%;
  margin: 10px 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 14px 50px 0;
`;

const ImgContainer = styled.div`
  position: relative;
  width: 261px;
  height: 261px;
  margin-bottom: 20px;
  overflow: hidden;
  img {
    display: block;
    width: 100%;
    height: 100%;
    opacity: 1;
    backface-visibility: hidden;
  }
  :hover .img-hover {
    background-color: rgba(0, 0, 0, 0.6);
    transition: background-color ease-in 0.9s;
    opacity: 1;
  }
  :hover .card-img {
    transform: scale(1.1);
    transition: 0.5s;
    opacity: 0.3;
  }
  :hover .fa-shopping-cart {
    bottom: 32%;
    transition: 0.5s;
  }
  :hover .Heart {
    transition: 0.8s;
    bottom: 30%;
  }
`;
const ImgHover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 261px;
  height: 261px;
  background-color: rgba(0, 0, 0, 0);
  opacity: 0;
`;

const ImgHoverItem = styled.div`
  position: relative;
  height: 100%;
  padding: 10px;
  font-size: 20px;
  color: white;
  transition: ease-in-out;
  i {
    position: absolute;
    bottom: 30%;
    left: 35%;
    padding: 10px;
  }
`;

const BrandName = styled.span`
  display: inline-block;
  padding: 5px 10px;
  margin-bottom: 15px;
  border: 1px solid #d0d0d0;
`;

const CardName = styled.p`
  margin-bottom: 20px;
  color: #666;
  font-size: 15px;
  line-height: 18px;
  font-weight: 300;
`;

const NoBrandName = styled.p`
  width: 100%;
  margin: 50px;
  color: black;
  font-size: 20px;
  text-align: center;
`;

const CardPrice = styled.p`
  color: #333;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
`;
