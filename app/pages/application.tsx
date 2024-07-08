import axios from 'axios';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import NavBar from '../component/navbar';
import { format } from 'path';

// 일반 계정 사용자와 관리자 계정 사용자를 동시에 수합 할수 있도록 만들었기에, 용량이 쪼~~~~끔 클 수도 있다.

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
    position: absolute;
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

// form 기초 레이아웃 바탕이다. //0
const FormBox = styled.form`
    position: absolute;
    display: flex;
    background-color: #FFFFFF;
    left: calc(44vw + 80px);
    width: 50vw;
    border-radius: 20px;
    border: 1px solid #E0E0E0;
    height: 71vh;
    top: 200px;
`;

// form의 버튼 컨테이너이다. //0
const FormBtnContainer = styled.div`
    position: absolute;
    display: grid;
    width: 220px;
    height: 41px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 20px;
    bottom: 30px;
    right: 40px;
`;

// form의 버튼 초석이다. //0
const FormBtn = styled.input`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    outline: 0px;
    cursor: pointer;
    user-select: none;
    color: white;
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 700;
    line-height: 23.87px;
    text-align: center;
    border-radius: 10px;
`;

// form의 제목이다. //0
const FormSubject = styled.input`
    position: absolute;
    display: flex;
    width: 80%;
    height: 70px;
    top: 30px;
    left: 28px;
    font-family: Pretendard;
    font-size: 55px;
    font-weight: 700;
    text-align: left;
    text-overflow: ellipsis;
    
    &::placeholder{
        color: black;
    }
`;

// form의 내용이다. //0
const FormContent = styled.textarea`
    position: absolute;
    display: flex;
    width: 80%;
    height: 60%;
    top: 130px;
    left: 28px;
    font-family: Pretendard;
    font-size: 40px;
    font-weight: 700;
    line-height: 47.73px;
    text-align: left;
    text-overflow: ellipsis;
`;

// 기능반 소속 목록이다. //0
const FormBelong = styled.select`
    position: absolute;
    display: flex;
    width: 100px;
    height: 31px;
    right: 30px;
    border: 1px solid #E0E0E0;
    border-radius: 5px;
    top: 44px;
    color: black;
    font-family: Pretendard;
    font-size: 15px;
    font-weight: 700;
    line-height: 17.9px;
    text-align: left;
    cursor: pointer;
`

// 인정결석 날짜 컨테이너이다. //0
const FormDateContainer = styled.div`
    position: absolute;
    display: grid;
    width: 25%;
    min-width: 112px;
    grid-template-columns: 10fr 1fr 10fr;
    grid-template-rows: 1fr;
    gap: 10px;
    top: 44px;
    right: 30px;
    height: 32px;
`;

// 인정결석 날짜이다. //0
const FormDate = styled.input`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: 1px solid black;
    cursor: pointer;
    font-family: Pretendard;
    font-size: 15px;
    font-weight: 700;
    line-height: 17.9px;
    text-align: left;
`;

// 보이지않는 입력칸이다. (백엔드에 데이터를 보내야하는데 유저에게는 안보이는 데이터) //0
const NONDisplayInput = styled.input`
    display: none;
`;

// 데이터가 없을때 보여지는 x표시의 정렬바탕이다. //0
const NothingHere = styled.div`
    position: fixed;
    display: flex;
    width: 100vw;
    height: calc(100vh - 152px);
    top: 152px;
    left: 0px;
    margin: 0px;
    padding: 0px;
    justify-content: center;
    align-items: center;
    user-select: none;
`;

// 데이터가 없을때 보여지는 x표시의 이미지이다. //0
const NothingHereImg = styled.img`
    position: relative;
    display: flex;
    width: 200px;
    height: 200px;
    object-fit: fill;
    user-select: none;
`;

// 데이터가 없을때 보여지는 x표시 아래 글자이다. //0
const NothingHereText = styled.div`
    position: absolute;
    display: flex;
    width: 50vw;
    min-width: 300px;
    height: 50px;
    top: 60vh;
    font-family: 'Jalnan2TTF';
    font-size: 35px;
    font-weight: 400;
    text-align: center;
    align-items: center;
    justify-content: center;
    line-height: 66px;
    color: gray;
`;

