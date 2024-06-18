import MediaBanner from "@/app/components/banner/media-banner.component";
import { Card } from "@/app/components/card/card-card.component";
import CardImageDetail from "@/app/components/card/card-image-detail.component";
import { CardImage } from "@/app/components/card/simple-card.component";
import CarouselPreview from "@/app/components/carousel/carousel-preview.component";
import Carousel from "@/app/components/carousel/carousel.component";
import FlexBox from "@/app/components/layout/flexbox.component";
import Pill from "@/app/components/pill/pill.component";
import Poster from "@/app/components/poster/poster.component";
import VideoContentSplit from "@/app/components/registration/video-content-split.component";
import Header from "@/app/components/text-block/header.component";
import DecipherText from "@/app/courses/components/decipher-text.component";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet our Instructors | Brainstorm School",
  description:
    "Discover the insights of top industry professionals at Brainstorm School to guide you toward success in concept design for film, gaming, environment, and more. Register Today!",
};

const fetchData = async () => {
  const query =
    "https://y8rjsgga.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27instructors%27%5D+%7B%0A++_id%2C%0A++title%2C%0A++%22headshot%22%3A+photo.asset-%3E+url%2C%0A++%22slug%22%3A+slug.current%2C%0A++profession%2C%0A++%22imageUrl%22%3A+poster.asset-%3Eurl%2C%0A++bio%2C%0A++gallery+%5B%5D+-%3E+%7B%0A++++%22poster%22%3A+portfolio.asset-%3Eurl%0A++%7D%0A%7D";
  // const response = await fetch(query);
  const response = await fetch(query, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  const { result } = await response.json();

  return result;
};

export default async function Instructors({
  params,
}: {
  params: { instructorsId: string };
}) {
  const result = await fetchData();

  const selectedInstructor = result.filter((instructor: any) => {
    return instructor.slug === params.instructorsId;
  })[0];

  const { title, profession, headshot, imageUrl, gallery } = selectedInstructor;

  return (
    <>
      <MediaBanner
        header={title}
        subHeader={profession}
        hero="false"
        theme="dark"
        background={imageUrl}
        headshot={headshot}
        randomize={false}
      />

      <CarouselPreview
        selectedInstructor={selectedInstructor}
        gallery={gallery}
        imageUrl={imageUrl}
      />

      <FlexBox flexdirection="column" margin="100px auto" alignitems="center">
        <FlexBox
          alignitems="center"
          borderTop="thin solid var(--medium-grey)"
          flexdirection="column"
          margin="0 60px"
          xl_margin="75px 60px"
          sm_width="85%"
          width="80%"
          xl_width="80%"
        >
          <Header
            text="Courses by this instructor"
            level="1"
            margin="50px 0 10px"
          />

          <FlexBox
            margin="20px 60px"
            xl_margin="20px 60px"
            sm_width="100%"
            width="100%"
            xl_width="100%"
            alignitems="center"
            justifycontent="center"
          >
            <CardImageDetail
              slug="workshops"
              path="introduction-to-zbrush"
              preview="/banner/banner-21.jpg"
              courseTrack="2D - 3D Concept Design"
              courseName="Introduction to ZBrush"
              courseCode="ZB1"
              courseTime="Fri 10am-1pm (PST)"
              courseDuration="10-week Course"
              width="33%"
            />
            <CardImageDetail
              slug="workshops"
              path="introduction-to-zbrush"
              preview="/banner/banner-21.jpg"
              courseTrack="2D - 3D Concept Design"
              courseName="Introduction to ZBrush"
              courseCode="ZB1"
              courseTime="Fri 10am-1pm (PST)"
              courseDuration="10-week Course"
              width="33%"
            />
            <CardImageDetail
              slug="workshops"
              path="introduction-to-zbrush"
              preview="/banner/banner-21.jpg"
              courseTrack="2D - 3D Concept Design"
              courseName="Introduction to ZBrush"
              courseCode="ZB1"
              courseTime="Fri 10am-1pm (PST)"
              courseDuration="10-week Course"
              width="33%"
            />
            {/* <CardImageDetail
              slug="workshops"
              path="introduction-to-zbrush"
              preview="/banner/banner-21.jpg"
              courseTrack="2D - 3D Concept Design"
              courseName="Introduction to ZBrush"
              courseCode="ZB1"
              courseTime="Fri 10am-1pm (PST)"
              courseDuration="10-week Course"
            /> */}
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </>
  );
}
