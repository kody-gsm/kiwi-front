import Image from "next/image";
import NavBar from "./navbar";
import { useState } from "react";
import styled from "styled-components";

// 사이트에 처음 들어갈경우 메인페이지가 나와야함으로, page에 제작한다.

// 내용 컨테이너이다. //0
const ContentContainer = styled.div`
  position: relative;
  display: flex;
  left: 0px;
  width: 100%;
`;

// 거대 글자 초석이다. //0
const TextRoot = styled.div`
  position: absolute;
  display: flex;
  font-size: 60px;
  font-weight: 700;
  line-height: 83.54px;
  text-align: left;
  -webkit-user-select:none;
`;

// 그림띄우기 초석이다. //0
const ImgRoot = styled.img`
  position: absolute;
  diplay: flex;
  object-fit: fill;
  -webkit-user-select:none;
`;

// 귀찮았던 출결 관리를 간편하게 할 수 있어요! //1
const TooSimpleText = styled(TextRoot)`
  top: 302px;
  left: 16vw;
  word-break: keep-all;
`;

// 방명록을 쓰지 않아도 출결 기록이 남아요! //1
const CheckRecodeText = styled(TextRoot)`
  top: 1026px;
  right: 16vw;
  word-break: keep-all;
`;

// '키위에서 이 기능들을 사용해보세요'를 위한 레이아웃 //0
const UseKIWIContainer = styled.div`
  position: absolute;
  display: flex;
  top: 1819px;
  width: 100%;
  height: auto;
  justify-content: center;
`;

// '키위의 3가지 기능을 소개해 드릴게요'를 위한 레이아웃 //1
const IntroduceKIWIContainer = styled(UseKIWIContainer)`
  top: 1930px;
`;

// 키위에서 이 기능들을 사용해보세요 //1
const UseKIWI = styled(TextRoot)`
  width: auto;
  height: auto;
`;

// 키위의 3가지 기능을 소개해 드릴게요 //1
const IntroduceKIWI = styled(TextRoot)`
  color: #7D7D7D;
  font-size: 40px;
  width: auto;
  height: auto;
`;

// 달력 그림이다! //1
const TheCalander = styled(ImgRoot)`
  width: 282px;
  height: 282px;
  top: 488px;
  left: 20vw;
  gap: 0px;
  opacity: 0px;
`;

// 시계 그림이다! //1
const TheClock = styled(ImgRoot)`
  width: 285px;
  height: 285px;
  top: 1221px;
  right: 20vw;
  gap: 0px;
  opacity: 0px;
`;

// 세부 설명 큰컨테이너이다. //0
const DetailContainerBig = styled.div`
  position: absolute;
  display: flex;
  top: 2040px;
  width: 100%;
  height: auto;
  justify-content: center;
`;

// 세부 설명 작은 컨테이너이다. //0
const DetailContainerSmall = styled.div`
  display: flex;
  width: 85vw;
  height: fit-content;
  justify-content: center;
  gap: 80px;
`;

// 세부 설명 상자이다. //0
const DetailBoxes = styled.div`
  position: relative;
  display: flex;
  width: 494px;
  min-width: 300px;
  height: 623px;
  gap: 0px;
  opacity: 0px;
  border-radius: 20px;
  background-color: #CBECFF80;
`;

// 세부 설명 이미지 컨테이너이다. //0
const DetailBoxImgContainer = styled.div`
  position: absolute;
  display: flex;
  top: 15px;
  width: 100%;
  height: fit-content;
  justify-content: center;
`;

// 확인그림이다! //1
const TheCheck = styled(ImgRoot)`
  width: 248px;
  height: 248px;
`;

// 편지지그림이다! //2
const TheLetter = styled(TheCheck)``;

// 카드그림이다! //이미지가 특이해서 코드도 변경한다. //1
const TheCard = styled(ImgRoot)`
  width: 448px;
  height: 448px;
  top: -100px;
  object-fit: cover;
`;

// 세부사항의 메인 요점컨테이너이다. //0
const DetailTextMainContainer = styled.div`
  position: absolute;
  display: flex;
  top: 343px;
  width: 100%;
  justify-content: center;
`;

// 세부사항의 메인요점이다. //1
const DetailTextMain = styled(TextRoot)`
  font-size: 35px;
`;

// 세부사항 설명이다. //1
const DetailText = styled(TextRoot)`
  top: 415px;
  font-size:25px;
  padding: 30px;
  font-weight: 400;
  line-height: 30px;
`;

export default function Main(): JSX.Element {
  return (
    <>
      <ContentContainer>
        <TooSimpleText>
          귀찮았던 출결 관리를<br/>
          간편하게 할 수 있어요!
        </TooSimpleText>
        <TheCalander src={'/calander.png'}></TheCalander>

        <CheckRecodeText>
          방명록을 쓰지 않아도<br/>
          출결 기록이 남아요!
        </CheckRecodeText>
        <TheClock src={'/clock.png'}></TheClock>

        <UseKIWIContainer>
          <UseKIWI>
            키위에서 이 기능들을 사용해보세요
          </UseKIWI>
        </UseKIWIContainer>

        <IntroduceKIWIContainer>
          <IntroduceKIWI>
            키위의 3가지 기능을 소개해 드릴게요
          </IntroduceKIWI>
        </IntroduceKIWIContainer>

        <DetailContainerBig>
          <DetailContainerSmall>
            
            <DetailBoxes>
              <DetailBoxImgContainer>
                <TheCheck src={'/check.png'}></TheCheck>
              </DetailBoxImgContainer>

              <DetailTextMainContainer>
                <DetailTextMain>출석 관리</DetailTextMain>
              </DetailTextMainContainer>

              <DetailText>
                선생님이 직접 출석을 관리하고 볼 수 있거나,
                학생이 인정 결석을 신청하거나,
                친구 또는 자신의 출결 상태를 볼 수 있어요.
              </DetailText>
            </DetailBoxes>

            <DetailBoxes>
              <DetailBoxImgContainer>
                <TheCard src={'/card.png'}></TheCard>
              </DetailBoxImgContainer>

              <DetailTextMainContainer>
                <DetailTextMain>NFC 카드</DetailTextMain>
              </DetailTextMainContainer>

              <DetailText>
              NFC 카드를 이용하여 보건실 방문기록을
              자동으로 기록하거나,
              기숙사에서 세탁기를 대여할 때 사용할 수 있어요.
              </DetailText>
            </DetailBoxes>

            <DetailBoxes>
              <DetailBoxImgContainer>
                <TheLetter src={'/letter.png'}></TheLetter>
              </DetailBoxImgContainer>

              <DetailTextMainContainer>
                <DetailTextMain>신청 제도</DetailTextMain>
              </DetailTextMainContainer>

              <DetailText>
                현장체험학습, 병결, 면접 등 인정결석을 신청하거나,
                NFC 카드 재발급, 키위(kiwi) 서비스 제도 항의 등 다양한 종류의 신청이 가능합니다.
              </DetailText>
            </DetailBoxes>
          </DetailContainerSmall>
        </DetailContainerBig>

      </ContentContainer>
    </>
  );
}