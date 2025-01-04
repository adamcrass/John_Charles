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

const VideoTitle = styled.span`
  padding-bottom: 20px;
`;

const Videos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  align-items: center;

  iframe {
    flex: 1;
    height: calc((100vw - 40px - 20px) / 3 * 0.5625);
    max-width: calc(100% / 3 - 10px);
  }

  @media (max-width: 768px) {
    flex-direction: column;

    iframe {
      width: 100%; /* Take full width of container */
      height: calc(100vw * 0.5625); /* Maintain 16:9 aspect ratio */
      max-width: 100%; /* Ensure it doesn't exceed container */
  }
`;

const Video = () => {
  return (
    <StyledVideos id="videos">
      <VideoTitle>Videos</VideoTitle>
      <Videos>
        <iframe
          width="528"
          height="296"
          src="https://www.youtube.com/embed/PP0hxjUzCW4?modestbranding=1&autohide=1&controls=1rel=0"
          title="Coach John Charles Speaks About Air One Football Academy"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <iframe
          width="528"
          height="296"
          src="https://www.youtube.com/embed/qQxuKRTAGp8?modestbranding=1&autohide=1&controls=1rel=0"
          title="Air One Football Academy Defense!"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <iframe
          width="528"
          height="296"
          src="https://www.youtube.com/embed/bYSWlo1cBN4?modestbranding=1&autohide=1&controls=1rel=0"
          title="Kaleb McGary Of Fife HS- All American Prospect TALKS Air One Football and Recruiting!"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </Videos>
    </StyledVideos>
  );
};

export default Video;
