import React, { useState } from 'react';
import * as S from "../stylesheets/check";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { FilterCriteria, Student } from './types';

interface FilterProps {
  onApplyFilter: (students: Student[]) => Promise<void>;
}

const getStatusString = (status: '출석' | '외출' | '조퇴' | '결석'): 'ATTENDANCE' | 'OUTING' | 'LEAVE' | 'ABSENT' => {
  switch (status) {
    case '출석':
      return 'ATTENDANCE';
    case '외출':
      return 'OUTING';
    case '조퇴':
      return 'LEAVE';
    case '결석':
      return 'ABSENT';
    default:
      throw new Error('Invalid status');
  }
};

const Filter: React.FC<FilterProps> = ({ onApplyFilter }) => {
  const [open, setOpen] = useState(false);
  const [selectedGrades, setSelectedGrades] = useState<number[]>([]);
  const [selectedClasses, setSelectedClasses] = useState<number[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<('ATTENDANCE' | 'OUTING' | 'LEAVE' | 'ABSENT')[]>([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const toggleGrade = (grade: number) => {
    setSelectedGrades((prev) =>
      prev.includes(grade) ? prev.filter((g) => g !== grade) : [...prev, grade]
    );
  };

  const toggleClass = (cls: number) => {
    setSelectedClasses((prev) =>
      prev.includes(cls) ? prev.filter((c) => c !== cls) : [...prev, cls]
    );
  };

  const toggleStatus = (status: '출석' | '외출' | '조퇴' | '결석') => {
    setSelectedStatuses((prev) =>
      prev.includes(getStatusString(status)) ? prev.filter((s) => s !== getStatusString(status)) : [...prev, getStatusString(status)]
    );
  };

  const handleApply = async () => {
    try {
      const gradesSum = selectedGrades.reduce((sum, grade) => sum + grade * 1000, 0);
      const classesSum = selectedClasses.reduce((sum, cls) => sum + cls * 100, 0);
      const criteria: FilterCriteria = {
        grades: gradesSum ? [gradesSum] : [],
        classes: classesSum ? [classesSum] : [],
        statuses: selectedStatuses,
      };

      const response = await axios.post('/api/filter', criteria);

      onApplyFilter(response.data.students.map((student: any) => ({
        id: student.id,
        studentimg: student.studentimg,
        studentid: student.studentid,
        studentnumber: student.studentnumber,
        gender: student.gender,
        status: student.status
      })));

      handleClose();
    } catch (error) {
      console.error('Error applying filter:', error);
      // Handle error
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>필터</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <S.filterbox>
          <S.grade>
            {[1, 2, 3].map((grade) => (
              <S.filterlist key={grade}>
                <S.filterspan
                  onClick={() => toggleGrade(grade)}
                  isSelected={selectedGrades.includes(grade)}
                >
                  {grade}학년
                </S.filterspan>
              </S.filterlist>
            ))}
          </S.grade>
          <S.classes>
            {[1, 2, 3, 4].map((cls) => (
              <S.filterlist key={cls}>
                <S.filterspan
                  onClick={() => toggleClass(cls)}
                  isSelected={selectedClasses.includes(cls)}
                >
                  {cls}반
                </S.filterspan>
              </S.filterlist>
            ))}
          </S.classes>
          <S.state>
            {['출석', '외출', '조퇴', '결석'].map((status) => (
              <S.filterlist key={status}>
                <S.filterspan
                  onClick={() => toggleStatus(status as '출석' | '외출' | '조퇴' | '결석')}
                  isSelected={selectedStatuses.includes(getStatusString(status as '출석' | '외출' | '조퇴' | '결석'))}
                >
                  {status}
                </S.filterspan>
              </S.filterlist>
            ))}
          </S.state>
          <Button onClick={handleApply}>확인</Button>
        </S.filterbox>
      </Modal>
    </div>
  );
};

export default Filter;
