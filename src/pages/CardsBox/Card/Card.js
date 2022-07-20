import React from 'react';
import './Card.scss';
import '../../../styles/variables.scss';

function Card({ cardList }) {
  return (
    cardList.length > 0 &&
    cardList.map(card => {
      let { id, image, brandName, productName, price } = card;
      return (
        <div className="card" key={id}>
          <div className="img-container">
            <img className="card-img" src={image} alt="product" />
            <div className="img-hover">
              <div className="hover-items">
                <i className="fas fa-shopping-cart" />
                <i className="far fa-heart" />
              </div>
            </div>
          </div>
          <span className="brand-name">{brandName}</span>
          <p className="card-name">{productName}</p>
          <p className="card-price">{price}</p>
        </div>
      );
    })
  );
}
export default Card;
