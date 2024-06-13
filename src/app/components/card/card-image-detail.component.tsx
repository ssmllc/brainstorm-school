"use client";

import React from "react";
import gsap from "gsap";
import styled from "styled-components";
import CourseDetail from "../course-detail/course-detail.component";
import Link from "next/link";
import { IconPrice } from "../icons/icon-price.component";
import { IconDuration } from "../icons/icon-duration.component";

interface cardProps {
  width?: string;
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

  @media (min-width: 800px) {
    max-width: 320px;
    width: ${({ width }) => (width ? width : "25%")};
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
  height: 100px;
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
  padding: 20px 20px;
  position: relative;
`;

const CourseName = styled.p`
  color: var(--white);
  font-size: 26px;
  font-weight: bold;
`;

const CourseDetails = styled.ul`
  color: #ccc;
  font-size: 12px;
  padding: 15px 0 0 0;
  text-transform: uppercase;
`;

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
  courseDuration: string;
  width?: string;
}

const CardImageDetail = ({
  base,
  slug,
  path,
  preview,
  courseTrack,
  courseName,
  courseCode,
  courseTime,
  coursePrice,
  courseDuration,
  width,
}: Props) => {
  return (
    <Card
      href={base ? `${base}/${slug}/${path}` : `${slug}/${path}`}
      className="course-card"
      width={width}
    >
      <Preview image={preview} $tag={courseTrack} />
      <Details>
        <CourseName>{courseName}</CourseName>
        <CourseDetails>
          <CourseDetail>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 22"
                height="20px"
                fill="#bababa"
                width="20px"
              >
                <g>
                  <g id="Layer_1" data-name="Layer 1">
                    <path
                      className="cls-1"
                      d="M12,15.86a.75.75,0,0,1-.41-.12L.35,8.58a.78.78,0,0,1,0-1.3L11.59.12a.76.76,0,0,1,.82,0L23.65,7.28a.78.78,0,0,1,0,1.3L12.41,15.74A.75.75,0,0,1,12,15.86ZM2.19,7.93,12,14.18l9.81-6.25L12,1.68Z"
                    />
                    <path
                      className="cls-1"
                      d="M12,22a.75.75,0,0,1-.41-.12L4.44,17.32a.76.76,0,0,1-.35-.65V10.53a.76.76,0,0,1,.76-.76.77.77,0,0,1,.77.76v5.72L12,20.32l6.38-4.07V10.53a.77.77,0,0,1,.77-.76.76.76,0,0,1,.76.76v6.14a.76.76,0,0,1-.35.65l-7.15,4.56A.75.75,0,0,1,12,22Z"
                    />
                    <path
                      className="cls-1"
                      d="M23.23,14.84a.77.77,0,0,1-.76-.77V7.93a.77.77,0,1,1,1.53,0v6.14A.77.77,0,0,1,23.23,14.84Z"
                    />
                  </g>
                </g>
              </svg>
            </span>
            {courseCode}
          </CourseDetail>

          <CourseDetail>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 22"
                height="20px"
                fill="#bababa"
                width="20px"
              >
                <g>
                  <g id="_1" data-name="1">
                    <path d="M21.19,24H2.81A2.81,2.81,0,0,1,0,21.19V8.94a.76.76,0,0,1,.77-.77H23.23a.76.76,0,0,1,.77.77V21.19A2.81,2.81,0,0,1,21.19,24ZM1.53,9.7V21.19a1.28,1.28,0,0,0,1.28,1.28H21.19a1.28,1.28,0,0,0,1.28-1.28V9.7Z" />
                    <path d="M23.23,9.7H.77A.76.76,0,0,1,0,8.94V4.85A2.81,2.81,0,0,1,2.81,2H21.19A2.81,2.81,0,0,1,24,4.85V8.94A.76.76,0,0,1,23.23,9.7ZM1.53,8.17H22.47V4.85a1.28,1.28,0,0,0-1.28-1.28H2.81A1.28,1.28,0,0,0,1.53,4.85Z" />
                    <path d="M12,5.62a.78.78,0,0,1-.77-.77V.77a.77.77,0,1,1,1.54,0V4.85A.78.78,0,0,1,12,5.62Z" />
                    <path d="M6.89,5.62a.77.77,0,0,1-.76-.77V.77a.77.77,0,1,1,1.53,0V4.85A.77.77,0,0,1,6.89,5.62Z" />
                    <path d="M17.11,5.62a.77.77,0,0,1-.77-.77V.77a.77.77,0,1,1,1.53,0V4.85A.77.77,0,0,1,17.11,5.62Z" />
                    <path d="M12.77,16.09a.77.77,0,1,1-.77-.77A.77.77,0,0,1,12.77,16.09Z" />
                    <circle cx="12" cy="19.15" r="0.77" />
                    <path d="M15.83,13a.77.77,0,1,1-1.53,0,.77.77,0,0,1,1.53,0Z" />
                    <path d="M15.83,16.09a.77.77,0,1,1-.77-.77A.76.76,0,0,1,15.83,16.09Z" />
                    <path d="M6.64,16.09a.77.77,0,1,1-.77-.77A.76.76,0,0,1,6.64,16.09Z" />
                    <path d="M6.64,19.15a.77.77,0,1,1-.77-.77A.77.77,0,0,1,6.64,19.15Z" />
                    <path d="M9.7,16.09a.77.77,0,1,1-.76-.77A.76.76,0,0,1,9.7,16.09Z" />
                    <path d="M9.7,19.15a.77.77,0,0,1-1.53,0,.77.77,0,1,1,1.53,0Z" />
                    <path d="M18.89,13a.77.77,0,1,1-.76-.76A.76.76,0,0,1,18.89,13Z" />
                    <path d="M18.89,16.09a.77.77,0,1,1-.76-.77A.76.76,0,0,1,18.89,16.09Z" />
                  </g>
                </g>
              </svg>
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
      </Details>
    </Card>
  );
};

export default CardImageDetail;
