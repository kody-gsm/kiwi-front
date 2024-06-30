import styled from "styled-components";
import Link from "next/link";
import { IoPersonOutline } from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";
import "../Fonts/Font.css";

export const Logindiv = styled.div`
  width: 50%;
  height: 100%;
  background-color: white;
  z-index: 1000;
  position: fixed;
`;

export const Logingreen = styled.div`
  width: 100%;
  height: 100%;
  background-color: #6AD37B;
  position: fixed;
`;

export const Logo = styled.img`
  width: 165px;
  height: 75px;
  display: block;
  margin-right: auto;
  object-fit: cover;
  margin-top: 4vh;
  margin-left: 1vw;
`;

export const LoginText = styled.span`
  font-family: Pretendard-ExtraBold;
  -webkit-text-stroke: 4px;
  color: black;
  font-size: 4vw;
  padding-left: 80px;
  display: block;
  margin-top: 3vw;
`

export const LabelText = styled.span`
  font-family: Pretendard-ExtraBold;
  -webkit-text-stroke: 1.5px;
  color: black;
  font-size: 1.5vw;
  padding-left: 110px;
  display: block;
  margin-top: 1vw;
`

export const AdText = styled.span`
  font-family: Pretendard-Regular;
  -webkit-text-stroke: 2.5px;
  color: white;
  display: block;
  margin-left: 55vw;
  margin-top: 5vh;
  font-size: 4.5vw;
`

export const AdTextKiwi = styled.span`
  font-family: Pretendard-Regular;
  -webkit-text-stroke: 4px;
  color: white;
  display: block;
  margin-left: 55vw;
  margin-top: -3.5vh;
  font-size: 4.5vw;
`

export const AdTextSmall = styled.span`
  font-family: Pretendard-Regular;
  -webkit-text-stroke: 1px;
  color: white;
  display: block;
  margin-left: 55vw;
  margin-top: -3vh;
  font-size: 1.5vw;
`

export const LoginImg = styled.img` 
  width: 20%;
  height: 50%;
  object-fit: cover;
  margin-left: auto;
  margin-right: 15vw;
  margin-top: 8vh;
  border-radius: 20px;
`

export const InputContainer = styled.div<{isFocused: boolean;}>`
  width: 75%;
  height: 9.5vh;
  background-color: white;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  margin-top: 1vh;
  padding-left: 20px;
  border : ${(props) => (props.isFocused) ? "solid 1px #6AD37B;" : "solid 1px black;"};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const StyledInput = styled.input<{isFocused: boolean;}>`
  background-color: transparent;
  border: none;
  color: ${(props) => (props.isFocused) ? "black;" : "#C3C3C3;"};
  font-weight: bold;
  padding: 10px;
  flex: 1;
  &:focus {
    outline: none;
  }
`


export const Pwfind = styled(Link)`
  color: #585858;
  display: block;
  margin-left: 38vw;
  margin-top: 1vh;
  cursor: pointer;
  font-family: Pretendard-Regular;
  font-size: 1vw;

`;

export const Domain = styled.p`
  color: #C3C3C3;
  font-weight: bold;
  flex: 1;
  margin-left: 12vw;
`

export const LoginButton = styled.button`
  background-color: #6AD37B;
  color: white;
  width: 75%;
  height: 10vh;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 18vh;
  border-radius: 15px;
  font-family: Pretendard-ExtraBold;
  font-size: 1.5vw;
  -webkit-text-stroke: 1px;
`;

export const kiwisign = styled.p`
  color: #585858;
  display: block;
  margin-left: 15vw;
  margin-top: 1vh;
  cursor: pointer;
  font-family: Pretendard-Regular;
`;

export const Linkitem = styled(Link)`
  color: black;
  display: block;
  margin-left: 29vw;
  margin-top: -1.45em;
  font-family: Pretendard-Regular;
  cursor: pointer;
`;

export const Lockicon = styled(MdLockOutline)<{isFocused : boolean}>`
  color: ${(props) => props.isFocused ? "black" : "#C3C3C3"};
`;

export const Peopleicon = styled(IoPersonOutline)<{isFocused : boolean}>`
  color: ${(props) => props.isFocused ? "black" : "#C3C3C3"};
`;
