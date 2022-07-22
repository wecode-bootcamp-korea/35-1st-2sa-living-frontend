import React, { useState } from 'react';
import './Product.scss';

const Product = () => {
  const [amount, setAmount] = useState(0);
  const [likeIt, setLikeIt] = useState(0);

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

  const clickLikeIt = e => {
    setLikeIt(e.target.value);
    setLikeIt(likeIt + 1);
  };
  const moveTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <section className="container">
      <img
        className="test"
        onClick={moveTop}
        src="/images/Product/down-arrow.png"
        alt="icon"
      />
      <div className="inner">
        <div className="SubMenu">
          <div className="category">
            <li>
              <span>
                <img className="icon" src="images/Product/right.png" />
                체어
              </span>
            </li>
            <li>
              <span>
                <img className="icon" src="images/Product/right.png" />
                체어
              </span>
            </li>
          </div>
          <div>
            <img
              className="ShareIcon"
              src="/images/Product/icon_share.png"
              alt="icon"
            />
          </div>
        </div>
        <div className="ProductDetail">
          <div className="Detail">
            <div className="share_icon">
              <img src="/images/Product/green_chair.jpg" alt="icon" />
            </div>

            <div className="ProductData">
              <p>
                <span className="ProductNameEn">
                  Result Chair, Forest Green/ <br />
                  Black Frame
                </span>
              </p>
              <p>
                <span className="ProductNameKo">
                  리절트 체어_포레스트 그린 / 블랙 프레임
                </span>
              </p>
              <div className="ProductPrice">
                <p>
                  <span>480,000</span>
                </p>
              </div>
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
          <div className="BrandInfo">
            <span className="BrandName">HAY</span>
          </div>

          <div className="ColorWrap">
            <div className="ColorInfo">
              <select className="SelectOption">
                <option disabled selected>
                  색상 선택
                </option>
                <option value="Black">Black(0원)</option>
                <option value="White">White(550,000원)</option>
                <option value="Oatmeal">Oatmeal(600,000원)</option>
              </select>
            </div>
          </div>
          <div className="Amount">
            <img
              src="/images/Product/left-arrow.png"
              onClick={handleAmountMinus}
            />
            <p>{amount}</p>
            <img
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
        <div className="benefitWrap">
          <div className="benefit_child">
            착불배송
            <img className="icon" src="images/Product/down.png" />
          </div>
          <div className="benefit_child">
            쿠폰혜택안내
            <img className="icon" src="images/Product/down.png" />
          </div>
          <div className="benefit_child">
            카트혜택안내
            <img className="icon" src="images/Product/down.png" />
          </div>
        </div>
      </div>
      <div className="detail_tab">
        <div className="introduce">상품설명</div>
        <div>관련상품</div>
        <div className="review_question">리뷰/상품문의</div>
        <div className="delivery_return">배송/반품/AS안내</div>
      </div>
      <div className="img_section">
        <img
          className="ProductImage"
          src="/images/Product/green_chair.jpg"
          alt="icon"
        />
        <img
          className="ProductImage"
          src="/images/Product/detail.png"
          alt="icon"
        />
      </div>
      <div className="review">
        <div className="product_review">
          <div className="review_top">
            <span>리뷰</span>
            <button>리뷰등록</button>
            <button>리뷰 더보기</button>
          </div>
          <div className="review_wrap">
            <p>관련상품 리뷰가 없습니다.</p>
          </div>
        </div>
        <div className="product_review">
          <div className="review_top">
            <span>상품문의</span>
            <button>상품문의등록</button>
          </div>
          <div className="review_wrap">
            <p>상품문의가 없습니다.</p>
          </div>
        </div>
      </div>
      <div className="announcement">
        <h3>배송/반품/AS안내</h3>
      </div>
      <div className="img_section">
        <img src="/images/Product/delivery2.png" alt="icon" />
      </div>
    </section>
  );
};

export default Product;
