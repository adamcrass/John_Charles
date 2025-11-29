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
  overflow-x: hidden;
`;

const StyledBody = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  background-color: black;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  position: fixed;
  top: 4.5px;

  /* Add some padding for better scrolling experience */
  padding-bottom: 20px;
`;

const StyledLink = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid;
  }
`;

const MobileMenu = ({ closeMenu }) => {
  const handleLinkClick = (e, targetId) => {
    e.preventDefault(); // Prevent default anchor behavior

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const offset = 70; // Adjust this value if necessary
      const targetPosition =
        targetSection.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // Close the menu after scrolling
      closeMenu();
    }
  };

  return (
    <StyledMobileMenu>
      <StyledBody>
        <StyledLink onClick={(e) => handleLinkClick(e, "hero")}>
          Home
        </StyledLink>
        <StyledLink onClick={(e) => handleLinkClick(e, "about")}>
          About
        </StyledLink>
        <StyledLink onClick={(e) => handleLinkClick(e, "high-school")}>
          High School
        </StyledLink>
        <StyledLink onClick={(e) => handleLinkClick(e, "college")}>
          College
        </StyledLink>
        <StyledLink onClick={(e) => handleLinkClick(e, "airone")}>
          Air One
        </StyledLink>
        <StyledLink onClick={(e) => handleLinkClick(e, "flex-football")}>
          Flex Football
        </StyledLink>
        <StyledLink onClick={(e) => handleLinkClick(e, "bbq")}>BBQ</StyledLink>
        <StyledLink onClick={(e) => handleLinkClick(e, "hall-of-fame")}>
          Hall of Fame
        </StyledLink>
        <StyledLink onClick={(e) => handleLinkClick(e, "apir")}>
          APIR
        </StyledLink>
        <StyledLink onClick={(e) => handleLinkClick(e, "sources")}>
          Sources
        </StyledLink>
        <StyledLink onClick={(e) => handleLinkClick(e, "videos")}>
          Videos
        </StyledLink>
      </StyledBody>
    </StyledMobileMenu>
  );
};

export default MobileMenu;
