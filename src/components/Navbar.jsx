import styled from "@emotion/styled";

const StyledNavbar = styled.nav`
  display: flex;
  gap: 20px;
  padding-right: 10px;
`;

const StyledLink = styled.a`
  color: white;

  &:hover {
    border-bottom: 1px solid;
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLink>About</StyledLink>
      <StyledLink>High School</StyledLink>
      <StyledLink>College</StyledLink>
      <StyledLink>Flex Football</StyledLink>
      <StyledLink>BBQ</StyledLink>
    </StyledNavbar>
  );
};

export default Navbar;
