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

const About = () => {
  return (
    <StyledAbout id="about">
      <AboutTitle>About</AboutTitle>
      <AboutText>
        John Charles, a former All-American quarterback, played at Portland
        State University (PSU) and later reached both the National Football
        League (NFL) and Arena Football League (AFL). He is the Head Coach of
        AirOne Football Academy, a premier institution founded in 2012 to
        develop young football players in Vancouver, Washington, and Portland,
        Oregon. The academy, under Charles' leadership, focuses on skill
        development, tactical understanding, and fostering a passion for the
        game, providing a supportive environment for athletes to thrive.
        <br />
        <br />
        Charles' legacy at PSU includes leading the team to two Western Football
        Conference Championships and earning All-American honors, culminating in
        his induction into the Portland State Hall of Fame.
        <br />
        <br />
        Beyond football, Charles is an entrepreneur and mentor. For over a
        decade, he has coached high school quarterbacks in Oregon and Southwest
        Washington. During the COVID-19 pandemic, he launched John John's BBQ
        Sauce, which gained local popularity in Prineville and is now sold in
        several stores. With aspirations for nationwide distribution, Charles
        continues to impact his community, having received a Jefferson Award for
        outstanding public service to youth in Portland.
      </AboutText>
    </StyledAbout>
  );
};

export default About;
