import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

import CardList from './CardList/CardList';
import SubCategories from './SubCategories/SubCategories';
import './CardsBox.scss';

function CardsBox(id) {
  const [cards, setCards] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [limitValue, setLimitValue] = useState('');
  let [subCate, setSubCate] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const params = useParams();

  // const categoryId = '머시기'
  let categoryId = params.id;

  // fetch(
  //   `http://10.58.0.163:8000/products?category_id=2&page=1${
  //     location.search || `limit=4&offset=0`
  //   } `
  // )

  //'http://10.58.0.163:8000/products?category_id=2&limit=4&offset=0'
  useEffect(() => {
    fetch(
      `http://10.58.7.204:8000/products?category_id=${categoryId}&sub_category_id=${subCate}&${location.search}`
    ) //limit=4&offset=0
      .then(res => res.json())
      .then(res => setCards(res.product_list));
  }, [categoryId, location.search]);
  // const filterCards = cards.filter(card => {
  //   return card.category === 'chair';
  // });
  console.log(
    `http://10.58.7.204:8000/products?category_id=${categoryId}&sub_category_id=${subCate}&${location.search}`
  );

  const cardList = cards.filter(card => {
    const lowerCase = card.brandName.toLowerCase();
    return lowerCase.includes(userInput);
  });

  const searchBrand = ({ target }) => {
    const inputValue = target.value;
    setUserInput(inputValue);
  };

  const selectedPage = ({ target }) => {
    const test = target.value;
    setLimitValue(test);
    const string = `?limit=${limitValue}&offset=0`;
    navigate(string);
  };

  useEffect(() => {
    const string = `?limit=${limitValue}&offset=0`;
    navigate(string);
  }, [limitValue]);

  const changePage = ({ target }) => {
    const limit = 4;
    const offset = target.value;
    const string = `?limit=${limit}&offset=${offset}`;
    navigate(string);
  };

  return (
    <div className="CardsBox">
      <h1 className="category-name">{LISTDATA[categoryId - 1]}</h1>
      <div className="cards-container">
        <SubCategories
          categoryId={categoryId}
          setSubCate={setSubCate}
          subCate={subCate}
        />

        <div class="products-container">
          {/* <div className="cards-new-product">
            <p className="product-category-amount">NEW PRODUCT</p>
            <CardList cardList={cardList} />
          </div> */}
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
                    <option>신상품</option>
                    <option>높은가격순</option>
                    <option>낮은가격순</option>
                    <option>판매순</option>
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

const LISTDATA = ['CHAIR', 'SOFA', 'TABLE', 'BED', 'CLOSET'];
export default CardsBox;
