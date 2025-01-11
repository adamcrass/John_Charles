import styled from "@emotion/styled";

const StyledAbout = styled.div`
  display: flex;
  background-color: #2b2b2b;
  width: 100%;
  color: #fff;
  flex-direction: column;
  padding: 40px;
  font-size: 50px;
`;

const AboutTitle = styled.span`
  font-size: 40px;
  font-family: "Chalkduster", sans-serif;
`;

const AboutText = styled.span`
  font-size: 20px;
  padding-top: 10px;
`;

const JCLogo = styled.img``;

const About = () => {
  return (
    <StyledAbout id="about">
      <AboutTitle>About</AboutTitle>
      <AboutText>
        John Charles, a former All-American quarterback, played at Portland
        State University (PSU) and reached both the National Football League
        (NFL) and Arena Football League (AFL).
      </AboutText>
    </StyledAbout>
  );
};

export default About;
