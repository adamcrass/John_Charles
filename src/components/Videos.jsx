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
  font-family: "Chalkduster", sans-serif;
`;

const Videos = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow videos to wrap */
  gap: 10px;
  justify-content: center; /* Center align videos */
  width: 100%;

  iframe {
    flex: 1 1 calc(33.33% - 10px); /* Take one-third width minus gap for desktop */
    aspect-ratio: 16 / 9; /* Maintain 16:9 ratio */
    border: none;
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Stack videos on smaller screens */
    align-items: center; /* Center align */

    iframe {
      flex: none;
      width: 100%; /* Full width for mobile */
      aspect-ratio: 16 / 9; /* Maintain 16:9 ratio */
    }
  }
`;

const Caption = styled.div`
  font-size: 30px;
  color: #fff;
`;

const Video = () => {
  return (
    <StyledVideos id="videos">
      <VideoTitle>Videos</VideoTitle>
      <Videos>
        <iframe
          src="https://www.youtube.com/embed/PP0hxjUzCW4?modestbranding=1&autohide=1&controls=1rel=0"
          title="Coach John Charles Speaks About Air One Football Academy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <iframe
          src="https://www.youtube.com/embed/qQxuKRTAGp8?modestbranding=1&autohide=1&controls=1rel=0"
          title="Air One Football Academy Defense!"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <iframe
          src="https://www.youtube.com/embed/bYSWlo1cBN4?modestbranding=1&autohide=1&controls=1rel=0"
          title="Kaleb McGary Of Fife HS- All American Prospect TALKS Air One Football and Recruiting!"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <iframe
          src="https://www.youtube.com/embed/_iKNvDCoUBo"
          title="John Charles All American QB Leads Portland State Vikings To Victory Over Boise State"
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
