import React, { useEffect, useState } from 'react';
import MypageComponents from '../../components/MypageComponents/MypageComponents';
import './Mypage.scss';

const Mypage = () => {
  let [clickBtn, setClickBtn] = useState(0);
  let [buying, setBuying] = useState([]);
  useEffect(() => {
    fetch('/data/testMock.json')
      .then(response => response.json())
      .then(data => setBuying(data));
  }, []);

  const changeList = num => {
    if (num === 0) {
      return buying.filter(els => {
        return els.category.includes('sofa');
      });
    } else if (num === 1) {
      return buying.filter(els => {
        return els.category.includes('bed');
      });
    } else if (num === 2) {
      return buying.filter(els => {
        return els.category.includes('table');
      });
    }
  };

  let Orders = () => {
    return (
      <tr>
        <td>주문번호 : 546545646-10214</td>
        <td>총 : 50000원</td>
        <td>진행 상태 : 주문완료</td>
      </tr>
    );
  };
  let forYouItem = changeList(clickBtn);
  return (
    <div className="mypage">
      <h1 className="title"> MYPAGE</h1>
      <div className="mypage-infobox">
        <div className="infobox-mymenu">
          <div className="photo">
            <img src="/images/mypage/user.png" alt="회원사진" />
          </div>
          <div className="txt-box">
            <p>홍길동 님</p>
            <div className="btn-box">
              <p className="fix">정보수정</p>
              <p className="logout">로그아웃</p>
            </div>
          </div>
        </div>
        <div className="infobox-myinfo">
          <ul className="list">
            <li>
              <p className="ptitle">포인트</p>
              <p className="point">
                <span className="icon">P</span>0
              </p>
            </li>
            <li>
              <p className="ptitle">쿠폰</p>
              <p className="point">0</p>
            </li>
            <li>
              <p className="ptitle">총결제금액</p>
              <p className="point">12,000,000 원</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="order">
        <h1 className="order-title"> 현재 진행중 주문</h1>
        <div className="order-list">
          <table>
            <Orders />
            <Orders />
            <Orders />
          </table>
        </div>
      </div>

      <div className="likeits">
        <h1 className="likeits-title"> 라이크 잇</h1>
        <div className="likeits-list" />
      </div>
      <div className="foryou">
        <h1 className="foryou-title"> 나를 위한 추천 상품</h1>

        <div className="foryou-list">
          <div className="foryou-menu">
            <ul>
              <li
                className={`foryou-menu-list ${clickBtn === 0 ? 'on' : ''}`}
                onClick={() => {
                  setClickBtn(0);
                }}
              >
                SOFA
              </li>
              <li
                className={`foryou-menu-list ${clickBtn === 1 ? 'on' : ''}`}
                onClick={() => {
                  setClickBtn(1);
                }}
              >
                BED
              </li>
              <li
                className={`foryou-menu-list ${clickBtn === 2 ? 'on' : ''}`}
                onClick={() => {
                  setClickBtn(2);
                }}
              >
                TABlE
              </li>
            </ul>
          </div>
          <div className="foryou-list-items">
            {forYouItem.map(els => {
              return <MypageComponents items={els} key={els.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
