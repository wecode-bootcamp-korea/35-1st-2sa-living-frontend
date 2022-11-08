import React from 'react';
import styled from 'styled-components';

function Heart() {
  const fillHeart = e =>
    e.target.style.color === ''
      ? ((e.target.style.color = 'red'), (e.target.className = 'fas fa-heart'))
      : ((e.target.style.color = ''), (e.target.className = 'far fa-heart'));

  return (
    <Hearts className="Heart">
      <i onClick={fillHeart} className="far fa-heart" />
    </Hearts>
  );
}

export default Heart;

const Hearts = styled.div`
  position: absolute;
  bottom: 25%;
  left: 50%;
  padding: 10px;
`;
