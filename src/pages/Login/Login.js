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

  // const goToMain = () => {
  //   navigate('/main');
  // };

  const goToMain = () => {
    fetch('http://10.58.6.107:8000/users/login', {
      method: 'post',
      body: JSON.stringify({
        email: 'jhlee7069@naver.com',
        password: 'abcd1234!',
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.USER_NAME) {
          localStorage.setItem('jwt', res.TOKEN);
          navigate('/main');
        }
      });
  };

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const handleInputEmail = e => {
    setEmail(e.target.value);
  };

  const handleInputPwd = e => {
    setPwd(e.target.value);
  };

  const test = () => {
    return email.includes('@') && pwdRegEx.test(pwd);
  };

  const pwdRegEx =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,12}$/;

  const a = pwdRegEx.test(pwd);
  console.log(a);

  return (
    <div>
      <section className="Login-container">
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
            type="text"
            placeholder="비밀번호를 입력하세요"
            onChange={handleInputPwd}
            value={pwd}
          />
          <button className="login-btn" onClick={goToMain} disabled={!a}>
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
                  <a href="https://www.facebook.com/v2.7/dialog/oauth?app_id=236396800509823&cbt=1658155681183&channel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1bea7564fe569c%26domain%3Dwww.casa.co.kr%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.casa.co.kr%252Ff2aac793661a9c4%26relation%3Dopener&client_id=236396800509823&display=popup&domain=www.casa.co.kr&e2e=%7B%7D&fallback_redirect_uri=https%3A%2F%2Fwww.casa.co.kr%2Fmember%2Flogin.aspx%3FreturnUrl%3Dhttps%253a%252f%252fwww.casa.co.kr%252fdefault.aspx%23&locale=en_US&logger_id=f425920d07af68&origin=1&redirect_uri=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df3b25e03ebd0708%26domain%3Dwww.casa.co.kr%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.casa.co.kr%252Ff2aac793661a9c4%26relation%3Dopener%26frame%3Df22f8a769805aec&response_type=token%2Csigned_request%2Cgraph_domain&sdk=joey&version=v2.7">
                    <img
                      className="facebook"
                      src={facebookIcon}
                      alt="facebook"
                    />
                  </a>
                  <a href="https://accounts.kakao.com/login?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fproxy%3DeasyXDM_Kakao_xb3004s76bn_provider%26ka%3Dsdk%252F1.43.0%2520os%252Fjavascript%2520sdk_type%252Fjavascript%2520lang%252Fko-KR%2520device%252FWin32%2520origin%252Fhttps%25253A%25252F%25252Fwww.casa.co.kr%26origin%3Dhttps%253A%252F%252Fwww.casa.co.kr%26response_type%3Dcode%26redirect_uri%3Dkakaojs%26state%3Do7tfqtdusn3du7pwwz7w9%26client_id%3D5ba55e6f73abf8d48753af980f3469c4&talk_login=hidden">
                    <img className="kakao" src={kakaoIcon} alt="kakao" />
                  </a>
                  <a href="https://nid.naver.com/nidlogin.login?oauth_token=ccE8nO4gcuG8dm0E55&consumer_key=ZWXy581RTGwsb2kfK0h4&logintp=oauth2&nurl=https%3A%2F%2Fnid.naver.com%2Foauth2.0%2Fauthorize%3Fresponse_type%3Dtoken%26state%3D614d62f4-99b3-4352-bf32-a77e057f8f30%26client_id%3DZWXy581RTGwsb2kfK0h4%26redirect_uri%3Dhttps%253A%252F%252Fwww.casa.co.kr%252Fmember%252Fnaverlogin.aspx%26locale%3Dko_KR%26inapp_view%3D%26oauth_os%3D&locale=ko_KR&inapp_view=&svctype=1">
                    <img className="naver" src={naverIcon} alt="naver" />
                  </a>
                </div>
              </li>
            </ul>
            <p className="non-members">
              <a href="">비회원 주문배송 조회</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
