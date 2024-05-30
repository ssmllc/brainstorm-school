import CardImageDetail from "../card/card-image-detail.component";

const SimilarCourses = () => {
  return (
    <div
      style={{
        width: "75%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ color: "white", fontSize: "24px" }}>
        <h2>Previous Workshops</h2>
      </div>

      <div
        style={{
          display: "flex",
          // width: "100%",
          margin: "50px auto",
          gap: "20px 10px",
        }}
      >
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
      </div>
    </div>
  );
};

export default SimilarCourses;
