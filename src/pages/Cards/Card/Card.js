import React from 'react';
import './Card.scss';
import '../../../styles/variables.scss';

function Card() {
  return (
    <>
      <div className="card">
        <img
          className="card-img"
          src="https://www.casa.co.kr/UploadFiles/Production/11/2/16042927592130.jpg_304.jpg"
        />
        <p className="card-name">팔리사드 쉐이즈 롱_올리브</p>
        <p className="card-price">1,030,000</p>
      </div>
    </>
  );
}

export default Card;
