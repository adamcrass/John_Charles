import styled from "@emotion/styled";

const StyledVideos = styled.div`
  background-color: #2b2b2b;
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
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  width: 100%;

  iframe {
    flex: 1 1 calc(33.33% - 10px);
    aspect-ratio: 16 / 9;
    border: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    iframe {
      flex: none;
      width: 100%;
      aspect-ratio: 16 / 9;
    }
  }
`;

const Video = () => {
  return (
    <StyledVideos id="videos">
      <VideoTitle>Videos</VideoTitle>
      <Videos>
        <iframe
          src="https://www.youtube.com/embed/PP0hxjUzCW4?modestbranding=1&autohide=1&controls=1&rel=0"
          title="Coach John Charles Speaks About Air One Football Academy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="no-referrer"
          frameBorder="0"
          allowFullScreen
        ></iframe>

        <iframe
          src="https://www.youtube.com/embed/qQxuKRTAGp8?modestbranding=1&autohide=1&controls=1&rel=0"
          title="Air One Football Academy Defense!"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="no-referrer"
          frameBorder="0"
          allowFullScreen
        ></iframe>

        <iframe
          src="https://www.youtube.com/embed/YN_DGb7wJGc?modestbranding=1&autohide=1&controls=1&rel=0"
          title="Air One Football Academy - Feb 2014 - Inside The Camp"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="no-referrer"
          frameBorder="0"
          allowFullScreen
        ></iframe>

        <iframe
          src="https://www.youtube.com/embed/_iKNvDCoUBo?modestbranding=1&autohide=1&controls=1&rel=0"
          title="John Charles All American QB Leads Portland State Vikings To Victory Over Boise State"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="no-referrer"
          frameBorder="0"
          allowFullScreen
        ></iframe>

        <iframe
          src="https://www.youtube.com/embed/bYSWlo1cBN4?modestbranding=1&autohide=1&controls=1&rel=0"
          title="Kaleb McGary Of Fife HS- All American Prospect TALKS Air One Football and Recruiting!"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="no-referrer"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </Videos>
    </StyledVideos>
  );
};

export default Video;
