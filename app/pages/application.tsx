import axios from 'axios';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import NavBar from '../component/navbar';

// 하얀배경이다. //0
const WhiteTheme = styled.div`
    background-color: #FFFFFF;
    padding: 0px;
    margin: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
`;

// 신청 선택 정렬 컨테이너이다. //0
const ApplicationContainer = styled.div`
    position: fixed;
    display: grid;
    width: 44vw;
    min-width: 500px;
    height: 71vh;
    min-height: 400px;
    left: 40px;
    top: 200px;
    gap: 51px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
`;

// 신청 선택 버튼이다. //0
const ApplicationBtn = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    user-select: none;
    cursor: pointer;
    background-color: #EFEEEE;
    border-radius: 20px;
`

// 신청 선택 버튼 초록 버전이다. //1
const ApplicationBtnGreen = styled(ApplicationBtn)`
    background-color: #6AD37B;
`;

// 이미지 초석이다. // 근데 만들면서 보니까 사진 크기가 제각각이다. // 그런 관계로 일단 일부 위치는 각각 하드코딩 해놓는다. //0
const ImgRoot = styled.img`
    position: relative;
    display: flex;
    height: 100%;
    justify-content: center;
    object-fit: contain;
`;

// 메달 그림이다. (기능반) //1
const Medal = styled(ImgRoot)`
    width: 115px;
    left: 37px;
`;

// 문서 그림이다. (인정결석) //1
const Doc = styled(ImgRoot)`
    width: 100px;
    left: 44px;
`;

// 에러 그림이다. (서비스 오류) //1
const SError = styled(ImgRoot)`
    width: 140px;
    left: 25px;
`;

// 신청항목의 큰 글씨 초석이다. //0
const BigText = styled.div`
    position: absolute;
    display: flex;
    left: 163px;
    font-family: 'Jalnan2TTF';
    font-size: 55px;
    font-weight: 400;
    line-height: 66px;
    text-align: left;
    top: 35px;
    width: max-content;
    height: max-content;
`;

// 신청항목의 작은 글씨 초석이다. //0
const SmallText = styled.div`
    position: absolute;
    display: flex;
    left: 163px;
    width: 31vw;
    min-width: 330px;
    height: fit-content;
    font-family: 'Pretendard';
    font-size: 15px;
    font-weight: 700;
    line-height: 23.87px;
    text-align: left;
    word-break: normal;
    top: 119px;
    color: #D9D9D9;
