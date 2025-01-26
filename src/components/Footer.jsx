import styled from "@emotion/styled";

const StyledFooter = styled.div`
  background-color: #000000;
  color: #fff;
  font-size: 15px;
  padding: 30px;
  padding-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Email = styled.div`
  align-items: center;
  font-size: 15px;
  color: #fff;
  padding-left: 5px;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const FooterNavInfo = styled.a`
  color: white;
  cursor: pointer; /* Ensures it's clickable */

  &:hover {
    border-bottom: 1px solid;
  }
`;

const StyledFooterInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media (max-width: 767px) {
    display: none;
  }
`;

const Footer = () => {
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
    <StyledFooter>
      <LeftSection></LeftSection>
      <StyledFooterInfo>
        <FooterNavInfo onClick={(e) => handleLinkClick(e, "hero")}>
          Home
        </FooterNavInfo>
        <FooterNavInfo onClick={(e) => handleLinkClick(e, "about")}>
          About
        </FooterNavInfo>
        <FooterNavInfo onClick={(e) => handleLinkClick(e, "high-school")}>
          High School
        </FooterNavInfo>
        <FooterNavInfo onClick={(e) => handleLinkClick(e, "college")}>
          College
        </FooterNavInfo>
        <FooterNavInfo onClick={(e) => handleLinkClick(e, "airone")}>
          Air One
        </FooterNavInfo>
        <FooterNavInfo onClick={(e) => handleLinkClick(e, "flex-football")}>
          Flex Football
        </FooterNavInfo>
        <FooterNavInfo onClick={(e) => handleLinkClick(e, "bbq")}>
          BBQ
        </FooterNavInfo>
        <FooterNavInfo onClick={(e) => handleLinkClick(e, "hall-of-fame")}>
          Hall of Fame
        </FooterNavInfo>
        <FooterNavInfo onClick={(e) => handleLinkClick(e, "sources")}>
          Sources
        </FooterNavInfo>
        <FooterNavInfo onClick={(e) => handleLinkClick(e, "videos")}>
          Videos
        </FooterNavInfo>
      </StyledFooterInfo>
    </StyledFooter>
  );
};

export default Footer;
