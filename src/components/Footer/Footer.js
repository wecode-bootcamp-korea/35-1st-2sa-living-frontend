import React from 'react';
import './Footer.scss';
function Footer() {
  return (
    <footer>
      <div className="inner">
        <div className="footer-top">
          <div className="footer-top-notice">
            <p className="notice-txt">NOTICE</p>
            <ul>
              <li>[CSLV스토어 1주년] 쇼핑지원금 이벤트 5주 차 당첨자 발표</li>
              <li>[CSLV스토어 1주년] 쇼핑지원금 이벤트 4주 차 당첨자 발표</li>
              <li>[CSLV스토어 1주년] 쇼핑지원금 이벤트 3주 차 당첨자 발표</li>
              <li>[CSLV스토어 1주년] 쇼핑지원금 이벤트 2주 차 당첨자 발표</li>
            </ul>
          </div>
          <div className="footer-top-cs">
            <p className="cs-txt">CS CENTER</p>
            <p className="cs-tel">1644-4676</p>
            <ul>
              <li>
                09:00~16:30<em>MON-FRI</em>
              </li>
              <li>
                12:00~13:10<em>LUNCH TIME</em>
              </li>
              <li>
                WEEKEND/HOLIDAY<em>OFF</em>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <ul className="footer-bottom-menu">
            <li>까사리빙소개</li>
            <li>개인정보취급방침</li>
            <li>이용약관</li>
          </ul>
          <address>
            <p>
              ㈜시공사대표자 : 윤호권 개인정보책임자 : 이시민
              cs@casa.co.kr고객센터 1644-4676
            </p>
            <p>
              서울특별시 성동구 성수동1가 656-1748사업자번호 : 214-81-33375
              통신판매업신고 제2001-서울서초-00591호
            </p>
          </address>
          <div className="footer-bottom-icon">
            <i class="fa-brands fa-instagram-square" />
            <i class="fa-brands fa-facebook-square" />
            <i class="fa-brands fa-youtube" />
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
