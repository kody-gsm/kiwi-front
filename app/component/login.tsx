import React, { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";
import * as S from "./loginstyle";
import "./divstyle.css";

function Login() {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e : any) => {
    setInputValue(e.target.value);
  };
  
  return (
    <div>
      <S.Logingreen />
      <S.Logindiv>
        <S.Logo src={"/kiwi.png"} alt="logo" />
        <form method="post">
          <S.InputContainer>
            <S.IconWrapper>
              <IoPersonOutline color="#C3C3C3" size={20} />
            </S.IconWrapper>

            <S.StyledInput
            minLength={6}
            maxLength={6}
            required
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange} 
            />
            <S.Domain isFocused={isFocused} inputValue={inputValue}>@gsm.hs.kr</S.Domain>
          </S.InputContainer>

          <S.InputContainer>
            <S.IconWrapper>
              <MdLockOutline color="#C3C3C3" size={20} />
            </S.IconWrapper>

            <S.StyledInput
            type="password"
            minLength={4}
            maxLength={31}
            placeholder="비밀번호"
            required
            />
          </S.InputContainer>

          <S.Pwfind>비밀번호 찾기</S.Pwfind>
          <S.LoginButton>로그인</S.LoginButton>
          <div>
            <S.kiwisign>Kiwi를 처음 사용하시는 유저들은?</S.kiwisign>
            <S.signgo>회원가입</S.signgo>
          </div>

        </form>
      </S.Logindiv>
      <S.Backimg src={"/progress.png"} />
      <S.Backimg2 src={"/check.png"} />
    </div>
  );
}

export default Login;
