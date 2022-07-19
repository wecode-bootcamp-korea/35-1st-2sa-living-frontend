import React from 'react';

const Slideitem = props => {
  let els = props.els;
  return (
    <li className="item">
      <div className="item-img">
        <img src={els.imgUrl} />
      </div>
      <div className="item-id">{els.userName}</div>
      <div className="item-txt">{els.content}</div>
    </li>
  );
};

export default Slideitem;
