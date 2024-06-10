import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";
import * as S from "./loginstyle";

function Clicked() {
  
}

function Login() {
  
  
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

            <S.StyledInput minLength={6} maxLength={6} required />
            <S.Domain>@gsm.hs.kr</S.Domain>
          </S.InputContainer>

          <S.InputContainer>
            <S.IconWrapper>
              <MdLockOutline color="#C3C3C3" size={20} />
            </S.IconWrapper>

            <S.StyledInput type="password" minLength={4} maxLength={31} placeholder="비밀번호" required />
          </S.InputContainer>

          <S.Pwfind>비밀번호 찾기</S.Pwfind>
          <S.LoginButton>로그인</S.LoginButton>

        </form>
      </S.Logindiv>
      <S.Backimg src={"/progress.png"} />
      <S.Backimg2 src={"/check.png"} />
    </div>
  );
}

export default Login;
