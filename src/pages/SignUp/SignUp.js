import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.scss';
import '../../styles/common.scss';
import arrow from '..//../asset/images/btn_arrow.png';

const SignUp = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };
  const goToLogin = () => {
    navigate('/login');
  };

  /*const goToLogin = () => {
    fetch('http://10.58.0.190:8000/users/signup', {
      method: 'post',
      body: JSON.stringify({
        first_name: '혜진',
        last_name: '이',
        email: 'jhlee7069@naver.com',
        password: 'Abcd1234!',
        phone_number: '010-1234-1234',
        birthdate: '2011-02-22',
      }),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      });
  };*/

  const [inputValues, setInputValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    birthDate: '',
  });
  const { firstName, lastName, email, password, phoneNumber, birthDate } =
    inputValues;

  const handleInput = e => {
    e.preventDefault();

    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const firstNameRegEx = /^[가-힣]{1,4}$/;
  const lastNameRegEx = /^[가-힣]{1,6}$/;
  const emailRegEx = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const passwordRegEx =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,12}$/;
  const phoneNumberRegEx = /^\d{3}-\d{3,4}-\d{4}$/;
  const birthDateRegEx = /^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|3[01])$/;

  const isInputFirstnameValid = firstNameRegEx.test(firstName);
  const isInputLastnameValid = lastNameRegEx.test(lastName);
  const isInputEmailValid = emailRegEx.test(email);
  const isInputPasswordValid = passwordRegEx.test(password);
  const isInputPhoneNumberValid = phoneNumberRegEx.test(phoneNumber);
  const isInputBirthDateValid = birthDateRegEx.test(birthDate);

  const [agreementCheck, setAgreementCheck] = useState(false);
  const [privacyCheck, setPrivacyCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [messageCheck, setMessageCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [allCheck, setAllCheck] = useState(false);
  const [disable, setDisable] = useState(false);

  const allBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setAgreementCheck(true);
      setPrivacyCheck(true);
      setAgeCheck(true);
      setMessageCheck(true);
      setEmailCheck(true);
    } else {
      setAllCheck(false);
      setAgreementCheck(false);
      setPrivacyCheck(false);
      setAgeCheck(false);
      setMessageCheck(false);
      setEmailCheck(false);
    }
  };

  const agreementBtnEvent = () => {
    if (agreementCheck === false) {
      setAgreementCheck(true);
    } else {
      setAgreementCheck(false);
    }
  };

  const privacyBtnEvent = () => {
    if (privacyCheck === false) {
      setPrivacyCheck(true);
    } else {
      setPrivacyCheck(false);
    }
  };

  const ageCheckBtnEvent = () => {
    if (ageCheck === false) {
      setAgeCheck(true);
    } else {
      setAgeCheck(false);
    }
  };

  const messageCheckBtnEvent = () => {
    if (messageCheck === false) {
      setMessageCheck(true);
    } else {
      setMessageCheck(false);
    }
  };

  const emailCheckBtnEvent = () => {
    if (emailCheck === false) {
      setEmailCheck(true);
    } else {
      setEmailCheck(false);
    }
  };

  useEffect(() => {
    if (
      agreementCheck === true &&
      privacyCheck === true &&
      ageCheck === true &&
      messageCheck === true &&
      emailCheck === true
    ) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [agreementCheck, privacyCheck, ageCheck, messageCheck, emailCheck]);

  const agreement = () => {
    if (!isValid) {
      window.alert('필수 약관에 동의하셔야 합니다');
      setDisable(true);
    } else {
      setDisable(false);
    }
  };
  const isValid = agreementCheck && privacyCheck;

  return (
    <div className="Login">
      <div className="container">
        <h2>SIGN UP</h2>
        <div className="wrapper">
          <div className="form">
            <div className="check-agreement">
              <h3>약관동의</h3>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    className="terms"
                    checked={agreementCheck}
                    onChange={agreementBtnEvent}
                  />
                  <label for="agreement">
                    이용약관에 동의합니다
                    <span className="essential">[필수]</span>
                  </label>

                  <img src={arrow} />
                  <a href="https://www.casa.co.kr/member/terms.aspx">
                    전체 보기
                  </a>
                </li>
                <li>
                  <input
                    type="checkbox"
                    className="terms"
                    checked={privacyCheck}
                    onChange={privacyBtnEvent}
                  />
                  <label for="agreement">
                    개인정보 취급 방침에 동의합니다.
                    <span className="essential">[필수]</span>
                  </label>
                  <img src={arrow} />
                  <a href="https://www.casa.co.kr/member/terms.aspx">
                    전체 보기
                  </a>
                </li>
                <li>
                  <input
                    type="checkbox"
                    className="terms"
                    checked={ageCheck}
                    onChange={ageCheckBtnEvent}
                  />
                  <label for="agreement">본인은 만 14세 이상입니다.</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    className="terms"
                    checked={messageCheck}
                    onChange={messageCheckBtnEvent}
                  />
                  <label for="agreement">문자 수신에 동의합니다.</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    className="terms"
                    checked={emailCheck}
                    onChange={emailCheckBtnEvent}
                  />
                  <label for="agreement">이메일 수신에 동의합니다.</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    className="terms"
                    checked={allCheck}
                    onChange={allBtnEvent}
                  />
                  <label for="agreement">
                    이용 약관, 개인정보취급방침, 문자, 이메일 수신에 모두
                    동의합니다.
                  </label>
                </li>
              </ul>
            </div>
            <form className="info-container">
              <h3>회원 정보 입력</h3>
              <div className="input-wrapper" />

              <div className="input-container">
                <div className="firstname">성</div>

                <input
                  className="firstname-input"
                  type="text"
                  placeholder="성을 입력해주세요"
                  onChange={handleInput}
                  onClick={agreement}
                  name="firstName"
                  disabled={disable}
                />
              </div>
              {!isInputFirstnameValid && firstName ? (
                <p className="firstname-alert">
                  정확한 '성'을 재입력 해주세요(최대 4자)
                </p>
              ) : null}

              <div className="input-container">
                <div className="lastname">이름</div>
                <div className="lastname-input-wrapper">
                  <input
                    className="lastname-input"
                    type="text"
                    placeholder="이름을 입력해주세요"
                    onChange={handleInput}
                    onClick={agreement}
                    name="lastName"
                  />
                </div>
              </div>
              {!isInputLastnameValid && lastName ? (
                <div className="lastname-alert">
                  정확한 '이름'을 재입력 해주세요(최대 4자)
                </div>
              ) : null}
              <div className="input-container">
                <div className="signup-email">이메일</div>
                <div className="signup-email-input-wrapper">
                  <p className="input-wrap">
                    <input
                      type="text"
                      className="email-input1"
                      placeholder="@을 포함해서 입력해주세요"
                      onChange={handleInput}
                      onClick={agreement}
                      name="email"
                    />
                  </p>
                </div>
              </div>
              {!isInputEmailValid && email ? (
                <div className="email-alert">
                  사용 가능한 이메일 형식이 아닙니다
                </div>
              ) : null}
              <div className="input-container">
                <div className="signup-pwd">비밀번호</div>
                <input
                  className="signup-pwd-input"
                  type="password"
                  placeholder="대소문자 영문,숫자,특수문자 포함 필수 6~12자"
                  onChange={handleInput}
                  onClick={agreement}
                  name="password"
                />
              </div>
              {!isInputPasswordValid && password ? (
                <div className="password-alert">
                  비밀번호 형식에 맞지 않습니다.
                </div>
              ) : null}
              <div className="input-container">
                <div className="phone-number">휴대폰</div>
                <div className="phone-number-input-wrapper">
                  <input
                    type="text"
                    className="phone-number-input1"
                    placeholder="- 을 포함해서 입력해주세요"
                    onChange={handleInput}
                    onClick={agreement}
                    name="phoneNumber"
                  />
                </div>
              </div>
              {!isInputPhoneNumberValid && phoneNumber ? (
                <div className="phonenumber-alert">
                  휴대폰 번호 형식에 맞지 않습니다.
                </div>
              ) : null}
              <div className="input-container">
                <div className="date">생년원일</div>
                <div className="date-input-wrapper">
                  <input
                    type="date"
                    className="date-input"
                    onChange={handleInput}
                    onClick={agreement}
                    name="birthDate"
                    disabled={disable ? true : false}
                  />
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
                <button
                  className="submit-button"
                  onClick={goToLogin}
                  disabled={!isInputFirstnameValid}
                >
                  회원가입 완료
                </button>
                <button className="delete-button" onClick={goToMain}>
                  취소
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
