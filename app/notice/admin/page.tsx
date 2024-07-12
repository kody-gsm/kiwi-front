"use client"

import { useEffect, useState } from "react";
import { apiInstanceWithCredential } from "../../apis/api";
import * as S from "../../stylesheets/index"
import Link from "next/link";

export default function NoticeAdmin() {

    const [notices, setNotices] = useState<any[]>([]);
    const [current, setCurrent] = useState<{ title: string, content: string, created_at: string}>();

    useEffect(() => {
        const fetchNotices = async () => {
            const source = await apiInstanceWithCredential.get('/api/notices')
            setNotices(source.data)
        }

        fetchNotices()
    }, [])

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
                    {notices.map((notice) => (
                        <S.NoticeList key={notice.id} onClick={() => {
                            setCurrent({
                                title: notice.title,
                                content: notice.content,
                                created_at: notice.created_at
                            })
                        }}>
                            <h3>{notice.title}</h3>
                            {/* 내용을 보이지 않도록 설정 */}
                        </S.NoticeList>
                    ))}
                </S.NoticeBody>

            </S.NoticeListBackground>

            <S.NoticeListDetail>
                <S.NoticeListDetailContainer>
                    {
                        current === undefined ? <div>
                            <S.NoticeListDetailImg src="/x-circle.png" />
                    <S.NoticeListDetailP>공지사항을 선택해주세요.</S.NoticeListDetailP>
                    </div> : <S.NoticeDetailBack>
                        <S.Noticetitle>{current.title}</S.Noticetitle>
                        <p>{current.created_at}</p> 
                        <S.NoticeContent>{current.content}</S.NoticeContent>
      d                  <S.EditLink href="admin/edit">수정하기</S.EditLink>
                        <form>
                            <S.DeletdButton type="submit">삭제하기</S.DeletdButton>
                        </form>
                        </S.NoticeDetailBack>
                    }
                </S.NoticeListDetailContainer>
            </S.NoticeListDetail>
        </S.Background>
    );
}