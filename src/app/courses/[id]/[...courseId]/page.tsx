import React from "react";
import MediaBanner from "@/app/components/banner/media-banner.component";
import RegistrationBlock from "@/app/components/registration/registration-block.component";
import CardLayout, {
  CardImage,
} from "@/app/components/card/simple-card.component";
import Container, {
  FlexContainer,
} from "@/app/components/layout/container.component";
import Carousel from "@/app/components/carousel/carousel.component";
import { Card } from "@/app/components/card/card-card.component";
import TextHeaderBlock from "@/app/components/text-block/text-header-block.component";
import SimilarCourses from "@/app/components/similar-courses/similar-courses.component";
import DecipherText from "../../components/decipher-text.component";
import FlexBox from "@/app/components/layout/flexbox.component";

const fetchData = async () => {
  const query =
    "https://y8rjsgga.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27course%27%5D+%7B%0A++_id%2C%0A++name%2C%0A++category%2C%0A++section%2C%0A++slug%2C%0A++code%2C%0A++duration%2C%0A++difficulty%2C%0A++format%2C%0A++time%2C%0A++price%2C%0A++instructors%5B%5D+-%3E+%7B%0A++++title%2C%0A++++profession%2C%0A++++bio%2C%0A++%7D%2C%0A++schedule%5B%5D+-%3E+%7B%0A++++instructor%5B0%5D+-%3E+%7B%0A++++++title%2C%0A++++%7D%2C%0A++++registration%2C%0A++++term%2C%0A++++time%2C%0A++++duration%2C%0A++++open%2C%0A++++start%2C%0A++%7D%2C%0A++%22imageUrl%22%3A+preview.asset+-%3E+url%2C%0A++description%2C%0A++tags%5B%5D+-%3E+%7B%0A++++title%2C%0A++%7D%0A%7D";
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

  const selectedResults = result.filter((course: any) => {
    return course.slug.current === params.courseId[0];
  })[0];

  const { category, instructors, schedule, code } = selectedResults;

  const { duration, time, registration } = schedule[0];

  return (
    <>
      <MediaBanner
        label={category}
        header={header}
        subHeader={code}
        duration={duration}
        time={time}
        registration={registration}
        hero="true"
        theme="dark"
        background="/banner/banner-3.jpg"
        image="/banner/media-banner.png"
        media="/video/brainstorm-design-solve-learn.mp4"
      />

      <CardLayout results={selectedResults} />

      <Container margin="0 auto">
        <Container margin="0 auto" width="80%" position="relative">
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
              width="350px"
            />
            <CardImage
              boxshadow="0 0 10px var(--black)"
              className="slide"
              preview="/cards/character-design.jpg"
              width="350px"
            />
            <CardImage
              boxshadow="0 0 10px var(--black)"
              className="slide"
              preview="/cards/character-design.jpg"
              width="350px"
            />
            <CardImage
              boxshadow="0 0 10px var(--black)"
              className="slide"
              preview="/cards/character-design.jpg"
              width="350px"
            />
            <CardImage
              boxshadow="0 0 10px var(--black)"
              className="slide"
              preview="/cards/character-design.jpg"
              width="350px"
            />
            <CardImage
              boxshadow="0 0 10px var(--black)"
              className="slide"
              preview="/cards/character-design.jpg"
              width="350px"
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

          {instructors?.map(
            (
              {
                title,
                profession,
                bio,
              }: {
                bio: string | null;
                title: string;
                profession: string;
              },
              index: number
            ) => {
              return (
                <div
                  key={index}
                  style={{ borderBottom: "thin solid var(--medium-grey)" }}
                >
                  <FlexBox
                    margin="50px auto"
                    width="100%"
                    flexdirection="column"
                  >
                    <FlexBox margin="50px auto" width="100%">
                      <FlexBox
                        margin="0 auto"
                        width="30%"
                        alignitems="baseline"
                      >
                        <Card
                          background="0"
                          boxshadow="none"
                          stacked="false"
                          icon="/instructors/ico-image.png"
                          heading={title}
                          subHeading={profession}
                          padding="0 20px"
                          width="100%"
                        />
                      </FlexBox>

                      <FlexBox
                        margin="0 auto"
                        width="70%"
                        flexdirection="column"
                      >
                        <DecipherText description={bio} margin="0" />
                      </FlexBox>
                    </FlexBox>

                    <RegistrationBlock
                      href={registration}
                      primary={true}
                      heading="Register for this course"
                      scale="xl"
                      cta="Register"
                      ctaType="primary"
                    />
                  </FlexBox>
                </div>
              );
            }
          )}
        </Container>
      </Container>

      <FlexBox
        flexdirection="column"
        margin="75px auto"
        alignitems="center"
        width="100%"
      >
        <SimilarCourses />
      </FlexBox>
    </>
  );
}
