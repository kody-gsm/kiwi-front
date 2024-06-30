import React, { useState } from "react";
import * as S from "../stylesheets/signstyle";
import "../stylesheets/divstyle.css";
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

  const handleEmailFocus = () => setEmailFocused(true);
  const handleEmailBlur = () => setEmailFocused(false);
  const handlePasswordFocus = () => setPsFocused(true);
  const handlePasswordBlur = () => setPsFocused(false);
  const handlePassworReFocus = () => setPsReFocused(true);
  const handlePasswordReBlur = () => setPsReFocused(false);
  const handleIdFocus = () => setIdFocused(true);
  const handleIdBlur = () => setIdFocused(false);
  const handleNameFocus = () => setNameFocused(true);
  const handleNameBlur = () => setNameFocused(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPasswordValue(e.target.value);
  const handlePasswordReChange = (e: React.ChangeEvent<HTMLInputElement>) => setPasswordRepeatValue(e.target.value);
  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => setIdValue(e.target.value);
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setNameValue(e.target.value);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isButtonDisabled) return;

    const dto = {
      email: inputValue,
      password: passwordValue,
      passwordCheck: passwordrepeatValue,
      id: idValue,
      username: nameValue,
      gender: gender,
    };

    setLoading(true);
    try {
      const response = await axios.post(
        "https://7d7a-210-218-52-13.ngrok-free.app/sign-up",
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
    } catch (error) {
      setLoading(false);
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
        <form method="post" onSubmit={handleSubmit}>
          <S.LoginText>회원가입</S.LoginText>
          <S.ScrollContainer>
            <S.LabelText>이메일</S.LabelText>
            <S.InputContainer isFocused={emailFocused}>
              <S.IconWrapper>
                <S.Peopleicon size={20} isFocused={emailFocused} />
              </S.IconWrapper>
              <S.StyledInput
                id="email"
                isFocused={emailFocused}
                value={inputValue}
                required
                onFocus={handleEmailFocus}
                onBlur={handleEmailBlur}
                onChange={handleEmailChange}
              />
              <S.Domain>@gsm.hs.kr</S.Domain>
            </S.InputContainer>
            <S.LabelText>비밀번호</S.LabelText>
            <S.InputContainer isFocused={psFocused}>
              <S.IconWrapper>
                <S.Lockicon size={20} isFocused={psFocused} />
              </S.IconWrapper>
              <S.StyledInput
                id="password"
                isFocused={psFocused}
                type="password"
                value={passwordValue}
                required
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
                onChange={handlePasswordChange}
              />
            </S.InputContainer>
            <S.LabelText>비밀번호 확인</S.LabelText>
            <S.InputContainer isFocused={psreFocused}>
              <S.IconWrapper>
                <S.Lockicon size={20} isFocused={psreFocused} />
              </S.IconWrapper>
              <S.StyledInput
                id="password"
                isFocused={psreFocused}
                type="password"
                value={passwordrepeatValue}
                required
                onFocus={handlePassworReFocus}
                onBlur={handlePasswordReBlur}
                onChange={handlePasswordReChange}
              />
            </S.InputContainer>
            <S.LabelText>이름</S.LabelText>
            <S.InputContainer isFocused={nameFocused}>
              <S.StyledInput
                id="name"
                isFocused={nameFocused}
                value={nameValue}
                required
                onFocus={handleNameFocus}
                onBlur={handleNameBlur}
                onChange={handleNameChange}
              />
            </S.InputContainer>
            <S.LabelText>학번</S.LabelText>
            <S.InputContainer isFocused={idFocused}>
              <S.StyledInput
                id="id"
                isFocused={idFocused}
                value={idValue}
                required
                onFocus={handleIdFocus}
                onBlur={handleIdBlur}
                onChange={handleIdChange}
              />
            </S.InputContainer>
            <S.LabelText>성별</S.LabelText>
            <S.ButtonGroup>
              <S.GenderButton
                type="button"
                onClick={handleManButtonClick}
                isActive={manButtonClicked}
                isFemale={false}
              >
                남자
              </S.GenderButton>
              <S.GenderButton
                type="button"
                onClick={handleWomanButtonClick}
                isActive={womanButtonClicked}
                isFemale={true}
              >
                여자
              </S.GenderButton>
            </S.ButtonGroup>
          </S.ScrollContainer>
          <S.SignButton type="submit" disabled={isButtonDisabled}>
            {loading ? "로딩 중..." : "다음"}
          </S.SignButton>
          <div>
            <S.kiwilogin>Kiwi를 처음 사용하시는 유저들은?</S.kiwilogin>
            <S.Linkitem href={"/signup"}>회원가입</S.Linkitem>
          </div>
        </form>
      </S.Logindiv>
      <S.Logingreen>
        <S.AdText>학교 출석 관리 서비스</S.AdText>
        <S.AdTextKiwi>Kiwi</S.AdTextKiwi>
        <S.AdTextSmall>로그인 하여 Kiwi를 사용해 보세요!</S.AdTextSmall>
        <S.LoginImg src={"/LoginImg.png"} alt="로그인 이미지" />
      </S.Logingreen>
    </>
  );
}

export default Signup;
