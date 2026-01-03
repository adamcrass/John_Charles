import styled from "@emotion/styled";
import APIRImage from "../assets/Apir.jpg"

const StyledAPIRS = styled.div`
  background-color: #595959;
  padding: 40px;
  width: 100%;
  color: #fff;
  flex-direction: column;
  display: flex;
`;

const APIRSTitle = styled.div`
  font-size: 40px;
`;

const APIRSText = styled.div`
  font-size: 20px;
  padding-top: 10px;
`;

const BottomHalf = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 60vw;
  height: auto;
  object-fit: contain;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-top: 15px;
`;


const APIRS = () => {
  return (
    <StyledAPIRS id="apirs">
      <APIRSTitle>The Academy for Prevention, Intervention, and Recovery</APIRSTitle>
      <BottomHalf>
        <APIRSText>
          The Academy for Prevention, Intervention, and Recovery's mission is to to educate and support our youth, families, and communities by offering prevention, intervention and recovery programs throughout Central Oregon.
        </APIRSText>
        <Img src={APIRImage} />
      </BottomHalf>
    </StyledAPIRS>
  );
};

export default APIRS;