`;

// 신청 페이지
export default function Application(): JSX.Element{
    // 페이지 내부 분할 변수 ( + 신청 목록 )
    const [page, setPage] = useState(0);

    // 페이지 JSX요소 변수
    let ELEMENT : JSX.Element;

    // 변수 할당 버그 없애기 용
    ELEMENT = (<></>);

    // 이렇게 하면 코드의 유틸성을 담보로 안정성을 얻을 수 있다.(버그나면 노드를 끊어버리고 대처노드를 연결하면 그만)
    // + 추가로 이렇게하면 소소한 디자인 변경에는 취약해도, 큰 디자인변경에 대처하기 쉽다. (내 생각과 설계이기 때문에 정석은 아닐것이다.)
    // 신청 페이지 내부 분할
    if(page === 0){ // 0번 (선택지 비활성)
        ELEMENT = (<><WhiteTheme>
            <ApplicationContainer>
                <ApplicationBtn onClick={()=>{setPage(1)}}>
                    <Medal src='/medal.png'></Medal>
                    <BigText>기능반</BigText>
                    <SmallText>대회 준비 등으로 수업을 빠지고 대회 준비를 하는 기능반 학생들을 위한 신청</SmallText>
                </ApplicationBtn>

                <ApplicationBtn onClick={()=>{setPage(2)}}>
                    <Doc src='/doc.png'></Doc>
                    <BigText>인정 결석</BigText>
                    <SmallText>현장체험학습 등 인정 결석이 필요한 경우를 위한 신청</SmallText>
                </ApplicationBtn>

                <ApplicationBtn onClick={()=>{setPage(3)}}>
                    <SError src='/sError.png'></SError>
                    <BigText>서비스 오류</BigText>
                    <SmallText>Kiwi 서비스에 대한 오류에 대한 의견이 있는 경우 신청</SmallText>
                </ApplicationBtn>
            </ApplicationContainer>
            
            
        </WhiteTheme>
        <NavBar></NavBar></>);
    }else if(page === 1){ // 1번 (기능반)
        ELEMENT = (<><WhiteTheme>
            <ApplicationContainer>
                <ApplicationBtnGreen onClick={()=>{setPage(0)}}>
                    <Medal src='/medalW.png'></Medal>
                    <BigText style={{color: 'white'}}>기능반</BigText>
                    <SmallText style={{color: 'white'}}>대회 준비 등으로 수업을 빠지고 대회 준비를 하는 기능반 학생들을 위한 신청</SmallText>
                </ApplicationBtnGreen>

                <ApplicationBtn onClick={()=>{setPage(2)}}>
                    <Doc src='/doc.png'></Doc>
                    <BigText>인정 결석</BigText>
                    <SmallText>현장체험학습 등 인정 결석이 필요한 경우를 위한 신청</SmallText>
                </ApplicationBtn>

                <ApplicationBtn onClick={()=>{setPage(3)}}>
                    <SError src='/sError.png'></SError>
                    <BigText>서비스 오류</BigText>
                    <SmallText>Kiwi 서비스에 대한 오류에 대한 의견이 있는 경우 신청</SmallText>
                </ApplicationBtn>
            </ApplicationContainer>
            
        </WhiteTheme>
        <NavBar></NavBar></>);
    }else if(page === 2){ // 2번 (인정결석)
        ELEMENT = (<><WhiteTheme>
            <ApplicationContainer>
                <ApplicationBtn onClick={()=>{setPage(1)}}>
                    <Medal src='/medal.png'></Medal>
                    <BigText>기능반</BigText>
                    <SmallText>대회 준비 등으로 수업을 빠지고 대회 준비를 하는 기능반 학생들을 위한 신청</SmallText>
                </ApplicationBtn>

                <ApplicationBtnGreen onClick={()=>{setPage(0)}}>
                    <Doc src='/docW.png'></Doc>
                    <BigText style={{color: 'white'}}>인정 결석</BigText>
                    <SmallText style={{color: 'white'}}>현장체험학습 등 인정 결석이 필요한 경우를 위한 신청</SmallText>
                </ApplicationBtnGreen>

                <ApplicationBtn onClick={()=>{setPage(3)}}>
                    <SError src='/sError.png'></SError>
                    <BigText>서비스 오류</BigText>
                    <SmallText>Kiwi 서비스에 대한 오류에 대한 의견이 있는 경우 신청</SmallText>
                </ApplicationBtn>
            </ApplicationContainer>
            
        </WhiteTheme>
        <NavBar></NavBar></>);
    }else if(page === 3){ // 3번 (서비스 오류)
        ELEMENT = (<><WhiteTheme>
            <ApplicationContainer>
                <ApplicationBtn onClick={()=>{setPage(1)}}>
                    <Medal src='/medal.png'></Medal>
                    <BigText>기능반</BigText>
                    <SmallText>대회 준비 등으로 수업을 빠지고 대회 준비를 하는 기능반 학생들을 위한 신청</SmallText>
                </ApplicationBtn>
                
                <ApplicationBtn onClick={()=>{setPage(2)}}>
                    <Doc src='/doc.png'></Doc>
                    <BigText>인정 결석</BigText>
                    <SmallText>현장체험학습 등 인정 결석이 필요한 경우를 위한 신청</SmallText>
                </ApplicationBtn>

                <ApplicationBtnGreen onClick={()=>{setPage(0)}}>
                    <SError src='/sErrorW.png'></SError>
                    <BigText style={{color: 'white'}}>서비스 오류</BigText>
                    <SmallText style={{color: 'white'}}>Kiwi 서비스에 대한 오류에 대한 의견이 있는 경우 신청</SmallText>
                </ApplicationBtnGreen>
            </ApplicationContainer>
            
        </WhiteTheme>
        <NavBar></NavBar></>);
    }else{
        console.error("error: 9와1/4선택지로 인하여 마법부에서 페이지를 삭제하였습니다.");
    }
    

    return(
        ELEMENT
    );
}