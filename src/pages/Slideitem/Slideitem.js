import React from 'react';

const Slideitem = props => {
  let { imgUrl, userName, content } = props.items;

  return (
    <li className="item">
      <div className="item-img">
        <img src={imgUrl} alt="썸네일" />
      </div>
      <div className="item-id">{userName}</div>
      <div className="item-txt">{content}</div>
    </li>
  );
};

export default Slideitem;
