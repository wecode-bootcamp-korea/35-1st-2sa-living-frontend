import React from 'react';

import './ShoppingBag.scss';

const ShoppingBag = ({ itemBag, setItem }) => {
  const removeBag = id => {
    fetch(`http://10.58.7.133:8000/carts/cart/${cart_id}`, {
      method: 'DELETE',
      headers: { Authorization: localStorage.getItem('jwt') },
    })
      .then(response => response.json())
      .then(data => setItem(data.carts));
  };

  let {
    cart_image,
    furniture_brand,
    furniture_korean_name,
    price,
    quantity,
    cart_id,
  } = itemBag;

  return (
    <div className="bag-item" style={{ cursor: 'pointer' }}>
      <div className="item-img">
        <img src={cart_image} alt="썸네일" />
        <p
          className="close-box"
          onClick={() => {
            removeBag(cart_id);
          }}
        >
          <i class="fa-solid fa-xmark" />
        </p>
      </div>
      <div className="item-txt">
        <p className="txt-brand">
          <span>{furniture_brand}</span>
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
