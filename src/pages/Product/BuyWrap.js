import React, { useState } from 'react';

const BuyWrap = () => {
  const [amount, setAmount] = useState(1);
  const [select, setSelect] = useState('');
  const [likeIt, setLikeIt] = useState(0);

  const selectColor = e => {
    setSelect(e.target.value);
  };

  const handleAmountPlus = () => {
    setAmount(amount + 1);
  };

  const handleAmountMinus = () => {
    setAmount(amount - 1);
  };

  const clickLikeIt = e => {
    setLikeIt(e.target.value);
    setLikeIt(likeIt + 1);
  };

  return (
    <div>
      <div className="BuyDataWrap">
        <div className="BrandInfo">
          <span className="BrandName">HAY</span>
        </div>

        <div className="ColorWrap">
          <div className="ColorInfo">
            <select
              className="SelectOption"
              value={select}
              onChange={selectColor}
            >
              <option disabled selected>
                색상 선택
              </option>
              <option value="480,000">Black</option>
              <option value="550,000">White</option>
              <option value="600,000">Oatmeal</option>
            </select>
          </div>
        </div>
        <div className="Amount">
          <img
            alt="icon"
            className="ammount_arrow"
            src="/images/Product/left-arrow.png"
            onClick={handleAmountMinus}
          />
          <p>{amount}</p>
          <img
            alt="icon"
            className="ammount_arrow"
            src="/images/Product/right-arrow.png"
            onClick={handleAmountPlus}
          />
        </div>
        <div className="buyWrap">
          <a
            target="_blank"
            href="https://www.casa.co.kr/member/login.aspx?returnUrl=https%3a%2f%2fwww.casa.co.kr%2fproduct%2fview.aspx%3fpkid%3d912%26returnUrl%3dhttps%253a%252f%252fwww.casa.co.kr%252fproduct%252flist.aspx%253fpage%253d2%2526c1%253d1%2526c2%253d7%2526c3%253d0%2526c4%253d0%2526pagesize%253d20%2526ordertype%253d0"
            rel="noreferrer"
          >
            <img
              className="LikeIt"
              src="images/Product/emptyheart.png"
              onClick={clickLikeIt}
              alt="icon"
            />
          </a>
          {likeIt}
        </div>
        <div className="cart">
          <a
            target="_blank"
            href="https://www.casa.co.kr/member/login.aspx?returnUrl=https%3a%2f%2fwww.casa.co.kr%2fproduct%2fview.aspx%3fpkid%3d912%26returnUrl%3dhttps%253a%252f%252fwww.casa.co.kr%252fproduct%252flist.aspx%253fpage%253d2%2526c1%253d1%2526c2%253d7%2526c3%253d0%2526c4%253d0%2526pagesize%253d20%2526ordertype%253d0"
            rel="noreferrer"
          >
            CART
          </a>
        </div>
        <div className="buy">
          <a
            target="_blank"
            href="https://www.casa.co.kr/member/login.aspx?returnUrl=https%3a%2f%2fwww.casa.co.kr%2fproduct%2fview.aspx%3fpkid%3d912%26returnUrl%3dhttps%253a%252f%252fwww.casa.co.kr%252fproduct%252flist.aspx%253fpage%253d2%2526c1%253d1%2526c2%253d7%2526c3%253d0%2526c4%253d0%2526pagesize%253d20%2526ordertype%253d0"
            rel="noreferrer"
          >
            BUY NOW
          </a>
        </div>
      </div>
    </div>
  );
};

export default BuyWrap;
