import styled from "styled-components";

export const main = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`

export const container = styled.div`
    width: 80%;
    display: flex;
    justify-content: flex-start;
    padding: 42px;
    gap: 30px;
    flex-wrap: wrap;
`

export const student = styled.div`
    width: 17vw;
    height: 38svh; //학번용 29
    background-color: white;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    align-items: center;
`

export const studentimg = styled.img`
    width: 50%;
    height: 40%;
    object-fit: scale-down;
`

export const studentid = styled.p`
    font-weight: bold;
    font-size: x-large;
`

export const studentdata = styled.div`
    width: 80%;
    justify-content:flex-start;
    display: flex;
    flex-direction: column;

`

export const studentnumber = styled.p`
    font-weight: bold;
    font-size: medium;
`

export const gender = styled.div`
    width: 30%;
    height: 50%;
    background-color: #2B80FF;
    color: white;
    font-weight: bold;
    align-items: center;
    text-align: center;
`

export const gap = styled.div`
    height: 10px;
`

export const filterbox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  height: 50%;
  background-color: white;
  border-radius: 20px;
  box-Shadow: 24;
`

export const filterlist = styled.div`
    width: 15%;
    height: 10%;
    background-color: #D3D3D3;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
`

//id, email, =>