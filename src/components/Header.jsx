import { useState } from "react";
import styled from "@emotion/styled";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import HamburgerMenu from "../assets/HamburgerLogo";
import RotatedHamburgerMenu from "../assets/RotatedHamburger";

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
`;

const Logo = styled.a`
  font-size: 54px;
  color: #fff;
  padding-left: 10px;
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

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <StyledHeader>
      {menuOpen && <MobileMenu closeMenu={closeMenu} />}
      <Logo href="#hero">JC</Logo>
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
