import styled from "@emotion/styled";
import InstagramLogo from "../assets/InstagramLogo";
import FacebookLogo from "../assets/FacebookLogo";

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

const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const FooterNavInfo = styled.a`
  color: white;

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
  return (
    <StyledFooter>
      <LeftSection>
        <Email>johncharles@gmail.com</Email>
        <SocialIcons>
          <InstagramLogo />
          <FacebookLogo />
        </SocialIcons>
      </LeftSection>
      <StyledFooterInfo>
        <FooterNavInfo href="#about">About</FooterNavInfo>
        <FooterNavInfo href="#high-school">High School</FooterNavInfo>
        <FooterNavInfo href="#college">College</FooterNavInfo>
        <FooterNavInfo href="#flex-football">Flex Football</FooterNavInfo>
        <FooterNavInfo href="#bbq">BBQ</FooterNavInfo>
        <FooterNavInfo href="#hall-of-fame">Hall of Fame</FooterNavInfo>
        <FooterNavInfo href="#sources">Sources</FooterNavInfo>
      </StyledFooterInfo>
    </StyledFooter>
  );
};

export default Footer;
