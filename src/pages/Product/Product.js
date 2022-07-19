import React, { useState } from 'react';
import './Product.scss';

const Product = () => {
  const [amount, setAmount] = useState(0);

  const handleAmountPlus = e => {
    e.preventDefault();
    setAmount(e.target.value);
    setAmount(amount + 1);
  };

  const handleAmountMinus = e => {
    e.preventDefault();
    setAmount(e.target.value);
    setAmount(amount - 1);
  };

  return (
    <section className="container">
      <div className="SubMenu">
        <li>
          <span>체어</span>
        </li>
        <li>
          <span>체어</span>
        </li>
        <div>
          <img
            className="ShareIcon"
            src="/images/Product/icon_share.png"
            alt="icon"
          />
        </div>
      </div>
      <div className="ProductDetailImage">
        <div>
          <p>
            <img
              className="ProductImage"
              src="/images/Product/green_chair.jpg"
              alt="icon"
            />
          </p>
          <div className="LeftProduct">
            <a>img1</a>
            <a>img2</a>
            <a>img3</a>
          </div>
          <div className="RightProduct">
            <div className="ProductData" />
            <p>
              <span className="ProductNameEn">
                Result Chair, Forest Green/ Black Frame
              </span>
            </p>
            <p>
              <span className="ProductNameKo">
                리절트 체어_포레스트 그린 / 블랙 프레임
              </span>
            </p>
            <div className="ProductPrice">
              <p>480,000</p>
            </div>
          </div>
        </div>
        {/*<form className="OrderBasketForm">
             <input type="hidden" name="IsOption" />
                <input type="hidden" name="OptionTitle1" />
                <input type="hidden" name="OptionTitle2" />
                <input type="hidden" name="StockCount" />
                <input type="hidden" name="" />
                <input type="hidden" name="" />  */}
        <div className="BuyDataWrap">
          <div>
            <div className="BrandName">
              <strong>HAY</strong>
              <p>헤이 | 트렌디한 북유럽 라이프 스타일</p>
            </div>
          </div>

          <div className="Options">
            <select className="SelectOption">
              <option value="색상 선택">색상 선택</option>
              <option value="Black">Black(0원)</option>
              <option value="White">White(550,000원)</option>
              <option value="Oatmeal">Oatmeal(600,000원)</option>
            </select>
            <div className="Amount">
              <button className="MinusButton" onClick={handleAmountPlus} />
              <p>{amount}</p>
              <button className="PlusButton" onClick={handleAmountMinus} />
            </div>
            <div className="LikeIt" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
