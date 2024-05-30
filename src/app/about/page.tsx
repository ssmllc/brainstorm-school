import type { Metadata } from "next";
import MediaBanner from "../components/banner/media-banner.component";
import Container, {
  FlexContainer,
} from "../components/layout/container.component";
import RegistrationBlock from "../components/registration/registration-block.component";
import VideoContentSplit from "../components/registration/video-content-split.component";
import { Card } from "../components/card/card-card.component";
import TextHeaderBlock from "../components/text-block/text-header-block.component";
import ImageGallery from "../components/gallery/image-gallery.component";
import FAQs from "../components/text-block/faqs.component";
import { MiniCards } from "../components/card/mini-card.component";
import CardImageDetail from "../components/card/card-image-detail.component";
import TextBlock from "../components/text-block/text-block.component";
import SimilarCourses from "../components/similar-courses/similar-courses.component";

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

export default async function About() {
  const result = await fetchData();

  return (
    <div style={{ marginTop: "100px" }}>
      {/* <MediaBanner
        header="About Us"
        subHeader="2024"
        hero="false"
        theme="dark"
        background="/banner/banner-19.jpg"
        image="/banner/media-banner.png"
        media="/video/brainstorm-design-solve-learn.mp4"
      /> */}

      <RegistrationBlock
        primary={true}
        heading="We are Brainstorm Online!"
        text="Students from around the world gather to learn & develop in our friendly online community."
        scale="xl"
        cta="Register Today"
        ctaType="primary"
      />

      <VideoContentSplit
        video="https://youtu.be/cidlS92hRTQ?si=pWk-plQpUEOP_jt8"
        heading="Who we are"
        text="Brainstorm is an online concept art, design and illustration program focused on artistic development. Students from around the world gather to learn & develop in our friendly online community."
        cta="View Courses"
      />

      <VideoContentSplit
        video="https://youtu.be/cidlS92hRTQ?si=pWk-plQpUEOP_jt8"
        heading="What we do"
        text="Brainstorm is an online concept art, design and illustration program focused on artistic development. Students from around the world gather to learn & develop in our friendly online community."
        cta="View Courses"
        flexdirection="row-reverse"
      />

      <FlexContainer display="flex" margin="0 auto">
        <FlexContainer display="flex" gap="10px" width="80%" margin="0 auto">
          <Card
            href="/courses"
            background="var(--black-60)"
            alignitems="start"
            stacked="true"
            icon="/instructors/ico-image.png"
            heading="Courses"
            subHeading="Traditional drawing supplies, pen & paper, sketchbook"
            text="Optional: Computer or Tablet with comparable drawing software such as photoshop, procreate, etc."
            width="100%"
          />

          <Card
            href="/workshops"
            background="var(--black-60)"
            alignitems="start"
            stacked="true"
            icon="/instructors/ico-image.png"
            heading="Workshops"
            text="Optional: Computer or Tablet with comparable drawing software such as photoshop, procreate, etc."
            width="100%"
          />

          <Card
            href="/programs"
            background="var(--black-60)"
            alignitems="start"
            stacked="true"
            icon="/instructors/ico-image.png"
            heading="Programs"
            text="Optional: Computer or Tablet with comparable drawing software such as photoshop, procreate, etc."
            width="100%"
          />

          <Card
            href="/blog"
            background="var(--black-60)"
            alignitems="start"
            stacked="true"
            icon="/instructors/ico-image.png"
            heading="Blog"
            text="Optional: Computer or Tablet with comparable drawing software such as photoshop, procreate, etc."
            width="100%"
          />
        </FlexContainer>
      </FlexContainer>

      <FlexContainer width="100%" margin="0 auto">
        <MiniCards header="Spring 2024" width="100%" />
      </FlexContainer>

      <FlexContainer>
        <ImageGallery />
      </FlexContainer>

      <RegistrationBlock
        primary={false}
        heading="Get updates to your inbox"
        scale="xl"
        cta="Sign Me Up"
        ctaType="primary"
      />

      <SimilarCourses />

      {/* <FAQs results={selectedResults} /> */}
    </div>
  );
}
