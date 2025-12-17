import styled from "@emotion/styled";

const StyledSources = styled.div`
  background-color: #2b2b2b;
  display: flex;
  width: 100%;
  color: #fff;
  flex-direction: column;
  padding: 40px;
  font-size: 50px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const SourcesTitle = styled.div`
  font-size: 40px;
  padding-bottom: 20px;
  font-family: "Michroma", sans-serif;
`;

const SourcesBody = styled.div`
  font-size: 20px;
  padding-top: 10px;
`;

const LinkTitle = styled.div`
  font-size: 30px;
  font-family: "Michroma", sans-serif;
  white-space: nowrap;
`;

const SourcesText = styled.div`
  display: inline-block;
  color: #abc2d1;
  font-style: italic;
  padding-left: 30px;

  a {
    border-bottom: 1px solid transparent;
    text-decoration: none;
    text-underline-offset: 3px;
    padding-left: 5px;
    &:hover {
      border-bottom-color: currentColor;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 15px;
    display: block;
  }
`;

const Sources = () => {
  return (
    <StyledSources id="sources">
      <SourcesTitle>Sources</SourcesTitle>
      <SourcesBody>
        <LinkTitle>• College</LinkTitle>

        <br />
        <SourcesText>
          <a
            href="https://foothill.prestosports.com/sports/fball/Program_Accomploshments"
            target="_blank"
            rel="noopener nereferrer"
          >
            https://foothill.prestosports.com/sports/fball/Program_Accomploshments
          </a>
        </SourcesText>
        <br></br>
        <SourcesText>
          <a
            href="https://the-shark-effect.captivate.fm/episode/john-charles-the-resilient-one-bouncing-back-from-adversity"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://the-shark-effect.captivate.fm/episode/john-charles-the-resilient-one-bouncing-back-from-adversity
          </a>
        </SourcesText>
        <br />
        <br />
        <LinkTitle>• Flex Football</LinkTitle>

        <br />
        <SourcesText>
          <a
            href="https://www.kgw.com/article/news/local/flex-football-gives-kids-a-tackle-free-option/283-98d98ebe-96d9-47fb-bf5e-da8a107c8c40"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.kgw.com/article/news/local/flex-football-gives-kids-a-tackle-free-option/283-98d98ebe-96d9-47fb-bf5e-da8a107c8c40
          </a>
        </SourcesText>
        <SourcesText>
          <a
            href="https://www.kgw.com/article/news/portland-youth-coach-works-to-keep-kids-safe-on-the-gridiron/283-568065560"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.kgw.com/article/news/portland-youth-coach-works-to-keep-kids-safe-on-the-gridiron/283-568065560
          </a>
        </SourcesText>
        <br />
        <br />
        <LinkTitle>• John John's BBQ</LinkTitle>
        <br />
        <SourcesText>
          <a
            href="https://www.johnjohnsbbqsauce.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.johnjohnsbbqsauce.com
          </a>
        </SourcesText>
        <br></br>
        <SourcesText>
          <a
            href="https://www.koin.com/sports/sauce-that-even-the-meat-asks-for-by-name-john-johns-bbq"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.koin.com/sports/sauce-that-even-the-meat-asks-for-by-name-john-johns-bbq
          </a>
        </SourcesText>
        <br />
        <br />

        <LinkTitle>• Hall of Fame</LinkTitle>

        <br />
        <SourcesText>
          <a
            href="https://goviks.com/honors/portland-state-athletics-hall-of-fame/john-charles/111/kiosk"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://goviks.com/honors/portland-state-athletics-hall-of-fame/john-charles/111/kiosk
          </a>
        </SourcesText>
        <br />
        <SourcesText>
          <a
            href="https://www.facebook.com/PokeyAllensVikings/videos/1907541796007964/?_rdr"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.facebook.com/PokeyAllensVikings/videos/1907541796007964/?_rdr
          </a>
        </SourcesText>
      </SourcesBody>
    </StyledSources>
  );
};

export default Sources;
