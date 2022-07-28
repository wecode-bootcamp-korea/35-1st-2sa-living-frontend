import React, { useState } from 'react';

const BuyWrap = ({ amount, setAmount, colors, list, brand }) => {
  const [select, setSelect] = useState('');
  const [likeIt, setLikeIt] = useState(0);

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
        <img
          className="LikeIt"
          src="/images/Product/emptyheart.png"
          onClick={clickLikeIt}
          alt="icon"
        />
      </div>
      <div className="cart" target="_blank">
        CART
      </div>
      <div className="cart" target="_blank">
        BUY NOW
      </div>
    </div>
  );
};

export default BuyWrap;
