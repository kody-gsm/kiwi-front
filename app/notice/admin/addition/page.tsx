"use client"

import Link from "next/link";
import * as S from "../../../stylesheets/index"
import { useState } from "react";

export default function NoticeAdminAddition() {
    const [notices, setNotices] = useState<any[] | null>(null)

    return (
        <S.Background>
            <S.NoticeListBackground>
                <S.NoticeHeader>
                    <S.NoticeListText>공지</S.NoticeListText>
                    <S.NoticeListA href="./addition/page.tsx">
                        <S.PlusButton>+</S.PlusButton>
                    </S.NoticeListA>

                </S.NoticeHeader>
                <S.NoticeBody>
                    <S.NoticeList>
                        {notices?.map((notice) => (
                            <div key={notice.id}>
                                <h3>{notice.title}</h3>
                                <p>{notice.body}</p>
                            </div>
                        ))}
                    </S.NoticeList>
                </S.NoticeBody>
            </S.NoticeListBackground>

            <S.NoticeListDetail>
                <S.NoticeListDetailContainer>
                    <S.NoticeForm>
                        <S.NoticeTitleInput type="text" placeholder="제목 입력" /> <br />
                        <S.NoticeBodyInput placeholder="내용 입력 " /> <br />
                        <S.NoticeFormWrite>등록</S.NoticeFormWrite>
                    </S.NoticeForm>
                </S.NoticeListDetailContainer>
            </S.NoticeListDetail>
        </S.Background>
    );
}