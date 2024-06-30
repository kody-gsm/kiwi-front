import styled from 'styled-components';

export const filterbox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  outline: none;
`;

export const grade = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const classes = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const state = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const filterlist = styled.div`
  margin-right: 10px;
`;

export const filterspan = styled.span<{ isSelected: boolean }>`
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ${({ isSelected }) => (isSelected ? 'blue' : 'white')};
  color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
  &:hover {
    background-color: lightgray;
  }
`;

export const main = styled.div`
  padding: 20px;
`;

export const student = styled.div`
  margin-bottom: 20px;
`;

export const gap = styled.div`
  margin-bottom: 10px;
`;

export const studentimg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const studentid = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const studentdata = styled.div`
  font-size: 14px;
`;

export const studentnumber = styled.div``;

export const gender = styled.div``;


