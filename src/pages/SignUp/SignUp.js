import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.scss';
import '../../styles/common.scss';

const SignUp = () => {
  const navigate = useNavigate();

  // const goToLogin = () => {
  //   navigate('/login');
  // };
  const goToLogin = () => {
    fetch('http://10.58.6.107:8000/users/signup', {
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

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const handleFirstName = e => {
    setFirstName(e.currentTarget.value);
  };

  const handleLastName = e => {
    setLastName(e.currentTarget.value);
  };

  const handleEmail = e => {
    setEmail(e.currentTarget.value);
  };

  const handlePassword = e => {
    setPassword(e.currentTarget.value);
  };

  const handlePhoneNumber = e => {
    setPhoneNumber(e.currentTarget.value);
  };

  const handleBirthDate = e => {
    setBirthDate(e.currentTarget.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    if (
      firstName === ' ' ||
      lastName === ' ' ||
      email === ' ' ||
      password === ' ' ||
      phoneNumber === ' ' ||
      birthDate === ' '
    ) {
      return alert('입력하지 않은 칸이 있습니다!');
    }

    if (firstName === ' ') {
      window.alert('성이 입력되지 않았습니다');
      return;
    }

    if (lastName === ' ') {
      window.alert('이름이 입력되지 않았습니다');
      return;
    }
    if (email === ' ') {
      window.alert('이메일 입력되지 않았습니다!');
      return;
    }
    if (password === ' ') {
      window.alert('비밀번호 입력되지 않았습니다!');
      return;
    }
  };

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
                    onChange={handleFirstName}
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
                    ohChange={handleLastName}
                  />
                </div>
              </div>
              <div className="input-container">
                <div className="signup-email">이메일</div>
                <div className="signup-email-input-wrapper">
                  <p className="input-wrap">
                    <input
                      type="text"
                      className="email-input1"
                      onChange={handleEmail}
                    />
                  </p>
                </div>
              </div>
              <div className="input-container">
                <div className="signup-pwd">비밀번호</div>
                <input
                  className="signup-pwd-input"
                  type="text"
                  placeholder="대소문자 영문,숫자,특수문자 포함 필수 6~12자"
                  onChange={handlePassword}
                />
              </div>
              <div className="input-container">
                <div className="phone-number">휴대폰</div>
                <div className="phone-number-input-wrapper">
                  <input
                    type="text"
                    className="phone-number-input1"
                    onChange={handlePhoneNumber}
                  />
                </div>
              </div>
              <div className="input-container">
                <div className="date">생년원일</div>
                <div className="date-input-wrapper">
                  <input
                    type="date"
                    className="date-input"
                    onChange={handleBirthDate}
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
                  onSubmit={onSubmit}
                  onClick={goToLogin}
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
