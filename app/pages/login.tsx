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
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  const isButtonDisabled =
    inputValue.length === 0 ||
    passwordValue.length === 0;

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    if (isButtonDisabled) return;

    const dto = {
      email: inputValue,
      password: passwordValue,
    };

    try {
      const response = await axios.post(
        "https://8cb7-210-218-52-13.ngrok-free.app/login",
        dto,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        Router.push("/check");
      }
    } catch (error : any) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data);
        alert(error.response.data);
      } else {
        console.error("Error:", error);
      }
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
              id="email"
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
              id="password"
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
