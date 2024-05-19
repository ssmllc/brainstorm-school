import type { Metadata } from "next";
import RenderCourses from "./components/render-courses.component";
import MediaBanner from "../components/banner/media-banner.component";
import TextBlock from "../components/text-block/text-block.component";
import Heading from "../components/heading/heading.component";
import RegistrationBlock from "../components/registration/registration-block.component";
import Container from "../components/layout/container.component";

export const metadata: Metadata = {
  title: "Brainstorm Courses - Brainstorm School",
  description: "Courses for brainstorm school",
};

export default async function Courses() {
  return (
    <div>
      <MediaBanner
        hero={false}
        theme="dark"
        background="/backgrounds/sci-fi-city.jpg"
        image="/banner/media-banner.png"
        media="/video/brainstorm-design-solve-learn.mp4"
      />
      <Container margin="0 auto" width="100vw" padding="75px 0 0">
        <Container margin="0 auto" width="75%">
          <Heading
            superHeader={true}
            header="Unlock your creativity with our expert-led online courses"
          />

          <TextBlock>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias porro
            nihil ex nemo quibusdam, autem quidem, officia maxime qui voluptate
            quia ipsam, ab at assumenda itaque sed! Nam, aliquam deleniti. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Alias porro nihil
            ex nemo quibusdam, autem quidem, officia maxime qui voluptate quia
            ipsam, ab at assumenda itaque sed! Nam, aliquam deleniti.
          </TextBlock>
        </Container>
      </Container>

      <Container>
        <RenderCourses />
      </Container>

      <RegistrationBlock
        primary={false}
        heading="Not what you are looking for?"
        scale="xl"
        cta="View All Courses"
      />
    </div>
  );
}
