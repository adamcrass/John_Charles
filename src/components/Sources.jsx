import styled from "@emotion/styled";

const StyledSources = styled.div`
  background-color: #2b2b2b;
  display: flex;
  width: 100%;
  height: 240px;
  color: #fff;
  flex-direction: column;
  padding: 40px;
  font-size: 50px;
`;

const SourcesTitle = styled.div`
  font-size: 40px;
`;

const SourcesBody = styled.div`
  font-size: 20px;
  padding-top: 10px;
`;

const Sources = () => {
  return (
    <StyledSources>
      <SourcesTitle>High School</SourcesTitle>
      <SourcesBody>
        A graduate of Mountain View High School in Mountain View, California,
        Charles was a three-year starter in football, and baseball. Charles
        earned All-America honors in football as well as being selected
        All-League and All-Peninsula in baseball.
      </SourcesBody>
    </StyledSources>
  );
};

export default Sources;
