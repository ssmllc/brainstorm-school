import React from "react";
import MediaBanner from "@/app/components/banner/media-banner.component";
import FeaturedSlider from "@/app/components/featured/featured-slider.component";
import Container from "@/app/components/layout/container.component";
import Heading from "@/app/components/heading/heading.component";
import TextBlock from "@/app/components/text-block/text-block.component";
import RenderCourses from "../components/render-courses.component";
import RegistrationBlock from "@/app/components/registration/registration-block.component";

const fetchData = async () => {
  const query =
    "https://y8rjsgga.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27courses%27%5D+%7B%0A++category%2C%0A++slug+%7B%0A++++current%0A++%7D%2C%0A++details%5B0%5D+%7B%0A++++children%5B0%5D+%7B%0A++++++text%0A++++%7D%0A++%7D%2C%0A++sections%5B%5D+-%3E+%7B%0A++++section%2C%0A++++category%2C%0A++++slug%2C%0A++++courses%5B%5D+-%3E+%7B%0A++++++name%2C%0A++++++section%2C%0A++++++category%2C%0A++++++slug%2C%0A++++++code%2C%0A++++++description%5B0%5D+%7B%0A++++++++children%5B0%5D+%7B%0A++++++++++text%0A++++++++%7D%0A++++++%7D%2C%0A++++++preview+%7B%0A++++++++asset+-%3E+%7B%0A++++++++++url%0A++++++++%7D%2C%0A++++++%7D%2C%0A++++++instructors%5B%5D+-%3E+%7B%0A++++++++title%2C%0A++++++++profession%2C%0A++++++++bio%2C%0A++++++%7D%2C%0A++++++schedule%5B%5D+-%3E+%7B%0A++++++++instructor%5B0%5D+-%3E+%7B%0A++++++++++title%2C%0A++++++++%7D%2C%0A++++++++registration%2C%0A++++++++term%2C%0A++++++++time%2C%0A++++++++duration%2C%0A++++++++start%2C%0A++++++%7D%2C%0A++++%7D%2C%0A++%7D%2C%0A%7D";
  const response = await fetch(query, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  const { result } = await response.json();

  return result;
};

export default async function Page({ params }: { params: { id: string } }) {
  const result = await fetchData();

  const selectedCourses = result.filter(
    (res: any) => res.slug.current === params.id
  );

  console.log("selectedCourses", selectedCourses);

  const header = result.filter((category: any) => {
    return category.slug.current === params.id;
  })[0]["category"];

  return (
    <div
      style={{
        color: "white",
      }}
    >
      <MediaBanner
        header={header}
        hero={false}
        theme="dark"
        background="/backgrounds/sci-fi-city.jpg"
        image="/banner/media-banner.png"
        media="/video/brainstorm-design-solve-learn.mp4"
      />

      <Container margin="0 auto" width="100vw" padding="75px 0 0">
        <Container margin="0 auto" width="75%">
          <Heading
            superHeader={true}
            header="Unlock your creativity with our expert-led online courses"
          />

          <TextBlock>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias porro
            nihil ex nemo quibusdam, autem quidem, officia maxime qui voluptate
            quia ipsam, ab at assumenda itaque sed! Nam, aliquam deleniti. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Alias porro nihil
            ex nemo quibusdam, autem quidem, officia maxime qui voluptate quia
            ipsam, ab at assumenda itaque sed! Nam, aliquam deleniti.
          </TextBlock>
        </Container>
      </Container>

      <FeaturedSlider />

      <RenderCourses selectedCourses={selectedCourses} />

      <RegistrationBlock
        primary={false}
        heading="Not what you are looking for?"
        scale="xl"
        cta="View All Courses"
      />
    </div>
  );
}
