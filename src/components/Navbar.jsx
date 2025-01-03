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
  return (
    <StyledNavbar>
      <StyledLink href="#about">About</StyledLink>
      <StyledLink href="#high-school">High School</StyledLink>
      <StyledLink href="#college">College</StyledLink>
      <StyledLink href="#flex-football">Flex Football</StyledLink>
      <StyledLink href="#bbq">BBQ</StyledLink>
      <StyledLink href="#hall-of-fame">Hall of Fame</StyledLink>
      <StyledLink href="#sources">Sources</StyledLink>
      <StyledLink href="#videos">Videos</StyledLink>
    </StyledNavbar>
  );
};

export default Navbar;
