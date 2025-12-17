import styled from "@emotion/styled";

const StyledAbout = styled.div`
  display: flex;
  background-color: #2b2b2b;
  width: 100%;
  color: #fff;
  flex-direction: column;
  padding: 40px;
`;

const AboutTitle = styled.span`
  font-size: 40px;
  font-family: "Michroma", sans-serif;
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
        League (NFL) and Arena Football League (AFL). Charles' legacy at PSU
        includes leading the team to two Western Football Conference
        Championships and earning All-American honors, culminating in his
        induction into the Portland State Hall of Fame.
        <br />
        <br />
        He was the Head Coach, Founder and Director of Air One Football Academy,
        a premier institution founded in 2012 to develop young football players
        in Vancouver, Washington, and Portland, Oregon. The academy, under
        Charles' leadership, focuses on skill development, tactical
        understanding, and fostering a passion for the game, providing a
        supportive environment for athletes to thrive.
        <br />
        <br />
        Beyond football, Charles is an entrepreneur and mentor. For over a
        decade, he has coached high school quarterbacks in Oregon and Southwest
        Washington. During the COVID-19 pandemic, he launched John John's BBQ
        Sauce, which gained local popularity in Prineville and is now sold in
        multiple stores. With aspirations for nationwide distribution, Charles
        continues to impact his community, having received a Jefferson Award for
        outstanding public service to youth in Portland. Additionaly John is
        currently the President of a Prevention, Intervention, Recovery
        non-profit that operates in and around the Central Oregon communities.
      </AboutText>
    </StyledAbout>
  );
};

export default About;
