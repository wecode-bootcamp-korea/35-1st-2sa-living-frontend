import React from 'react';
import { Link } from 'react-router-dom';
import './MypageComponents.scss';

const MypageComponents = ({ items }) => {
  let { brand_name, thumbnail_image_url, furniture_korean_name, price } = items;

  return (
    <Link to="/">
      <div className="item">
        <div className="img-box">
          <img src={thumbnail_image_url} alt="제품이미지" />
        </div>
        <div className="product-info">
          <p className="brand">{brand_name}</p>
          <p className="name">{furniture_korean_name}</p>
          <p className="price">{price} 원</p>
        </div>
      </div>
    </Link>
  );
};

export default MypageComponents;
