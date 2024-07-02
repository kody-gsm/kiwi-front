import axios from 'axios';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import NavBar from '../component/navbar';
import DocIMG from '@/public/doc.png';
import MedalIMG from '@/public/medal.png';
import MedalWhiteIMG from '@/public/medalW.png';
import SError from '@/public/sError.png';

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
    min-width: 400px;
    height: 71vh;
    min-height: 400px;
    left: 40px;
    top: 200px;
    gap: 71px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
`;

// 신청 선택 버튼이다. //0
const ApplicationBtn = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    -webkit-user-select:none;
    cursor: pointer;
    background-color: #EFEEEE;
    border-radius: 20px;
`

// 신청 선택 버튼 초록 버전이다. //1
const ApplicationBtnGreen = styled(ApplicationBtn)`
    background-color: #6AD37B;
`;


// 신청 페이지
export default function Application(): JSX.Element{
    // 페이지 내부 분할 변수 ( + 신청 목록 )
    const [page, setPage] = useState(0);

    // 페이지 JSX요소 변수
    let ELEMENT : () => JSX.Element;

    // 변수 할당 버그 없애기 용
    ELEMENT = () => (<></>);

    // 이렇게 하면 코드의 유틸성을 담보로 안정성을 얻을 수 있다.(버그나면 노드를 끊어버리고 대처노드를 연결하면 그만)
    // + 추가로 이렇게하면 소소한 디자인 변경에는 취약해도, 큰 디자인변경에 대처하기 쉽다. (내 생각과 설계이기 때문에 정석은 아닐것이다.)
    // 신청 페이지 내부 분할
    if(page === 0){ // 0번 (선택지 비활성)
        console.log('a');
        ELEMENT = () => (<><WhiteTheme>
            <ApplicationContainer>
                <ApplicationBtn onClick={()=>{setPage(1)}}></ApplicationBtn>
                <ApplicationBtn onClick={()=>{setPage(2)}}></ApplicationBtn>
                <ApplicationBtn onClick={()=>{setPage(3)}}></ApplicationBtn>
            </ApplicationContainer>
            
        </WhiteTheme>
        <NavBar></NavBar></>);
    }else if(page === 1){ // 1번 (기능반)
        ELEMENT = () => (<><WhiteTheme>
            <ApplicationContainer>
                <ApplicationBtnGreen onClick={()=>{setPage(1)}}></ApplicationBtnGreen>
                <ApplicationBtn onClick={()=>{setPage(2)}}></ApplicationBtn>
                <ApplicationBtn onClick={()=>{setPage(3)}}></ApplicationBtn>
            </ApplicationContainer>
            
        </WhiteTheme>
        <NavBar></NavBar></>);
    }else if(page === 2){ // 2번 (인정결석)
        ELEMENT = () => (<><WhiteTheme>
            <ApplicationContainer>
                <ApplicationBtn onClick={()=>{setPage(1)}}></ApplicationBtn>
                <ApplicationBtnGreen onClick={()=>{setPage(2)}}></ApplicationBtnGreen>
                <ApplicationBtn onClick={()=>{setPage(3)}}></ApplicationBtn>
            </ApplicationContainer>
            
        </WhiteTheme>
        <NavBar></NavBar></>);
    }else if(page === 3){ // 3번 (서비스 오류)
        ELEMENT = () => (<><WhiteTheme>
            <ApplicationContainer>
                <ApplicationBtn onClick={()=>{setPage(1)}}></ApplicationBtn>
                <ApplicationBtn onClick={()=>{setPage(2)}}></ApplicationBtn>
                <ApplicationBtnGreen onClick={()=>{setPage(3)}}></ApplicationBtnGreen>
            </ApplicationContainer>
            
        </WhiteTheme>
        <NavBar></NavBar></>);
    }else{
        console.error("error: 9와1/4선택지로 인하여 마법부에서 페이지를 삭제하였습니다.");
    }
    

    return(
        <ELEMENT/>
    );
}