import React from 'react';
import './Card.scss';
import '../../../styles/variables.scss';

function Card(props) {
  return props.cardList.length > 0 ? (
    props.cardList.map(card => {
      return (
        <div className="card" key={card.id}>
          <div className="img-container">
            <img className="card-img" src={card.image} alt="product" />
            <div className="img-hover">
              <div className="hover-items">
                <i className="fas fa-shopping-cart" />
                <i className="far fa-heart" />
              </div>
            </div>
          </div>
          <span className="brand-name">{card.brandName}</span>
          <p className="card-name">{card.productName}</p>
          <p className="card-price">{card.price}</p>
        </div>
      );
    })
  ) : (
    <></>
  );
}
export default Card;
