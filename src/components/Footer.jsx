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
  cursor: pointer;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 1.5px;
    background: white;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
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
  const handleLinkClick = (e, targetId) => {
    e.preventDefault();

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const offset = 80;
      const targetPosition =
        targetSection.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
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
        <FooterNavInfo onClick={(e) => handleLinkClick(e, "apir")}> APIR </FooterNavInfo>
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
