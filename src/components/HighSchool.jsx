import styled from "@emotion/styled";

const StyledHighSchool = styled.div`
  background-color: #595959;
  display: flex;
  width: 100%;
  color: #fff;
  flex-direction: column;
  padding: 40px;
  font-size: 40px;
  font-family: "Calibri", sans-serif;
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
        Charles excelled as a multi-sport athlete, showing remarkable talent in
        both football and baseball. As a three-year starter in both sports, he
        earned widespread recognition for his achievements. In football, Charles
        was a dominant presence on the field, ultimately receiving prestigious
        All-America honors. His success extended to baseball, where he was a
        outstanding player, earning All-League and All-Peninsula selections for
        his exceptional performance.
      </HighSchoolBody>
    </StyledHighSchool>
  );
};

export default HighSchool;
