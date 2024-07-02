
import React, { ReactElement } from 'react';
import { jsx } from 'react/jsx-runtime';
import styled, { WebTarget } from 'styled-components';
import Link from 'next/link';
import { useState } from 'react';

// 상속받는 깊이에 따라서, 주석 오른쪽에 식별 숫자를 넣어주었다. 시작은 0이다. (예: 0을 상속 => 1 / 1을 상속 => 2)
// route 속성은 상속받아도 처음은 0이다. (styled.~~)로 간주한다.
// 컴포넌트에 이름을 부여할때, 연관성이 있도록 부여했다.

// 네비게이션바의 루트이다. // 네비게이션 요소들의 초석이다. //0
const NavDiv = styled.div`
    position: fixed;
    display: flex;
    left: 0px;
    top: 0px;
    width: 100vw;
    height: 152px;
    margin: 0px;
    align-items: center;
    background-color: white;
    padding: 0px;
`;

// 코딩할때 뭔가 싸하다 했더니... 디자인에 외곽선 속성이 개별 선이였다...
// 이미 많은 속성이 상속받기에, 개별적으로 NavDiv에 외곽선 속성을 추가한다. //1
const PerfectNavDiv = styled(NavDiv)`
    border-bottom: 1px solid black;
`;

// 로고이미지이다. 로고를 늘리고 줄일 필요까진 없다고 생각하여 고정 크기로 만들었다. //1
const LogoImg = styled(NavDiv)`
    left: 27px;
    top: auto;
    width: 168px;
    height: 79px;
    object-fit: contain;
    -webkit-user-select:none;
`;

// 네비게이션 목록을 가운데 정렬하기위한 바탕이다. //1
const ListBigDiv = styled(NavDiv)`
    justify-content: center;
    min-width: 800px;
`;

// 네비게이션 목록을 나열하기위한 바탕이다. //1
const ListSmallDiv = styled(NavDiv)`
    position: relative;
    display: grid;
    width: auto;
    height: auto;
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 50px;
`;

// 네비게이션 목록이다. 상속받아서 재사용 할만한 코드가 없으므로, 그냥 상속받지 않는다. //0
const List = styled(Link)`
    position: relative;
    display: flex;
    font-family: Pretendard;
    font-size: 30px;
    font-weight: 500;
    line-height: 35.8px;
    text-align: left;
    color: black;
    text-decoration: none;
    -webkit-user-select:none;
    &:hover{
        color: #43A953;
    }
`;

// 네비게이션바에 로그인 관련 버튼들이다. 일단 이건 기본 틀이다. //0
const LogBtn = styled(Link)`
    position: fixed;
    width: 146px;
    height: 61px;
    border-radius: 12px;
    font-family: Pretendard;
    font-size: 25px;
    font-weight: 500;
    line-height: 29.83px;
    text-align: center;
    align-content: center;
    justify-content: center;
    -webkit-user-select:none;
    cursor: pointer;
    text-decoration: none;
`;

// 로그인버튼이다. 위치값은 고정한다. //1
const LogInBtn = styled(LogBtn)`
    right: 206px;
    background-color: #FFFFFF;
    color: #000000;
    border: 1px solid black;
    @media screen and (max-width: 1200px) {
        left: max(630px, 70vw);
    }
`;

// 회원가입버튼이다. 위치값은 고정한다. //1
const LogJoinBtn = styled(LogBtn)`
    right: 50px;
    background-color: #000000;
    color: #FFFFFF;
    @media screen and (max-width: 1200px) {
        left: max(786px, 70vw + 156px);
    }
`;

// 로그아웃버튼이다. 위치값은 고정한다. //1
const LogOutBtn = styled(LogBtn)`
    right: 50px;
    background-color: #FFFFFF;
    color: #000000;
    @media screen and (max-width: 1200px) {
        left: max(786px, 70vw + 156px);
    }
`;

// 네비게이션바이다.
export default function NavBar(): JSX.Element{
    const [isLogin, setIsLogin] = useState(Boolean);// 이 값만 움직이면 nav바가 알아서 맞춰준다
    let LogButton : () => React.JSX.Element; // 로그인,로그아웃,회원가입등을 나타내는 버튼에 공간

    if(isLogin){ // 로그인 인자에 따른 값분할
        LogButton = ()=>(<>
            <LogOutBtn href={'/'}>로그아웃</LogOutBtn>
        </>);
    }else{
        LogButton = ()=>(<>
            <LogInBtn href={'/login'}>로그인</LogInBtn>
            <LogJoinBtn href={'/signup'}>회원가입</LogJoinBtn>
        </>);
    }

    return (
        <PerfectNavDiv>
            <ListBigDiv>
                <ListSmallDiv>
                    <List href={''}>출결</List>
                    <List href={'/application'}>신청</List>
                    <List href={''}>공지</List>
                    <List href={''}>MY</List>
                </ListSmallDiv>
            </ListBigDiv>
            <LogButton></LogButton>
            <LogoImg as='img' src={'/logo.svg'} alt='logo'/>
        </PerfectNavDiv>
    );
}