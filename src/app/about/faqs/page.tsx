import MediaBanner from "@/app/components/banner/media-banner.component";
import { Card } from "@/app/components/card/card-card.component";
import { MiniCards } from "@/app/components/card/mini-card.component";
import { FlexContainer } from "@/app/components/layout/container.component";
import RegistrationBlock from "@/app/components/registration/registration-block.component";
import VideoContentSplit from "@/app/components/registration/video-content-split.component";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brainstorm Courses - Brainstorm School",
  description: "Courses for brainstorm school",
};

const fetchData = async () => {
  const query =
    "https://y8rjsgga.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27courses%27%5D+%7B%0A++category%2C%0A++slug+%7B%0A++++current%0A++%7D%2C%0A++details%5B0%5D+%7B%0A++++children%5B0%5D+%7B%0A++++++text%0A++++%7D%0A++%7D%2C%0A++faqs%5B%5D+-%3E+%7B%0A++++question%2C%0A++++answer%2C%0A++%7D%2C%0A++sections%5B%5D+-%3E+%7B%0A++++section%2C%0A++++category%2C%0A++++slug%2C%0A++++courses%5B%5D+-%3E+%7B%0A++++++_id%2C%0A++++++name%2C%0A++++++section%2C%0A++++++category%2C%0A++++++slug%2C%0A++++++code%2C%0A++++++description%5B0%5D+%7B%0A++++++++children%5B0%5D+%7B%0A++++++++++text%0A++++++++%7D%0A++++++%7D%2C%0A++++++preview+%7B%0A++++++++asset+-%3E+%7B%0A++++++++++url%0A++++++++%7D%2C%0A++++++%7D%2C%0A++++++instructors%5B%5D+-%3E+%7B%0A++++++++title%2C%0A++++++++profession%2C%0A++++++++bio%2C%0A++++++%7D%2C%0A++++++schedule%5B%5D+-%3E+%7B%0A++++++++instructor%5B0%5D+-%3E+%7B%0A++++++++++title%2C%0A++++++++%7D%2C%0A++++++++registration%2C%0A++++++++term%2C%0A++++++++time%2C%0A++++++++duration%2C%0A++++++++start%2C%0A++++++%7D%2C%0A++++%7D%2C%0A++%7D%2C%0A%7D";
  // const response = await fetch(query);
  const response = await fetch(query, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  const { result } = await response.json();

  return result;
};

export default async function FAQs() {
  const result = await fetchData();

  return (
    <>
      <MediaBanner
        label="faqs"
        header="Frequenly Asked Questions"
        subHeader="Find answers to common questions"
        hero="false"
        theme="dark"
        background="/banner/banner-1.jpg"
        image="/banner/media-banner.png"
        media="/video/brainstorm-design-solve-learn.mp4"
      />

      {/* <FAQs results={selectedResults} /> */}
    </>
  );
}
