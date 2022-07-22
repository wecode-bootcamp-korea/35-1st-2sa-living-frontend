import React from 'react';
import './MyInfo.scss';

const MyInfo = () => {
  const removeSide = () => {
    let bg = document.querySelector('.background');
    let side = document.querySelector('.quick');
    bg.style.display = 'none';
    side.style.right = '-472px';
  };
  return (
    <>
      <div className="background" />
      <aside className="quick">
        <div className="my-name">
          <p className="name">
            <img src="/images/MyInfo/profile-user.png" alt="회원정보" />
            환영합니다 <span>홍길동 고객님</span>
          </p>
          <div class="close" onClick={removeSide}>
            <img src="/images/MyInfo/close.png" alt="close" />
          </div>
        </div>
        <div className="my-shopping">
          <h3>
            장바구니<em id="count">3</em>
          </h3>
          <div className="my-shopping-list">
            <p> 장바구니에 담긴 상품이 없습니다.</p>
          </div>
          <div className="my-shopping-btn">
            <div className="viewbtn">장바구니보기</div>
            <div className="buybtn">바로구매</div>
          </div>
        </div>

        <div className="my-likeit">
          <h3>라이크잇 상품</h3>
          <div className="my-likeit-list">
            <p> 구매하고 싶은 상품을 라이크잇 하세요</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default MyInfo;
