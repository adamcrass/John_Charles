import styled from "@emotion/styled";

const StyledSources = styled.div`
  background-color: #2b2b2b;
  display: flex;
  width: 100%;
  color: #fff;
  flex-direction: column;
  padding: 40px;
  font-size: 50px;
`;

const SourcesTitle = styled.div`
  font-size: 40px;
`;

const SourcesBody = styled.div`
  font-size: 20px;
  padding-top: 10px;
`;

const SourcesText = styled.div`
  display: inline-block;
  border-bottom: 1px solid transparent;
  &:hover {
    border-bottom-color: currentColor;
  }
`;

const Sources = () => {
  return (
    <StyledSources>
      <SourcesTitle>Sources</SourcesTitle>
      <SourcesBody>
        <span>John John's BBQ</span>
        <br></br>
        <br></br>
        <SourcesText>
          <a href="https://www.johnjohnsbbqsauce.com">
            -https://www.johnjohnsbbqsauce.com
          </a>
        </SourcesText>
        <br></br>
        <SourcesText>
          <a href="https://www.koin.com/sports/sauce-that-even-the-meat-asks-for-by-name-john-johns-bbq/">
            -https://www.koin.com/sports/sauce-that-even-the-meat-asks-for-by-name-john-johns-bbq/
          </a>
        </SourcesText>
        <br></br>
        <br></br>
        <span>Flex Football</span>
        <br></br>
        <br></br>
        <SourcesText>
          <a href="https://www.kgw.com/article/news/local/flex-football-gives-kids-a-tackle-free-option/283-98d98ebe-96d9-47fb-bf5e-da8a107c8c40">
            -https://www.kgw.com/article/news/local/flex-football-gives-kids-a-tackle-free-option/283-98d98ebe-96d9-47fb-bf5e-da8a107c8c40
          </a>
        </SourcesText>
        <SourcesText>
          <a href="https://www.kgw.com/article/news/portland-youth-coach-works-to-keep-kids-safe-on-the-gridiron/283-568065560">
            -https://www.kgw.com/article/news/portland-youth-coach-works-to-keep-kids-safe-on-the-gridiron/283-568065560
          </a>
        </SourcesText>
        <br></br>
        <br></br>
        <span>Hall of Fame</span>
        <br></br>
        <br></br>
        <SourcesText>
          <a href="https://goviks.com/honors/portland-state-athletics-hall-of-fame/john-charles/111/kiosk">
            -https://goviks.com/honors/portland-state-athletics-hall-of-fame/john-charles/111/kiosk
          </a>
        </SourcesText>
        <br></br>
        <SourcesText>
          <a href="https://www.facebook.com/PokeyAllensVikings/videos/1907541796007964/?_rdr">
            -
            https://www.facebook.com/PokeyAllensVikings/videos/1907541796007964/?_rdr
          </a>
        </SourcesText>
      </SourcesBody>
    </StyledSources>
  );
};

export default Sources;
