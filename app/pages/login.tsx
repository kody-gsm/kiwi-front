import React, { useState } from "react";
import axios from "axios";
import Router from "next/router";
import * as S from "../stylesheets/loginstyle";
import "../stylesheets/divstyle.css";

function Login() {
  const [inputValue, setInputValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  const isButtonDisabled = inputValue.length === 0 || passwordValue.length === 0;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (isButtonDisabled) return;

    const formData = new URLSearchParams();
    formData.append("email", inputValue);
    formData.append("password", passwordValue);

    try {
      const response = await axios.post(
        "https://4fba-210-218-52-13.ngrok-free.app/login",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.status === 200) {
        window.location.replace('/check');
      }
    } catch (error: any) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data);
        alert(error.response.data);
      } else {
        console.error("Error:에러", error);
      }
    }
  };

  return (
    <>
      <S.Logindiv>
        <S.Logo src={"/kiwi.png"} alt="logo" />
        <S.LoginText>로그인</S.LoginText>
        <form method="post" onSubmit={handleSubmit}>
          <S.LabelText>이메일</S.LabelText>
          <S.InputContainer>
            <S.IconWrapper>
              <S.Peopleicon size={20} />
            </S.IconWrapper>
            <S.StyledInput
              id="email"
              minLength={6}
              maxLength={6}
              value={inputValue}
              onChange={handleEmailChange}
              required
            />
            <S.Domain>@gsm.hs.kr</S.Domain>
          </S.InputContainer>

          <S.LabelText>비밀번호</S.LabelText>
          <S.InputContainer>
            <S.IconWrapper>
              <S.Lockicon size={20} />
            </S.IconWrapper>
            <S.StyledInput
              id="password"
              type="password"
              minLength={4}
              maxLength={31}
              placeholder="비밀번호"
              value={passwordValue}
              onChange={handlePasswordChange}
              required
            />
          </S.InputContainer>

          <S.Pwfind href={"/passwordfind"}>비밀번호 찾기</S.Pwfind>
          <S.LoginButton type="submit" disabled={isButtonDisabled}>로그인</S.LoginButton>
          <>
            <S.kiwisign>Kiwi를 처음 사용하시는 유저들은?</S.kiwisign>
            <S.Linkitem href={"/signup"}>회원가입</S.Linkitem>
          </>
        </form>
      </S.Logindiv>
      <S.Logingreen>
        <S.AdText>학교 출석 관리 서비스</S.AdText>
        <S.AdTextKiwi>Kiwi</S.AdTextKiwi>
        <S.AdTextSmall>로그인 하여 Kiwi를 사용해 보세요</S.AdTextSmall>
        <S.LoginImg src={"/LoginImg.png"} alt="로그인 이미지" />
      </S.Logingreen>
    </>
  );
}

export default Login;
