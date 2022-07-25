import React from 'react';

function Heart() {
  const fillHeart = e =>
    e.target.style.color === ''
      ? ((e.target.style.color = 'red'), (e.target.className = 'fas fa-heart'))
      : ((e.target.style.color = ''), (e.target.className = 'far fa-heart'));

  return (
    <div class="Heart">
      <i onClick={fillHeart} className="far fa-heart" />
    </div>
  );
}

export default Heart;
