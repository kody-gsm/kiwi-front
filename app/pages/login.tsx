import React, { useState } from "react";
import * as S from "../stylesheets/loginstyle";
import "../stylesheets/divstyle.css";
import Back from "../component/Back";

function Login() {
  const [emailFocused, setEmailFocused] = useState(false);
  const [psFocused, setPsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleEmailFocus = () => {
    setEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setEmailFocused(false);
  };

  const handlePasswordFocus = () => {
    setPsFocused(true);
  };

  const handlePasswordBlur = () => {
    setPsFocused(false);
  };

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <S.Logingreen />
      <S.Logindiv>
        <S.Logo src={"/kiwi.png"} alt="logo" />
        <form method="post">
          <S.InputContainer isFocused={emailFocused}>
            <S.IconWrapper>
              <S.Peopleicon size={20} isFocused={emailFocused} />
            </S.IconWrapper>
            <S.StyledInput
              minLength={6}
              maxLength={6}
              required
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
              onChange={handleChange}
            />
            <S.Domain isFocused={emailFocused} inputValue={inputValue}>@gsm.hs.kr</S.Domain>
          </S.InputContainer>

          <S.InputContainer isFocused={psFocused}>
            <S.IconWrapper>
              <S.Lockicon size={20} isFocused={psFocused} />
            </S.IconWrapper>
            <S.StyledInput
              type="password"
              minLength={4}
              maxLength={31}
              placeholder="비밀번호"
              required
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
            />
          </S.InputContainer>

          <S.Pwfind>비밀번호 찾기</S.Pwfind>
          <S.LoginButton>로그인</S.LoginButton>
          <div>
            <S.kiwisign>Kiwi를 처음 사용하시는 유저들은?</S.kiwisign>
            <S.Linkitem href={"/signup"}>회원가입</S.Linkitem>
          </div>
        </form>
      </S.Logindiv>
      <Back />
    </div>
  );
}

export default Login;
