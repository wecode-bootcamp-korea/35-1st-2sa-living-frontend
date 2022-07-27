import React from 'react';
import { useNavigate } from 'react-router-dom';

function Heart({ id }) {
  const fillHeart = e =>
    e.target.style.color === ''
      ? ((e.target.style.color = 'red'), (e.target.className = 'fas fa-heart'))
      : ((e.target.style.color = ''), (e.target.className = 'far fa-heart'));

  const addLikes = product => {
    fetch('http://10.58.1.126:8000/carts', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('jwt'),
      },
      body: JSON.stringify({
        product_id: product,
      }),
    }).then(response => response.json());
  };

  return (
    <div class="Heart" onClick={addLikes({ id })}>
      <i onClick={fillHeart} className="far fa-heart" />
    </div>
  );
}

export default Heart;
