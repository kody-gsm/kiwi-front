import React from "react";
import styled from "styled-components";
import { IoPersonOutline } from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";

const Logindiv = styled.div`
    width: 39vw;
    height: 63vh;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    border-radius: 20px;
`;

const Logingreen = styled.div`
    width: 39vw;
    height: 63vh;
    background-color: #43A953;
    top: 50%;
    left: 50%;
    transform: translate(-44.5%, -50%);
    position: absolute;
    border-radius: 20px;
    opacity: 35%;
`;

const Logo = styled.img`
  width: 165px;
  height: 75px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4vh;
`;

const Backimg = styled.img`
  width: 670px;
  height: 620px;
  display: block;
  margin-right: auto;
`

const Backimg2 = styled.img`
  width: 800px;
  height: 620px;
  display: block;
  margin-left: 51vw;
  margin-top: -32vh;
`

const InputContainer = styled.div`
  width: 80%;
  height: 7.9vh;
  background-color: #C3C3C360;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  margin-top: 5vh;
  padding-left: 20px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  color: #C3C3C3;
  font-weight: bold;
  padding: 10px;
  flex: 1;

  &:focus {
    outline: none;
  }
`;

const Pwfind = styled.p`
  color: #585858;
  display: block;
  margin-left: 29vw;
  margin-top: 1vh;
  font-weight: 500;
  cursor: pointer;
`;


const LoginButton = styled.button`
  background-color: #43A953;
  color: white;
  width: 80%;
  height: 8vh;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8vh;
  border-radius: 10px;
  font-weight: bold;
`;

function Login() {
  return (
    <div>
      <Logingreen />
      <Logindiv>
        <Logo src={"/kiwi.png"} alt="logo" />
        <form>
          <InputContainer>
            <IconWrapper>
              <IoPersonOutline color="#C3C3C3" size={20} />
            </IconWrapper>

            <StyledInput minLength={6} maxLength={6} required />
          </InputContainer>

          <InputContainer>
            <IconWrapper>
              <MdLockOutline color="#C3C3C3" size={20} />
            </IconWrapper>

            <StyledInput type="password" minLength={4} maxLength={31} placeholder="비밀번호" required />
          </InputContainer>

          <Pwfind>비밀번호 찾기</Pwfind>
          <LoginButton>로그인</LoginButton>

        </form>
      </Logindiv>
      <Backimg src={"/progress.png"} />
      <Backimg2 src={"/check.png"} />
    </div>
  );
}

export default Login;
