import styled from "styled-components";

export const Backimg = styled.img`
  width: 690px;
  height: 620px;
  display: block;
  margin-right: auto;
`;

export const Backimg2 = styled.img`
  width: 840px;
  height: 620px;
  display: block;
  margin-left: 45vw;
  margin-top: -47vh;
`;

function Back() {
    return(
        <div>
            <Backimg src={"/progress.png"} />
            <Backimg2 src={"/check.png"} />
        </div>
    );
}

export default Back;