import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Modal from './Modal';
import Modal2 from './Modal2';
/* import Accordion from './Accordion'; 추가구현 카테고리 아코디언화 */
import BuyWrap from './BuyWrap';
import ProductFooter from './ProductFooter';
import './Product.scss';

const Product = () => {
  const [amount, setAmount] = useState(1);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [reviewlist, setReviewlist] = useState([]);
  const [review, setReview] = useState([]);
  const [input, setInput] = useState('');
  const [commentList, setCommentList] = useState([]);
  const params = useParams();

  /*   1. 통신 상세페이지
  2. 리뷰 페이지 List 정보 가져오기 */

  useEffect(() => {
    fetch(`http://10.58.0.163:8000/products/${params.id}`)
      .then(response => response.json())
      .then(data => setReviewlist(data.result));

    fetch(`http://10.58.0.163:8000/products/review/${params.id}`, {
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.TbUpMPmn-RdsST-uVWs8gGmIGv9rT0-jycK1rwVYY3s',
      }, //헤더에 로컬스토리지에 있는 토큰 삽입
    })
      .then(response => response.json())
      .then(data => setCommentList(data.result)); //data를 setCommentList에 저장
  }, [input]); //[]intput이 변경 될 때마다 렌더

  console.log(reviewlist);

  const {
    korean_name,
    english_name,
    main_image,
    price,
    related_products_list,
    brand,
    detail_image,
  } = reviewlist;

  const moveTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const openModal2 = () => {
    setModal2(true);
  };

  const closeModal2 = () => {
    setModal2(false);
  };

  const inputReview = (e, a) => {
    e.preventDefault();
    setReview([...review, input]);
    setInput('');
  };

  const inputVal = e => {
    setInput(e.target.value);
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
          {/*<div className="SubMenu">  추가구현 카테고리 아코디언화
            <div className="category">
              <li>review_wrap

                <Accordion />
              </li>
            </div>
            <div className="share_icon">
              <img
                className="ShareIcon"
                src="/images/Product/icon_share.png"
                alt="icon"
              />
            </div>
          </div>*/}
          <div className="Detail">
            <div className="share_icon">
              <img src={main_image} alt="icon" />
            </div>

            <div className="ProductData">
              <p>
                <span className="ProductNameEn">{english_name}</span>
              </p>
              <p>
                <span className="ProductNameKo">{korean_name}</span>
              </p>
              <div className="ProductPrice">
                <p>
                  <span>{price * amount} </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <BuyWrap
          amount={amount}
          setAmount={setAmount}
          colors={related_products_list}
          list={reviewlist}
          brand={brand}
        />
        <div className="benefitWrap">
          <div className="benefit_child">
            착불배송
            <img alt="icon" className="icon" src="/images/Product/down.png" />
          </div>
          <div className="benefit_child">
            쿠폰혜택안내
            <img alt="icon" className="icon" src="/images/Product/down.png" />
          </div>
          <div className="benefit_child">
            카트혜택안내
            <img alt="icon" className="icon" src="/images/Product/down.png" />
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
        <a name="target">
          <img
            className="ProductImage"
            src="/images/Product/green_chair.jpg"
            alt="icon"
          />
        </a>
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
            <p className="review-header">리뷰</p>
            <div className="button-wrap">
              <button className="handle-review" onClick={openModal}>
                리뷰등록
              </button>
              <button className="more-review">리뷰 더보기</button>
            </div>
            <Modal
              open={modal}
              close={closeModal}
              header="리뷰"
              addReview={inputReview}
              addText={inputVal}
              input={input}
              id={params.id}
            />
          </div>
          <div className="review_wrap">
            {commentList.map((els, idx) => {
              let { user_first_name, content } = els;
              return (
                <p>
                  <h2 className="user-name">{user_first_name}</h2>
                  {content}
                </p>
              );
            })}
          </div>
        </div>
        <div className="product_review">
          <div className="review_top">
            <p className="review-header">상품문의</p>
            <button className="handle-review" onClick={openModal2}>
              상품문의등록
            </button>
            <Modal2 open={modal2} close={closeModal2} header="상품문의 등록" />
          </div>
          <div className="review_wrap">
            <p className="question">상품문의가 없습니다.</p>
          </div>
        </div>
      </div>
      <a name="delivery" />
      <div className="announcement">배송/반품/AS안내</div>
      <ProductFooter />
    </section>
  );
};

export default Product;
