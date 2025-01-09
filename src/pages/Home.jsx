import styled from "@emotion/styled";
import Header from "components/Header";
import Hero from "components/Hero";
import About from "components/About";
import HighSchool from "components/HighSchool";
import College from "components/College";
import BBQ from "components/BBQ";
import Footer from "components/Footer";
import FlexFootball from "../components/FlexFootball";
import Sources from "../components/Sources";
import HallofFame from "../components/HallofFame";
import Video from "../components/Videos";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
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
      top: 34px;
      font-family: "Chalkduster", sans-serif;
      font-size: 50px;
      color: #fff;
    }
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
        <li>
          <College />
        </li>
        <li>
          <FlexFootball />
        </li>
        <li>
          <BBQ />
        </li>
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
