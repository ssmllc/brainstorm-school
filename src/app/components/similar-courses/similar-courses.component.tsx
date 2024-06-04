import CardImageDetail from "../card/card-image-detail.component";
import FlexBox from "../layout/flexbox.component";
import Header from "../text-block/header.component";

const SimilarCourses = () => {
  return (
    <>
      <Header level="2" text="View Similar Courses" />

      <FlexBox margin="50px 0" width="80%">
        <CardImageDetail
          base="/workshops"
          slug="brainstorm-connection"
          path="creature-anatomy"
          preview="/banner/banner-17.jpg"
          courseTrack="Foundation"
          courseName="Creature Anatomy"
          courseCode="CA1"
          courseTime="Fri 10am-1pm (PST)"
          courseDuration="10-week Course"
        />
        <CardImageDetail
          base="/workshops"
          slug="brainstorm-connection"
          path="introduction-to-character-design"
          preview="/banner/banner-18.jpg"
          courseTrack="Concept Art Games & Film"
          courseName="Introduction to Character Design"
          courseCode="CH"
          courseTime="Fri 10am-1pm (PST)"
          courseDuration="10-week Course"
        />
        <CardImageDetail
          base="/workshops"
          slug="brainstorm-connection"
          path="rhythm-and-structure"
          preview="/banner/banner-19.jpg"
          courseTrack="Foundation"
          courseName="Rhythm & Structure"
          courseCode="FIG RS"
          courseTime="Fri 10am-1pm (PST)"
          courseDuration="10-week Course"
        />
        <CardImageDetail
          base="/workshops"
          slug="brainstorm-connection"
          path="introduction-to-zbrush"
          preview="/banner/banner-21.jpg"
          courseTrack="2D - 3D Concept Design"
          courseName="Introduction to ZBrush"
          courseCode="ZB1"
          courseTime="Fri 10am-1pm (PST)"
          courseDuration="10-week Course"
        />
      </FlexBox>
    </>
  );
};

export default SimilarCourses;
