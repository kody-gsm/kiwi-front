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

      setFilteredStudents(response.data.students.map((student: any) => ({
        id: student.id,
        studentimg: student.studentimg,
        studentid: student.studentid,
        studentnumber: student.studentnumber,
        gender: student.gender,
        status: student.status
      })));
    } catch (error) {
      console.error('필터 관련 에러:', error);
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
