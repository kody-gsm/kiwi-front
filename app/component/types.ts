export interface Student {
  id: number;
  name: string;
  grade: number;
  class: number;
  status: '출석' | '외출' | '조퇴' | '결석'; // 문자열 형태로 상태 정의
  studentimg?: string;
  studentnumber?: string;
  studentid?: string;
  gender?: string;
}

export interface FilterCriteria {
  grades: number[]; // 학년
  classes: number[]; // 반
  statuses: ('ATTENDANCE' | 'OUTING' | 'LEAVE' | 'ABSENT')[]; // 상태
}

export interface BaseApplication {
  
}