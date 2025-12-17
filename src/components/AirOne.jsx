import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Bronze from "../assets/7-on-7 Team Bronz.jpeg";
import Silver from "../assets/7-on-7 Team Silver.jpg";
import Gold from "../assets/7-on-7 Team Gold.jpg";
import Platinum from "../assets/7-on-7 Team Platinum.JPG";

const StyledAirOne = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #595959;
  color: #fff;
  width: 100%;
  position: relative;
`;

const AirOneTitle = styled.div`
  font-family: "Michroma", sans-serif;
  font-size: 40px;
  margin-bottom: 20px;
  padding-top: 40px;
`;

const AirOneText = styled.div`
  font-size: 20px;
  padding-left: 40px;
`;

const PictureGrid = styled.div`
  display: grid;
  padding: 40px;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PictureContainer = styled.div`
  text-align: center;
`;

const CroppedImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &.fullscreen {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: 80%;
    object-fit: contain;
    z-index: 9999;
    cursor: pointer;
    padding: 20px;
    border: 5px solid rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }
`;

const PictureCaption = styled.div`
  font-size: 13px;
  padding-bottom: 20px;
  font-family: "Michroma", sans-serif;
`;

const AirOne = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize); // Update on resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  useEffect(() => {
    // Disable scrolling when fullscreen image is active
    if (fullscreenImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup to reset overflow when component unmounts or fullscreen image is removed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [fullscreenImage]);

  const handleImageClick = (src) => {
    if (!isMobile) {
      setFullscreenImage(src === fullscreenImage ? null : src);
    }
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest(".clickable-image")) {
      setFullscreenImage(null);
    }
  };

  return (
    <StyledAirOne id="airone" onClick={handleOutsideClick}>
      <AirOneTitle>— Air One</AirOneTitle>
      <AirOneText>
        AirOne Football Academy, founded in 2012, is a leading institution
        dedicated to the development of young football players. Under the
        guidance of Head Coach John Charles, the academy emphasizes skill
        development, tactical understanding, and fostering a passion for the
        game. With facilities located in Vancouver, Washington, and Portland,
        Oregon, AirOne Football Academy provides a supportive and competitive
        environment for aspiring athletes to grow.
        <br />
        <br />
        The academy's programs cater to a range of age groups and skill levels,
        ensuring personalized attention and a pathway for players to achieve
        their goals. Coach Charles and his team were committed to instilling
        discipline, teamwork, and a love for football, helping players reach
        their full potential both on and off the field.
      </AirOneText>

      <PictureGrid>
        <PictureContainer>
          <PictureCaption>Bronze Team</PictureCaption>
          <CroppedImage
            src={Bronze}
            alt="Bronze Team"
            className={
              fullscreenImage === Bronze
                ? "fullscreen clickable-image"
                : "clickable-image"
            }
            onClick={() => handleImageClick(Bronze)}
          />
        </PictureContainer>
        <PictureContainer>
          <PictureCaption>Silver Team</PictureCaption>
          <CroppedImage
            src={Silver}
            alt="Silver Team"
            className={
              fullscreenImage === Silver
                ? "fullscreen clickable-image"
                : "clickable-image"
            }
            onClick={() => handleImageClick(Silver)}
          />
        </PictureContainer>
        <PictureContainer>
          <PictureCaption>Gold Team</PictureCaption>
          <CroppedImage
            src={Gold}
            alt="Gold Team"
            className={
              fullscreenImage === Gold
                ? "fullscreen clickable-image"
                : "clickable-image"
            }
            onClick={() => handleImageClick(Gold)}
          />
        </PictureContainer>
        <PictureContainer>
          <PictureCaption>Platinum Team</PictureCaption>
          <CroppedImage
            src={Platinum}
            alt="Platinum Team"
            className={
              fullscreenImage === Platinum
                ? "fullscreen clickable-image"
                : "clickable-image"
            }
            onClick={() => handleImageClick(Platinum)}
          />
        </PictureContainer>
      </PictureGrid>
    </StyledAirOne>
  );
};

export default AirOne;
