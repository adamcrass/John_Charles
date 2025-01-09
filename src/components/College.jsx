import styled from "@emotion/styled";

const StyledCollege = styled.div`
  background-color: #2b2b2b;
  padding: 40px;
  width: 100%;
  color: #fff;
  flex-direction: column;
`;

const CollegeTitle = styled.div`
  font-size: 40px;
  padding-bottom: 20px;
  font-family: "Chalkduster", sans-serif;
`;

const CollegeBody = styled.div`
  font-size: 20px;
`;

const College = () => {
  return (
    <StyledCollege id="college">
      <CollegeTitle>College</CollegeTitle>
      <CollegeBody>
        Charles continued as a starter in football at Foothill Community College
        where he broke the national community college career passing yardage
        record by throwing for 5,925 yards in his two seasons at Foothill.
        Charles' final year earned him All-America Honors; he was named to the
        1990 All-America Community College football team. Charles was the 1991
        Times Tribune Male Athlete of the Year. He was also the 1991 Athlete of
        the Year for the Greater San Jose Sports Association Awards.
        <br></br>
        <br></br>
        Charles transferred to PSU where he played for both the 1991 and 1992
        seasons. In those two seasons, Charles led PSU to two consecutive
        semi-final appearances. Charles threw three or more touchdowns in 17 of
        the 18 games he started. He earned National Player of the Week honors
        from USA Today and Sports Illustrated. He was the only player to be
        named Player of the Year twice in the Western Football Conference.
        Additionally, he was a Harlon Hill Trophy Finalist, earning both Kodak
        and Small College All-America honors. Charles was also inducted into the
        Portland State Hall of Fame in 2018.
      </CollegeBody>
    </StyledCollege>
  );
};

export default College;
