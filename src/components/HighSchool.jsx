import styled from "@emotion/styled";

const StyledHighSchool = styled.div`
  background-color: #595959;
  display: flex;
  width: 100%;
  color: #fff;
  flex-direction: column;
  padding: 40px;
  font-size: 50px;
`;

const HighSchoolTitle = styled.div`
  font-size: 40px;
`;

const HighSchoolBody = styled.div`
  font-size: 20px;
  padding-top: 10px;
`;

const HighSchool = () => {
  return (
    <StyledHighSchool id="high-school">
      <HighSchoolTitle>High School</HighSchoolTitle>
      <HighSchoolBody>
        A graduate of Mountain View High School in Mountain View, California,
        Charles was a three-year starter in football, and baseball. Charles
        earned All-America honors in football as well as being selected
        All-League and All-Peninsula in baseball.
      </HighSchoolBody>
    </StyledHighSchool>
  );
};

export default HighSchool;
