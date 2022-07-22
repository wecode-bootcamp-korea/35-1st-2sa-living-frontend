import React from 'react';
import './Card.scss';
import '../../../styles/variables.scss';
import Heart from '../../../components/Heart/Heart';

const Card = ({ cardList }) => {
  return (
    <>
      {cardList.map(({ id, image, brandName, productName, price }) => (
        <div className="card" key={id}>
          <div className="img-container">
            <img className="card-img" src={image} alt="product" />
            <div className="img-hover">
              <div className="hover-items">
                <i className="fas fa-shopping-cart" />
                <Heart />
              </div>
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
