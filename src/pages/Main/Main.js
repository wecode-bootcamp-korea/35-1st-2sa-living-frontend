import React from 'react';
import './Main.scss';

const Main = () => {
  return (
    <main>
      <section>
        <div className="main-01">
          <div className="main-01-left">
            <div className="main-left-txt">
              <p className="txt-top">#스테디셀러 #미드센츄리 #이탈리아</p>
              <p className="txt-bottom">혁신적이고 자유로운 가구, Pezzani</p>
            </div>
          </div>

          <div className="main-01-right">
            <div className="right-top">
              <div className="right-top-child" />

              <p className="right-top-top">
                미니멀 라이프 <br />
                DOTTUS
              </p>
            </div>

            <div className="right-bottom">
              <div className="right-bottom-child">
                <p className="right-top-top">
                  GUBI Obello Lamp <br />
                  유리와 빛의 만남
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
