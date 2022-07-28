import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import './Login.scss';
import '../../styles/common.scss';

const Login = () => {
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate('/signup');
  };

  const [loiginInputValue, setLoginInputValue] = useState({
    email: '',
    password: '',
  });

  const { email, password } = loiginInputValue;

  const handleLoginInput = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setLoginInputValue({ ...loiginInputValue, [name]: value });
  };

  const pwdRegEx =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,12}$/;

  const regEx = pwdRegEx.test(password);

  const loginFunction = e => {
    e.preventDefault();

    if (email.length === 0) {
      window.alert('아이디가 공백입니다');
    } else if (password.length === 0) {
      window.alert('비밀번호가 공백입니다');
    } else if (!email.includes('@') || !email.includes('.com')) {
      window.alert('아이디 양식이 맞지 않습니다.');
    } else if (regEx !== true) {
      window.alert('비밀번호 양식이 맞지 않습니다.');
    } else {
      fetch('http://10.58.7.204:8000/users/login', {
        method: 'post',
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.USER_NAME) {
            localStorage.setItem('jwt', res.TOKEN);
            navigate('/');
          }
        });
    }
  };

  return (
    <div>
      <form className="login-container">
        <h2 className="login-title">LOGIN</h2>
        <div className="login-input">
          <input
            className="id-input"
            type="text"
            placeholder="이메일을 입력하세요"
            onChange={handleLoginInput}
            name="email"
            value={email}
          />
          <input
            className="pwd-input"
            type="password"
            placeholder="비밀번호를 입력하세요"
            onChange={handleLoginInput}
            name="password"
            value={password}
          />
          <button className="login-btn" onClick={loginFunction} type="button">
            LOGIN
          </button>
          <p className="bottom-check">
            <span className="id-checkbox">
              <input type="checkbox" id="save" />
              <span className="email-save">이메일 저장</span>
            </span>
            <span className="find-account-link">| 이메일 / 비밀번호 찾기 </span>
            <span className="register-link" onClick={goToSignUp}>
              | 회원가입
            </span>
          </p>
          <div className="sns-login">
            <h3>SNS 로그인</h3>
            <ul>
              <li>
                <div className="icons">
                  <img
                    className="facebook"
                    src="\images\Login\facebook.png"
                    alt="facebook"
                  />

                  <img
                    className="kakao"
                    src="\images\Login\kakao.png"
                    alt="kakao"
                  />

                  <img
                    className="naver"
                    src="\images\Login\naver.png"
                    alt="naver"
                  />
                </div>
              </li>
            </ul>
            <p className="non-members">비회원 주문배송 조회</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
