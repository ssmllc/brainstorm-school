import React from "react";
import type { Metadata } from "next";
import TracksGroup from "../components/tracks/tracks.component";
import MoreTracks from "../components/contact/more-tracks.component";
import MediaBanner from "../components/banner/media-banner.component";
import FlexBox from "../components/layout/flexbox.component";
import Header from "../components/text-block/header.component";

export const metadata: Metadata = {
  title: "Brainstorm Courses - Brainstorm School",
  description: "Course Track",
};

const fetchData = async () => {
  const query =
    "https://y8rjsgga.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27tracks%27%5D+%7B%0A++name%2C%0A++slug%2C%0A++%22imageUrl%22%3A+preview.asset-%3Eurl%2C%0A++tracks%5B%5D+-%3E+%7B%0A++++term%2C%0A++++courses%5B%5D+-%3E+%7B%0A++++++name%2C%0A++++++code%2C%0A++++++section%2C%0A++++++category%2C%0A++++++difficulty%2C%0A++++++slug%2C%0A++++++%22imageUrl%22%3A+preview.asset-%3Eurl%2C%0A++++++instructors+%5B%5D+-%3E+%7B%0A++++++++profession%2C%0A++++++++title%2C%0A++++++++bio%5B%5D+%7B%0A++++++++++children%5B%5D+%7B%0A++++++++++++text%0A++++++++++%7D%0A++++++++%7D%0A++++++%7D%0A++++%7D%0A++%7D%0A%7D";
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
    <>
      <MediaBanner
        header="Tracks"
        label="Course Guide"
        subHeader="Choose your roadmap"
        hero="false"
        theme="dark"
        background="/banner/banner-10.jpg"
      />

      <FlexBox
        background="/backgrounds/lightning/lightning-left-to-right.png"
        alignitems="center"
        flexdirection="column"
        sm_margin="50px auto"
        md_margin="50px auto"
        margin="100px auto"
        xl_margin="100px auto"
        xxl_margin="100px auto"
        sm_width="100%"
        md_width="100%"
        width="100%"
        xl_width="100%"
        xxl_width="100%"
      >
        <FlexBox
          flexdirection="column"
          justifycontent="center"
          sm_width="70%"
          md_width="60%"
          width="35%"
          xl_width="35%"
          xxl_width="35%"
          sm_margin="20px auto"
          md_margin="20px auto"
          margin="20px auto"
          xl_margin="0 auto"
          xxl_margin="0 auto"
        >
          <Header level="1" text="Course Guide" textalign="center" />
          <Header
            level="4"
            fontSize="16px"
            texttransform="normal"
            textalign="center"
            text="Our course guide is here to show a general roadmap for artist who are trying to get and idea of where to start."
          />
        </FlexBox>

        <FlexBox
          flexdirection="column"
          sm_margin="20px 0"
          md_margin="20px 0"
          margin="20px 0"
          xl_margin="20px 0"
          xxl_margin="20px 0"
          sm_width="80%"
          md_width="80%"
          width="80%"
          xl_width="80%"
          xxl_width="80%"
        >
          <TracksGroup results={result} />

          <MoreTracks />
        </FlexBox>
      </FlexBox>
    </>
  );
}
