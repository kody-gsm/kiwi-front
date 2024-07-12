import React, { useState } from "react";
import axios from "axios";
import Router from "next/router";
import * as S from "../stylesheets/signstyle";
import "../stylesheets/divstyle.css";
import { apiInstance } from "../apis/api";

function Signup() {
  const [inputValue, setInputValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordCheckValue, setPasswordCheckValue] = useState("");
  const [idValue, setIdValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [genderValue, setGenderValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  const handlePasswordCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheckValue(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
  };

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdValue(e.target.value);
  };

  const handleGenderSelect = (gender: string) => {
    setGenderValue(gender);
  };

  const isButtonDisabled = inputValue.length === 0 || passwordValue.length === 0 || passwordValue !== passwordCheckValue || nameValue.length === 0 || idValue.length === 0 || genderValue.length === 0;

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    if (isButtonDisabled) return;

    const dto = {
      email: inputValue,
      password: passwordValue,
      passwordCheck: passwordCheckValue,
      username: nameValue,
      id: idValue,
      gender: genderValue,
    };

    try {
      const response = await apiInstance.post(
        "/sign-up",
        dto,
      );
      if (response.status === 201) {
        window.location.replace("/check");
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
    <>
      <S.Logindiv>
        <S.Logo src={"/kiwi.png"} alt="logo" />
        <S.LoginText>회원가입</S.LoginText>
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
              required
              value={inputValue}
              onChange={handleEmailChange}
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
              required
              value={passwordValue}
              onChange={handlePasswordChange}
            />
          </S.InputContainer>

          <S.LabelText>비밀번호 확인</S.LabelText>
          <S.InputContainer>
            <S.IconWrapper>
              <S.Lockicon size={20} />
            </S.IconWrapper>
            <S.StyledInput
              id="passwordCheck"
              type="password"
              minLength={4}
              maxLength={31}
              placeholder="비밀번호 확인"
              required
              value={passwordCheckValue}
              onChange={handlePasswordCheckChange}
            />
          </S.InputContainer>

          <S.LabelText>이름 & 학번</S.LabelText>
          <S.InlineInputContainer>
            <S.HalfWidthInputContainer>
              <S.IconWrapper>
                <S.Lockicon size={20} />
              </S.IconWrapper>
              <S.StyledInput
                id="username"
                minLength={2}
                maxLength={4}
                placeholder="이름"
                required
                value={nameValue}
                onChange={handleNameChange}
              />
            </S.HalfWidthInputContainer>
            <S.HalfWidthInputContainer>
              <S.IconWrapper>
                <S.Lockicon size={20} />
              </S.IconWrapper>
              <S.StyledInput
                id="id"
                minLength={4}
                maxLength={4}
                placeholder="학번 ex)1111"
                required
                value={idValue}
                onChange={handleIdChange}
              />
            </S.HalfWidthInputContainer>
          </S.InlineInputContainer>

          <S.LabelText>성별</S.LabelText>
          <S.GenderContainer>
            <S.GenderButton
              isSelected={genderValue === "man"}
              color="blue"
              onClick={() => handleGenderSelect("man")}
            >
              <S.MaleIcon />
              남자
            </S.GenderButton>
            <S.GenderButton
              isSelected={genderValue === "woman"}
              color="red"
              onClick={() => handleGenderSelect("woman")}
            >
              <S.FemaleIcon />
              여자
            </S.GenderButton>
          </S.GenderContainer>

          <S.LoginButton type="submit" disabled={isButtonDisabled}>회원가입</S.LoginButton>
          <>
            <S.kiwisign>Kiwi를 처음 사용하시는 유저들은?</S.kiwisign>
            <S.Linkitem href={"/login"}>로그인</S.Linkitem>
          </>
        </form>
      </S.Logindiv>
      <S.Logingreen>
        <S.AdText>학교 출석 관리 서비스</S.AdText>
        <S.AdTextKiwi>Kiwi</S.AdTextKiwi>
        <S.AdTextSmall>회원가입 하여 Kiwi를 사용해 보세요</S.AdTextSmall>
        <S.LoginImg src={"/LoginImg.png"} alt="로그인 이미지" />
      </S.Logingreen>
    </>
  );
}

export default Signup;
