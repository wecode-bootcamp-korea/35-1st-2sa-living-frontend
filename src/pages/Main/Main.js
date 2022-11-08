import { React, useEffect, useState } from 'react';
import Slidebox from './components/Slidebox';
import Card from '../CardsBox/Card/Card';
import styled from 'styled-components';
import { getMainList } from '../../api/api';

import './Main.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '../../store/reducer';
import Main01Compo from './components/Main01Compo';
import Main02Compo from './components/Main02Compo';

const Main = () => {
  const dispatch = useDispatch();
  let [clickBtn, setClickBtn] = useState('new');
  let [modalOn, setModalOn] = useState(false);

  const itemList = useSelector(state => state.mainList.value);

  const fatchData = () => {
    getMainList('/mainList.json').then(({ data }) => {
      dispatch(getList(data));
    });
  };
  useEffect(() => {
    fatchData();
  }, []);

  let newMenu = itemList.filter(els => {
    return els.category.includes(clickBtn);
  });
  let newMenu1 = itemList.filter(els => els.is_new && els);

  return (
    <main>
      <MainSection />
      <Main01Compo setModalOn={setModalOn} modalOn={modalOn} />
      <MainSection>
        <Main02Compo />
      </MainSection>
      <MainSection>
        <Main03>
          <Main03List>
            {MAINLISTDATA.map((els, idx) => {
              return (
                <li
                  key={idx}
                  className={clickBtn.toUpperCase() === els ? 'on' : ''}
                  onClick={() => {
                    setClickBtn(els.toLowerCase());
                  }}
                >
                  {els}
                </li>
              );
            })}
          </Main03List>
          <Main03Box>
            {clickBtn === 'new' ? (
              <Card cardList={newMenu1} />
            ) : (
              <Card cardList={newMenu} />
            )}
          </Main03Box>
        </Main03>
      </MainSection>
    </main>
  );
};

export default Main;

const MainSection = styled.section`
  position: relative;
  max-width: 1600px;
  margin: 0 auto;
  padding: 20px 30px 0 30px;
`;

const Main03 = styled.div`
  max-width: none !important;
  padding: 70px 0 80px;
  background: #f2f2f2;
  text-align: center;
`;

const Main03List = styled.ul`
  display: inline-block;
  margin-bottom: 25px;
  li {
    float: left;
    margin: 20px;
    cursor: pointer;
    line-height: 25px;
    border-top: 1px solid transparent;
  }
  .on {
    color: #ff5000;
    font-weight: 800;
    border-top: 3px solid #ff5000;
    transition: 0.2s;
  }
`;

const Main03Box = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  padding: 0 40px;
`;

const MAINLISTDATA = ['NEW', 'SOFA', 'BED', 'TABLE'];
