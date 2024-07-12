"use client"

import Link from 'next/link';
import * as S from '../../../stylesheets/index';
import axios, { AxiosInstance } from 'axios';
import { apiInstanceWithCredential } from '../../../apis/api'
import { useEffect, useState } from "react";


export default function NoticeAdminAddition() {

    const [notices, setNotices] = useState<any[]>([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [current, setCurrent] = useState<{ title: string, content: string, created_at: string}>();
    useEffect(() => {
        const fetchNotices = async () => {
            const source = await apiInstanceWithCredential.get('/api/notices')
            setNotices(source.data)
        }
d
        fetchNotices()
    }, [])
    
    const handleNoticeSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (title.trim() !== '' && content.trim() !== '') {
            const newNotice = {
                id: notices.length + 1,
                title,
                content,
            };
    
            setNotices([newNotice, ...notices]);
            setTitle('');
            setContent('');
        }
        try{
            const response = await apiInstanceWithCredential.post('/api/notices', {
                title,
                content
            })

            console.log(response.status)
        }catch (error){
            console.error(error)
        }
    };

    return (
        <S.Background>
            <S.NoticeListBackground>
                <S.NoticeHeader>
                    <S.NoticeListText>공지</S.NoticeListText>
                    <S.NoticeListA href="./addition">
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
                            value={content} 
                            onChange={(e) => setContent(e.target.value)} 
                        /> 
                        <br />
                        <S.NoticeButtonWrite type="submit">등록</S.NoticeButtonWrite>
                        <S.NoticeButtonBack href="../admin">돌아가기</S.NoticeButtonBack>
                    </S.NoticeForm>
                </S.NoticeListDetailContainer>
            </S.NoticeListDetail>
        </S.Background>
    );
}
