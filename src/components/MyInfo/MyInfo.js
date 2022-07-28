import React from 'react';
import { useNavigate } from 'react-router-dom';
import ShoppingBag from '../ShoppingBag/ShoppingBag';
import './MyInfo.scss';

const MyInfo = ({ slideOn, setSlideOn, item, setItem, likes, setLikes }) => {
  const removeSide = () => {
    setSlideOn(!slideOn > slideOn);
  };
  const navigate = useNavigate();

  const letOrder = () => {
    fetch(`http://10.58.7.204:8000/orders`, {
      method: 'POST',
      headers: { Authorization: localStorage.getItem('jwt') },
    })
      .then(response => response.json())
      .then(() => {
        setItem([]);
      });

    navigate('/mypage');
    removeSide();
  };

  let LikesList = ({ props }) => {
    let { product_image, furniture_korean_name, furniture_brand } = props;
    return (
      <div className="lises-box">
        <img src={product_image} alt="상품이미지" />
        <div className="txt-box">
          <p className="brand">{furniture_brand}</p>
          <p className="name">{furniture_korean_name}</p>
        </div>
      </div>
    );
  };
  return (
    <>
      <div
        className="background"
        style={{ display: slideOn ? 'block' : 'none' }}
      />
      <aside className="quick" style={{ right: slideOn ? '0px' : '-472px' }}>
        <div className="my-name">
          <p className="name">
            <img src="/images/MyInfo/profile-user.png" alt="회원정보" />
            환영합니다 <span> 정 억화 고객님</span>
          </p>
          <div className="close" onClick={removeSide}>
            <img src="/images/MyInfo/close.png" alt="close" />
          </div>
        </div>
        <div className="my-shopping">
          <h3>
            장바구니<em id="count">{item.length}</em>
          </h3>
          <div className="my-shopping-list">
            {item.map(els => {
              return (
                <ShoppingBag itemBag={els} key={els.id} setItem={setItem} />
              );
            })}
          </div>
          <div className="my-shopping-btn">
            <div
              className="viewbtn"
              onClick={() => {
                navigate('/mypage');
                removeSide();
              }}
            >
              주문목록 보기
            </div>
            <div
              className="buybtn"
              onClick={() => {
                letOrder();
              }}
            >
              바로구매
            </div>
          </div>
        </div>

        <div className="my-likeit">
          <h3>라이크잇 상품</h3>
          <div className="my-likeit-list">
            {likes.length ? (
              likes.map((els, idx) => {
                return <LikesList key={idx} props={els} />;
              })
            ) : (
              <p> 구매하고 싶은 상품을 라이크잇 하세요</p>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default MyInfo;
