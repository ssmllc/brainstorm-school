"use client";

import React from "react";
import gsap from "gsap";
import styled from "styled-components";
import CourseDetail from "../course-detail/course-detail.component";
import Link from "next/link";
import { IconPrice } from "../icons/icon-price.component";
import { IconDuration } from "../icons/icon-duration.component";
import { IconCalendar } from "../icons/icon-calendar.component";
import { IconCap } from "../icons/icon-cap.component";

interface cardProps {
  width?: string;
  $xl_width?: string;
}

const Card = styled(Link)<cardProps>`
  background: var(--off-black);
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  flex-wrap: wrap;
  overflow: hidden;
  min-height: 400px;
  position: relative;
  transition: all 0.15s ease-out;
  width: 100%;

  @media (min-width: 768px) {
    width: 49%;
  }

  @media (min-width: 1024px) {
    max-width: 320px;
    width: ${({ width }) => (width ? width : "25%")};
  }

  @media (min-width: 1400px) {
    max-width: 320px;
    width: ${({ width }) => (width ? width : "25%")};
  }

  @media (min-width: 1900px) {
    max-width: 360px;
    width: ${({ $xl_width }) => ($xl_width ? $xl_width : "24%")};
  }

  &:hover {
    outline: 2px solid var(--primary);

    &::after {
      background-color: var(--primary);
      align-items: center;
      bottom: 10px;
      border-radius: 20px;
      color: var(--black);
      display: flex;
      content: "Register";
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 1px;
      font-weight: bold;
      padding: 10px 20px;

      right: 10px;
      position: absolute;
    }
  }
`;

interface previewProps {
  image: string;
  $tag: string;
}

const Preview = styled.div<previewProps>`
  background: url(${({ image }) => image}) top center no-repeat;
  background-size: cover;
  height: 200px;
  padding: 185px 20px 0 20px;
  position: relative;

  &:before {
    background: var(--black);
    border-radius: 50px;
    content: ${({ $tag }) => `"${$tag}"`};
    color: var(--white);
    font-size: 10px;
    font-weight: 500;
    left: 15px;
    letter-spacing: 1px;
    padding: 12px 15px;
    position: absolute;
    top: 15px;
    text-transform: uppercase;
    z-index: 5;
  }
`;

const Details = styled.div`
  background: var(--off-black);
  min-height: 100px;
  padding: 25px 20px;
  position: relative;
`;

const CourseName = styled.p`
  /* border: thin solid red; */
  color: var(--white);
  font-size: 24px;
  font-weight: bold;

  @media (min-width: 1024px) {
    font-size: 24px;
    min-height: 60px;
  }
`;

const CourseDetails = styled.ul`
  color: #ccc;
  font-size: 12px;
  padding: 20px 0 0 0;
  text-transform: uppercase;
`;

const Label = styled.span`
  color: var(--primary);
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const Level = styled.div`
  align-items: center;
  background: black;
  border-radius: 20px;
  bottom: 7px;
  display: flex;
  gap: 0 5px;
  left: 10px;
  padding: 10px 20px;
  position: absolute;
`;

const LevelIndicator = styled.div`
  background: url("/logo/brainstorm-logo.png") top center no-repeat;
  background-size: contain;
  border-radius: 100%;
  height: 20px;
  width: 20px;
`;

export const Difficulty = ({
  courseDifficulty,
}: {
  courseDifficulty: string | undefined;
}) => {
  enum Difficulty {
    Beginner = "Beginner",
    Intermediate = "Intermediate",
    Advanced = "Advanced",
  }

  return (
    <Level>
      {courseDifficulty && Difficulty.Beginner === courseDifficulty && (
        <>
          <Label>Beginner</Label>
          <LevelIndicator />
        </>
      )}

      {courseDifficulty && Difficulty.Intermediate === courseDifficulty && (
        <>
          <Label>Intermediate</Label>
          <LevelIndicator />
          <LevelIndicator />
        </>
      )}

      {courseDifficulty && Difficulty.Advanced === courseDifficulty && (
        <>
          <Label>Advanced</Label>
          <LevelIndicator />
          <LevelIndicator />
          <LevelIndicator />
        </>
      )}
    </Level>
  );
};

interface Props {
  base?: string;
  slug: any;
  path: string;
  preview: string;
  courseTrack: string;
  courseName: string;
  courseCode: string;
  courseTime: string;
  coursePrice?: string;
  className?: string;
  courseDuration: string;
  courseDifficulty?: string;
  width?: string;
  xl_width?: string;
}

const CardImageDetail = ({
  base,
  className,
  slug,
  path,
  preview,
  courseTrack,
  courseName,
  courseCode,
  courseTime,
  coursePrice,
  courseDuration,
  courseDifficulty,
  width,
  xl_width,
}: Props) => {
  return (
    <Card
      href={base ? `${base}/${slug}/${path}` : `${slug}/${path}`}
      className={className ? className : "course-card"}
      width={width}
      $xl_width={xl_width}
    >
      <Preview image={preview} $tag={courseTrack} />
      <Details>
        <CourseName>{courseName}</CourseName>
        <CourseDetails>
          <CourseDetail>
            <span>
              <IconCap width="24px" height="24px" />
            </span>
            {courseCode}
          </CourseDetail>

          <CourseDetail>
            <span>
              <IconCalendar height="24px" width="24px" />
            </span>
            {courseTime}
          </CourseDetail>

          <CourseDetail>
            <span>
              <IconDuration width="24px" height="24px" />
            </span>
            {courseDuration}
          </CourseDetail>

          <CourseDetail>
            <span>
              <IconPrice width="24px" height="24px" />
            </span>
            {coursePrice}
          </CourseDetail>
        </CourseDetails>
        <CourseDetails>
          <CourseDetail>
            {courseDifficulty && (
              <Difficulty courseDifficulty={courseDifficulty} />
            )}
          </CourseDetail>
        </CourseDetails>
      </Details>
    </Card>
  );
};

export default CardImageDetail;
