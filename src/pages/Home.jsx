import styled from "@emotion/styled";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import HighSchool from "../components/HighSchool";
import College from "../components/College";
import BBQ from "../components/BBQ";
import Footer from "../components/Footer";
import FlexFootball from "../components/FlexFootball";
import Sources from "../components/Sources";
import HallofFame from "../components/HallofFame";
import Video from "../components/Videos";
import FootballHelmet from "../assets/NoBackgroundFootballHelmet.png";
import Football from "../assets/NoBackgroundFootball.png";
import Bottle from "../assets/BBQ Bottle.png";
import AirOne from "../components/AirOne";
import APIR from "../components/APIR"

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const ListContainer = styled.ul`
  list-style: none;
  margin: 0;

  li {
    position: relative;

    &::before {
      content: "-";
      position: absolute;
      left: 0;
      top: 21px;
      font-family: "Michroma", sans-serif;
      font-size: 50px;
      color: #fff;
    }
  }
`;

const HelmetPNG = styled.img`
  width: 120px;
  position: absolute;
  z-index: 1;
  transform: translateY(-50px) translateX(-40px) rotate(30deg); /* Initial X, Y, and rotation */
  right: 100px;

  /* Media query for screens less than 768px */
  @media (max-width: 768px) {
    /* Adjust X-position (right) */
    right: 50px; /* Change right value as needed for smaller screens */

    /* Adjust Y-position */
    transform: translateY(-50px) translateX(20px) rotate(30deg); /* Adjust Y translation for smaller screens */

    /* Adjust image size */
    width: 120px; /* You can also reduce the image size for smaller screens */
  }
`;

const FootballPNG = styled.img`
  width: 140px;
  position: absolute;
  z-index: 1;
  transform: rotate(-15deg) translateY(-30px) translateX(-40px);
  right: 120px;

  /* Media query for screens less than 768px */
  @media (max-width: 768px) {
    /* Adjust X-position (right) */
    right: 40px; /* Change right value for smaller screens */

    /* Adjust Y-position */
    transform: rotate(-15deg) translateY(-60px) translateX(-30px); /* Adjust Y translation for smaller screens */

    /* Adjust image size */
    width: 110px; /* Decrease width for better responsiveness */
  }
`;

const BottlePNG = styled.img`
  position: absolute;
  z-index: 1;
  right: 130px;
  width: 160px;
  transform: rotate(-20deg) translateY(-50px) translateX(30px);

  /* Media query for screens less than 768px */
  @media (max-width: 768px) {
    /* Adjust X-position (right) */
    right: 30px; /* Move it closer to the left on smaller screens */

    /* Adjust Y-position */
    transform: rotate(15deg) translateY(60px) translateX(55px); /* Adjust Y translation for smaller screens */

    /* Adjust image size */
    width: 100px; /* Reduce image size */
  }
`;

const Home = () => {
  return (
    <StyledHome>
      <Header />
      <ListContainer>
        <li>
          <Hero />
        </li>
        <li>
          <About />
        </li>
        <li>
          <HighSchool />
        </li>
        <HelmetPNG src={FootballHelmet} />
        <li>
          <College />
        </li>
        <li>
          <AirOne />
        </li>
        <li>
          <FlexFootball />
        </li>
        <BottlePNG src={Bottle} />
        <li>
          <BBQ />
        </li>

        <FootballPNG src={Football} />
        <li>
          <HallofFame />
        </li>
        <li><APIR /></li>
        <li>
          <Sources />
        </li>
        <li>
          <Video />
        </li>
      </ListContainer>
      <Footer />
    </StyledHome>
  );
};

export default Home;
