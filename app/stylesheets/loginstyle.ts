import styled from "styled-components";
import Link from "next/link";
import { IoPersonOutline } from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";

export const Logindiv = styled.div`
  width: 39vw;
  height: 63vh;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  border-radius: 20px;
`;

export const Logingreen = styled.div`
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

export const Logo = styled.img`
  width: 165px;
  height: 75px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4vh;
`;

export const Backimg = styled.img`
  width: 690px;
  height: 620px;
  display: block;
  margin-right: auto;
`;

export const Backimg2 = styled.img`
  width: 840px;
  height: 620px;
  display: block;
  margin-left: 49vw;
  margin-top: -32vh;
`;

export const InputContainer = styled.div<{isFocused: boolean;}>`
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
  border : ${(props) => (props.isFocused) ? "solid 1px #34AF47;" : "solid 1px #C3C3C3100;"}
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const StyledInput = styled.input<{isFocused: boolean;}>`
  background-color: transparent;
  border: none;
  color: ${(props) => (props.isFocused) ? "black;" : "#C3C3C3;"}
  font-weight: bold;
  padding: 10px;
  flex: 1;
  &:focus {
    outline: none;
  }

  &::placeholder{
		color: #C3C3C395;
	}
`


export const Pwfind = styled(Link)`
  color: #585858;
  display: block;
  margin-left: 29vw;
  margin-top: 1vh;
  font-weight: 500;
  cursor: pointer;
`;

export const Domain = styled.p<{ isFocused: boolean; inputValue: string }>`
  color: ${(props) => (props.isFocused) ? "#black;" : "#C3C3C3;"}
  font-weight: bold;
  flex: 1;
  margin-left: ${(props) => (props.isFocused || props.inputValue ? "-20.5vw" : "-28vw")};
  transition: margin-left 0.3s ease;
`

export const LoginButton = styled.button`
  background-color: #43A953;
  color: white;
  width: 80%;
  height: 8vh;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 7vh;
  border-radius: 10px;
  font-weight: bold;
`;

export const kiwisign = styled.p`
  color: #585858;
  display: block;
  margin-left: 9vw;
  margin-top: 1vh;
  font-weight: 500;
  cursor: pointer;
`;

export const Linkitem = styled(Link)`
  color: black;
  display: block;
  margin-left: 25vw;
  margin-top: -2.5vh;
  font-weight: 500;
  cursor: pointer;
`;

export const Lockicon = styled(MdLockOutline)<{isFocused : boolean}>`
  color: ${(props) => props.isFocused ? "black" : "#C3C3C3"}
`;

export const Peopleicon = styled(IoPersonOutline)<{isFocused : boolean}>`
  color: ${(props) => props.isFocused ? "black" : "#C3C3C3"}
`;
