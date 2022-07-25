import React from 'react';
import Card from '../Card/Card';
import './CardList.scss';

function CardList({ cardList }) {
  return (
    <div className="card-list">
      <Card cardList={cardList} />
    </div>
  );
}

export default CardList;
