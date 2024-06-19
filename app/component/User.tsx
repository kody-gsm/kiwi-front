import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from "../stylesheets/check";

export default function User() {
    const [student, setStudent] = useState({
        studentimg: '',
        studentid: '',
        studentnumber: '',
        gender: ''
    });

    useEffect(() => {
        axios.get('/api/student')
            .then(response => {
                setStudent({
                    studentimg: response.data.studentimg,
                    studentid: response.data.studentid,
                    studentnumber: response.data.studentnumber,
                    gender: response.data.gender
                });
            })
            .catch(error => {
                console.error("못 받았다. ㅄ야", error);
            });
    }, []);

    return (
        <S.student>
            <S.gap />
            <S.studentimg src={student.studentimg || "/profile.png"} />
            <S.studentid>{student.studentid}</S.studentid>
            <S.studentdata>
                <S.studentnumber>학번 : {student.studentnumber}</S.studentnumber>
                <S.gender>{student.gender}</S.gender>
            </S.studentdata>
        </S.student>
    );
}
