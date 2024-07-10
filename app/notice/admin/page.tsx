"use client"

import Link from "next/link";
import * as S from "../../stylesheets/index"

export default function NoticeAdmin() {
    return (
        <S.Background>
            <S.NoticeListBackground>
                <S.NoticeHeader>
                    <S.NoticeListText>공지</S.NoticeListText>
                    <S.NoticeListA href="/notice/admin/addition/">
                        <S.PlusButton>+</S.PlusButton>
                    </S.NoticeListA>
                  
                </S.NoticeHeader>
                <S.NoticeBody>
                    <S.NoticeList>

                    </S.NoticeList>
                </S.NoticeBody>

            </S.NoticeListBackground>

            <S.NoticeListDetail>
                <S.NoticeListDetailContainer>
                    <S.NoticeListDetailImg src="/x-circle.png" />
                    <S.NoticeListDetailP>공지사항을 선택해주세요.</S.NoticeListDetailP>
                </S.NoticeListDetailContainer>
            </S.NoticeListDetail>
        </S.Background>
    );
}