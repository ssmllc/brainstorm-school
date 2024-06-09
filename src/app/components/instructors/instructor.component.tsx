"use client";

import DecipherText from "@/app/courses/components/decipher-text.component";
import FlexBox from "../layout/flexbox.component";
import { Card } from "../card/card-card.component";
import styled from "styled-components";
import RegistrationBlock from "../registration/registration-block.component";

const Instructor = styled.div`
  border-bottom: thin solid var(--medium-grey);
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  padding: 0 0 50px 0;
  position: relative;
  width: 80%;

  @media (min-width: 768px) {
    flex-direction: column;
  }

  @media (min-width: 1400px) {
    flex-direction: row;
  }
`;

interface Props {
  title: string;
  profession: string;
  bio: string | null;
  registration?: string;
}

const InstructorBio = ({ title, profession, bio, registration }: Props) => {
  return (
    <Instructor>
      <Card
        background="0"
        boxshadow="none"
        stacked="false"
        icon="/instructors/ico-image.png"
        heading={title}
        subHeading={profession}
        padding="0 20px"
        width="100%"
      />

      <FlexBox sm_width="100%" md_width="100%" width="100%" sm_margin="20px 0">
        <DecipherText description={bio} margin="0" />
      </FlexBox>

      <RegistrationBlock
        href={registration}
        primary={true}
        heading="Register for this course"
        scale="xl"
        cta="Register Today"
        ctaType="primary"
      />
    </Instructor>
  );
};

export default InstructorBio;
