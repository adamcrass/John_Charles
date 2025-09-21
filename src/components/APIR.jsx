import styled from "@emotion/styled";

const StyledAPIR = styled.div`
  background-color: #595959;
  padding: 40px;
  width: 100%;
  color: #fff;
  flex-direction: column;
  display: flex;
`;

const APIRTitle = styled.div`
  font-size: 40px;
  font-family: "Chalkduster", sans-serif;
`;

const APIRText = styled.div`
  font-size: 20px;
  padding-top: 10px;
`;

const APIR = () => {
  return (
    <StyledAPIR id="apir">
      <APIRTitle>The Academy for Prevention, Intervention, and Recovery</APIRTitle>
      <APIRText>
        The Academy for Prevention, Intervention, and Recovery's mission is to to educate and support our youth, families, and communities by offering prevention, intervention and recovery programs throughout Central Oregon.
      </APIRText>
    </StyledAPIR>
  );
};

export default APIR;
