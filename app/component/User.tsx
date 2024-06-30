import React from 'react';
import * as S from "../stylesheets/check";
import { Student } from './types';

interface UserProps {
  student: Student;
}

const User: React.FC<UserProps> = ({ student }) => {
  // 학번 변환 함수
  const formatStudentId = (grade: number, cls: number, id: number): string => {
    return `${grade}${cls}${id.toString().padStart(2, '0')}`;
  };

  return (
    <S.student>
      <S.gap />
      <S.studentimg src={student.studentimg || "/profile.png"} />
      <S.studentid>{formatStudentId(student.grade, student.class, student.id)}</S.studentid>
      <S.studentdata>
        <S.studentnumber>학번 : {formatStudentId(student.grade, student.class, student.id)}</S.studentnumber>
        <S.gender>{student.status}</S.gender>
      </S.studentdata>
    </S.student>
  );
};

export default User;
