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
  font-family: "Michroma", sans-serif;
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

const Credit = styled.p`
  margin-top: 20px;
  text-align: center;
  font-size: 13px;
  color: #fff;
  font-family: "Michroma", sans-serif;

  a {
    color: rgb(171, 194, 209);
    text-decoration: underline;
  }
`;

const Video = () => {
  return (
    <StyledVideos id="videos">
      <VideoTitle>Videos</VideoTitle>
      <Videos>
<iframe src="https://www.youtube.com/embed/PP0hxjUzCW4?si=IuK_7Yb84knWO3XT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe src="https://www.youtube.com/embed/qQxuKRTAGp8?si=8w6sHLORjKaEWmEn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe src="https://www.youtube.com/embed/YN_DGb7wJGc?si=b0gpUycBV9HqWrnJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe src="https://www.youtube.com/embed/_iKNvDCoUBo?si=N-ipnFcdnF52XGrq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe src="https://www.youtube.com/embed/bYSWlo1cBN4?si=WNVvJ2EjjB1_9huK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </Videos>
    <Credit><p>Credit: <a 
  href="https://www.youtube.com/@DirkKnudsen1"
  target="_blank" 
  rel="noopener noreferrer">
    Dirk Knudsen</a></p>
    </Credit>
    </StyledVideos>
  );
};

export default Video;
