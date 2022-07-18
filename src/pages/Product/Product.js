import React from 'react';

const Product = () => {
  return (
    <>
      <section className="container">
        {/* 상세페이지 다 담는 박스 */}
        <div className="SubMenu">
          <li>
            <span>테이블</span>
          </li>
          <li>
            <span>사이드테이블</span>
          </li>
          <div>공유 아이콘</div>
          <div className="ProductDetailImage">
            <div className="ProductImage">
              <p>
                <img
                  src="src/asset/images/16508600917923.png_1600.png"
                  alt=""
                />
              </p>
              <div className="LeftProduct">
                <a>img1</a>
                <a>img2</a>
                <a>img3</a>
              </div>
              <div className="RightProduct">
                <div className="ProductData"></div>
                <div className="ProductNameEn"></div>
                <div className="ProductNameKo"></div>
                <div className="ProductPrice"></div>
              </div>
              <div className="DetailInfoWrap">
                <input type="hidden" name="BrandName" />
                <input type="hidden" name="OptionTitle1" />
                <input type="hidden" name="OptionTitle2" />
                <input type="hidden" name="StockCount" />
                <input type="hidden" name="" />
                <input type="hidden" name="BrandName" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
