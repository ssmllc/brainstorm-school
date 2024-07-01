"use client";

import React from "react";
import styled from "styled-components";
import Pill from "../pill/pill.component";
import TextBlock from "../text-block/text-block.component";
import { Card } from "./card-card.component";
import Container from "../layout/container.component";
import DecipherText from "@/app/courses/components/decipher-text.component";
import Header from "../text-block/header.component";
import { IconPencilTip } from "../icons/icon-pencil-tip.component";
import { IconRequirements } from "../icons/icon-requirements.component";
import { IconPrice } from "../icons/icon-price.component";
import { IconFormat } from "../icons/icon-format.component";
import { IconLocation } from "../icons/icon-location.component";
import { IconTime } from "../icons/icon-time.component";
import { IconDuration } from "../icons/icon-duration.component";
import { IconTerm } from "../icons/icon-term.component";
import ActionButton from "../buttons/action-button.component";

interface previewProps {
  image: string;
  height?: string;
  $sm_height?: string;
  boxshadow?: string;
  width?: string;
}
const Preview = styled("div")<previewProps>`
  background: ${({ image }) => `url(${image}) top center no-repeat`};
  background-size: cover;
  border-radius: 20px;
  box-shadow: ${({ boxshadow }) => boxshadow};
  height: 290px;
  overflow: hidden;
  margin: 20px 0;
  width: 310px;

  @media (min-width: 768px) {
    height: ${({ height }) => (height ? height : "300px")};
    margin: 25px 0;
    width: ${({ width }) => (width ? width : "100%")};
  }

  @media (min-width: 1400px) {
    height: ${({ height }) => (height ? height : "320px")};
    margin: 25px 0;
    width: ${({ width }) => (width ? width : "100%")};
  }
`;

export const CardImage = ({
  className,
  boxshadow,
  sm_height,
  height,
  preview,
  width,
  setPreview,
}: {
  className?: string;
  preview: string;
  height?: string;
  sm_height?: string;
  boxshadow?: string;
  width?: string;
  setPreview?: (preview: string) => void;
}) => (
  <Preview
    className={className}
    boxshadow={boxshadow}
    height={height}
    image={preview}
    width={width}
    $sm_height={sm_height}
    onClick={() => {
      if (!setPreview) return false;

      setPreview(preview);
    }}
  />
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
    <Header
      level="3"
      fontSize="28px"
      text="What you'll learn"
      margin="10px 0 25px 0"
    />
    <TagsGroup>
      {tags?.map((tag: any, index: number) => (
        <Pill
          key={index}
          background="rgba(255, 255, 255, .10)"
          label={tag.title}
          sm_padding="12px 15px"
          padding="15px 15px"
          boxshadow="0 0 15px rgba(0, 0, 0, .50)"
        />
      ))}
    </TagsGroup>
  </Tags>
);

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0 auto;
  max-width: 1200px;
  width: 80%;

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 40px 0;
    width: 80%;
  }

  @media (min-width: 1360px) {
    flex-direction: row;
    padding: 40px 0;
    justify-content: space-between;
    width: 70%;
  }
`;

const CardWrapper = styled("div")`
  padding: 100px 5px 35px;
  width: 100%;

  @media (min-width: 1024px) {
    padding: 25px 25px;
    width: 55%;
  }
`;

const InstructorWrapper = styled("div")`
  width: 100%;

  @media (min-width: 1024px) {
    width: 40%;
  }
`;

const CourseDetails = styled("div")`
  background: var(--dark-grey);
  border-radius: 20px;
  height: 100%;
  padding: 0 20px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 768px) {
    padding: 20px 20px;
    width: 100%;
  }

  @media (min-width: 1360px) {
    padding: 20px 20px;
    width: 80%;
  }
