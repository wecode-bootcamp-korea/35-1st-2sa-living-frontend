import React, { useEffect, useState } from 'react';
import CardList from './CardList/CardList';
import './CardsBox.scss';

const SUBTITLES = ['라운지체어', '바체어', '스툴/벤치', '키즈체어'];

function CardsBox() {
  const [cards, setCards] = useState([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    fetch('/data/chairData.json')
      .then(res => res.json())
      .then(res => setCards(res));
  }, []);

  const cardList = cards.filter(card => {
    const lowerCase = card.brandName.toLowerCase();
    return lowerCase.includes(userInput);
  });

  const searchBrand = ({ target }) => {
    const inputValue = target.value;
    setUserInput(inputValue);
  };

  return (
    <div className="CardsBox">
      <h1 className="category-name">CHAIR</h1>
      <div className="cards-container">
        <div className="sub-categories">
          <ul>
            {SUBTITLES.map((subtitle, idx) => {
              return <li key={idx}>{subtitle}</li>;
            })}
          </ul>
        </div>
        <div className="cards">
          <div className="cards-sort">
            <p className="category-amount">체어 762</p>
            <div className="cards-search">
              <input onChange={searchBrand} placeholder="브랜드 검색" />
              <select className="page-size">
                <option value="20">20개</option>
                <option value="50">50개</option>
                <option value="100">100개</option>
              </select>
            </div>
          </div>
          <CardList cardList={cardList} />
        </div>
      </div>
    </div>
  );
}

export default CardsBox;
