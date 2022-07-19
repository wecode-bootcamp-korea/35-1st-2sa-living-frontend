import React, { useEffect, useState } from 'react';
import CardList from './CardList/CardList';
import './CardsBox.scss';

function CardsBox() {
  const [cards, setCards] = useState([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/data/chairData.json', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => setCards(data));
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
    <div className="category-container">
      <h1 className="category-name">CHAIR</h1>
      <div className="cards-container">
        <div className="sub-categories">
          <ul>
            <a href="#">
              <li>라운지체어</li>
            </a>
            <a href="#">
              <li>바체어</li>
            </a>
            <a href="#">
              <li>스툴/벤치</li>
            </a>
            <a href="#">
              <li>키즈체어</li>
            </a>
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
