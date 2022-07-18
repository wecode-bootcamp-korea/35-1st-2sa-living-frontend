// import React, { useEffect, useState } from 'react';
import React from 'react';
import Card from './Card/Card';
import './Cards.scss';

function Cards() {
  // const [cards, setCards] = useState([]);

  // useEffect(() => {
  //   fetch("", {
  //     method: "GET",
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setCards(data));
  // }, []);

  return (
    <>
      <div className="cards-container">
        <h1 className="category-name">Chair</h1>
        <p className="category-amount">체어 762</p>
        <div className="cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default Cards;
