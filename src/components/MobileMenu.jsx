import styled from "@emotion/styled";

const StyledMobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 99;
  gap: 30px;
  background-color: black;
  color: white;
  font-size: 29px;
`;

const StyledLink = styled.a``;

const MobileMenu = ({ closeMenu }) => {
  return (
    <StyledMobileMenu>
      <StyledLink href="#about" onClick={closeMenu}>
        About
      </StyledLink>
      <StyledLink href="#high-school" onClick={closeMenu}>
        High School
      </StyledLink>
      <StyledLink href="#college" onClick={closeMenu}>
        College
      </StyledLink>
      <StyledLink href="#flex-football" onClick={closeMenu}>
        Flex Football
      </StyledLink>
      <StyledLink href="#bbq" onClick={closeMenu}>
        BBQ
      </StyledLink>
      <StyledLink href="#hall-of-fame" onClick={closeMenu}>
        Hall of Fame
      </StyledLink>
      <StyledLink href="#sources" onClick={closeMenu}>
        Sources
      </StyledLink>
    </StyledMobileMenu>
  );
};

export default MobileMenu;
