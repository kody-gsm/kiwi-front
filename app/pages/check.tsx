import React, { useState } from 'react';
import * as S from "../stylesheets/check";
import User from "../component/User";
import FilterComponent from "../component/Filter";
import axios from 'axios';
import { Student, FilterCriteria } from '../component/types';

const Check: React.FC = () => {
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);

  const applyFilter = async (criteria: FilterCriteria) => {
    try {
      const response = await axios.post('/api/filter', criteria);

      // API 응답에서 필요한 데이터를 추출하여 setFilteredStudents 호출
      setFilteredStudents(response.data.students.map((student: any) => ({
        id: student.id,
        studentimg: student.studentimg,
        studentid: student.studentid,
        studentnumber: student.studentnumber,
        gender: student.gender,
        status: student.status // 이미 문자열 형태로 받아와서 변환할 필요 없음
      })));
    } catch (error) {
      console.error('Error applying filter:', error);
      // Handle error
    }
  };

  return (
    <S.main>
      <FilterComponent onApplyFilter={applyFilter} />
      {filteredStudents.map(student => (
        <User key={student.id} student={student} />
      ))}
    </S.main>
  );
};

export default Check;
