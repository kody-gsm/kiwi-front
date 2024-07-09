import styled from "styled-components";
import NavBar from "../component/navbar";
import { useState } from "react";
import React, { ReactElement } from 'react';

// 초록 바탕이다. //0
const GreenBackground = styled.div`
    position: absolute;
    display: flex;
    width: 100vw;
    height: 100vh;
    left: 0px;
    top: 0px;
    padding: 0px;
    margin: 0px;
    background-color: #ECF6E7;
    user-select: none;
`;

// 초록색 C이미지컨테이너이다.  //0
const CImgContainer = styled.div`
    position: absolute;
    display: flex;
    left: -2px;
    top: 89px;
    width: 331px;
    height: 313px;
    color: #1A4F02;
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    justify-content: center;
    align-items: center;
`;

// 초록색 C이미지이다.  (디자인상에서는 입이라고 하라고 한다. 나도 왜 그런지 모른다.) //0
const CImg = styled.img`
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: fill;
`

// 큰 체크모양 이미지이다. (메인페이지에서 쓰이는 check와 이미지 이름이 같으므로, anotherCheck라는 이름을 붙여주었다.) //0
const AnotherCheckImg = styled.img`
    position: absolute;
    display: flex;
    right: 0px;
    bottom: 0px;
    object-fit: fill;
    width: 432px;
    height: 370px;
`;

// 정보 정렬 컨테이너이다. //0
const InformContainer = styled.div`
    position: absolute;
    display: flex;
    width: 100vw;
    height: calc(100vh - 152px);
    left: 0px;
    bottom: 0px;
    justify-content: center;
    align-items: center;
`;

// 정보 테이블이다. //0
const InformTable = styled.div`
    position: relative;
    display: grid;
    width: 1140px;
    height: 600px;
    border-radius: 20px;
    background-color: #FFFFFF;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 2fr 1fr;
    padding: 20px;
    gap: 25px;
`;

// 정보 박스이다. //0
const Inform = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
    border-radius: 22px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.183);
`;

// 사용자 프로필 이미지 정렬 컨테이너이다. //0
const ContainerForProfileImg = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    height: 145px;
    justify-content: center;
    align-items: center;
    top: 30px;
`;

// 사용자 프로필 이미지이다. //0
const ProfileImg = styled.img`
    position: relative;
    display: flex;
    width: 145px;
    height: 145px;
    border-radius: 100%;
    object-fit: fill;
`;

// 점 3개용 틀이다. // 누르기 편하도록 폭을 늘려두었다. //0
const Dots = styled.div`
    position: absolute;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    width: 40px;
    height: 30px;
    gap: 6px;
    right: 16px;
    top: 25px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

// 점이다. //0
const Dot = styled.span`
    position: relative;
    border-radius: 100%;
    width: 0px;
    height: 0px;
    border: 3px solid #D9D9D9;
`;

// 학번과 이름이다. //0
const NumAndName = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    height: 50px;
    top: 190px;
    font-size: 37.43px;
    font-weight: 700;
    align-items: center;
    justify-content: center;
`;

// 출결 상태 정렬용 컨테이너이다. //0
const ContainerForStatus = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    height: 70px;
    top: 270px;
    justify-content: center;
    align-items: center;
`;

// 현재 출결 상태를 보여주는 버튼(처럼 생겼지만 버튼 아님)이다. //기본색은 초록이지만 결석이나 다른이유에 경우 색을 바꿔주자 //0
const ShowStatus = styled.div`
    position: relative;
    display: flex;
    width: 144px;
    height: 65px;
    border-radius: 10px;
    background-color: #43A953;
    font-size: 41.58px;
    font-weight: 700;
    color: white;
    justify-content: center;
    align-items: center;
`;

// 타 학생에 대한 정보 공개 목록 모음 정렬 컨테이너이다. //0
const ContainerForSetShowInform = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    justify-content: center;
    align-items: center;
` 

// 타 학생에 대한 정보 공개 목록 모음이다. //0
const SetToShowInforms = styled.div`
    position: relative;
    display: grid;
    width: 280px;
    height: 75px;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
`;

// 타 학생에 대한 정보 공개 설정 글씨이다. //0
const SetToShowInformText = styled.div`
    position: relative;
    font-size: 22px;
    font-weight: 700;
    text-align: left;
    height: 100%;
    line-height: 26.25px;
`

// 토글버튼용 기본 체크박스이다. //0
const ToggleBtnCheck = styled.input`
    display: none;
`

// 토글버튼이다. //0
const ToggleBtn = styled.div`
    >.ToggleBack{
        position: absolute;
        display: flex;
        right: 0px;
        width: 70px;
        height: 32px;
        border-radius: 20px;
        background-color: #D9D9D9;
        transition: 500ms;
        cursor: pointer;
        >.ToggleCircle{
            position: absolute;
            display: flex;
            width: 26px;
            height: 26px;
            border-radius: 100%;
            background-color: white;
            transition: 500ms;
            top: 3px;
            left: 3px;
        }
        >.CheckedCircle{
            left: 41px;
        }
    }
    >.CheckedBack{
        background-color: #43A953;
    }
`

// 부가정보 컨테이너이다. //0
const ContainerForAddition = styled.div`
    position: absolute;
    display: flex;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

// 부가정보 목록이다. //0
const Additions = styled.div`
    position: relative;
    display: grid;
    width: calc(100% - 52px);
    height: 120px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
`;

// 부가정보이다. //0
const Addition = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    word-break: keep-all;
    font-family: Pretendard;
    font-size: 30.58px;
    font-weight: 550;
    line-height: 49.63px;
    text-align: left;
    overflow-x: scroll;
`;

