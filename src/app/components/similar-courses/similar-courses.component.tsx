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
        justifycontent="center"
        sm_margin="25px auto"
        margin="50px auto"
        md_margin="30px auto"
        xl_margin="50px auto"
        xxl_margin="50px auto"
        sm_width="80%"
        md_width="70%"
        width="100%"
        xl_width="100%"
        xxl_width="100%"
      >
        <Header level="2" text={header} />
      </FlexBox>

      <FlexBox
        flexwrap="wrap"
        justifycontent="center"
        sm_margin="50px auto"
        md_margin="50px auto"
        margin="50px auto"
        xl_margin="50px auto"
        xxl_margin="50px auto"
        sm_width="80%"
        md_width="80%"
        width="100%"
        xl_width="100%"
        xxl_width="100%"
      >
        <CardImageDetail
          base="/courses"
          slug="foundation"
          path="rhythm-and-structure"
          preview="https://cdn.sanity.io/images/y8rjsgga/production/a4fa0fdb61694f50527cad4073baeaec359dc958-800x396.jpg?w=500"
          courseTrack="Foundation"
          courseName="Rhythm & Structure"
          courseCode="FIG RS"
          courseTime="Wednesday 2am-5pm (PST)"
          courseDuration="10 - week Course"
          courseDifficulty="Beginner"
          coursePrice="$600.00"
          width="33%"
        />

        <CardImageDetail
          base="/courses"
          slug="flash"
          path="stylized-character-design"
          preview="https://cdn.sanity.io/images/y8rjsgga/production/c4f32c61805a41b426e14fd39ed13ae2384b2713-1822x1406.jpg?w=500"
          courseTrack="Flash"
          courseName="Stylized Character Design"
          courseCode="CH Flash"
          courseTime="Thursday 7:30pm-9:30pm (PST)"
          courseDuration="5 - week Course"
          courseDifficulty="Intermediate"
          coursePrice="$155.99"
          width="33%"
        />

        <CardImageDetail
          base="/courses"
          slug="2d-3d-concept-design"
          path="advance-blender-and-unreal-design"
          preview="https://cdn.sanity.io/images/y8rjsgga/production/17a7586ffc8113162f3382073952dadaccbf09bb-1920x1032.jpg?w=500"
          courseTrack="2D - 3D Concept Design"
          courseName="Advance Blender & Unreal Design"
          courseCode="ADV BUD"
          courseTime="Sunday 7pm-10pm (PST)"
          courseDuration="10 - week Course"
          courseDifficulty="Advanced"
          coursePrice="$625.00"
          width="33%"
        />
      </FlexBox>

      <FlexBox
        justifycontent="center"
        margin="50px auto"
        xl_margin="50px auto"
        sm_width="70%"
        sm_textalign="center"
        width="70%"
        xl_width="70%"
      >
        <Header
          href="/courses"
          level="5"
          text="Explore more courses"
          color="var(--primary)"
          fontSize="16px"
        />
      </FlexBox>
    </Wrapper>
  );
};

export default SimilarCourses;
