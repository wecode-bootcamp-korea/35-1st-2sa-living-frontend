import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BuyWrap = ({ amount, setAmount, colors, list, brand, id }) => {
  const [select, setSelect] = useState('');

  const [likeIt, setLikeIt] = useState(0);
  const navigate = useNavigate();
  const selectColor = e => {
    setSelect(e.target.value);
  };

  const handleAmountPlus = () => {
    setAmount(amount + 1);
  };

  const handleAmountMinus = () => {
    amount <= 1
      ? alert('수량은 1개 이상이어야 합니다.')
      : setAmount(amount - 1);
  };

  const clickLikeIt = e => {
    setLikeIt(e.target.value);
    setLikeIt(likeIt + 1);
  };
  const goToColor = id => {
    console.log(id);
  };

  const addCart = (product, amount) => {
    fetch('http://10.58.7.204:8000/carts', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('jwt'),
      },
      body: JSON.stringify({
        product_id: product,
        quantity: amount,
      }),
    }).then(response => response.json());
  };
  const fillHeart = e =>
    e.target.style.color === ''
      ? ((e.target.style.color = 'red'), (e.target.className = 'fas fa-heart'))
      : ((e.target.style.color = ''), (e.target.className = 'far fa-heart'));

  return (
    <div className="BuyDataWrap">
      <div className="BrandInfo">
        <span className="BrandName">{brand}</span>
      </div>

      <div className="ColorWrap">
        <div className="ColorInfo">
          <select className="SelectOption" onChange={selectColor}>
            <option disabled selected>
              색상 선택
            </option>
            {list.length === 0 ? (
              <option>0</option>
            ) : (
              colors.map((ele, idx) => {
                return <option key={idx}>{ele.color}</option>;
              })
            )}
          </select>
        </div>
      </div>
      <div className="amount">
        <img
          alt="icon"
          className="amount_arrow"
          src="/images/Product/left-arrow.png"
          onClick={handleAmountMinus}
        />
        <p>{amount}</p>
        <img
          alt="icon"
          className="amount_arrow"
          src="/images/Product/right-arrow.png"
          onClick={handleAmountPlus}
        />
      </div>
      <div className="buyWrap">
        <i class="far fa-heart" onClick={fillHeart} />
      </div>
      <div
        className="cart"
        target="_blank"
        onClick={() => {
          addCart(id, amount);
        }}
      >
        CART
      </div>
      <div className="cart" target="_blank">
        BUY NOW
      </div>
    </div>
  );
};

export default BuyWrap;
