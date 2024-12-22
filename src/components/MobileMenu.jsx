import styled from "@emotion/styled";

const StyledMobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

  font-size: 44px;
`;

const MobileMenu = () => {
  return (
    <StyledMobileMenu>
      <span>About</span>
      <span>High School</span>
      <span>College</span>
      <span>Flex Football</span>
      <span>BBQ</span>
    </StyledMobileMenu>
  );
};

export default MobileMenu;
