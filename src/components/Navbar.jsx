import styled from "@emotion/styled";

const StyledNavbar = styled.nav`
  display: flex;
  gap: 20px;
  padding-right: 10px;
`;

const StyledLink = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid;
  }
`;

const Navbar = () => {
  const handleLinkClick = (e, targetId) => {
    e.preventDefault(); // Prevent the default anchor link behavior

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const offset = 80; // Adjust this offset as needed
      const targetPosition =
        targetSection.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <StyledNavbar>
      <StyledLink onClick={(e) => handleLinkClick(e, "hero")}>Home</StyledLink>
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
      <StyledLink onClick={(e) => handleLinkClick(e, "pirs")}>
        P.I.R.S.
      </StyledLink>
      <StyledLink onClick={(e) => handleLinkClick(e, "hall-of-fame")}>
        Hall of Fame
      </StyledLink>
      <StyledLink onClick={(e) => handleLinkClick(e, "sources")}>
        Sources
      </StyledLink>
      <StyledLink onClick={(e) => handleLinkClick(e, "videos")}>
        Videos
      </StyledLink>
    </StyledNavbar>
  );
};

export default Navbar;
