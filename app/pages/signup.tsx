import React, { useState } from "react";
import * as S from "../stylesheets/signstyle";
import "../stylesheets/divstyle.css";
import Back from "../component/Back";
import axios from "axios";
import Router from "next/router";

function Signup() {
  const [emailFocused, setEmailFocused] = useState(false);
  const [psFocused, setPsFocused] = useState(false);
  const [psreFocused, setPsReFocused] = useState(false);
  const [idFocused, setIdFocused] = useState(false);
  const [nameFocused, setNameFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordrepeatValue, setPasswordRepeatValue] = useState("");
  const [idValue, setIdValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [gender, setGender] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [manButtonClicked, setManButtonClicked] = useState(false);
  const [womanButtonClicked, setWomanButtonClicked] = useState(false);

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

  const handlePassworReFocus = () => {
    setPsReFocused(true);
  };

  const handlePasswordReBlur = () => {
    setPsReFocused(false);
  };

  const handleIdFocus = () => {
    setIdFocused(true);
  };

  const handleIdBlur = () => {
    setIdFocused(false);
  };

  const handleNameFocus = () => {
    setNameFocused(true);
  };

  const handleNameBlur = () => {
    setNameFocused(false);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  const handlePasswordReChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordRepeatValue(e.target.value);
  };

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdValue(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
  };

  const handleManButtonClick = () => {
    setManButtonClicked(!manButtonClicked);
    setWomanButtonClicked(false);
    setGender("Man");
  };

  const handleWomanButtonClick = () => {
    setWomanButtonClicked(!womanButtonClicked);
    setManButtonClicked(false);
    setGender("Woman");
  };

  const isButtonDisabled =
    inputValue.length === 0 ||
    passwordValue.length === 0 ||
    idValue.length === 0 ||
    nameValue.length === 0 ||
    gender.length === 0;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (isButtonDisabled) return;

    const dto = {
      email: inputValue,
      password: passwordValue,
      id: idValue,
      username: nameValue,
      gender: gender,
    };

    try {
      const response = await axios.post(
        "https://8cb7-210-218-52-13.ngrok-free.app/sign-up",
        dto,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        Router.push("/");
      }
    } catch (error: any) {
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
              <S.Peopleicon isFocused={emailFocused} size={20} />
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
            <S.Domain isFocused={emailFocused} inputValue={inputValue}>
              @gsm.hs.kr
            </S.Domain>
          </S.InputContainer>

          <S.InputContainer isFocused={psFocused}>
            <S.IconWrapper>
              <S.Lockicon isFocused={psFocused} size={20} />
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

          <S.InputContainer isFocused={psreFocused}>
            <S.IconWrapper>
              <S.Lockicon isFocused={psreFocused} size={20} />
            </S.IconWrapper>

            <S.StyledInput
              isFocused={psreFocused}
              type="password"
              minLength={4}
              maxLength={31}
              placeholder="비밀번호 확인"
              required
              onFocus={handlePassworReFocus}
              onBlur={handlePasswordReBlur}
              onChange={handlePasswordReChange}
            />
          </S.InputContainer>

          <S.InputContainerId isFocused={idFocused}>
            <S.IconWrapper>
              <S.Idicon isFocused={idFocused} size={20} />
            </S.IconWrapper>

            <S.StyledInput
              isFocused={idFocused}
              onChange={handleIdChange}
              onFocus={handleIdFocus}
              onBlur={handleIdBlur}
              required
              placeholder="학번"
            />
          </S.InputContainerId>

          <S.InputContainerName isFocused={nameFocused}>
            <S.IconWrapper>
              <S.Nameicon isFocused={nameFocused} size={20} />
            </S.IconWrapper>

            <S.StyledInput
              isFocused={nameFocused}
              onChange={handleNameChange}
              onFocus={handleNameFocus}
              onBlur={handleNameBlur}
              required
              placeholder="이름"
            />
          </S.InputContainerName>

          <S.Manbutton
            isFocused={manButtonClicked}
            onClick={handleManButtonClick}
          >
            남성
          </S.Manbutton>

          <S.Womanbutton
            isFocused={womanButtonClicked}
            onClick={handleWomanButtonClick}
          >
            여성
          </S.Womanbutton>

          <S.LoginButton type="submit" disabled={isButtonDisabled}>
            회원가입
          </S.LoginButton>
          <div>
            <S.kiwilogin>Kiwi를 이미 사용하시는 유저들은?</S.kiwilogin>
            <S.Linkitem href={"/"}>로그인</S.Linkitem>
          </div>
        </form>
      </S.Logindiv>
      <Back />
    </div>
  );
}

export default Signup;
