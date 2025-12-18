import styled from "@emotion/styled";
import image from "../assets/Field.png";
import john from "../assets/Smaller_JC_Bio.png";

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: #fff;
  padding: 20px;
  padding-top: 80px;
  background-image: url(${image});
  background-size: cover;
  background-position: center;
  position: relative;
  font-family: "Calibri", sans-serif;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Intro = styled.div`
  font-size: 20px;
  flex: 1;
  line-height: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

const LargeText = styled.span`
  font-size: 120px;
  font-weight: bold;
  text-align: center;
  line-height: 1.2;
  padding-top: 20px;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    font-size: 50px;
  }

`;

const SmallText = styled.span`
  font-size: 40px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Picture = styled.div`
  font-size: 24px;
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  top: 21px;

  @media (max-width: 768px) {
    top: 21px;
  }
`;

const Img = styled.img`
  max-width: 800px;
  width: 100%;
  height: auto;

  @media (max-width: 768px) {
    max-width: 400px; /* Smaller image on mobile */
  }
`;

const Hero = () => {
  return (
    <StyledHero image={image} id="hero">
      <Intro>
        <LargeText>
          JOHN <br />
          CHARLES
        </LargeText>
        <SmallText>
          <br />
          All-American Athlete
        </SmallText>
      </Intro>
      <Picture>
        <Img src={john} />
      </Picture>
    </StyledHero>
  );
};

export default Hero;
