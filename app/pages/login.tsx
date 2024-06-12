import React, { useState } from "react";
import axios from "axios";
import Router from "next/router";
import * as S from "../stylesheets/loginstyle";
import "../stylesheets/divstyle.css";
import Back from "../component/Back";

function Login() {
  const [emailFocused, setEmailFocused] = useState(false);
  const [psFocused, setPsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

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

  const handleEmailChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPasswordValue(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://b608-210-218-52-13.ngrok-free.app/login", {
        email: `${inputValue}@gsm.hs.kr`,
        password: passwordValue,
      });
      if (response.status === 200) {
        Router.push('/dashboard');
      }
    } catch (error) {
      console.error("Error!", error);
    }
  };

  return (
    <div>
      <S.Logingreen />
      <S.Logindiv>
        <S.Logo src={"/kiwi.png"} alt="logo" />
        <form method="post" onSubmit={handleSubmit}>
          <S.InputContainer isFocused={emailFocused}>
            <S.IconWrapper>
              <S.Peopleicon size={20} isFocused={emailFocused} />
            </S.IconWrapper>
            <S.StyledInput
              isFocused={emailFocused}
              minLength={6}
              maxLength={6}
              required
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
              onChange={handleEmailChange}
            />
            <S.Domain isFocused={emailFocused} inputValue={inputValue}>@gsm.hs.kr</S.Domain>
          </S.InputContainer>

          <S.InputContainer isFocused={psFocused}>
            <S.IconWrapper>
              <S.Lockicon size={20} isFocused={psFocused} />
            </S.IconWrapper>
            <S.StyledInput
              isFocused={psFocused}
              type="password"
              minLength={4}
              maxLength={31}
              placeholder="비밀번호"
              required
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
              onChange={handlePasswordChange}
            />
 
          </S.InputContainer>

          <S.Pwfind href={"/passwordfind"}>비밀번호 찾기</S.Pwfind>
          <S.LoginButton type="submit">로그인</S.LoginButton>
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
