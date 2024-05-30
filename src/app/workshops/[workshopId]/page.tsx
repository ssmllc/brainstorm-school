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
  params: { workshopId: string };
}) {
  const result = await fetchData();

  return (
    <div
      style={{
        color: "white",
      }}
    >
      <MediaBanner
        header="Workshops"
        subHeader="Online Workshops"
        hero="false"
        theme="dark"
        background="/banner/banner-19.jpg"
        image="/banner/media-banner.png"
        media="/video/brainstorm-design-solve-learn.mp4"
      />

      <h1>Workshop selected</h1>
    </div>
  );
}
