import styled from "styled-components";

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

export const InputContainer = styled.div`
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

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const StyledInput = styled.input`
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

export const Pwfind = styled.p`
  color: #585858;
  display: block;
  margin-left: 29vw;
  margin-top: 1vh;
  font-weight: 500;
  cursor: pointer;
`;

export const Domain = styled.p<{ isFocused: boolean; inputValue: string }>`
  color: #C3C3C3;
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

export const kiwilogin = styled.p`
  color: #585858;
  display: block;
  margin-left: 9vw;
  margin-top: 1vh;
  font-weight: 500;
  cursor: pointer;
`;

export const logingo = styled.p`
  color: black;
  display: block;
  margin-left: 25vw;
  margin-top: -2.5vh;
  font-weight: 500;
  cursor: pointer;
`;