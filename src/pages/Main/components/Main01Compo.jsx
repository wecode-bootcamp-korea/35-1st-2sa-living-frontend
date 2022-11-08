import React from 'react';
import styled from 'styled-components';
const Main01Compo = ({ setModalOn, modalOn }) => {
  return (
    <Main01>
      <Main01Left>
        <ModalCall
          onClick={() => {
            setModalOn(prev => !prev);
          }}
        >
          <img src="/images/main/shopping_01.png" alt="이미지" />
        </ModalCall>
        <Main01LeftTxt className="main-left-txt">
          <TxtTop>#스테디셀러 #미드센츄리 #이탈리아</TxtTop>
          <TxtBottom>혁신적이고 자유로운 가구, Pezzani</TxtBottom>
        </Main01LeftTxt>
        <MainLeftModal style={{ right: modalOn ? '0' : '-424px' }}>
          <CloseIcon
            src="/images/MyInfo/close.png"
            alt="닫기이콘"
            onClick={() => {
              setModalOn(prev => !prev);
            }}
          />
          <h3>BEST PRODUCT</h3>
          <ModalScroll>
            <ul>
              {LEFT_ITEM_DATA.map((item, idx) => {
                return (
                  <li key={`leftitem-${idx}`}>
                    <img
                      src="https://www.casa.co.kr/UploadFiles/Production/7/13/16576779381360.jpg"
                      alt=""
                    />
                    <ItemTxt>
                      <BrandTxt>{item.barnd}</BrandTxt>
                      <ProductName>{item.name}</ProductName>
                      <Price>{item.price}</Price>
                    </ItemTxt>
                  </li>
                );
              })}
            </ul>
          </ModalScroll>
        </MainLeftModal>
      </Main01Left>

      <Main01Right>
        <RightTop>
          <RightTopChild />

          <RightTopTop className="right-top-top">
            미니멀 라이프 <br />
            DOTTUS
          </RightTopTop>
        </RightTop>

        <RightBottom>
          <RightBottomChild>
            <RightTopTop className="right-top-top">
              GUBI Obello Lamp <br />
              유리와 빛의 만남
            </RightTopTop>
          </RightBottomChild>
        </RightBottom>
      </Main01Right>
    </Main01>
  );
};

export default Main01Compo;

const Main01 = styled.div`
  position: relative;
  margin-top: 16px;
`;

const Main01Left = styled.div`
  position: relative;
  width: 74.5%;
  height: 600px;
  background-image: url('https://www.casa.co.kr/UploadFiles/Banner/7/18/16581057109770.jpg');
  background-size: cover;
  overflow: hidden;
  overflow-y: scroll;
  :hover {
    .main-left-txt::after {
      height: 40px;
    }
  }
`;

const ModalCall = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  display: block;
  width: 50px;
  height: 50px;
  background-color: #fff;
  border: 1px solid #cacaca;
  border-radius: 50%;
  z-index: 11;
  padding: 12px;

  img {
    width: 100%;
  }
`;

const Main01LeftTxt = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  ::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    width: 1px;
    height: 0;
    background: #b3b3b3;
    transition: height 0.65s ease-out;
  }
`;

const TxtTop = styled.p`
  text-align: center;
  font-size: 20px;
  color: black;
  padding-top: 60px;
  font-weight: 300;
`;
const TxtBottom = styled.p`
  font-size: 48px;
  color: #333;
  font-weight: 100;
  line-height: 60px;
  margin-top: 38px;
  letter-spacing: -2.4px;
  text-align: center;
`;

const MainLeftModal = styled.div`
  position: absolute;
  top: 0;
  z-index: 12;
  width: 424px;
  height: 100%;
  box-sizing: border-box;
  padding: 33px 30px;
  background: #fff;
  border: 1px solid #c9c9c9;
  transition: all 0.65s cubic-bezier(0.785, 0.135, 0.15, 0.86);
`;

const CloseIcon = styled.img`
  position: absolute;
  right: 30px;
  top: 30px;
`;

const ModalScroll = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: auto;
  height: auto;
  margin: 77px auto auto auto;
  padding: 0 30px;
  overflow-y: auto;
  ul {
    overflow-y: auto;
    li {
      position: relative;
      padding-left: 145px;
      min-height: 125px;
      width: 100%;
      height: 100px;
      margin-top: 20px;
      color: white;
      img {
        position: absolute;
        top: 0px;
        left: 0;
        width: 125px;
      }
    }
  }
`;

const ItemTxt = styled.div`
  position: absolute;
  right: 0;
  width: calc(100% - 140px);
  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const BrandTxt = styled.p`
  margin-top: 20px;
  display: inline-block;
  font-size: 12px;
  color: #666;
  font-weight: 400;
  line-height: 35px;
  padding: 0 10px;
  background: #fff;
  border: 1px solid #d0d0d0;
  box-sizing: border-box;
  transition: all 0.45s ease;
`;
const ProductName = styled.p`
  line-height: 35px;
  font-size: 15px;
  color: #888;
  line-height: 20px;
  font-weight: 300;
`;

const Price = styled.p`
  font-size: 18px;
  color: #333;
  line-height: 20px;
  font-weight: 400;
  margin-top: 2px;
`;

const Main01Right = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 25.5%;
  height: 100%;
  box-sizing: border-box;
  padding-left: 20px;
`;

const RightTop = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  :hover {
    .right-top-top::after {
      width: 150px;
    }
  }
`;

const RightTopChild = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: auto;
  height: auto;
  margin: auto;
  overflow: hidden;
  margin-bottom: 10px;
  background-image: url('https://www.casa.co.kr/UploadFiles/Banner/7/18/16581055756231.jpg');
  background-size: cover;
`;

const RightTopTop = styled.p`
  position: absolute;
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  padding: 55px 0 0 38px;
  ::after {
    content: '';
    display: block;
    position: absolute;
    top: 50px;
    left: 0;
    width: 0px;
    height: 1px;
    background: white;
    transition: width 0.65s ease-out;
  }
`;

const RightBottom = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
`;
const RightBottomChild = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: auto;
  height: auto;
  margin-top: 10px;
  margin-right: -160px;
  overflow: hidden;
  background-image: url('https://www.casa.co.kr/UploadFiles/Banner/7/1/16566353365872.jpg');
  background-size: cover;
  :hover {
    .right-top-top::after {
      width: 195px;
    }
  }
`;
const LEFT_ITEM_DATA = [
  { barnd: '이케아', name: '철제의자', price: '25,000원' },
  { barnd: '이케아', name: '철제의자', price: '25,000원' },
  { barnd: '이케아', name: '철제의자', price: '25,000원' },
  { barnd: '이케아', name: '철제의자', price: '25,000원' },
  { barnd: '이케아', name: '철제의자', price: '25,000원' },
  { barnd: '이케아', name: '철제의자', price: '25,000원' },
  { barnd: '이케아', name: '철제의자', price: '25,000원' },
];
