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

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  margin: 0 auto; /* Ensures no extra margins are added on the sides */
`;

const ListContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%; /* Ensures it takes full width */

  li {
    position: relative;
    width: 100%; /* Ensure each list item is full width */
    box-sizing: border-box; /* Include padding and borders in width calculation */
  }
`;

const HelmetPNG = styled.img`
  width: 120px;
  position: absolute;
  z-index: 1;
  transform: translateY(-50px) translateX(-40px) rotate(30deg);
  right: 100px;
`;

const FootballPNG = styled.img`
  width: 140px;
  position: absolute;
  z-index: 1;
  transform: rotate(-15deg) translateY(-30px) translateX(-40px);
  right: 120px;
`;

const BottlePNG = styled.img`
  position: absolute;
  z-index: 1;
  right: 130px;
  width: 160px;
  transform: rotate(-20deg) translateY(-50px) translateX(30px);
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
