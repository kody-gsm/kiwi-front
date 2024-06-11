import React, { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";
import * as S from "../stylesheets/signstyle";
import "../stylesheets/divstyle.css";
import Back from "../component/Back";

function Signup() {
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
              <S.Peopleicon isFocused={emailFocused} size={20} />
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
              <S.Lockicon isFocused={psFocused} size={20} />
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
          <S.LoginButton>회원가입</S.LoginButton>
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
