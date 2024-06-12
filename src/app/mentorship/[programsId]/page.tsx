import ActionButton from "@/app/components/buttons/action-button.component";
import CardImageDetail from "@/app/components/card/card-image-detail.component";
import { CardImage } from "@/app/components/card/simple-card.component";
import FlexBox from "@/app/components/layout/flexbox.component";
import Pill from "@/app/components/pill/pill.component";
import Header from "@/app/components/text-block/header.component";
import Typography from "@/app/components/text-block/typography.component";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brainstorm Blog",
  description: "Blog",
};

export default async function MentorshipDetails() {
  return (
    <FlexBox flexdirection="column" margin="100px auto" alignitems="center">
      <Typography
        heading="Blog headline for articles"
        sm_padding="100px 25px 25px"
      />

      <FlexBox
        margin="20px 60px"
        sm_margin="20px 25px"
        sm_width="85%"
        width="70%"
        flexdirection="column"
      >
        <CardImage preview="/banner/banner-1.jpg" />
      </FlexBox>

      <Typography heading="Blog headline for articles" />

      <FlexBox margin="20px 60px" sm_width="85%" width="70%">
        <CardImage height="250px" preview="/banner/banner-2.jpg" />
        <CardImage height="250px" preview="/banner/banner-3.jpg" />
        <CardImage height="250px" preview="/banner/banner-4.jpg" />
      </FlexBox>

      <Typography heading="Blog headline for articles" />

      <FlexBox
        margin="20px 60px"
        sm_width="85%"
        width="70%"
        alignitems="center"
      >
        <CardImageDetail
          slug="workshops"
          path="introduction-to-zbrush"
          preview="/banner/banner-21.jpg"
          courseTrack="2D - 3D Concept Design"
          courseName="Introduction to ZBrush"
          courseCode="ZB1"
          courseTime="Fri 10am-1pm (PST)"
          courseDuration="10-week Course"
          width="50%"
        />
        <FlexBox
          alignitems="center"
          flexdirection="column"
          margin="20px 60px"
          sm_width="85%"
          width="70%"
          sm_textalign="center"
          textalign="center"
        >
          <Header level="4" text="This blog mentions this course." />
          <ActionButton type="primary" label="Register Today" margin="20px 0" />
        </FlexBox>
      </FlexBox>

      <FlexBox
        sm_margin="40px 60px 20px"
        margin="20px 60px"
        sm_width="90%"
        width="70%"
        alignitems="center"
      >
        <Header level="4" text="More like this" margin="20px 0" />
        <FlexBox margin="20px 40px" sm_width="85%" width="70%" flexwrap="wrap">
          <Pill padding="15px 20px" label="Understanding Proportions" />
          <Pill padding="15px 20px" label="Basic Anatomy" />
          <Pill padding="15px 20px" label="Gesture & Rhythm" />
          <Pill padding="15px 20px" label="Intro to construction" />
          <Pill padding="15px 20px" label="Anatomical Focus" />
        </FlexBox>
      </FlexBox>

      <FlexBox
        alignitems="center"
        flexdirection="column"
        margin="0 60px"
        sm_width="85%"
        width="100%"
      >
        <Header
          text="Blog headline for articles"
          level="1"
          margin="20px 0 10px"
        />
        <FlexBox
          margin="20px 60px"
          sm_width="100%"
          width="100%"
          alignitems="center"
        >
          <CardImageDetail
            slug="workshops"
            path="introduction-to-zbrush"
            preview="/banner/banner-21.jpg"
            courseTrack="2D - 3D Concept Design"
            courseName="Introduction to ZBrush"
            courseCode="ZB1"
            courseTime="Fri 10am-1pm (PST)"
            courseDuration="10-week Course"
          />
          <CardImageDetail
            slug="workshops"
            path="introduction-to-zbrush"
            preview="/banner/banner-21.jpg"
            courseTrack="2D - 3D Concept Design"
            courseName="Introduction to ZBrush"
            courseCode="ZB1"
            courseTime="Fri 10am-1pm (PST)"
            courseDuration="10-week Course"
          />
          <CardImageDetail
            slug="workshops"
            path="introduction-to-zbrush"
            preview="/banner/banner-21.jpg"
            courseTrack="2D - 3D Concept Design"
            courseName="Introduction to ZBrush"
            courseCode="ZB1"
            courseTime="Fri 10am-1pm (PST)"
            courseDuration="10-week Course"
          />
          <CardImageDetail
            slug="workshops"
            path="introduction-to-zbrush"
            preview="/banner/banner-21.jpg"
            courseTrack="2D - 3D Concept Design"
            courseName="Introduction to ZBrush"
            courseCode="ZB1"
            courseTime="Fri 10am-1pm (PST)"
            courseDuration="10-week Course"
          />
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}