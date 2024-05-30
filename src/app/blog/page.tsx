import MediaBanner from "@/app/components/banner/media-banner.component";
import CardImageDetail from "@/app/components/card/card-image-detail.component";
import FeaturedCard from "@/app/components/card/featured-card.component";
import FAQs from "@/app/components/text-block/faqs.component";
import Typography from "@/app/components/text-block/typography.component";
import type { Metadata } from "next";
import FlexBox from "../components/layout/flexbox.component";
import { CardImage } from "../components/card/simple-card.component";
import Pill from "../components/pill/pill.component";
import Header from "../components/text-block/header.component";
import ActionButton from "../components/buttons/action-button.component";

export const metadata: Metadata = {
  title: "Brainstorm Blog",
  description: "Blog",
};

const fetchData = async () => {
  const query =
    "https://y8rjsgga.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27workshops%27%5D+%7B%0A++workshoptitle%2C%0A++content%2C%0A++future%5B%5D+-%3E+%7B%0A++++_id%2C%0A++++workshopname%2C%0A++++slug%2C%0A++++instructor%2C%0A++++description%5B%5D-%3E%2C%0A++++date%2C%0A++++time%2C%0A++++location%2C%0A++++price%2C%0A++++registration%2C%0A++++%22imageUrl%22%3A+preview.asset-%3Eurl%2C%0A++++workexamples%5B%5D+-%3E%2C%0A++%7D%2C%0A++previous%5B%5D+-%3E+%7B%0A++++_id%2C%0A++++workshopname%2C%0A++++slug%2C%0A++++instructor%2C%0A++++description%5B%5D-%3E%2C%0A++++date%2C%0A++++time%2C%0A++++location%2C%0A++++price%2C%0A++++registration%2C%0A++++%22imageUrl%22%3A+preview.asset-%3Eurl%2C%0A++++workexamples%5B%5D+-%3E%2C%0A++%7D%2C%0A++content%2C%0A++faqs%5B%5D-%3E+%7B%0A++++_id%2C%0A++++question%2C%0A++++answer%0A++%7D%0A%7D";
  // const response = await fetch(query);
  const response = await fetch(query, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  const { result } = await response.json();

  return result;
};

export default async function Blog() {
  const result = await fetchData();

  // console.log("workshops", result[0].faqs);

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
