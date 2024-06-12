import React, { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";
import * as S from "../stylesheets/signstyle";
import "../stylesheets/divstyle.css";
import Back from "../component/Back";
import axios from "axios";
import Router from "next/router";

function Signup() {
  const [emailFocused, setEmailFocused] = useState(false);
  const [psFocused, setPsFocused] = useState(false);
  const [idFocused, setIdFocused] = useState(false);
  const [nameFocused, setNameFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [idValue, setIdValue] = useState("");
  const [nameValue, setNameValue] = useState("");

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

  const handleEmailChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPasswordValue(e.target.value);
  };

  const handleIdChange = (e: any) => {
    setIdValue(e.target.value);
  };

  const handleNameChange = (e: any) => {
    setNameValue(e.target.value);
  };

  const isButtonDisabled =
    inputValue.length === 0 ||
    passwordValue.length === 0 ||
    idValue.length === 0 ||
    nameValue.length === 0;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (isButtonDisabled) return;

    const dto = {
      email: inputValue,
      password: passwordValue,
      id: idValue,
      username: nameValue,
    };

    try {
      const response = await axios.post(
        "https://1a0f-210-218-52-13.ngrok-free.app/sign-up",
        dto,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        Router.push("/signpersonal");
      }
    } catch (error) {
      console.error("Error:", error);
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
