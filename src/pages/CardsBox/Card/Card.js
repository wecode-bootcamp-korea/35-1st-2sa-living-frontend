import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Card.scss';
import '../../../styles/variables.scss';
import Heart from '../../../components/Heart/Heart';

const Card = ({ cardList }) => {
  const navigate = useNavigate();
  const addCart = product => {
    fetch('http://10.58.7.204:8000/carts', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('jwt'),
      },
      body: JSON.stringify({
        product_id: product,
        quantity: 1,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
  };
  let goTo = id => {
    navigate(`/products/${id}`);
  };

  return (
    <>
      {cardList.map(({ id, image, brandName, productName, price }) => (
        <div className="card" key={id}>
          <div className="img-container">
            <img className="card-img" src={image} alt="product" />
            <div className="img-hover">
              <div
                className="hover-items"
                onClick={() => {
                  goTo(id);
                }}
              />
              <i
                className="fas fa-shopping-cart"
                onClick={() => {
                  addCart(id);
                }}
              />
              <Heart />
            </div>
          </div>
          <span className="brand-name">{brandName}</span>
          <p className="card-name">{productName}</p>
          <p className="card-price">{price}</p>
        </div>
      ))}
    </>
  );
};

export default Card;
