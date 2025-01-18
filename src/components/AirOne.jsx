import styled from "@emotion/styled";

const StyledAirOne = styled.div`
  display: flex;
  background-color: #595959;
  width: 100%;
  color: #fff;
  flex-direction: column;
  padding: 40px;
`;

const AirOneTitle = styled.div`
  font-family: "Chalkduster", sans-serif;
  padding-bottom: 10px;
  font-size: 40px;
`;

const AirOneText = styled.div`
  font-size: 20px;
  padding-top: 10px;
`;

const AirOne = () => {
  return (
    <StyledAirOne id="airone">
      <AirOneTitle>Air One </AirOneTitle>
      <AirOneText>
        AirOne Football Academy, founded in 2012, is a leading institution
        dedicated to the development of young football players. Under the
        guidance of Head Coach John Charles, the academy emphasizes skill
        development, tactical understanding, and fostering a passion for the
        game. With facilities located in Vancouver, Washington, and Portland,
        Oregon, AirOne Football Academy provides a supportive and competitive
        environment for aspiring athletes to grow.
        <br />
        <br />
        The academy's programs cater to a range of age groups and skill levels,
        ensuring personalized attention and a pathway for players to achieve
        their goals. Coach Charles and his team were committed to instilling
        discipline, teamwork, and a love for football, helping players reach
        their full potential both on and off the field.
      </AirOneText>
    </StyledAirOne>
  );
};

export default AirOne;
