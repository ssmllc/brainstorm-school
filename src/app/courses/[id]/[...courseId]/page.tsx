import React from "react";
import MediaBanner from "@/app/components/banner/media-banner.component";
import RegistrationBlock from "@/app/components/registration/registration-block.component";
import CardLayout, {
  CardImage,
} from "@/app/components/card/simple-card.component";
import TextBlock from "@/app/components/text-block/text-block.component";
import Container, {
  FlexContainer,
} from "@/app/components/layout/container.component";
import Carousel from "@/app/components/carousel/carousel.component";
import { Card } from "@/app/components/card/card-card.component";
import TextHeaderBlock from "@/app/components/text-block/text-header-block.component";
import CardImageDetail from "@/app/components/card/card-image-detail.component";
import SimilarCourses from "@/app/components/similar-courses/similar-courses.component";

const fetchData = async () => {
  const query =
    "https://y8rjsgga.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27course%27%5D+%7B%0A++_id%2C%0A++name%2C%0A++category%2C%0A++section%2C%0A++slug%2C%0A++code%2C%0A++duration%2C%0A++time%2C%0A++instructors%5B%5D+-%3E+%7B%0A++++title%2C%0A++++profession%2C%0A++++bio%2C%0A++%7D%2C%0A++schedule%5B%5D+-%3E+%7B%0A++++instructor%5B0%5D+-%3E+%7B%0A++++++title%2C%0A++++%7D%2C%0A++++registration%2C%0A++++term%2C%0A++++time%2C%0A++++duration%2C%0A++++start%2C%0A++%7D%2C%0A++preview+%7B%0A++++asset+-%3E+%7B%0A++++++url%0A++++%7D%2C%0A++%7D%2C%0A++description%0A%7D";
  const response = await fetch(query, { cache: "no-store" });
  // const response = await fetch(query);

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  const { result } = await response.json();

  return result;
};

export default async function Page({
  params,
}: {
  params: { courseId: string };
}) {
  const result = await fetchData();

  const header = result.filter((course: any) => {
    // console.log("slug", course.slug.current);
    // console.log("params.id[0]", params.courseId);
    return course.slug.current === params.courseId[0];
  })[0]["name"];

  return (
    <div
      style={{
        color: "white",
      }}
    >
      <MediaBanner
        header={header}
        subHeader="2024"
        hero="true"
        theme="dark"
        background="/backgrounds/sci-fi-city.jpg"
        image="/banner/media-banner.png"
        media="/video/brainstorm-design-solve-learn.mp4"
      />

      <CardLayout />

      <Container>
        <Container margin="0 auto" width="70%" position="relative">
          <Container
            alignitems="center"
            display="flex"
            position="relative"
            width="100%"
          >
            <TextHeaderBlock fontSize="36px" fontWeight="bold">
              Gallery
            </TextHeaderBlock>
          </Container>

          <Carousel>
            <CardImage
              boxshadow="0 0 10px var(--black)"
              className="slide"
              preview="/cards/character-design.jpg"
              width="320px"
            />
            <CardImage
              boxshadow="0 0 10px var(--black)"
              className="slide"
              preview="/cards/character-design.jpg"
              width="320px"
            />
            <CardImage
              boxshadow="0 0 10px var(--black)"
              className="slide"
              preview="/cards/character-design.jpg"
              width="320px"
            />
            <CardImage
              boxshadow="0 0 10px var(--black)"
              className="slide"
              preview="/cards/character-design.jpg"
              width="320px"
            />
            <CardImage
              boxshadow="0 0 10px var(--black)"
              className="slide"
              preview="/cards/character-design.jpg"
              width="320px"
            />
            <CardImage
              boxshadow="0 0 10px var(--black)"
              className="slide"
              preview="/cards/character-design.jpg"
              width="320px"
            />
          </Carousel>

          <FlexContainer
            alignitems="center"
            display="flex"
            justifycontent="end"
            position="relative"
            width="100%"
          >
            <TextHeaderBlock fontSize="36px" fontWeight="bold">
              Meet your instructor
            </TextHeaderBlock>
          </FlexContainer>

          <FlexContainer
            margin="0 auto"
            width="100%"
            position="relative"
            display="flex"
          >
            <Card
              background="0"
              boxshadow="none"
              stacked="false"
              icon="/instructors/ico-image.png"
              heading="Christian Nacordia"
              subHeading="Concept Artist & Instructor"
            />
            <TextBlock fontSize="14px" padding="0 0 0 100px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              fugiat, unde nemo dicta commodi veritatis veniam voluptatibus
              adipisci recusandae ea impedit dolorem assumenda at earum. Ex nisi
              quia iste vitae!
            </TextBlock>
          </FlexContainer>
        </Container>
      </Container>

      <RegistrationBlock
        primary={true}
        heading="Register for this course"
        scale="xl"
        cta="Register"
        ctaType="primary"
      />

      <SimilarCourses />
    </div>
  );
}
