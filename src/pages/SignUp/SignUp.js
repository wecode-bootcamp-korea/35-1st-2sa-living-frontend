import { useState } from 'react';
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
    fetch('http://10.58.1.126:8000/users/signup', {
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
        navigate('/login');
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
  const { firstName, lastName, email, password, phoneNumber } = inputValues;

  const handleInput = e => {
    e.preventDefault();

    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const firstNameRegEx = /^[가-힣]{1,4}$/;
  const lastNameRegEx = /^[가-힣]{1,6}$/;
  const emailRegEx = /^[a-zA-Z0-9+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const passwordRegEx =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,12}$/;
  const phoneNumberRegEx = /^\d{3}-\d{3,4}-\d{4}$/;

  const isInputFirstnameValid = firstNameRegEx.test(firstName);
  const isInputLastnameValid = lastNameRegEx.test(lastName);
  const isInputEmailValid = emailRegEx.test(email);
  const isInputPasswordValid = passwordRegEx.test(password);
  const isInputPhoneNumberValid = phoneNumberRegEx.test(phoneNumber);

  const checkBoxDatas = [
    {
      id: 1,
      content: '이용약관에 동의합니다',
      must: '[필수]',
      viewAll: (
        <a href="https://www.casa.co.kr/member/terms.aspx">
          <img src={arrow} alt="arrow" />
          전체 보기
        </a>
      ),
    },
    {
      id: 2,
      content: '개인정보 취급 방침에 동의합니다.',
      must: '[필수]',
      viewAll: (
        <a href="https://www.casa.co.kr/member/terms.aspx">
          <img src={arrow} alt="arrow" />
          전체 보기
        </a>
      ),
    },
    {
      id: 3,
      content: '본인은 만 14세 이상입니다.',
      must: false,
      viewAll: false,
    },
    { id: 4, content: '문자 수신에 동의합니다.', must: false, viewAll: false },
    {
      id: 5,
      content: '이메일 수신에 동의합니다.',
      must: false,
      viewAll: false,
    },
  ];
  // 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState([]);

  // 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems(prev => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter(el => el !== id));
    }
  };
  // 체크박스 전체 선택
  const handleAllCheck = checked => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      checkBoxDatas.forEach(el => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  };

  const agreement = () => {
    const isValid = checkItems.filter(data => data === 1 || data === 2);
    if (isValid.length === 0) {
      alert('필수사항을 확인해주세요');
    } else {
      alert('통과');
    }
  };

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
                  {checkBoxDatas?.map((checkBoxDatas, index) => (
                    <div key={index}>
                      <input
                        type="checkbox"
                        className="terms"
                        name={`select-${checkBoxDatas.id}`}
                        onChange={e =>
                          handleSingleCheck(e.target.checked, checkBoxDatas.id)
                        }
                        checked={
                          checkItems.includes(checkBoxDatas.id) ? true : false
                        }
                      />
                      <span className="content">{checkBoxDatas.content}</span>
                      <span className="essential">{checkBoxDatas.must}</span>
                      {checkBoxDatas.viewAll}
                    </div>
                  ))}
                </li>
                <li>
                  <input
                    type="checkbox"
                    className="terms"
                    name="select-all"
                    onChange={e => handleAllCheck(e.target.checked)}
                    checked={
                      checkItems.length === checkBoxDatas.length ? true : false
                    }
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
                  type="password"
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
                  type="button"
                  onClick={goToLogin}
                  disabled={!isInputFirstnameValid}
                >
                  회원가입 완료
                </button>
                <button
                  className="delete-button"
                  type="button"
                  onClick={goToMain}
                >
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