// 데이터가 있을경우 신청된 요소 목록이다. //0
const AdminDataContainer = styled.div`
    position: absolute;
    display: grid;
    width: 34vw;
    min-width: 500px;
    height: 71vh;
    min-height: 400px;
    grid-template-columns: 1fr;
    overflow-y: scroll;
    gap: 30px;
    top: 200px;
    left: 40px;
`;

// 데이터가 있을경우 신청되 요소이다. //1
const AdminData = styled(ApplicationBtn)`
    height: 140px;
    border-radius: 13.4px;
`;

// 어드민용 메달 그림이다. (기능반) //1
const AdminMedal = styled(ImgRoot)`
    //width: 115px;
    //left: 37px;
    width: 77px;
    left: 24px;
`;

// 어드민용 문서 그림이다. (인정결석) //1
const AdminDoc = styled(ImgRoot)`
    //width: 100px;
    //left: 44px;
    width: 62px;
    left: 37px;
`;

// 어드민용 에러 그림이다. (서비스 오류) //1
const AdminSError = styled(ImgRoot)`
    //width: 140px;
    //left: 25px;
    width: 102px;
    left: 18px;
`;

// 어드민용 큰 글씨 초석이다. //1
const AdminBigText = styled(BigText)`
    left: 109px;
    font-size: 36px;
    top: 20px;
`;

// 어드민용 작은 글씨 초석이다. //1
const AdminSmallText = styled(SmallText)`
    left: 109px;
    font-size: 13px;
    top: 93px;
`;

// 어드민용 신청자 정보모음. //0
const AdminProposer = styled.div`
    position: absolute;
    display: grid;
    right: 30px;
    top: 10px;
    width: 140px;
    height: 50px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    font-size: 20px;
    font-weight: 700;
    line-height: 23.87px;
    text-align: left;
    text-overflow: ellipsis;
`;

