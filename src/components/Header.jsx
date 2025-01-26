import { useState } from "react";
import styled from "@emotion/styled";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import HamburgerMenu from "../assets/HamburgerLogo";
import RotatedHamburgerMenu from "../assets/RotatedHamburger";
import JCLogo from "../assets/JCLogo.png";

const StyledHeader = styled.div`
  background-color: black;
  padding: 10px;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  z-index: 98;
  padding-left: 17px;
`;

const StyledMenu = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Hamburger = styled.button`
  display: block;
  color: black;
  padding: 30px;
  z-index: 100;

  @media (min-width: 768px) {
    display: none;
  }
`;

const JC = styled.div`
  width: 70px;
  height: 70px;
  background-image: url(${JCLogo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Handle logo click to scroll to the hero section smoothly
  const handleLogoClick = (e) => {
    e.preventDefault(); // Prevent the default anchor link behavior

    const targetSection = document.getElementById("hero"); // Get the target section (hero)
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "start", // Align the section to the top
      });
    }
  };

  return (
    <StyledHeader>
      {menuOpen && <MobileMenu closeMenu={closeMenu} />}
      <a href="#hero" onClick={handleLogoClick}>
        <JC />
      </a>
      <StyledMenu>
        <Navbar />
      </StyledMenu>
      <Hamburger onClick={handleMenu}>
        {menuOpen ? <RotatedHamburgerMenu /> : <HamburgerMenu />}
      </Hamburger>
    </StyledHeader>
  );
};

export default Header;
