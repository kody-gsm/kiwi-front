"use client"

import Link from "next/link";
import * as S from "../../../stylesheets/index";
import { useState } from "react";

export default function NoticeAdminAddition() {
    const [notices, setNotices] = useState<{ id: number; title: string; body: string }[]>([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleNoticeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (title.trim() !== '' && body.trim() !== '') {
            const newNotice = {
                id: notices.length + 1,
                title,
                body,
            };

            setNotices([newNotice, ...notices]);
            setTitle('');
            setBody('');
        }
    };

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
                    {notices.map((notice) => (
                        <S.NoticeList key={notice.id}>
                            <h3>{notice.title}</h3>
                            {/* 내용을 보이지 않도록 설정 */}
                        </S.NoticeList>
                    ))}
                </S.NoticeBody>
            </S.NoticeListBackground>

            <S.NoticeListDetail>
                <S.NoticeListDetailContainer>
                    <S.NoticeForm onSubmit={handleNoticeSubmit}>
                        <S.NoticeTitleInput 
                            type="text" 
                            placeholder="제목 입력" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                        /> 
                        <br />
                        <S.NoticeBodyInput 
                            placeholder="내용 입력" 
                            value={body} 
                            onChange={(e) => setBody(e.target.value)} 
                        /> 
                        <br /> 
                        <S.NoticeFormWrite type="submit">등록</S.NoticeFormWrite>
                    </S.NoticeForm>
                </S.NoticeListDetailContainer>
            </S.NoticeListDetail>
        </S.Background>
    );
}