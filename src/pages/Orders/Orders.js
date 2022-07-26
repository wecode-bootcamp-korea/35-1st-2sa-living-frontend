import { React, useState, useEffect } from 'react';
import './Orders.scss';
const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://10.58.1.126:8000/carts', {
      headers: {
        Authorization: localStorage.getItem('jwt'),
      },
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }, []);

  let Items = ({ items }) => {
    let {
      product_image,
      furniture_korean_name,
      quantity,
      furniture_english_name,
    } = items;

    return (
      <tr className="items">
        <td>
          <div className="item">
            <div className="img" src={product_image} alt="상품이미지" />
            <div className="item-txt">
              <p className="brand">{furniture_english_name}</p>
              <p className="item-name">{furniture_korean_name}</p>
            </div>
          </div>
        </td>
        <td className="quantity">
          <p>{quantity}</p>
        </td>
        <td className="price">
          <p>333,000원</p>
        </td>
      </tr>
    );
  };

  return (
    <>
      <h2 className="title">CARTS</h2>
      <div className="orders-wrap">
        <div className="orders-detail-left">
          <table>
            <colgroup>
              <col width="70%" />
              <col width="15%" />
              <col width="15%" />
            </colgroup>
            <tr>
              <th>상품정보</th>
              <th>수량</th>
              <th>주문금액</th>
            </tr>
            {orders.map((els, idx) => {
              return <Items items={els} key={idx} />;
            })}
          </table>
        </div>
        <div className="orders-detail-right">
          <table>
            <tr>
              <th>총 상품금액</th>
              <th className="total">24,000,000원</th>
            </tr>
            <tr className="pee">
              <td>배송비</td>
              <td>
                <p>무료</p>
              </td>
            </tr>

            <tr className="">
              <td>최종 결제 금액</td>
              <td className="total-price">200,000,000 원</td>
            </tr>
          </table>
          <form className="agree">
            <p class="agree-top">
              <input type="checkbox" />
              <label>전체 동의합니다.</label>
            </p>
            <p class="agree-middle">
              <input type="checkbox" className="check-box01" />
              <label>
                주문 상품정보에 동의 (필수)
                <br />
                상품명,가격,상품상세내용,배송정보,할인내역을 확인함
                <br />
                (전자상거래법 제 8조 2항)
              </label>
            </p>
            <p className="agree-bottom">
              <input type="checkbox" className="check-box02" />
              <label>
                개인정보 수집 및 위탁 동의 (필수)
                <br />
                상품 배송 및 결제대행 서비스 이용을 위하여 고객정보를 수집함
              </label>
            </p>
          </form>

          <p className="btn-box">
            <button>결제하기</button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Orders;
