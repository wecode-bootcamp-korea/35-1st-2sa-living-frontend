import React from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = () => {
  const navigate = useNavigate();

  return (
    <div className="login-delivery-modal">
      <h3>비회원 주문 배송조회</h3>
      <p>비회원으로 주문하신 분은 주문자명과 주문번호를 입력해주세요.</p>
      <form className="nonmember-buy" method="post">
        <div className="nonmember-info">d</div>
      </form>
    </div>
  );
};

export default Modal;
