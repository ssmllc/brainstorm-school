"use client";

import DecipherText from "@/app/courses/components/decipher-text.component";
import FlexBox from "../layout/flexbox.component";
import { Card } from "../card/card-card.component";
import styled from "styled-components";
import RegistrationBlock from "../registration/registration-block.component";

const InstructorWrapper = styled.div`
  /* border: thin solid red; */
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 0 20px;
  }
`;

const Instructor = styled.div`
  border-bottom: thin solid var(--medium-grey);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 0 50px 0;
  position: relative;
  width: 80%;

  @media (min-width: 768px) {
    flex-direction: column;
    width: 70%;
  }

  @media (min-width: 1024px) {
    padding: 0;
    width: 80%;
  }
`;

interface Props {
  title: string;
  profession: string;
  bio: string | null;
  registration?: string;
  icon: string;
}

const InstructorBio = ({
  title,
  profession,
  bio,
  registration,
  icon,
}: Props) => {
  return (
    <Instructor>
      <InstructorWrapper>
        <FlexBox
          sm_width="100%"
          md_width="100%"
          width="40%"
          xl_width="30%"
          xxl_width="30%"
        >
          <Card
            background="0"
            boxshadow="none"
            stacked="false"
            icon={icon}
            heading={title}
            subHeading={profession}
            padding="0 20px"
            width="100%"
            icon_height="100px"
            icon_width="120px"
          />
        </FlexBox>

        <FlexBox
          flexdirection="column"
          sm_width="100%"
          md_width="100%"
          width="60%"
          xl_width="70%"
          xxl_width="70%"
          sm_margin="20px 0"
          md_margin="20px 0"
          margin="20px 0"
          xl_margin="20px 0"
          xxl_margin="20px 0"
        >
          <DecipherText description={bio} margin="0" />
        </FlexBox>
      </InstructorWrapper>

      <RegistrationBlock
        href={registration}
        primary={true}
        heading="Register for this course"
        scale="xl"
        cta="Register Today"
        ctaType="primary"
        target="_blank"
      />
    </Instructor>
  );
};

export default InstructorBio;
