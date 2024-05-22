"use client";

import React from "react";
import styled from "styled-components";
import Pill from "../pill/pill.component";
import TextBlock from "../text-block/text-block.component";
import { Card } from "./card-card.component";
import Container from "../layout/container.component";

const CardHeader = ({ text }: { text: string }) => <h2>{text}</h2>;

interface previewProps {
  image: string;
}
const Preview = styled("div")<previewProps>`
  background: ${({ image }) => `url(${image}) top center no-repeat`};
  background-size: cover;
  border-radius: 20px;
  height: 400px;
  overflow: hidden;
  margin: 25px 0;
  width: 100%;
`;

const CardImage = ({ preview }: { preview: string }) => (
  <Preview image={preview} />
);

const CardDetails = ({ text }: { text: string }) => (
  <TextBlock fontSize="14px" padding="0" width="100%">
    {text}
  </TextBlock>
);

const Tags = styled("div")`
  padding: 50px 0;
`;

const TagsGroup = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const CardTags = ({ tags }: { tags?: string[] }) => (
  <Tags>
    <TextBlock fontSize="28px" width="100%">
      What you&apos;ll learn
    </TextBlock>
    <TagsGroup>
      <Pill
        background="rgba(255, 255, 255, .10)"
        label="Understanding Proportions"
        padding="20px 20px"
        boxshadow="0 0 7px var(--black)"
      />
      <Pill
        background="rgba(255, 255, 255, .10)"
        label="Basic Anatomy"
        padding="20px 20px"
        boxshadow="0 0 7px var(--black)"
      />
      <Pill
        background="rgba(255, 255, 255, .10)"
        label="Gesture & Rhythm"
        padding="20px 20px"
        boxshadow="0 0 7px var(--black)"
      />
      <Pill
        background="rgba(255, 255, 255, .10)"
        label="Intro to construction"
        padding="20px 20px"
        boxshadow="0 0 7px var(--black)"
      />
      <Pill
        background="rgba(255, 255, 255, .10)"
        label="Anatomical Focus"
        padding="20px 20px"
        boxshadow="0 0 7px var(--black)"
      />
    </TagsGroup>
  </Tags>
);

const CardLayout = () => {
  return (
    <Container width="100vw" padding="50px">
      <Container margin="0 auto" width="80%" display="flex">
        <Container width="60%" padding="50px">
          <CardHeader text="Gain understanding of the rhythm and structure for anatomical background" />
          <CardImage preview="/cards/character-design.jpg" />
          <CardDetails text="An 8 week introduction to figure drawing and the basic skills of gesture drawing, construction, and basic anatomy. This course focuses on building a process from gesture to form, construction and surface anatomy. It is a perfect class for a beginner artist looking for the proper starting point." />
          <CardTags />
        </Container>

        <Container width="40%">
          <Container
            background="var(--dark-grey)"
            borderradius="20px"
            height="100%"
            padding="20px 20px"
            margin="0 auto"
            width="80%"
          >
            <Container
              // border={true}
              display="flex"
              padding="20px 20px"
              width="100%"
            >
              <Container width="50%">
                <TextBlock padding="0">Course Info</TextBlock>
              </Container>
              <Container width="50%" display="flex" justifycontent="right">
                <TextBlock
                  padding="0"
                  fontSize="12px"
                  width="auto"
                  color="var(--blue)"
                  texttransform="uppercase"
                >
                  Registration Open
                </TextBlock>
              </Container>
            </Container>

            <Container
              background="var(--black)"
              borderradius="20px"
              display="flex"
              margin="20px 0"
              width="100%"
            >
              <Container
                display="flex"
                flexdirection="column"
                padding="20px 20px"
                width="100%"
              >
                <p>Opens</p>
                <p>November 7, 2024</p>
              </Container>

              <Container
                display="flex"
                flexdirection="column"
                padding="20px 20px"
                width="100%"
              >
                <p>Opens</p>
                <p>November 7, 2024</p>
              </Container>
            </Container>

            <Card
              stacked="false"
              icon="/instructors/ico-image.png"
              heading="Christian Nacordia"
              subHeading="Concept Artist & Instructor"
              width="100%"
            />

            <Container
              borderradius="20px"
              display="flex"
              flexdirection="column"
              margin="20px 0"
              width="100%"
            >
              <Container display="flex" width="100%">
                <Container display="flex" padding="10px 20px" width="50%">
                  <TextBlock fontWeight="bold" fontSize="14px" padding="0">
                    Format
                  </TextBlock>
                </Container>

                <Container display="flex" padding="10px 20px" width="50%">
                  <TextBlock fontSize="14px" padding="0">
                    Live (Recorded)
                  </TextBlock>
                </Container>
              </Container>

              <Container display="flex" width="100%">
                <Container display="flex" padding="10px 20px" width="50%">
                  <TextBlock fontWeight="bold" fontSize="14px" padding="0">
                    Price
                  </TextBlock>
                </Container>

                <Container display="flex" padding="10px 20px" width="50%">
                  <TextBlock fontSize="14px" padding="0">
                    $100.00 USD
                  </TextBlock>
                </Container>
              </Container>

              <Container display="flex" width="100%">
                <Container display="flex" padding="10px 20px" width="50%">
                  <TextBlock fontWeight="bold" fontSize="14px" padding="0">
                    Location
                  </TextBlock>
                </Container>

                <Container display="flex" padding="10px 20px" width="50%">
                  <TextBlock fontSize="14px" padding="0">
                    Online Course
                  </TextBlock>
                </Container>
              </Container>

              <Container display="flex" width="100%">
                <Container display="flex" padding="10px 20px" width="50%">
                  <TextBlock fontWeight="bold" fontSize="14px" padding="0">
                    Duration
                  </TextBlock>
                </Container>

                <Container display="flex" padding="10px 20px" width="50%">
                  <TextBlock fontSize="14px" padding="0">
                    10 Weeks
                  </TextBlock>
                </Container>
              </Container>
            </Container>

            <Container
              borderradius="20px"
              margin="20px 0"
              padding="20px 20px"
              width="100%"
            >
              <TextBlock
                padding="10px 0"
                fontSize="18px"
                fontWeight="bold"
                width="auto"
              >
                Suggested Materials
              </TextBlock>

              <p>
                Traditional drawing supplies, pen & paper, sketchbook. Optional:
                Computer or Tablet with comparable drawing software such as
                photoshop, procreate, etc.
              </p>
            </Container>

            <Container
              borderradius="20px"
              margin="20px 0"
              padding="20px 20px"
              width="100%"
            >
              <TextBlock
                padding="10px 0"
                fontSize="18px"
                fontWeight="bold"
                width="auto"
              >
                Requirements
              </TextBlock>
              <p>
                Computer with Photoshop and high speed internet. Mic (highly
                recommended) and camera (optional).
              </p>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default CardLayout;
