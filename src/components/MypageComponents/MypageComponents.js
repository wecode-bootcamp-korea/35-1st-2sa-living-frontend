import React from 'react';
import './MypageComponents.scss';

const MypageComponents = ({ items }) => {
  let { brandName, thumbnail_image_url, productName, price } = items;

  return (
    <div className="item">
      <div className="img-box">
        <img src={thumbnail_image_url} alt="제품이미지" />
      </div>
      <div className="product-info">
        <p className="brand">{brandName}</p>
        <p className="name">{productName}</p>
        <p className="price">{price.toLocaleString('ko-KR')} 원</p>
      </div>
    </div>
  );
};

export default MypageComponents;
