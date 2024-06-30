import MediaBanner from "@/app/components/banner/media-banner.component";
import FlexBox from "@/app/components/layout/flexbox.component";
import GallerySlide from "@/app/components/modal/gallery-slider.component";
import Header from "@/app/components/text-block/header.component";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Brainstorm School",
  description:
    "Brainstorm School's gallery. Immerse yourself in a visual journey of creativity, innovation, and talent from our students and instructors. Register Today!",
};

const fetchData = async () => {
  const query =
    "https://y8rjsgga.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27instructors%27%5D+%7B%0A++_id%2C%0A++title%2C%0A++slug%2C%0A++profession%2C%0A++%22imageUrl%22%3A+poster.asset-%3Eurl%2C%0A++bio%2C%0A++gallery%5B%5D+-%3E+%7B%0A++++title%2C%0A++++%22imageUrl%22%3A+portfolio.asset-%3Eurl%0A++%7D%0A%7D";
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
        header="Instructors Gallery"
        subHeader="Featured instructors work"
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
          sm_margin="20px 0"
          md_margin="20px 0"
          margin="20px 0"
          xl_margin="100px auto 50px"
          xxl_margin="100px auto 50px"
          sm_width="80%"
          md_width="80%"
          width="70%"
          xl_width="80%"
          xxl_width="80%"
        >
          <Header level="1" text="Instructors Gallery" />

          <Header
            level="4"
            fontSize="15px"
            text="Our instructor gallery features the works of Brainstorm School's esteemed instructors. These pieces serve as both inspiration and benchmarks for our students, demonstrating the high level of expertise and creativity that our instructors bring to the classroom"
          />
        </FlexBox>

        <GallerySlide results={result} />
      </FlexBox>
    </>
  );
}
