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
  const smoothScroll = (targetElement, offset = 80) => {
    const targetPosition =
      targetElement.getBoundingClientRect().top + window.scrollY - offset;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 600; // Duration in milliseconds
    let startTime = null;

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        window.scrollTo(0, targetPosition); // Ensure final position is accurate
      }
    };

    requestAnimationFrame(animation);
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault(); // Prevent the default anchor link behavior

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      smoothScroll(targetSection); // Use custom smooth scrolling with offset
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
