import React from 'react';

const SUBTITLES = ['라운지체어', '바체어', '스툴/벤치', '키즈체어'];

function SubCategories({}) {
  return (
    <div className="sub-categories">
      <ul>
        {SUBTITLES.map((subtitle, idx) => {
          return <li key={idx}>{subtitle}</li>;
        })}
      </ul>
    </div>
  );
}

export default SubCategories;
