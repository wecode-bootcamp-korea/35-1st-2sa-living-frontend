import React, { useState } from 'react';

function Heart({ id, a, setLikes }) {
  const fillHeart = e =>
    e.target.style.color === ''
      ? ((e.target.style.color = 'red'), (e.target.className = 'fas fa-heart'))
      : ((e.target.style.color = ''), (e.target.className = 'far fa-heart'));

  const addLikes = id => {
    fetch('http://10.58.7.204:8000/users/likes', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('jwt'),
      },
      body: JSON.stringify({
        product_id: id,
      }),
    })
      .then(response => response.json())
      .then(data => setLikes(data.product_ids));
  };

  return (
    <div
      class="Heart"
      onClick={() => {
        addLikes(id);
      }}
    >
      <i
        onClick={fillHeart}
        className={a ? 'fas fa-heart' : 'far fa-heart'}
        style={{ color: a ? 'red' : '' }}
      />
    </div>
  );
}

export default Heart;
