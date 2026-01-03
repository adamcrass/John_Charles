import styled from "@emotion/styled";
import article from "../assets/Article.jpeg"

const StyledBBQ = styled.div`
  background-color: #595959;
  display: flex;
  width: 100%;
  color: #fff;
  flex-direction: row;
  padding: 40px;
  height: 100%;
`;

const BBQTitle = styled.div`
  font-size: 40px;
`;

const BBQBody = styled.div`
  font-size: 20px;
  color: #fff;
  padding-top: 20px;
  position: relative;
  padding-right: 15px;
`;

const BBQText = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`;

const Img = styled.img`
  height: auto;
  width: 30vw;
  object-fit: contain;

    @media (max-width: 768px) {
      width: 80vw;
      height: auto;
      padding-top: 10px;
      padding-bottom: 30px;
    }
`;


const BottomHalf = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


const BBQ = () => {
  return (
    <StyledBBQ id="bbq">
      <BBQText>
        <BBQTitle>John John's BBQ</BBQTitle>
        <BottomHalf>
          <BBQBody>
            Charles is now making strides as a coach and entrepreneur. After a
            successful football career, where he threw 58 touchdowns in just two
            seasons, Charles has dedicated the last 13 years to teaching quarterback
            techniques to high school students in Oregon and Southwest Washington.
            <br></br>
            <br></br>
            During the COVID-19 pandemic, Charles decided to pursue his passion for
            barbecue by launching his own sauce brand, John-John's BBQ sauce. He
            began experimenting with recipes just before the pandemic hit and
            quickly gained local popularity in Prineville, where his sauce is now
            sold in nine stores. His commitment to quality and local production has
            fueled demand, and he aims for broader distribution in the future.
            <br></br>
            <br></br>
            Charles has received mentorship and support while perfecting his sauce
            in a commercial kitchen. He humorously expresses ambition for
            large-scale partnerships with major fast-food chains, stating, “I want a
            Wendy's to come by and say, 'I want that sauce' or a McDonald's.” His
            entrepreneurial journey reflects his resilience and community spirit,
            having previously been recognized with a Jefferson Award for outstanding
            public service to youth in Portland.
          </BBQBody>
          <Img src={article} />
        </BottomHalf>
      </BBQText>
    </StyledBBQ>
  );
};

export default BBQ;
