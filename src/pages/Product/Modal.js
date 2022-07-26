import React from 'react';
import './Modal.scss';

const Modal = props => {
  const { open, close, header } = props;

  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <div className="initial_modal">
              <p>
                - 이사샵의 리뷰는 오프라인에서 구매한 이사샵 회원도 작성이
                가능합니다. 포토리뷰는 1,000P, 텍스트리뷰는 500P가 적립되며
                포인트가 기적립된 리뷰는 삭제하실 수 없습니다.(상품당 1회 적립
                제한, 1일 2회 적립 제한)
              </p>
              <p>
                - 등록된 게시물은 사이트 홍보 및 마케팅 용도로 활용될 수 있으며,
                타인 글 도용 및 비방, 욕설, 취지에 맞지 않는 내용은 사전 통보
                없이 삭제 처리될 수 있습니다.
              </p>
              <div className="input_title">
                <p>상품명</p>
                <select />
                <div className="input_title">
                  <p>리뷰내용</p>
                  <textarea className="review_in_modal" />
                </div>
              </div>
            </div>
          </main>
          <footer>
            <button className="upload" onClick={open}>
              등록
            </button>
            <button className="close" onClick={close}>
              닫기
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
