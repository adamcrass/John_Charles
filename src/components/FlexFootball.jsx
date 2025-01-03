import styled from "@emotion/styled";

const StyledFlexFootball = styled.div`
  background-color: #595959;
  padding: 20px;
  width: 100%;
  color: #fff;
  flex-direction: column;
`;

const FlexFootballTitle = styled.div`
  font-size: 40px;
  padding-left: 20px;
  color: #fff;
`;

const FlexFootballBody = styled.div`
  font-size: 20px;
  color: #fff;
  padding-left: 20px;
  padding-top: 20px;
`;

const FlexFootball = () => {
  return (
    <StyledFlexFootball>
      <FlexFootballTitle>Flex Football</FlexFootballTitle>
      <FlexFootballBody>
        A youth sports league, Flex Football, aimed to boost participation in
        football while minimizing injury risks. This co-ed, non-tackle format
        resembled flag football but incorporated light padding and soft-shell
        helmets, offering a safer alternative to traditional tackle football.
        <br></br>
        <br></br>
        Participation in football among Oregon schools had declined by 17% over
        the past decade, prompting concerns from coaches like John Charles, who
        had experienced the effects of Chronic Traumatic Encephalopathy (CTE)
        himself. He believed Flex Football could help teach young players proper
        techniques without the fear of hard hits.<br></br>
        <br></br>
        Flex Football focused on skill development and safety, allowing players
        to learn their positions in a fun environment. The league had planned to
        start official play in March 2020, with organizers emphasizing their
        goal of keeping kids engaged and enjoying the sport.
      </FlexFootballBody>
    </StyledFlexFootball>
  );
};

export default FlexFootball;
