import { useState } from 'react';
import './SignUp.scss';
import '../../styles/common.scss';
// import arrow from '..//../asset/images/btn_arrow.png';

const SignUp = () => {
  const [values, setValues] = useState({
    loginId: '',
    password: '',
    passwordConfirm: '',
    name: '',
    specificCharacter: '/[ {}[]/?.,;:|)*~`!^-_+┼<>@#$%&\'"\\(=]/gi',
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  return (
    <div>
      <div className="container">
        <h2>SIGN UP</h2>
        <div className="wrapper">
          <form className="form">
            <div className="check-agreement">
              <h3>약관동의</h3>
              <ul>
                <li>
                  <input type="checkbox" className="terms" />
                  <label for="agreement1">이용약관에 동의합니다.</label>

                  {/* <img src={arrow} /> */}
                  <a href="https://www.casa.co.kr/member/terms.aspx">
                    전체 보기
                  </a>
                </li>
                <li>
                  <input type="checkbox" className="terms" />
                  <label for="agreement2">
                    개인정보 취급 방침에 동의합니다.
                  </label>
                  {/* <img src={arrow} /> */}
                  <a href="https://www.casa.co.kr/member/terms.aspx">
                    전체 보기
                  </a>
                </li>
                <li>
                  <input type="checkbox" className="terms" />
                  <label for="agreement1">본인은 만 14세 이상입니다.</label>
                </li>
                <li>
                  <input type="checkbox" className="terms" />
                  <label for="agreement1">문자 수신에 동의합니다.</label>
                </li>
                <li>
                  <input type="checkbox" className="terms" />
                  <label for="agreement1">이메일 수신에 동의합니다.</label>
                </li>
                <li>
                  <input type="checkbox" className="terms" />
                  <label for="agreement1">
                    이용 약관, 개인정보취급방침, 문자, 이메일 수신에 모두
                    동의합니다.
                  </label>
                </li>
              </ul>
            </div>
            <div className="info-container">
              <h3>회원 정보 입력</h3>
              <div className="input-wrapper" />

              <div className="input-container">
                <div className="firstname">성</div>
                <div className="firstname-input-wrapper">
                  <input
                    className="firstname-input"
                    type="text"
                    placeholder="성을 입력해주세요"
                  />
                </div>
              </div>
              <div className="input-container">
                <div className="lastname">이름</div>
                <div className="lastname-input-wrapper">
                  <input
                    className="lastname-input"
                    type="text"
                    placeholder="이름을 입력해주세요"
                  />
                </div>
              </div>
              <div className="input-container">
                <div className="signup-email">이메일</div>
                <div className="signup-email-input-wrapper">
                  <p className="input-wrap">
                    <input type="text" className="email-input1" />
                  </p>
                </div>
              </div>
              <div className="input-container">
                <div className="signup-pwd">비밀번호</div>
                <input
                  className="signup-pwd-input"
                  type="text"
                  placeholder="대소문자 영문,숫자,특수문자 포함 필수 6~12자"
                />
              </div>
              <div className="input-container">
                <div className="phone-number">휴대폰</div>
                <div className="phone-number-input-wrapper">
                  <input type="text" className="phone-number-input1" />
                </div>
              </div>
              <div className="input-container">
                <div className="date">생년원일</div>
                <div className="date-input-wrapper">
                  <input type="date" className="date-input" />
                  <p className="radio">
                    <input type="radio" className="solar-date" />
                    <label className="is-solar">양력</label>
                  </p>
                  <p className="radio">
                    <input type="radio" className="lunar-date" />
                    <label className="is-lunar">음력</label>
                  </p>
                </div>
              </div>
              <div className="button-wrapper">
                <button className="submit-button">회원가입 완료</button>
                <button className="delete-button">취소</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
