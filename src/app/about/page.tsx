import type { Metadata } from "next";
import MediaBanner from "../components/banner/media-banner.component";
import Container, {
  FlexContainer,
} from "../components/layout/container.component";
import RegistrationBlock from "../components/registration/registration-block.component";
import VideoContentSplit from "../components/registration/video-content-split.component";
import { Card } from "../components/card/card-card.component";
import TextHeaderBlock from "../components/text-block/text-header-block.component";

export const metadata: Metadata = {
  title: "Brainstorm Courses - Brainstorm School",
  description: "Courses for brainstorm school",
};

export default async function About() {
  return (
    <Container margin="100px 0 0 0">
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

      <FlexContainer display="flex">
        <FlexContainer display="flex" gap="10px" width="70%" margin="0 auto">
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

      <FlexContainer margin="50px auto">
        <FlexContainer width="70%" margin="0 auto">
          <TextHeaderBlock fontSize="36px" fontWeight="bold">
            Schedule
          </TextHeaderBlock>
        </FlexContainer>
      </FlexContainer>
    </Container>
  );
}
