import React, { useEffect, useState } from 'react';
import MypageComponents from '../../components/MypageComponents/MypageComponents';
import { useNavigate } from 'react-router-dom';
import './Mypage.scss';

const Mypage = () => {
  let [clickBtn, setClickBtn] = useState('sofa');
  let [buying, setBuying] = useState([]);
  let [orderList, setOrderList] = useState([]);
  let [likes, setLikes] = useState(0);
  const navigate = useNavigate();
  const tokenValid = localStorage.getItem('jwt');

  const [login, setLogin] = useState(false);

  useEffect(() => {
    fetch('/data/mainTestData.json')
      .then(response => response.json())
      .then(data => setBuying(data));

    fetch('http://10.58.7.204:8000/orders/list', {
      headers: { Authorization: localStorage.getItem('jwt') },
    })
      .then(response => response.json())
      .then(data => setOrderList(data.result));

    fetch('http://10.58.7.204:8000/users/likes', {
      headers: {
        Authorization: localStorage.getItem('jwt'),
      },
    })
      .then(response => response.json())
      .then(data => setLikes(data.results));
  }, []);

  let LikesList = ({ props }) => {
    let { product_image, furniture_korean_name, furniture_brand } = props;
    return (
      <div className="lises-box">
        <img src={product_image} alt="상품이미지" />
        <div className="txt-box">
          <p className="brand">{furniture_brand}</p>
          <p className="name">{furniture_korean_name}</p>
        </div>
      </div>
    );
  };

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

  function sum() {
    let result = 0;
    for (let i = 0; i < orderList.length; i++) {
      result = result + Number(orderList[i].total_price);
    }
    return result;
  }
  let totalPrice = sum();
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
  }, [tokenValid]);

  return (
    <div className="mypage">
      <h1 className="title"> MYPAGE</h1>
      <div className="mypage-infobox">
        <div className="infobox-mymenu">
          <div className="photo">
            <img src="/images/mypage/profile.jpg" alt="회원사진" />
          </div>
          <div className="txt-box">
            <p>정억화 님</p>
            <div className="btn-box">
              <p
                className="logout"
                onClick={() => {
                  logoutFunction();
                }}
              >
                로그아웃
              </p>
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
              <p className="point">{totalPrice.toLocaleString('ko-KR')} 원 </p>
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
        <div className="likeits-list">
          {likes.length ? (
            likes.map((els, idx) => {
              return <LikesList key={idx} props={els} />;
            })
          ) : (
            <p> 구매하고 싶은 상품을 라이크잇 하세요</p>
          )}
        </div>
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
