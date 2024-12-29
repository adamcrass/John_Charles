import styled from "@emotion/styled";

const StyledHOF = styled.div`
  background-color: #595959;
  display: flex;
  width: 100%;
  color: #fff;
  flex-direction: column;
  padding: 40px;
  font-size: 50px;
`;

const HOFText = styled.div`
  color: #fff;
  font-size: 20px;
`;

const HOFTitle = styled.div`
  color: #fff;
  font-size: 40px;
  padding-bottom: 20px;
`;

const HOF = () => {
  return (
    <StyledHOF>
      <HOFTitle>Hall of Fame</HOFTitle>
      <HOFText>
        John Charles is a notable figure in Portland State University's
        athletics, particularly for his impressive tenure as a quarterback from
        1991 to 1992. During his time, he led the team to an outstanding record
        of 20 wins, securing two Western Football Conference Championships and
        reaching the NCAA II semifinal game in both seasons.
        <br></br>
        <br></br>
        His performance on the field was remarkable; he passed for a total of
        5,563 yards and an impressive 58 touchdowns, which ranks him third
        all-time at PSU despite only playing for two years. One of his standout
        moments was setting a then-PSU record by throwing for 592 yards in a
        single game against Cal Poly. His accolades include being named the
        Western Football Conference Player of the Year twice, being a finalist
        for the Harlon Hill Award, and earning All-American honors in 1992.
        Charles's contributions to the program have solidified his legacy,
        earning him a place in the Portland State Athletics Hall of Fame.
      </HOFText>
    </StyledHOF>
  );
};

export default HOF;
