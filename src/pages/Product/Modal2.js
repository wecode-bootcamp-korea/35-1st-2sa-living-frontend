import './Modal.scss';

const Modal2 = props => {
  const { open, close, header, addReview } = props;

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
                - 문의글에 대한 답변 등록시 SMS로 알람이 제공되며,
                마이페이지에서 해당 내용을 확인하실 수 있습니다.
              </p>
              <div className="input-row">
                <div className="input_title">
                  <p>상품명</p>
                  <select>
                    <option disabled selected>
                      상품을 선택하세요
                    </option>
                  </select>
                </div>
              </div>
              <div className="input_title">
                <p className="review-content">문의내용</p>
              </div>
              <form onSubmit={addReview}>
                <textarea type="text" className="review_in_modal" />

                <div className="button-page-up">
                  <button className="input-modal-button" onClick={open}>
                    상품문의등록
                  </button>
                  <button className="close-modal-button" onClick={close}>
                    취소
                  </button>
                </div>
              </form>
            </div>
          </main>
        </section>
      ) : null}
    </div>
  );
};

export default Modal2;
