import React from 'react';

const title = [
  {
    id: '1',
    subtitles: ['라운지체어', '바체어', '스툴/벤치', '키즈체어'],
  },
  {
    id: '2',
    subtitles: ['가죽 소파', '페프릭 소파'],
  },
  {
    id: '3',
    subtitles: ['다이닝 테이블', '소파 테이블', '사이드 테이블', '데스크'],
  },
  {
    id: '4',
    subtitles: ['프레임', '매트리스', '침대 커버'],
  },
  {
    id: '5',
    subtitles: ['서랍장', '거실장', '트롤리', '행거'],
  },
];

function SubCategories({ categoryId, setSubCate, subCate }) {
  const titleIdx = title.findIndex(el => el.id === categoryId);

  return (
    <div className="sub-categories">
      <ul>
        {title[titleIdx].subtitles.map((subtitle, idx) => {
          let result = idx + 1;
          //카테고리아이디 배열을 가져온댜 -> map으로 하나씩 가져와서 그안의 id값으로 카테고리 타이틀을 입력한다
          return (
            // <li onClick={resetPage} key={idx}>
            <li
              key={idx}
              onClick={() => {
                setSubCate(() => {
                  return result;
                });
              }}
            >
              {subtitle}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SubCategories;
