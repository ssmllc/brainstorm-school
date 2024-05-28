import Container, { FlexContainer } from "../layout/container.component";
import TextBlock from "../text-block/text-block.component";
import CardImageDetail from "../card/card-image-detail.component";

const SimilarCourses = () => {
  return (
    <Container padding="0 0 75px 0">
      <Container margin="0 auto" width="70%">
        <TextBlock
          fontSize="36px"
          fontWeight="bold"
          justifycontent="center"
          padding="50px 0"
        >
          More courses like this one
        </TextBlock>

        <FlexContainer
          width="100%"
          display="flex"
          gap="15px"
          justifycontent="space-between"
        >
          <CardImageDetail
            base="courses"
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
            base="courses"
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
            base="courses"
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
            base="courses"
            slug="2d-3d-concept-design"
            path="introduction-to-zbrush"
            preview="/banner/banner-21.jpg"
            courseTrack="2D - 3D Concept Design"
            courseName="Introduction to ZBrush"
            courseCode="ZB1"
            courseTime="Fri 10am-1pm (PST)"
            courseDuration="10-week Course"
          />
        </FlexContainer>
      </Container>
    </Container>
  );
};

export default SimilarCourses;
