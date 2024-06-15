import styled from "styled-components";

export const form = styled.div`
    width: 70vw;
    height: 60vh;
    background-color: #f5f5f5;
    display : flex;
    justify-content: center;
    align-items : center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    gap: 40px;
`

export const studentlist = styled.div`
    padding: 20px;
    width: 65%;
    height: 90%;
    background-color: #FFFFFF;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    box-shadow: 5px 5px 13px #7090B020;
    overflow: auto;
    border-radius: 20px;
    gap: 40px;
}
`

export const tab = styled.div`
    width: 25%;
    height: 90%;
    background-color: white;
    display: flex;
    box-shadow: 5px 5px 13px #7090B020;
}
`

export const student = styled.div`
    width: 20%;
    height: 30%;
    background-color: black;
    box-shadow: 5px 5px 13px #7090B020;
    border-radius: 20px;
`