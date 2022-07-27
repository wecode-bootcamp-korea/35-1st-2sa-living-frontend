import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import facebookIcon from '..//../asset/images/facebook.png';
import kakaoIcon from '..//../asset/images/kakao.png';
import naverIcon from '..//../asset/images/naver.png';
import './Login.scss';
import '../../styles/common.scss';

const Login = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    fetch('http://10.58.7.204:8000/users/login', {
      method: 'post',
      body: JSON.stringify({
        email: 'ukhwa1@hotmail.com',
        password: '!Asdf1234',
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.USER_NAME) {
          localStorage.setItem('jwt', res.TOKEN);
          navigate('/');
        }
      });
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

  const loginConfirm = e => {
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
      navigate('/');
    }
  };

  return (
    <div>
      <div className="login-container">
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
          <button className="login-btn" onClick={goToMain}>
            LOGIN
          </button>
          <p className="bottom-check">
            <span className="id-checkbox">
              <input type="checkbox" id="save" />
              <span className="email-save">이메일 저장</span>
            </span>
            <span className="find-account-link">| 이메일 / 비밀번호 찾기 </span>
            <span className="register-link">| 회원가입</span>
          </p>
          <div className="sns-login">
            <h3>SNS 로그인</h3>
            <ul>
              <li>
                <div className="icon">
                  <img className="facebook" src={facebookIcon} alt="facebook" />

                  <img className="kakao" src={kakaoIcon} alt="kakao" />

                  <img className="naver" src={naverIcon} alt="naver" />
                </div>
              </li>
            </ul>
            <p className="non-members">
              <a href="">비회원 주문배송 조회</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
