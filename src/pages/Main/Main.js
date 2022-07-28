import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slidebox from '../Slidebox/Slidebox';
import Card from '../CardsBox/Card/Card';

import './Main.scss';

const Main = () => {
  let [itemList, setItemList] = useState([]);
  let [clickBtn, setClickBtn] = useState('new');
  let [modalOn, setModalOn] = useState(false);
  useEffect(() => {
    fetch('/data/mainTestData.json')
      .then(response => response.json())
      .then(data => setItemList(data));
  }, []);

  let newMenu = itemList.filter(els => {
    return els.category.includes(clickBtn);
  });
  let newMenu1 = itemList.filter(els => els.is_new && els);
  let ModalList = ({ props }) => {
    let { brandName, thumbnail_image_url, price, productName } = props;
    return (
      <li className="item">
        <img src={thumbnail_image_url} alt="" />
        <div className="item-txt">
          <p className="brand-txt">{brandName}</p>
          <p className="product-name">{productName}</p>
          <p className="price">{price.toLocaleString('ko-KR')} 원</p>
        </div>
      </li>
    );
  };
  return (
    <main>
      <section>
        <div className="main-01">
          <div className="main-01-left">
            <div
              className="modal-call"
              onClick={() => {
                setModalOn(!modalOn > modalOn);
              }}
            >
              <img src="/images/main/shopping_01.png" alt="" />
            </div>
            <div className="main-left-txt">
              <p className="txt-top">#스테디셀러 #미드센츄리 #이탈리아</p>
              <p className="txt-bottom">혁신적이고 자유로운 가구, Pezzani</p>
            </div>
            <div
              className="main-left-modal"
              style={{ right: modalOn ? '0' : '-424px' }}
            >
              <img
                className="close-icon"
                src="/images/MyInfo/close.png"
                alt="닫기이콘"
                onClick={() => {
                  setModalOn(!modalOn > modalOn);
                }}
              />
              <h3>BEST PRODUCT</h3>
              <div className="modal-scroll">
                <ul className="list">
                  {newMenu1.length &&
                    newMenu1.map((els, idx) => {
                      return <ModalList props={els} key={idx} />;
                    })}
                </ul>
              </div>
            </div>
          </div>

          <div className="main-01-right">
            <Link to="/products/26">
              <div className="right-top">
                <div className="right-top-child" />

                <p className="right-top-top">
                  미니멀 라이프 <br />
                  DOTTUS
                </p>
              </div>
            </Link>

            <div className="right-bottom">
              <Link to="/products/25">
                <div className="right-bottom-child">
                  <p className="right-top-top">
                    GUBI Obello Lamp <br />
                    유리와 빛의 만남
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="main-02">
          <h3>
            <span>CSLV 리뷰클럽</span>
          </h3>
          <div className="main-02-contents">
            <Slidebox />
          </div>
        </div>
      </section>
      <section>
        <div className="main-03">
          <ul className="main-03-list">
            {MAINLISTDATA.map((els, idx) => {
              return (
                <li
                  key={idx}
                  className={clickBtn.toUpperCase() === els ? 'on' : ''}
                  onClick={() => {
                    setClickBtn(els.toLowerCase());
                  }}
                >
                  {els}
                </li>
              );
            })}
          </ul>
          <div className="main-03-box">
            {clickBtn === 'new' ? (
              <Card cardList={newMenu1} />
            ) : (
              <Card cardList={newMenu} />
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

const MAINLISTDATA = ['NEW', 'SOFA', 'BED', 'TABLE'];

export default Main;
