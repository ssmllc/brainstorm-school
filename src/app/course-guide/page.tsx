import React from "react";
import type { Metadata } from "next";
import Container from "../components/layout/container.component";
import RegistrationBlock from "../components/registration/registration-block.component";
import Heading from "../components/heading/heading.component";
import TracksGroup from "../components/tracks/tracks.component";
import MediaBanner from "../components/banner/media-banner.component";

export const metadata: Metadata = {
  title: "Brainstorm Courses - Brainstorm School",
  description: "Course Track",
};

const fetchData = async () => {
  const query =
    "https://y8rjsgga.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27tracks%27%5D+%7B%0A++name%2C%0A++slug%2C%0A++%22imageUrl%22%3A+preview.asset-%3Eurl%2C%0A++tracks%5B%5D+-%3E+%7B%0A++++term%2C%0A++++courses%5B%5D+-%3E+%7B%0A++++++name%2C%0A++++++code%2C%0A++++++section%2C%0A++++++category%2C%0A++++++slug%2C%0A++++++%22imageUrl%22%3A+preview.asset-%3Eurl%2C%0A++++++instructors+%5B%5D+-%3E+%7B%0A++++++++profession%2C%0A++++++++title%2C%0A++++++++bio%5B%5D+%7B%0A++++++++++children%5B%5D+%7B%0A++++++++++++text%0A++++++++++%7D%0A++++++++%7D%0A++++++%7D%0A++++%7D%0A++%7D%0A%7D";
  // const response = await fetch(query);
  const response = await fetch(query, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  const { result } = await response.json();

  return result;
};

export default async function Page() {
  const result = await fetchData();

  return (
    <Container>
      <MediaBanner
        hero="false"
        theme="dark"
        background="/backgrounds/sci-fi-city.jpg"
        image="/banner/media-banner.png"
        media="/video/brainstorm-design-solve-learn.mp4"
      />

      <Container margin="0">
        <RegistrationBlock
          primary={false}
          heading="Course Guide"
          text="Our course guide is here to show a general roadmap for artist who are trying to get and idea of where to start."
          scale="xl"
        />

        <Container
          margin="0 auto"
          width="80%"
          display="flex"
          justifycontent="center"
        >
          <Heading superHeader={false} header="Select Your Track" />
        </Container>
      </Container>
      <TracksGroup results={result} />
    </Container>
  );
}
