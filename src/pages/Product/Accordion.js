import React from 'react';
import { Link } from 'react-router-dom';
import './Accordion.scss';

const data = [
  {
    category: '소파',
    link: 'https://www.casa.co.kr/product/list.aspx?c1=1&c2=6/',
  },
  {
    category: '체어',
    link: 'https://www.casa.co.kr/product/list.aspx?c1=1&c2=7/',
  },
  {
    category: '침대',
    link: 'https://www.casa.co.kr/product/list.aspx?c1=1&c2=8/',
  },
  {
    category: '테이블',
    link: 'https://www.casa.co.kr/product/list.aspx?c1=1&c2=9/',
  },
  {
    category: '수납',
    link: 'https://www.casa.co.kr/product/list.aspx?c1=1&c2=10/',
  },
];

const Accordion = () => {
  return (
    <div>
      <div className="wrapper">
        <img
          alt="icon"
          className="arrow_icon"
          src="/images/Product/right.png"
        />

        <ul>
          {data.map((item, i) => (
            <Link key={i} to={item.link}>
              <li>{item.category}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Accordion;
