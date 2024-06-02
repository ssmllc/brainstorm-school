import type { Metadata } from "next";
import RenderCourses from "./components/render-courses.component";
import MediaBanner from "../components/banner/media-banner.component";
import TextBlock from "../components/text-block/text-block.component";
import Heading from "../components/heading/heading.component";
import Container from "../components/layout/container.component";
import FAQsV2 from "../components/text-block/faqs-v2.component";
import FlexBox from "../components/layout/flexbox.component";
import Header from "../components/text-block/header.component";
import CoursesFAQs from "../components/faqs/courses-faqs.component";

export const metadata: Metadata = {
  title: "All Courses | Brainstorm School",
  description:
    "Enhance your skills with live classes, personalized mentorships, workshops, and interactive boot camps. Join our vibrant community and elevate your creative career. Visit now to learn more!",
};

export default async function Courses() {
  return (
    <>
      <MediaBanner
        header="All Courses"
        subHeader="2024"
        hero="false"
        theme="dark"
        background="/banner/banner-19.jpg"
        image="/banner/media-banner.png"
        media="/video/brainstorm-design-solve-learn.mp4"
      />

      <FlexBox
        flexdirection="column"
        margin="100px auto 50px"
        alignitems="center"
      >
        <FlexBox
          flexdirection="column"
          margin="20px 0"
          sm_width="80%"
          width="70%"
        >
          <Header
            level="1"
            text="Unlock your creativity with our expert-led online courses"
          />

          <Header
            level="4"
            text="Are you ready to unleash your potential in concept art, environmental design, character design, storyboarding, and digital painting? At Brainstorm School, our expert-led online courses offer a unique blend of theory and practical application, equipping you with the skills to excel in your chosen field. Whether you're a novice seeking to master the basics or a seasoned professional looking to enhance your portfolio, our diverse range of courses is designed to unlock your creative power."
            fontSize="15px"
          />

          <Header
            level="4"
            text="All our courses are delivered online and are conducted live with the instructor. This means you'll be actively participating in the learning process, not just passively watching videos. You'll be expected to be present for the lessons throughout the duration of the course, which includes engaging lectures, interactive sessions, demos, and feedback. The class will meet in an online meeting room hosted by Brainstorm School."
            fontSize="15px"
          />

          <Header
            level="4"
            text="No in-person classes are offered at this time."
            fontSize="15px"
          />
        </FlexBox>
      </FlexBox>

      <FlexBox flexdirection="column" margin="0 auto" alignitems="center">
        <FlexBox flexdirection="column" sm_width="80%" width="70%">
          <RenderCourses width="33%" />
        </FlexBox>
      </FlexBox>

      <FlexBox flexdirection="column" margin="100px auto" alignitems="center">
        <FlexBox
          flexdirection="column"
          margin="20px 0"
          sm_width="80%"
          width="70%"
        >
          <CoursesFAQs />
        </FlexBox>
      </FlexBox>
    </>
  );
}
