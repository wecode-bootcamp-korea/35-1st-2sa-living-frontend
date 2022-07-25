import React, { useState, useEffect } from 'react';

import Modal from './Modal';
import Modal2 from './Modal2';
import Accordion from './Accordion';
import BuyWrap from './BuyWrap';

import './Product.scss';

const Product = () => {
  const [amount, setAmount] = useState(1);
  const [modal, setModal] = useState(false);
  const [reviewlist, setReviewlist] = useState([]);

  useEffect(() => {
    localStorage.setItem(
      'jwt',
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.TbUpMPmn-RdsST-uVWs8gGmIGv9rT0-jycK1rwVYY3s'
    );

    fetch('/data/data.json')
      .then(response => response.json())
      .then(data => setReviewlist(data[0]));
  }, []);
  let { furniture_korean_name, price, furniture_english_name } = reviewlist;
  // let [price] = reviewlist[0];
  // console.log(price);

  const moveTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <section className="container">
      <div className="drop" />
      <img
        className="test"
        onClick={moveTop}
        src="/images/Product/down-arrow.png"
        alt="icon"
      />
      <div className="inner">
        <div className="ProductDetail">
          <div className="SubMenu">
            <div className="category">
              <li>
                <Accordion />
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

          <div className="Detail">
            <div className="share_icon">
              <img src="/images/Product/green_chair.jpg" alt="icon" />
            </div>

            <div className="ProductData">
              <p>
                <span className="ProductNameEn">{furniture_english_name}</span>
              </p>
              <p>
                <span className="ProductNameKo">{furniture_korean_name}</span>
              </p>
              <div className="ProductPrice">
                <p>
                  <span>{price * amount}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <BuyWrap />
        <div className="benefitWrap">
          <div className="benefit_child">
            착불배송
            <img alt="icon" className="icon" src="images/Product/down.png" />
          </div>
          <div className="benefit_child">
            쿠폰혜택안내
            <img alt="icon" className="icon" src="images/Product/down.png" />
          </div>
          <div className="benefit_child">
            카트혜택안내
            <img alt="icon" className="icon" src="images/Product/down.png" />
          </div>
        </div>
      </div>
      <div className="detail_tab">
        <a href="#target">
          <div className="introduce">상품설명</div>
        </a>
        <div>관련상품</div>
        <a href="#review">
          <div className="review_question">리뷰/상품문의</div>
        </a>
        <a href="#delivery">
          <div className="delivery_return">배송/반품/AS안내</div>
        </a>
      </div>
      <div className="img_section">
        <a name="target" />
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
      <a name="review" />
      <div className="review">
        <div className="product_review">
          <div className="review_top">
            <span>리뷰</span>
            <button onClick={openModal}>리뷰등록</button>
            <Modal open={modal} close={closeModal} header="리뷰" />
            <button>리뷰 더보기</button>
          </div>
          <div className="review_wrap">
            {/* {reviewlist.map(els => {
              return <Review review={els} />;
            })} */}
          </div>
        </div>
        <div className="product_review">
          <div className="review_top">
            <span>상품문의</span>
            <button onClick={openModal}>상품문의등록</button>
            <Modal2 open={modal} close={closeModal} header="상품문의 등록" />
          </div>
          <div className="review_wrap">
            <p>상품문의가 없습니다.</p>
          </div>
        </div>
      </div>
      <a name="delivery" />
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
