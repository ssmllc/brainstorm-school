import MediaBanner from "@/app/components/banner/media-banner.component";
import FlexBox from "@/app/components/layout/flexbox.component";
import Grid from "@/app/components/layout/grid.component";
import GallerySlide from "@/app/components/modal/gallery-slider.component";
import StudentGallerySlide from "@/app/components/modal/student-gallery-slider.component";
import Header from "@/app/components/text-block/header.component";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Brainstorm School",
  description:
    "Brainstorm School's gallery. Immerse yourself in a visual journey of creativity, innovation, and talent from our students and instructors. Register Today!",
};

const fetchData = async () => {
  const query =
    "https://y8rjsgga.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27students%27%5D+%7B%0A++_id%2C%0A++gallery%5B%5D+-%3E+%7B%0A++++%22imageUrl%22%3A+portfolio.asset-%3Eurl%0A++%7D%0A%7D";
  // const response = await fetch(query);
  const response = await fetch(query, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  const { result } = await response.json();

  return result;
};

export default async function Gallery() {
  const result = await fetchData();

  return (
    <>
      <MediaBanner
        label="Gallery"
        header="Student Gallery"
        subHeader="Our talented students work"
        hero="false"
        theme="dark"
        background="/banner/banner-21.jpg"
        image="/banner/media-banner.png"
        media="/video/brainstorm-design-solve-learn.mp4"
      />

      <FlexBox
        alignitems="center"
        flexdirection="column"
        sm_margin="50px auto"
        md_margin="50px auto"
        margin="50px auto"
        xl_margin="100px auto"
        xxl_margin="100px auto"
      >
        <FlexBox
          flexdirection="column"
          sm_margin="50px auto 50px"
          md_margin="50px auto 50px"
          margin="20px 0"
          xl_margin="100px auto 50px"
          xxl_margin="100px auto 50px"
          sm_width="80%"
          md_width="70%"
          width="70%"
          xl_width="80%"
          xxl_width="80%"
        >
          <Header level="1" text="Student Gallery" />

          <Header
            level="4"
            fontSize="15px"
            text="The student gallery is a testament to the hard work and progress of our talented students. Here, you will find a wide range of artworks, each reflecting the individual style and creativity of our emerging artists. The student gallery is constantly updated with new pieces, providing a dynamic and ever-evolving showcase of talent."
          />
        </FlexBox>

        <StudentGallerySlide results={result} />
      </FlexBox>
    </>
  );
}
