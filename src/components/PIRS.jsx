import styled from "@emotion/styled";

const StyledPIRS = styled.div`
  background-color: #2b2b2b;
  padding: 40px;
  width: 100%;
  color: #fff;
  flex-direction: column;
  display: flex;
`;

const PIRSTitle = styled.div`
  font-size: 40px;
  font-family: "Chalkduster", sans-serif;
`;

const PIRSText = styled.div`
  font-size: 20px;
  padding-top: 10px;
`;

const PIRS = () => {
  return (
    <StyledPIRS id="pirs">
      <PIRSTitle>P.I.R.S.</PIRSTitle>
      <PIRSText>
        The mission is to provide Prevention, Intervention, and Recovery
        Services (P.I.R.S.) to underserved and marginalized youth and families
        in rural Central Oregon. The non-profit does this through offering
        professionally led, trauma-informed youth sports camps,
        culturally-relevant and culturally-affirming youth peer support
        services, community-requested events, youth summer intern programs,
        12-step programs, somatics,and podcast and other recovery programs.
      </PIRSText>
    </StyledPIRS>
  );
};

export default PIRS;
