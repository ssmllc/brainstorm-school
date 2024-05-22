import React from "react";
import MediaBanner from "@/app/components/banner/media-banner.component";
import RegistrationBlock from "@/app/components/registration/registration-block.component";
import CardLayout from "@/app/components/card/simple-card.component";
import TextBlock from "@/app/components/text-block/text-block.component";
import Container from "@/app/components/layout/container.component";

const fetchData = async () => {
  const query =
    "https://y8rjsgga.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27course%27%5D+%7B%0A++name%2C%0A++category%2C%0A++section%2C%0A++slug%2C%0A++code%2C%0A++duration%2C%0A++time%2C%0A++instructors%5B%5D+-%3E+%7B%0A++++title%2C%0A++++profession%2C%0A++++bio%2C%0A++%7D%2C%0A++schedule%5B%5D+-%3E+%7B%0A++++instructor%5B0%5D+-%3E+%7B%0A++++++title%2C%0A++++%7D%2C%0A++++registration%2C%0A++++term%2C%0A++++time%2C%0A++++duration%2C%0A++++start%2C%0A++%7D%2C%0A++preview+%7B%0A++++asset+-%3E+%7B%0A++++++url%0A++++%7D%2C%0A++%7D%2C%0A++description%0A%7D";
  const response = await fetch(query, { cache: "no-store" });

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
    return course.slug.current === params.courseId[0];
  })[0]["name"];

  console.log("header", header);

  return (
    <div
      style={{
        color: "white",
      }}
    >
      <MediaBanner
        header={header}
        hero="true"
        theme="dark"
        background="/backgrounds/sci-fi-city.jpg"
        image="/banner/media-banner.png"
        media="/video/brainstorm-design-solve-learn.mp4"
      />

      <CardLayout />

      <Container>
        <TextBlock>Gallery</TextBlock>
      </Container>

      <RegistrationBlock
        primary={true}
        heading="Register for this course"
        scale="xl"
        cta="Register"
      />
    </div>
  );
}
