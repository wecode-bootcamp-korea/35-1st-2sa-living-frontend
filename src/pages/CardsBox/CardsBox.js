import React, { useEffect, useState } from 'react';
import CardList from './CardList/CardList';
import SubCategories from './SubCategories/SubCategories';
import './CardsBox.scss';

function CardsBox() {
  const [cards, setCards] = useState([]);
  const [userInput, setUserInput] = useState('');
  const navigate = useNavigate();
  // const location = useLocation();
  const [limitValue, setLimitValue] = useState('');

  useEffect(() => {
    fetch('/data/fakeData.json')
      .then(res => res.json())
      .then(res => setCards(res));
  }, []);

  const filterCards = cards.filter(card => {
    return card.category === 'chair';
  });

  const cardList = filterCards.filter(card => {
    const lowerCase = card.brand_name.toLowerCase();
    return lowerCase.includes(userInput);
  });

  const searchBrand = ({ target }) => {
    const inputValue = target.value;
    setUserInput(inputValue);
  };

  const selectedPage = ({ target }) => {
    // const limitValue = target.value;
    setLimitValue(target.value);
    const string = `?limit=${limitValue}&offset=0`;
    navigate(string);
  };

  const changePage = ({ target }) => {
    const limit = 4;
    const offset = target.value;
    const string = `?limit=${limit}&offset=${offset}`;
    navigate(string);
  };

  return (
    <div className="CardsBox">
      <h1 className="category-name">CHAIR</h1>
      <div className="cards-container">
        <SubCategories />
        <div class="products-container">
          <div className="cards-new-product">
            <p className="product-category-amount">NEW PRODUCT</p>
            <CardList cardList={cardList} />
          </div>
          <div className="cards">
            <div className="cards-sort">
              <p className="category-amount">체어 762</p>
              <div className="cards-search">
                <input
                  onChange={searchBrand}
                  placeholder="브랜드 검색"
                  type="text"
                />
                <div className="page-size-container">
                  <select className="page-size" onChange={selectedPage}>
                    <option value="4">4개</option>
                    <option value="8">8개</option>
                  </select>
                  <select className="page-size" onChange={selectedPage}>
                    <option value="4">신상품</option>
                    <option value="8">판매순</option>
                  </select>
                </div>
              </div>
            </div>
            <CardList cardList={cardList} />
            <div className="paging-container">
              <i class="fas fa-angle-left box-arrow" />
              <ol className="paging-list">
                <li value={0} onClick={changePage} className="paging-list-item">
                  1
                </li>
                <li value={4} onClick={changePage} className="paging-list-item">
                  2
                </li>
              </ol>
              <li class="fas fa-angle-right box-arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsBox;
