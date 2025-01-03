import styled from "@emotion/styled";

const StyledVideos = styled.div`
  background-color: #595959;
  display: flex;
  width: 100%;
  color: #fff;
  flex-direction: column;
  padding: 40px;
  font-size: 40px;
`;

const VideoTitle = styled.span``;

const Video = () => {
  return (
    <StyledVideos id="videos">
      <VideoTitle>Videos</VideoTitle>
    </StyledVideos>
  );
};

export default Video;
