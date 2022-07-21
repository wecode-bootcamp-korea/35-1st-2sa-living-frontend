import React, { useState } from 'react';

function Heart() {
  const [countHeart, setCountHeart] = useState(0);

  const fillHeart = e =>
    e.target.style.color === ''
      ? ((e.target.style.color = 'red'),
        (e.target.className = 'fas fa-heart'),
        setCountHeart(countHeart + 1))
      : ((e.target.style.color = ''),
        (e.target.className = 'far fa-heart'),
        setCountHeart(countHeart - 1));

  // const countHeartHandler = ()=>{
  //   if
  //     }

  return (
    <div class="Heart">
      <i onClick={fillHeart} className="far fa-heart" />
      <span className="heart-number">{countHeart}</span>
    </div>
  );
}

export default Heart;
