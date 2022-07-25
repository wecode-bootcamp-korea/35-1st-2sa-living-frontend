import { React, useEffect, useState } from 'react';

import Slidebox from '../Slidebox/Slidebox';
import Card from '../CardsBox/Card/Card';

import './Main.scss';

const Main = () => {
  let [itemList, setItemList] = useState([]);
  let [clickBtn, setClickBtn] = useState(0);
  useEffect(() => {
    fetch('/data/mainTestData.json')
      .then(response => response.json())
      .then(data => setItemList(data));
  }, []);

  const changeList = num => {
    if (num === 0) {
      return itemList.filter(els => {
        return els.category.includes('sofa');
      });
    } else if (num === 1) {
      return itemList.filter(els => {
        return els.category.includes('chair');
      });
    } else if (num === 2) {
      return itemList.filter(els => {
        return els.category.includes('bed');
      });
    } else if (num === 3) {
      return itemList.filter(els => {
        return els.category.includes('table');
      });
    } else if (num === 4) {
      return itemList.filter(els => {
        return els.category.includes('closet');
      });
    }
  };
  let forYouItem = changeList(clickBtn);
  console.log(forYouItem);

  return (
    <main>
      <section>
        <div className="main-01">
          <div className="main-01-left">
            <div className="main-left-txt">
              <p className="txt-top">#스테디셀러 #미드센츄리 #이탈리아</p>
              <p className="txt-bottom">혁신적이고 자유로운 가구, Pezzani</p>
            </div>
          </div>

          <div className="main-01-right">
            <div className="right-top">
              <div className="right-top-child" />

              <p className="right-top-top">
                미니멀 라이프 <br />
                DOTTUS
              </p>
            </div>

            <div className="right-bottom">
              <div className="right-bottom-child">
                <p className="right-top-top">
                  GUBI Obello Lamp <br />
                  유리와 빛의 만남
                </p>
              </div>
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
            <li
              className={clickBtn === 0 ? 'on' : ''}
              onClick={() => {
                setClickBtn(0);
              }}
            >
              소파
            </li>
            <li
              className={clickBtn === 1 ? 'on' : ''}
              onClick={() => {
                setClickBtn(1);
              }}
            >
              체어
            </li>
            <li
              className={clickBtn === 2 ? 'on' : ''}
              onClick={() => {
                setClickBtn(2);
              }}
            >
              침대
            </li>
            <li
              className={clickBtn === 3 ? 'on' : ''}
              onClick={() => {
                setClickBtn(3);
              }}
            >
              테이블
            </li>
            <li
              className={clickBtn === 4 ? 'on' : ''}
              onClick={() => {
                setClickBtn(4);
              }}
            >
              수납
            </li>
          </ul>
          <div className="main-03-box">
            <Card cardList={forYouItem} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
