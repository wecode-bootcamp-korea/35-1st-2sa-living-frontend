import React, { useEffect, useState } from 'react';
import MypageComponents from '../../components/MypageComponents/MypageComponents';
import './Mypage.scss';

const Mypage = () => {
  let [member, setMember] = useState([]);
  let [buying, setBuying] = useState([]);

  useEffect(() => {
    fetch('/data/testMock.json')
      .then(response => response.json())
      .then(data => setBuying(data));
  }, []);

  const bed = buying.filter(els => {
    return els.category.includes('bed');
  });
  const sofa = buying.filter(els => {
    return els.category.includes('sofa');
  });
  const table = buying.filter(els => {
    return els.category.includes('table');
  });

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
      <div className="oders">
        <h1 className="oders-title"> 현재 진행중 주문</h1>
        <div className="oders-list" />
      </div>

      <div className="likeits">
        <h1 className="likeits-title"> 라이크 잇</h1>
        <div className="likeits-list" />
      </div>
      <div className="foryou">
        <h1 className="foryou-title"> 나를 위한 추천 상품</h1>
        <ul className="foryou-menu">
          <li>SOFA</li>
          <li>BED</li>
          <li>Table</li>
        </ul>
        <div className="foryou-list">
          {/* {buyBag.map(els => {
            return <MypageComponents items={els} key={els.id} />; 
          })}*/}
        </div>
      </div>
    </div>
  );
};

export default Mypage;