// "자세히" 이다. //0
const Text_detail = styled.div`
    position: absolute;
    display: flex;
    right: 25px;
    top: 17px;
    font-family: Pretendard;
    font-size: 22px;
    font-weight: 400;
    line-height: 26.25px;
    text-align: left;
    color: #636060;
    cursor: pointer;
`

// 그래프 정렬 컨테이너이다. //0
const ContainerForGraph = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    justify-content: center;
    align-items: center;
`;

// 그래프 그리드이다. //0
const GraphGrid = styled.div`
    position: relative;
    display: grid;
    width: 600px;
    height: 300px;
    row-gap: 30px;
    column-gap: 10px;
    grid-template-columns: 1.5fr 7fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    padding-right: 70px;
`

// 그래프의 글자이다. //0
const GraphText = styled.div`
    position: relative;
    font-family: Pretendard;
    font-size: 36.58px;
    font-weight: 700;
    line-height: 49.63px;
    text-align: left;
`

// 그래프이다. %값을 넣어주면 알아서 너비를 맟출것이다! //0
const TheGraph = styled.div<{width: string}>`
    position: relative;
    display: flex;
    width: ${props => props.width}%;
    height: 100%;
    background-image: linear-gradient(to right, #74E159, #58C169);
`;

// 그래프의 %글자이다. //1
const PercentText = styled(GraphText)<{width: string}>`
    left: calc(${props=>props.width}% + 10px);
    top: -100%;
`

export default function MY(): JSX.Element{
    // 출결상태 표시용 토글박스 체크여부
    const [isShowStatus, setIsShowStatus] = useState(false);
    // 출결상태 표시용 토글버튼
    let ToggleBtn_showStatus: JSX.Element;
    if(isShowStatus){
        ToggleBtn_showStatus = (<ToggleBtn>
            <ToggleBtnCheck id="showStatus" type="checkbox" checked onChange={()=>(setIsShowStatus(false))}/>
            <label htmlFor="showStatus" className="ToggleBack CheckedBack">
                <div className="ToggleCircle CheckedCircle"></div>
            </label>
        </ToggleBtn>);
    }else{
        ToggleBtn_showStatus = (<ToggleBtn>
            <ToggleBtnCheck id="showStatus" type="checkbox" onChange={()=>(setIsShowStatus(true))}/>
            <label htmlFor="showStatus" className="ToggleBack">
                <div className="ToggleCircle"></div>
            </label>
        </ToggleBtn>);
    }

    // 프로필 공개 여부
    const [isOpenProfile, setIsOpenProfile] = useState(false);
    // 프로필 공개 토글버튼
    let ToggleBtn_openProfile: JSX.Element;
    if(isOpenProfile){
        ToggleBtn_openProfile = (<ToggleBtn>
            <ToggleBtnCheck id="openProfile" type="checkbox" checked onChange={()=>(setIsOpenProfile(false))}/>
            <label htmlFor="openProfile" className="ToggleBack CheckedBack">
                <div className="ToggleCircle CheckedCircle"></div>
            </label>
        </ToggleBtn>);
    }else{
        ToggleBtn_openProfile = (<ToggleBtn>
            <ToggleBtnCheck id="openProfile" type="checkbox" onChange={()=>(setIsOpenProfile(true))}/>
            <label htmlFor="openProfile" className="ToggleBack">
                <div className="ToggleCircle"></div>
            </label>
        </ToggleBtn>);
    }

    return(<>
        <GreenBackground>
            <CImgContainer>
                <CImg src="/greenC.png"/>
                출석체크
            </CImgContainer>
            
            <AnotherCheckImg src="/anotherCheck.png"/>
            <InformContainer>
                <InformTable>

                    <Inform>
                        <ContainerForProfileImg>
                            <ProfileImg src="/defaultProfile.png"/>
                        </ContainerForProfileImg>
                        <Dots>
                            <Dot></Dot>
                            <Dot></Dot>
                            <Dot></Dot>
                        </Dots>
                        <NumAndName>1234 가나다</NumAndName>
                        <ContainerForStatus>
                            <ShowStatus>출석</ShowStatus>
                        </ContainerForStatus>
                    </Inform>


                    <Inform>
                        <ContainerForGraph>
                            <GraphGrid>
                                <GraphText>지각</GraphText>
                                <span><TheGraph width="50"></TheGraph><PercentText width="50">50%</PercentText></span>

                                <GraphText>조퇴</GraphText>
                                <span><TheGraph width="40"></TheGraph><PercentText width="40">40%</PercentText></span>

                                <GraphText>외출</GraphText>
                                <span><TheGraph width="7"></TheGraph><PercentText width="7">7%</PercentText></span>

                                <GraphText>결석</GraphText>
                                <span><TheGraph width="3"></TheGraph><PercentText width="3">3%</PercentText></span>
                            </GraphGrid>
                        </ContainerForGraph>
                    </Inform>


                    <Inform>
                        <form>
                        <ContainerForSetShowInform>
                            <SetToShowInforms>
                                <>
                                    <SetToShowInformText>출결 상태 표시</SetToShowInformText>
                                    {ToggleBtn_showStatus}
                                </>
                                <>
                                    <SetToShowInformText>프로필 공개</SetToShowInformText>
                                    {ToggleBtn_openProfile}
                                </>
                            </SetToShowInforms>
                        </ContainerForSetShowInform>
                        </form>
                    </Inform>


                    <Inform>
                        <ContainerForAddition>
                            <Additions>
                                <Addition>특이사항 | 이것은 엄청난 특이사항</Addition>
                                <Addition>결석 | BC.100 ~ 7777-07-07</Addition>
                            </Additions>
                        </ContainerForAddition>
                    </Inform>

                </InformTable>
            </InformContainer>
        </GreenBackground>
    <NavBar></NavBar></>);
}