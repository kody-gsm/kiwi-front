import styled from "styled-components";

export const Background = styled.div`
    width: 100%;
    max-width: 1500px;
    margin: 180px auto 50px auto;
    display: flex;
    justify-content: center;
`;

export const NoticeListBackground = styled.div`
    width: 300px;
    height: 650px;
    border: 1px solid #999;
    background-color: #FFFFFF;
    border-radius: 7px;
    margin: 10px;
    padding: 10px;
    overflow-y: auto; /* 공지사항 목록이 넘칠 때 스크롤 활성화 */
`;

export const NoticeHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NoticeListDetail = styled.div`
    width: 1200px;
    height: 650px;
    border: 1px solid #999;
    background-color: #FFFFFF;
    border-radius: 7px;
    margin: 10px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NoticeListText = styled.strong`
    font-size: 20px;
`;

export const NoticeListDetailContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const NoticeListDetailImg = styled.img`
    max-width: 100%;
    height: auto;
`;

export const NoticeListDetailP = styled.p`
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px;
`;

export const NoticeListA = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border: 1.5px solid #000;
    border-radius: 4px;
`;

export const PlusButton = styled.span`
    font-size: 15px;
`;

export const NoticeForm = styled.form`
    width: 100%;
    height: 550px;
    border: 1px solid #999;
    background-color: #F7F7F7;
    border-radius: 7px;
    margin: 12px;
    margin-top: 70px;
`;

export const NoticeTitleInput = styled.input`
    width: 100%;
    max-width: 900px;
    height: 50px;
    margin-top: 10px;
    font-size: 25px;
`;

export const NoticeBodyInput = styled.textarea`
    font-size: 17px;
    width: 100%;
    max-width: 900px;
    height: 400px;
    margin-top: 10px;
    resize: none;
    font-weight: bold;
`;

export const NoticeButtonWrite = styled.button`
    margin-top: 20px;
    background: #6AD37B;
    border-radius: 3px;
    color: #FFFFFF;
    width: 70px;
    padding: 5px 5px;
`;

export const NoticeButtonBack = styled.a`
    margin-left: 15px;
    background: #6AD37B;
    border-radius: 3px;
    color: #FFFFFF;
    display: inline-block; /* 인라인 요소로 설정하여 텍스트 너비만큼만 차지하도록 변경 */
    padding: 5px 5px;
    font-size: 16px; /* 폰트 크기 설정 */
`

export const NoticeBody = styled.div`
    display: flex;
    flex-direction: column; /* 세로로 쌓이도록 설정 */
    overflow-y: auto; /* 공지사항 목록이 넘칠 때 스크롤 활성화 */
`;

export const NoticeList = styled.div`
    width: 100%;
    max-width: 250px;
    border: 1px solid #999;
    background-color: #F7F7F7;
    border-radius: 7px;
    margin: 10px auto; /* Updated margin to center horizontally */
    padding: 10px;

    h3 {
        margin-bottom: 5px; /* 제목과 내용 사이 간격 설정 */
    }

    p {
        display: none; /* 내용 숨김 */
    }
`;