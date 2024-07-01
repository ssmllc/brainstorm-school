import React from "react";
import MediaBanner from "@/app/components/banner/media-banner.component";
import CardLayout, {
  CardImage,
} from "@/app/components/card/simple-card.component";
import Carousel from "@/app/components/carousel/carousel.component";
import TextHeaderBlock from "@/app/components/text-block/text-header-block.component";
import SimilarCourses from "@/app/components/similar-courses/similar-courses.component";
import FlexBox from "@/app/components/layout/flexbox.component";
import { Metadata } from "next";
import InstructorBio from "@/app/components/instructors/instructor.component";
import DecipherText from "@/app/courses/components/decipher-text.component";
import Header from "@/app/components/text-block/header.component";
import RegistrationBlock from "@/app/components/registration/registration-block.component";

export const metadata: Metadata = {
  title: "Brainstorm Online Mentorship Programs - Brainschool School",
  description:
    "Elevate your design skills with personalized mentorships. Collaborate with industry experts to sharpen your abilities and achieve your professional aspirations. Register Today!",
};

const fetchData = async () => {
  const query =
    "https://y8rjsgga.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27mentorship%27%5D+%7B%0A++_id%2C%0A++%22slug%22%3A+slug.current%2C%0A++%22imageUrl%22%3A+preview.asset-%3Eurl%2C%0A++mentorship%2C%0A++programs%5B%5D+-%3E+%7B%0A++++_id%2C%0A++++mentor%2C%0A++++description%2C%0A++++registration%2C%0A++++program_name%2C%0A++%7D%2C%0A%7D";
  const response = await fetch(query, { cache: "no-store" });
  // const response = await fetch(query);

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  const { result } = await response.json();

  return result;
};

type Props = {
  params: { programsId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function MentorshipPrograms({
  params,
}: {
  params: { programsId: string };
}) {
  const result = await fetchData();

  const selectedResults = result.filter((mentorship: any) => {
    return mentorship.slug === params.programsId;
  })[0];

  const { mentorship, programs } = selectedResults;
  const { mentor, description, registration, program_name } = programs[0];

  return (
    <>
      <MediaBanner
        label="Mentorship"
        header={mentorship}
        subHeader={program_name}
        hero="false"
        theme="dark"
        background="/banner/banner-3.jpg"
      />

      <FlexBox
        alignitems="center"
        flexdirection="column"
        sm_margin="50px 0"
        md_margin="100px auto 50px"
        margin="100px auto 50px"
        xl_margin="100px auto 50px"
      >
        <FlexBox
          sm_margin="20px 0"
          md_margin="20px 0"
          margin="20px 0"
          xl_margin="0"
          sm_width="80%"
          md_width="70%"
          width="70%"
          xl_width="80%"
        >
          <Header level="1" text={mentorship} margin="0" />
        </FlexBox>

        <FlexBox
          flexdirection="column"
          sm_margin="20px 0"
          md_margin="20px 0"
          margin="20px 0"
          xl_margin="20px 0"
          sm_width="80%"
          md_width="70%"
          width="70%"
          xl_width="80%"
        >
          <DecipherText description={description} />
        </FlexBox>
      </FlexBox>

      <RegistrationBlock
        primary={true}
        heading="Ready to take the next step?"
        scale="xl"
        ctaType="primary"
        cta="Register today"
        href={registration}
        faq={true}
        target="_blank"
      />

      <SimilarCourses header="View Similar Courses" />
    </>
  );
}
