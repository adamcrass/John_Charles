import styled from "@emotion/styled";
import image from "../assets/Field.png";
import john from "../assets/JohnCharles.png";

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

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Intro = styled.div`
  font-family: "Archivo Black", sans-serif;
  font-size: 13px;
  flex: 1;
  line-height: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LargeText = styled.span`
  font-size: 100px;
  font-weight: bold;
`;

const SmallText = styled.span`
  font-size: 46px;
`;

const Picture = styled.div`
  font-size: 24px;
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const Img = styled.img`
  max-width: 1512px;
  height: auto;
`;

const Hero = () => {
  return (
    <StyledHero image={image}>
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
