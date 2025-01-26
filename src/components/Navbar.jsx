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
      // Smoothly scroll to the section
      targetSection.scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "start", // Align the section to the top
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
