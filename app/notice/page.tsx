"use client"

import NavBar from "../component/navbar";
import * as S from "../stylesheets/index"

export default function Notice() {
    return (
        <S.Background>
            <S.NoticeListBackground>
                <S.NoticeListText>공지</S.NoticeListText>
                {/* 공지 목록이 들어갈 자리 */}
            </S.NoticeListBackground>

            <S.NoticeListDetail>
                <S.NoticeListDetailContainer>
                    <S.NoticeListDetailImg src="x-circle.png" />
                    <S.NoticeListDetailP>공지사항을 선택해주세요.</S.NoticeListDetailP>
                </S.NoticeListDetailContainer>
            </S.NoticeListDetail>
            <NavBar></NavBar>
        </S.Background>
    );
}