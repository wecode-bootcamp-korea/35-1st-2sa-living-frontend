import React, { useEffect, useState } from 'react';
import Slideitem from '../Slideitem/Slideitem';

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
      <div className="slide-wrap">
        <ul className="slide" style={{ left: copy }}>
          {item.map(els => {
            return <Slideitem key={els.id} items={els} />;
          })}
        </ul>
      </div>
      <p className="controls">
        <div className="prev" onClick={prev} />
        <div className="next" onClick={next} />
      </p>
    </>
  );
};

export default Slidebox;
