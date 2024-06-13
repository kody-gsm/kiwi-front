import React, { useState } from "react";
import * as S from "../stylesheets/passwordfind";
import "../stylesheets/divstyle.css";
import Back from "../component/Back";

function Passwordfind() {
  const [emailFocused, setEmailFocused] = useState(false);
  const [idFocused, setIdFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  const handleEmailFocus = () => {
    setEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setEmailFocused(false);
  };

  const handleIdFocus = () => {
    setIdFocused(true);
  };

  const handleIdBlur = () => {
    setIdFocused(false);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleIdChange = (e: any) => {
    setId(e.target.value);
  };
  
  const isFormValid = email.length > 0 && id.length > 0;

  return (
    <div>
      <S.Logingreen />
      <S.Logindiv>
        <S.Logo src={"/kiwi.png"} alt="logo" />
        <form method="post">
          <S.EmailContainer isFocused={emailFocused}>
            <S.IconWrapper>
              <S.Peopleicon size={20} isFocused={emailFocused} />
            </S.IconWrapper>
            <S.StyledInput isFocused={emailFocused}
              minLength={6}
              maxLength={6}
              required
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
              onChange={handleEmailChange}
            />
            <S.Domain isFocused={emailFocused} inputValue={email}>@gsm.hs.kr</S.Domain>
          </S.EmailContainer>
            <S.Authbutton inputValue={email}>인증하기</S.Authbutton>

          <S.PsContainer isFocused={idFocused}>
            <S.IconWrapper>
              <S.Idicon size={20} isFocused={idFocused} />
            </S.IconWrapper>
            <S.StyledInput isFocused={idFocused}
              minLength={4}
              maxLength={4}
              placeholder="학번"
              required
              onFocus={handleIdFocus}
              onBlur={handleIdBlur}
              onChange={handleIdChange}
            />
          </S.PsContainer>

          <S.LoginButton isFormValid={isFormValid}>다음</S.LoginButton>
          <div>
            <S.kiwisign>Kiwi를 처음 사용하시는 유저들은?</S.kiwisign>
            <S.Linkitem href={"/signup"}>회원가입</S.Linkitem>
          </div>
        </form>
      </S.Logindiv>
      <Back />
    </div>
  );
}

export default Passwordfind;