// 신청 페이지
export default function Application(): JSX.Element{
    // 페이지 내부 분할 변수 ( + 신청 목록 )
    const [page, setPage] = useState(0);

    // 어드민 계정용 페이지로 (4(데이터 없음),5(데이터 있음))
    // if(){
    //     
    // }

    // 제목
    const [applicationObj, setApplicationObj] = useState('');
    const settingApplicationObj = (eventProp: React.ChangeEvent<HTMLInputElement>) => { setApplicationObj(eventProp.target.value) }

    // 내용
    const [applicationContent, setApplicationContent] = useState('');
    const settingApplicationContent = (eventProp: React.ChangeEvent<HTMLTextAreaElement>) => { setApplicationContent(eventProp.target.value) }

    // 기능반 소속
    const [applicationBelong, setApplicatoinBelong] = useState('소속');
    const settingApplicationBelong = (eventProp: React.ChangeEvent<HTMLSelectElement>) => { setApplicatoinBelong(eventProp.target.value) }
    
    // 인정결석 시작 날짜
    const [applicationStartDate, setApplicationStartDate] = useState('');
    const settingApplicationStartDate = (eventProp: React.ChangeEvent<HTMLInputElement>) => { setApplicationStartDate(eventProp.target.value) }

    // 인정결석 끝 날짜
    const [applicationEndDate, setApplicationEndDate] = useState('');
    const settingApplicationEndDate = (eventProp: React.ChangeEvent<HTMLInputElement>) => { setApplicationEndDate(eventProp.target.value) }

    // 전체 저장 내용을 초기화
    const resetBaseForm = () => { setApplicationObj(''); setApplicationContent(''); setApplicatoinBelong('소속'); setApplicationStartDate(''); setApplicationEndDate('')}

    // 제출
    const SubmitApplication = async (event:any) =>{
        event.preventDefault();
        const start = new Date(Number(applicationStartDate.slice(0,4)), Number(applicationStartDate.slice(5,7))-1, Number(applicationStartDate.slice(8,10)));
        const end = new Date(Number(applicationEndDate.slice(0,4)), Number(applicationEndDate.slice(5,7))-1, Number(applicationEndDate.slice(8,10)));

        if(page === 1 && applicationBelong == '소속'){
            alert('소속을 선택해주세요');
            return false;
        }else if(page === 2 && start>end){
            alert('시간을 역행하지 말아주세요');
            return false;
        }
        
        try{
            // 주소, 데이터 등등에 백엔드 협업
            alert('성공적으로 전송 하였습니다.');
        }catch(error: any){
            console.error(error);
        }

        
    }
    
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


            <FormBox method='post' onSubmit={SubmitApplication}>
                <FormSubject 
                id='applicationObj' 
                placeholder='제목을 입력해주세요'
                value={applicationObj} 
                onChange={settingApplicationObj} 
                maxLength={20}
                required/>
                <FormContent
                id='applicationContent'
                placeholder='내용을 입력해주세요'
                value={applicationContent}
                onChange={settingApplicationContent}
                maxLength={100}
                required/>

                <FormBelong
                id='belong' 
                value={applicationBelong}
                onChange={settingApplicationBelong}
                required>
                    <option value={'소속'} defaultValue={'소속'}>소속</option>
                    <option value={'게임개발'}>게임개발</option>
                    <option value={'사이버보안'}>사이버보안</option>
                    <option value={'모바일로보틱스'}>모바일로보틱스</option>
                    <option value={'IT네트워크'}>IT네트워크</option>
                    <option value={'클라우드'}>클라우드</option>
                </FormBelong>

                <FormBtnContainer>
                    <FormBtn type='reset' style={{backgroundColor: '#D23B3B'}} value={'취소'} onClick={resetBaseForm}/>
                    <FormBtn type='submit' style={{backgroundColor: '#2B80FF'}} value={'확인'}/>
                </FormBtnContainer>
            </FormBox>
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
            

            <FormBox method='post'  onSubmit={SubmitApplication}>
                <FormSubject 
                style={{width: '62%'}}
                id='applicationObj' 
                placeholder='제목을 입력해주세요'
                value={applicationObj} 
                onChange={settingApplicationObj} 
                maxLength={20} 
                required/>
                <FormContent
                id='applicationContent'
                placeholder='내용을 입력해주세요'
                value={applicationContent}
                onChange={settingApplicationContent}
                maxLength={100}
                required/>

                <FormDateContainer>
                    <FormDate id='applicationStartDate' type='date' value={applicationStartDate} onChange={settingApplicationStartDate} required/>
                    <>~</>
                    <FormDate id='applicationEndDate' type='date' value={applicationEndDate} onChange={settingApplicationEndDate} required/>
                </FormDateContainer> 

                <FormBtnContainer>
                    <FormBtn type='reset' style={{backgroundColor: '#D23B3B'}} value={'취소'} onClick={resetBaseForm}/>
                    <FormBtn type='submit' style={{backgroundColor: '#2B80FF'}} value={'확인'}/>
                </FormBtnContainer>
            </FormBox>
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
            

            <FormBox method='post'  onSubmit={SubmitApplication}>
                <FormSubject 
                id='applicationObj' 
                placeholder='제목을 입력해주세요'
                value={applicationObj} 
                onChange={settingApplicationObj} 
                maxLength={20} 
                required/>
                <FormContent
                id='applicationContent'
                placeholder='내용을 입력해주세요'
                value={applicationContent}
                onChange={settingApplicationContent}
                maxLength={100}
                required/>
                <FormBtnContainer>
                    <FormBtn type='reset' style={{backgroundColor: '#D23B3B'}} value={'취소'} onClick={resetBaseForm}/>
                    <FormBtn type='submit' style={{backgroundColor: '#2B80FF'}} value={'확인'}/>
                </FormBtnContainer>
            </FormBox>
        </WhiteTheme>
        <NavBar></NavBar></>);
    }else if(page === 4){ // 4번 (어드민 보기, 데이터 없음)
        ELEMENT = (<>
            <WhiteTheme>
                <NothingHere>
                    <NothingHereImg src='/nothing.png'/>
                    <NothingHereText>신청된 데이터가 없습니다.</NothingHereText>
                </NothingHere>
            </WhiteTheme>
        <NavBar></NavBar></>);
    }else if(page === 5){ // 5번 (어드민 보기, 데이터 있음)
        ELEMENT = (<>
            <WhiteTheme>
                <AdminDataContainer>
                    <AdminData>
                        <AdminMedal src='/medal.png'/>
                        <AdminBigText>기능반</AdminBigText>
                        <AdminSmallText>대회 준비 등으로 수업을 빠지고 대회 준비를 하는 기능반 학생들을 위한 신청</AdminSmallText>
                        <AdminProposer>
                            <>신청자:김부각</>
                            <>학번:1234</>
                        </AdminProposer>
                    </AdminData>
                    <AdminData>
                        <AdminDoc src='/doc.png'/>
                        <AdminBigText>인정 결석</AdminBigText>
                        <AdminSmallText>현장체험학습 등 인정 결석이 필요한 경우를 위한 신청</AdminSmallText>
                        <AdminProposer>
                            <>신청자:석박사</>
                            <>학번:5678</>
                        </AdminProposer>
                    </AdminData>
                    <AdminData>
                        <AdminSError src='/sError.png'/>
                        <AdminBigText>서비스 오류</AdminBigText>
                        <AdminSmallText>Kiwi 서비스에 대한 오류에 대한 의견이 있는 경우 신청</AdminSmallText>
                        <AdminProposer>
                            <>신청자:나비다</>
                            <>학번:9012</>
                        </AdminProposer>
                    </AdminData>


                    <AdminData>
                        <AdminMedal src='/medal.png'/>
                        <AdminBigText>기능반</AdminBigText>
                        <AdminSmallText>대회 준비 등으로 수업을 빠지고 대회 준비를 하는 기능반 학생들을 위한 신청</AdminSmallText>
                        <AdminProposer>
                            <>신청자:김부각</>
                            <>학번:1234</>
                        </AdminProposer>
                    </AdminData>
                    <AdminData>
                        <AdminDoc src='/doc.png'/>
                        <AdminBigText>인정 결석</AdminBigText>
                        <AdminSmallText>현장체험학습 등 인정 결석이 필요한 경우를 위한 신청</AdminSmallText>
                        <AdminProposer>
                            <>신청자:석박사</>
                            <>학번:5678</>
                        </AdminProposer>
                    </AdminData>
                    <AdminData>
                        <AdminSError src='/sError.png'/>
                        <AdminBigText>서비스 오류</AdminBigText>
                        <AdminSmallText>Kiwi 서비스에 대한 오류에 대한 의견이 있는 경우 신청</AdminSmallText>
                        <AdminProposer>
                            <>신청자:나비다</>
                            <>학번:9012</>
                        </AdminProposer>
                    </AdminData>
                    <AdminData>
                        <AdminMedal src='/medal.png'/>
                        <AdminBigText>기능반</AdminBigText>
                        <AdminSmallText>대회 준비 등으로 수업을 빠지고 대회 준비를 하는 기능반 학생들을 위한 신청</AdminSmallText>
                        <AdminProposer>
                            <>신청자:김부각</>
                            <>학번:1234</>
                        </AdminProposer>
                    </AdminData>
                    <AdminData>
                        <AdminDoc src='/doc.png'/>
                        <AdminBigText>인정 결석</AdminBigText>
                        <AdminSmallText>현장체험학습 등 인정 결석이 필요한 경우를 위한 신청</AdminSmallText>
                        <AdminProposer>
                            <>신청자:석박사</>
                            <>학번:5678</>
                        </AdminProposer>
                    </AdminData>
                    <AdminData>
                        <AdminSError src='/sError.png'/>
                        <AdminBigText>서비스 오류</AdminBigText>
                        <AdminSmallText>Kiwi 서비스에 대한 오류에 대한 의견이 있는 경우 신청</AdminSmallText>
                        <AdminProposer>
                            <>신청자:나비다</>
                            <>학번:9012</>
                        </AdminProposer>
                    </AdminData>
                </AdminDataContainer>
            </WhiteTheme>
        <NavBar></NavBar></>);
    }else{
        console.error("error: 9와1/4선택지로 인하여 마법부에서 페이지를 삭제하였습니다. (pageError)");
    }
    
    return(
        ELEMENT
    );
}