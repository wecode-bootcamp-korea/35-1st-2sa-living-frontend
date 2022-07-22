import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.scss';
import '../../styles/common.scss';
import arrow from '..//../asset/images/btn_arrow.png';

const SignUp = () => {
  //   const [values, setValues] = useState('');
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const [birthDate, setBirthDate] = useState('');

  const navigate = useNavigate();

  // const goToLogin = () => {
  //   navigate('/login');
  // };

  // const handleInputFirstName = e => {
  //   setFirstName(e.target.value);
  //   console.log(e.target.value);
  // };

  // const handleInputLastName = e => {
  //   setLastName(e.target.value);
  // };
  // const handleInputEmail = e => {
  //   setEmail(e.target.value);
  // };

  // const handleInputPwd = e => {
  //   setPassword(e.target.value);
  // };
  // const handleInputPhoneNumber = e => {
  //   setPhoneNumber(e.target.value);
  // };
  // const handleInputBirthDate = e => {
  //   setBirthDate(e.target.value);
  //   console.log(e.target.value);
  // };

  const goToLogin = () => {
    fetch('http://10.58.1.63:8000/users/signup', {
      method: 'post',
      body: JSON.stringify({
        first_name: 'hyejin',
        last_name: 'lee',
        email: 'jhlee7069@naver.com',
        password: 'abcd1234!',
        phone_number: '010-1234-1234',
        birthdate: '2011-02-22',
      }),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      });
  };

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
    e.preventDefault(); // 아무 동작 안하고 버튼만 눌러도 리프레쉬 되는 것을 막는다

    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
    console.log(e.target.lastName);
  };

  const firstNameRegEx = /^[가-힣]{1,4}$/; // 한글만 입력받는 정규표현식
  const lastNameRegEx = /^[가-힣]{1,6}$/;
  const emailRegEx = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const passwordRegEx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,12}/;
  const phoneNumberRegEx = /^\d{3}-\d{3,4}-\d{4}$/;
  const birthDateRegEx = /^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|3[01])$/;
  // /^20((09-01-(([0-1][0-9])))|(22-12-(([0-1][0-9])|([2][0-9]))))$/;
  //const birthDateLimit = '2008-01-01';

  const isInputFirstnameValid = firstNameRegEx.test(firstName);
  const isInputLastnameValid = lastNameRegEx.test(lastName);
  const isInputEmailValid = emailRegEx.test(email);
  const isInputPasswordValid = passwordRegEx.test(password);
  const isInputPhoneNumberValid = phoneNumberRegEx.test(phoneNumber);
  const isInputBirthDateValid = birthDateRegEx.test(birthDate);

  return (
    <div>
      <div className="container">
        <h2>SIGN UP</h2>
        <div className="wrapper">
          <div className="form">
            <div className="check-agreement">
              <h3>약관동의</h3>
              <ul>
                <li>
                  <input type="checkbox" className="terms" />
                  <label for="agreement">이용약관에 동의합니다</label>

                  <img src={arrow} />
                  <a href="https://www.casa.co.kr/member/terms.aspx">
                    전체 보기
                  </a>
                </li>
                <li>
                  <input type="checkbox" className="terms" />
                  <label for="agreement">
                    개인정보 취급 방침에 동의합니다.
                  </label>
                  <img src={arrow} />
                  <a href="https://www.casa.co.kr/member/terms.aspx">
                    전체 보기
                  </a>
                </li>
                <li>
                  <input type="checkbox" className="terms" />
                  <label for="agreement">본인은 만 14세 이상입니다.</label>
                </li>
                <li>
                  <input type="checkbox" className="terms" />
                  <label for="agreement">문자 수신에 동의합니다.</label>
                </li>
                <li>
                  <input type="checkbox" className="terms" />
                  <label for="agreement">이메일 수신에 동의합니다.</label>
                </li>
                <li>
                  <input type="checkbox" className="terms" />
                  <label for="agreement">
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
                {/* <div className="firstname-input-wrapper"> */}
                <input
                  className="firstname-input"
                  type="text"
                  placeholder="성을 입력해주세요"
                  onChange={handleInput}
                  name="firstName"
                />
                {/* </div> */}
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
                  type="text"
                  placeholder="대소문자 영문,숫자,특수문자 포함 필수 6~12자"
                  onChange={handleInput}
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
                    name="birthDate"
                  />
                  {/*{!isInputBirthDateValid && birthDate ? (
                    <div className="birthDate-alert">
                      2008년생부터 가입 가능합니다
                    </div>
                  ) : null}*/}
                  {/*{birthDate === birthDateLimit ? (
                    <div className="birthDate-alert">
                      2008년생부터 가입 가능합니다
                    </div>
                  ) : null}*/}
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
                <button className="delete-button">취소</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
