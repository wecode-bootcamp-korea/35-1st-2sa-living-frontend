import React, { useEffect, useState } from 'react';
import MypageComponents from '../../components/MypageComponents/MypageComponents';
import { useNavigate } from 'react-router-dom';
import './Mypage.scss';

const Mypage = () => {
  let [clickBtn, setClickBtn] = useState('sofa');
  let [buying, setBuying] = useState([]);
  let [orderList, setOrderList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/mainTestData.json')
      .then(response => response.json())
      .then(data => setBuying(data));
    fetch('http://10.58.7.204:8000/orders/list', {
      headers: { Authorization: localStorage.getItem('jwt') },
    })
      .then(response => response.json())
      .then(data => setOrderList(data.result));
  }, []);

  const goTo = id => {
    navigate(`/order/${id}`);
  };

  let Orders = ({ orders }) => {
    let { order_id, order_number, order_status, total_price } = orders;
    return (
      <tr
        onClick={() => {
          goTo(order_id);
        }}
      >
        <td>주문번호 : {order_number}</td>
        <td>총 : {Math.floor(total_price).toLocaleString('ko-KR')} 원</td>
        <td>진행 상태 : {order_status}</td>
      </tr>
    );
  };
  let newMenu = buying.filter(els => {
    return els.category.includes(clickBtn);
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
      <div className="order">
        <h1 className="order-title"> 현재 진행중 주문</h1>
        <div className="order-list">
          <table>
            {orderList.map((els, idx) => {
              return <Orders key={idx} orders={els} />;
            })}
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
              {LISTDATA.map((els, idx) => {
                return (
                  <li
                    key={idx}
                    className={`foryou-menu-list ${
                      clickBtn.toUpperCase() === els ? 'on' : ''
                    }`}
                    onClick={() => {
                      setClickBtn(els.toLowerCase());
                    }}
                  >
                    {els}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="foryou-list-items">
            {newMenu.map(els => {
              return <MypageComponents items={els} key={els.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
const LISTDATA = ['SOFA', 'BED', 'TABLE'];

export default Mypage;
