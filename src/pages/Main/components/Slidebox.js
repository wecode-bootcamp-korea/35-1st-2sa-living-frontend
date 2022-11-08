import React, { useEffect, useState } from 'react';
import Slideitem from '../../Slideitem/Slideitem';
import styled from 'styled-components';
import next from '../../../asset/images/next.png';
import prev from '../../../asset/images/prev.png';

const Slidebox = () => {
  useEffect(() => {
    fetch('/data/mainMockData.json')
      .then(response => response.json())
      .then(data => setItem(data));
  }, []);
  let [leftValue, setLeftValue] = useState(0);
  let [slideIdx, setSlideIndex] = useState(0);
  let [item, setItem] = useState([]);
  let copy = leftValue + 'px';

  let prev = () => {
    if (slideIdx > 0) {
      setSlideIndex(slideIdx - 1);
      setLeftValue(leftValue + 303);
    }
  };
  let next = () => {
    let slideChild = item.length;
    let slideMax = slideChild - 4;
    if (slideIdx < slideMax) {
      setLeftValue(leftValue - 303);
      setSlideIndex(slideIdx + 1);
    }
  };
  return (
    <>
      <Main02SlideWrap>
        <SlideSide style={{ left: copy }}>
          {item.map(els => {
            return <Slideitem key={els.id} items={els} />;
          })}
        </SlideSide>
      </Main02SlideWrap>
      <p className="controls">
        <Prev onClick={prev} />
        <Next onClick={next} />
      </p>
    </>
  );
};

export default Slidebox;

const Main02SlideWrap = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: 403px;
  max-width: 1220px;
  overflow: hidden;
`;

const SlideSide = styled.ul`
  position: absolute;
  left: 0;
  top: 0;
  width: 2137px;
  transition: 0.5s;
`;

const Prev = styled.div`
  position: absolute;
  left: 50px;
  top: 50%;
  transform: translateY(-50%);
  width: 21px;
  height: 21px;
  background-image: url(${prev});
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const Next = styled.div`
  position: absolute;
  right: 50px;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 21px;
  height: 41px;
  width: 21px;
  height: 21px;
  background-image: url(${next});
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;
