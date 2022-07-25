import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import facebookIcon from '..//../asset/images/facebook.png';
import kakaoIcon from '..//../asset/images/kakao.png';
import naverIcon from '..//../asset/images/naver.png';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate('/signup');
  };

  const goToMain = () => {
    fetch('http://10.58.0.190:8000/users/login', {
      method: 'post',
      body: JSON.stringify({
        email: 'jhlee7069@naver.com',
        password: 'Abcd1234!',
      }),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      });
  };

  const [email, setEmail] = useState('');
  const [password, setPwd] = useState('');

  const handleInputEmail = e => {
    setEmail(e.target.value);
  };

  const handleInputPwd = e => {
    setPwd(e.target.value);
  };

  const test = () => {
    return email.includes('@') && pwdRegEx.test(password);
  };

  const pwdRegEx =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,12}$/;

  const a = pwdRegEx.test(password);

  const loginConfirm = e => {
    e.preventDefault();
    console.log('a', a);
    if (email.length === 0) {
      window.alert('아이디가 공백입니다');
    } else if (password.length === 0) {
      window.alert('비밀번호가 공백입니다');
    } else if (a === true) {
      navigate('/');
    } else if (a !== true) {
      window.alert('아이디나 비밀번호 양식이 맞지 않습니다.');
    }
  };

  return (
    <div>
      <div className="Login-container">
        <h2 className="Login-title">LOGIN</h2>
        <div className="login-input">
          <input
            className="id-input"
            type="text"
            placeholder="이메일을 입력하세요"
            onChange={handleInputEmail}
            value={email}
          />
          <input
            className="pwd-input"
            type="password"
            placeholder="비밀번호를 입력하세요"
            onChange={handleInputPwd}
            value={password}
          />
          <button className="login-btn" onClick={goToMain}>
            LOGIN
          </button>
          <p class="bottom-check">
            <span className="id-checkbox">
              <input type="checkbox" id="save" />
              <span className="id-save">이메일 저장</span>
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
