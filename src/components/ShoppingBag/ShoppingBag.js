import React from 'react';

import './ShoppingBag.scss';

const ShoppingBag = ({ itemBag, setItems }) => {
  const removeBag = id => {
    fetch(`http://10.58.2.81:8000/carts/${id}`, {
      method: 'DELETE',
      headers: { Authorization: localStorage.getItem('jwt') },
    })
      .then(response => response.json())
      .then(data => setItems(data.carts));
  };

  let {
    thumbnail_image_url,
    brand_name,
    furniture_korean_name,
    price,
    quantity,
    cartid,
  } = itemBag;
  return (
    <div className="bag-item" onClick={removeBag(cartid)}>
      <div className="item-img">
        <img src={thumbnail_image_url} alt="썸네일" />
        <p className="close-box">
          <i class="fa-solid fa-xmark" />
        </p>
      </div>
      <div className="item-txt">
        <p className="txt-brand">
          <span>{brand_name}</span>
        </p>
        <p className="txt-name">{furniture_korean_name}</p>
        <p className="txt-price">
          <em>{price}</em>원<span>수량 {quantity}개</span>
        </p>
      </div>
    </div>
  );
};

export default ShoppingBag;
