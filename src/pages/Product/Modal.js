import './Modal.scss';

const Modal = props => {
  const { open, close, header, addReview, addText, input, id } = props;

  const addReviews = () => {
    fetch(`http://10.58.7.204:8000/products/review/${id}`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('jwt'),
      },
      body: JSON.stringify({
        content: input,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
  };
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
            <div className="initial-modal">
              <p>
                - 이사샵의 리뷰는 오프라인에서 구매한 이사샵 회원도 작성이
                가능합니다. 포토리뷰는<span className="color"> 1,000P,</span>
                텍스트리뷰는
                <span className="color">500P</span>가 적립되며 포인트가 기적립된
                리뷰는 삭제하실 수 없습니다.
                <span className="color">
                  (상품당 1회 적립 제한, 1일 2회 적립 제한)
                </span>
              </p>
              <p>
                - 등록된 게시물은 사이트 홍보 및 마케팅 용도로 활용될 수 있으며,
                타인 글 도용 및 비방, 욕설, 취지에 맞지 않는 내용은 사전 통보
                없이 삭제 처리될 수 있습니다.
              </p>
              <div className="input-row">
                <div className="input-title">
                  <p>상품명</p>
                  <select>
                    <option disabled selected>
                      상품을 선택하세요
                    </option>
                  </select>
                </div>
              </div>
              <div className="input-title">
                <p className="review-content">리뷰내용</p>
                <form onSubmit={addReview}>
                  <textarea
                    type="text"
                    value={input}
                    onChange={addText}
                    className="review-in-modal"
                  />

                  <div className="button-page-up">
                    <button
                      className="input-modal-button"
                      type="submit"
                      onClick={addReviews}
                    >
                      등록
                    </button>
                    <button className="close-modal-button" onClick={close}>
                      닫기
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </main>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
