import styled from "@emotion/styled";

const StyledFlexFootball = styled.div`
  background-color: #595959;
  padding: 20px;
  width: 100%;
  height: 400px;
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
        A new youth sports league, Flex Football, aims to boost participation in
        football while minimizing injury risks. This co-ed, non-tackle format
        resembles flag football but incorporates light padding and soft-shell
        helmets, offering a safer alternative to traditional tackle football.
        <br></br>
        <br></br>
        Participation in football among Oregon schools has declined by 17% over
        the past decade, prompting concerns from coaches like John Charles, who
        has experienced the effects of Chronic Traumatic Encephalopathy (CTE)
        himself. He believes Flex Football can help teach young players proper
        techniques without the fear of hard hits.
        <br></br>
        <br></br>
        Flex Football focuses on skill development and safety, allowing players
        to learn their positions in a fun environment. The league plans to start
        official play in March 2020, with organizers emphasizing their goal of
        keeping kids engaged and enjoying the sport.
      </FlexFootballBody>
    </StyledFlexFootball>
  );
};

export default FlexFootball;
