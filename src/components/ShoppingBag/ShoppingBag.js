import React from 'react';
import { Link } from 'react-router-dom';
import './ShoppingBag.scss';

const ShoppingBag = ({ itemBag }) => {
  let { thumbnail_image_url, brand_name, furniture_korean_name, price } =
    itemBag;
  return (
    <Link to="/">
      <div className="bag-item">
        <div className="item-img">
          <img src={thumbnail_image_url} alt="썸네일" />
        </div>
        <div className="item-txt">
          <p className="txt-brand">
            <span>{brand_name}</span>
          </p>
          <p className="txt-name">{furniture_korean_name}</p>
          <p className="txt-price">
            <em>{price}</em>원
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ShoppingBag;
