import { React, useState, useEffect } from 'react';
import './Orders.scss';
const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('/data/orderTestData.json')
      .then(response => response.json())
      .then(data => setOrders(data[0].order_items));
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
      <h2 className="title">ORDERS</h2>
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
              <td>
                <p className="total-price">200,000,000 원</p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Orders;
