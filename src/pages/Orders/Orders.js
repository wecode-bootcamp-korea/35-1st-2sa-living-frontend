import { React, useState, useEffect } from 'react';
import './Orders.scss';
const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('/data/orderTestData.json')
      .then(response => response.json())
      .then(data => setOrders(data[0]));
  }, []);
  let Items = ({ items }) => {
    return (
      <tr className="items">
        <td>
          <div className="item">
            <img src="{furniture_korean_name}" alt="" />
            <div className="item-txt">
              <p>1</p>
            </div>
          </div>
        </td>
        <td>1</td>
        <td>3545450000</td>
      </tr>
    );
  };

  return (
    <div className="orders-wrap">
      <h2 className="title">ORDERS</h2>
      <div className="orders-detail-left">
        <div className="detail-left-item">
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
            <Items items={orders} />
          </table>
        </div>
      </div>
      <div className="orders-detail-right" />
    </div>
  );
};

export default Orders;
