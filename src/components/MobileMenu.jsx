import styled from "@emotion/styled";

const StyledMobileMenu = styled.div`
  display: flex;
  flex-direction: column;
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
  font-size: 24px;
`;

const StyledBody = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: fixed;
  gap: 26px;
  background-color: black;
  width: 100%;
  height: 100vh;
`;

const StyledLink = styled.a``;

const MobileMenu = ({ closeMenu }) => {
  return (
    <StyledMobileMenu>
      <StyledBody>
        <StyledLink href="#hero" onClick={closeMenu}>
          Home
        </StyledLink>
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
        <StyledLink href="#videos" onClick={closeMenu}>
          Videos
        </StyledLink>
      </StyledBody>
    </StyledMobileMenu>
  );
};

export default MobileMenu;
