import Header from "components/Header";
import styled from "@emotion/styled";
import Hero from "components/Hero";
import About from "components/About";
import HighSchool from "components/HighSchool";
import College from "components/College";
import BBQ from "components/BBQ";
import Footer from "components/Footer";
import FlexFootball from "../components/FlexFootball";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  return (
    <StyledHome>
      <Header />
      <Hero />
      <About />
      <HighSchool />
      <College />
      <FlexFootball />
      <BBQ />
      <Footer />
    </StyledHome>
  );
};

export default Home;