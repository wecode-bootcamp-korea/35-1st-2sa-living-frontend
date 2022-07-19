import React from 'react';
import Card from '../Card/Card';
import './CardList.scss';

function CardList(props) {
  return (
    <div className="card-list">
      <Card cardList={props.cardList} />
    </div>
  );
}

export default CardList;