`;

interface Props {
  results: any;
}

const CardLayout = ({ results }: Props) => {
  const {
    name,
    imageUrl,
    schedule,
    price,
    instructors,
    tags,
    description,
    format,
    materials,
    requirements,
  } = results;

  const { duration, registration, open, start, term, time } = schedule
    ? schedule[0]
    : [];

  const { title, profession, headshot } = instructors ? instructors[0] : [];

  const formatOpen = new Date(open).toDateString();
  const formatStart = new Date(start).toDateString();

  return (
    <Wrapper>
      <CardWrapper>
        <Header level="2" text={name} margin="25px 0" />
        <CardImage preview={imageUrl} />
        <DecipherText
          description={description}
          sm_margin="20px 0"
          margin="20px 0"
        />
        {tags && <CardTags tags={tags} />}
      </CardWrapper>

      <InstructorWrapper>
        <CourseDetails>
          <Container
            alignitems="center"
            display="flex"
            sm_padding="20px 20px"
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
                color="var(--primary)"
                texttransform="uppercase"
              >
                {registration && (
                  <ActionButton
                    href={registration}
                    type="primary"
                    label="Register Today"
                    margin="0"
                    offsetPadding="15px 15px"
                    fontSize="10px"
                  />
                )}
              </TextBlock>
            </Container>
          </Container>

          <Container
            background="var(--black)"
            borderradius="20px"
            display="flex"
            margin="20px 0"
            padding="10px 0"
            sm_padding="20px 0"
            width="100%"
          >
            <Container
              display="flex"
              flexdirection="column"
              padding="10px 20px"
              sm_padding="0 20px"
              md_padding="0 20px"
              width="100%"
              borderright="thin solid var(--medium-grey)"
            >
              <Header
                level="4"
                text="Opens"
                fontSize="24px"
                fontWeight="bold"
              />
              <Header
                level="4"
                text={formatOpen}
                fontSize="16px"
                sm_fontSize="14px"
              />
            </Container>

            <Container
              display="flex"
              flexdirection="column"
              padding="10px 20px"
              sm_padding="0 20px"
              width="100%"
            >
              <Header
                level="4"
                text="Start"
                fontSize="24px"
                fontWeight="bold"
              />
              <Header
                level="4"
                text={formatStart}
                fontSize="16px"
                sm_fontSize="14px"
              />
            </Container>
          </Container>

          <Card
            background="0"
            boxshadow="none"
            stacked="false"
            icon={headshot || "/instructors/ico-image.png"}
            heading={title}
            padding="20px 20px"
            subHeading={profession}
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
              <Container
                display="flex"
                padding="10px 20px"
                sm_padding="10px 20px"
                width="50%"
              >
                <TextBlock fontWeight="bold" fontSize="14px" padding="0">
                  <IconTerm width="24px" height="24px" /> Term
                </TextBlock>
              </Container>

              <Container
                display="flex"
                padding="10px 20px"
                sm_padding="10px 20px"
                width="50%"
              >
                <TextBlock fontSize="14px" padding="0">
                  {term}
                </TextBlock>
              </Container>
            </Container>

            <Container display="flex" width="100%">
              <Container
                display="flex"
                padding="10px 20px"
                sm_padding="10px 20px"
                width="50%"
              >
                <TextBlock fontWeight="bold" fontSize="14px" padding="0">
                  <IconFormat width="24px" height="24px" />
                  Format
                </TextBlock>
              </Container>

              <Container
                display="flex"
                padding="10px 20px"
                sm_padding="10px 20px"
                width="50%"
              >
                <TextBlock fontSize="14px" padding="0">
                  {format || "Live (Recorded)"}
                </TextBlock>
              </Container>
            </Container>

            <Container display="flex" width="100%">
              <Container
                display="flex"
                padding="10px 20px"
                sm_padding="10px 20px"
                width="50%"
              >
                <TextBlock fontWeight="bold" fontSize="14px" padding="0">
                  <IconLocation width="24px" height="24px" /> Location
                </TextBlock>
              </Container>

              <Container
                display="flex"
                padding="10px 20px"
                sm_padding="10px 20px"
                width="50%"
              >
                <TextBlock fontSize="14px" padding="0">
                  Online Course
                </TextBlock>
              </Container>
            </Container>

            <Container display="flex" width="100%">
              <Container
                display="flex"
                padding="10px 20px"
                sm_padding="10px 20px"
                width="50%"
              >
                <TextBlock fontWeight="bold" fontSize="14px" padding="0">
                  <IconTime width="24px" height="24px" /> Time
                </TextBlock>
              </Container>

              <Container
                display="flex"
                padding="10px 20px"
                sm_padding="10px 20px"
                width="50%"
              >
                <TextBlock fontSize="14px" padding="0">
                  {time}
                </TextBlock>
              </Container>
            </Container>

            <Container display="flex" width="100%">
              <Container
                display="flex"
                padding="10px 20px"
                sm_padding="10px 20px"
                width="50%"
              >
                <TextBlock fontWeight="bold" fontSize="14px" padding="0">
                  <IconDuration width="24px" height="24px" />
                  Duration
                </TextBlock>
              </Container>

              <Container
                display="flex"
                padding="10px 20px"
                sm_padding="10px 20px"
                width="50%"
              >
                <TextBlock fontSize="14px" padding="0">
                  {duration}
                </TextBlock>
              </Container>
            </Container>

            <Container display="flex" width="100%">
              <Container
                display="flex"
                padding="10px 20px"
                sm_padding="10px 20px"
                width="50%"
              >
                <TextBlock fontWeight="bold" fontSize="14px" padding="0">
                  <IconPrice width="24px" height="24px" />
                  Price
                </TextBlock>
              </Container>

              <Container
                display="flex"
                padding="10px 20px"
                sm_padding="10px 20px"
                width="50%"
              >
                <TextBlock fontSize="14px" padding="0">
                  {price}
                </TextBlock>
              </Container>
            </Container>
          </Container>

          {materials && (
            <Container
              borderradius="20px"
              margin="20px 0"
              padding="20px 20px"
              sm_padding="20px 20px"
              width="100%"
            >
              <TextBlock
                padding="10px 0"
                fontSize="18px"
                fontWeight="bold"
                width="auto"
              >
                <IconPencilTip width="24px" height="24px" /> Suggested Materials
              </TextBlock>

              <Header level="4" fontSize="15px" text={materials} />
            </Container>
          )}

          <Container
            borderradius="20px"
            margin="20px 0"
            padding="20px 20px"
            sm_padding="20px 20px"
            width="100%"
          >
            <TextBlock
              padding="10px 0"
              fontSize="18px"
              fontWeight="bold"
              width="auto"
            >
              <IconRequirements width="24px" height="24px" /> Requirements
            </TextBlock>
            <Header level="4" fontSize="15px" text={requirements} />
          </Container>
        </CourseDetails>
      </InstructorWrapper>
    </Wrapper>
  );
};

export default CardLayout;
