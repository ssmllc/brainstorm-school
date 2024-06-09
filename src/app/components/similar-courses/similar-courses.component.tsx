"use client";

import styled from "styled-components";
import CardImageDetail from "../card/card-image-detail.component";
import FlexBox from "../layout/flexbox.component";
import Header from "../text-block/header.component";

const Wrapper = styled.div`
  /* border: thin solid red; */
  max-width: 1200px;
  margin: 0 auto;
`;

interface Props {
  header: string;
}
const SimilarCourses = ({ header }: Props) => {
  return (
    <Wrapper>
      <FlexBox
        margin="25px auto"
        sm_margin="25px auto"
        width="100%"
        sm_width="70%"
        md_width="70%"
      >
        <Header level="2" text={header} />
      </FlexBox>

      <FlexBox
        margin="50px auto"
        width="100%"
        sm_width="70%"
        md_width="75%"
        justifycontent="center"
      >
        <CardImageDetail
          base="/courses"
          slug="foundation"
          path="creature-anatomy"
          preview="/banner/banner-17.jpg"
          courseTrack="Foundation"
          courseName="Creature Anatomy"
          courseCode="CA1"
          courseTime="Fri 10am-1pm (PST)"
          courseDuration="10-week Course"
        />
        <CardImageDetail
          base="/courses"
          slug="concept-art-games-and-film"
          path="introduction-to-character-design"
          preview="/banner/banner-18.jpg"
          courseTrack="Concept Art Games & Film"
          courseName="Introduction to Character Design"
          courseCode="CH"
          courseTime="Fri 10am-1pm (PST)"
          courseDuration="10-week Course"
        />
        <CardImageDetail
          base="/courses"
          slug="foundation"
          path="rhythm-and-structure"
          preview="/banner/banner-19.jpg"
          courseTrack="Foundation"
          courseName="Rhythm & Structure"
          courseCode="FIG RS"
          courseTime="Fri 10am-1pm (PST)"
          courseDuration="10-week Course"
        />
        <CardImageDetail
          base="/courses"
          slug="2d-3d-concept-design"
          path="introduction-to-zbrush"
          preview="/banner/banner-21.jpg"
          courseTrack="2D - 3D Concept Design"
          courseName="Introduction to ZBrush"
          courseCode="ZB1"
          courseTime="Fri 10am-1pm (PST)"
          courseDuration="10-week Course"
        />
      </FlexBox>

      <FlexBox
        margin="50px auto"
        width="70%"
        sm_width="70%"
        justifycontent="center"
      >
        <Header
          href="/courses"
          level="5"
          text="Explore more courses"
          color="var(--blue)"
          fontSize="16px"
        />
      </FlexBox>
    </Wrapper>
  );
};

export default SimilarCourses;
