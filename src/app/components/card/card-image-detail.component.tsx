"use client";

import React from "react";
import gsap from "gsap";
import styled from "styled-components";
import CourseDetail from "../course-detail/course-detail.component";
import Link from "next/link";

const Card = styled(Link)`
  background: var(--off-black);
  border-radius: 20px;
  box-shadow: 0 0 10px var(--black);
  flex-wrap: wrap;
  overflow: hidden;
  min-height: 400px;
  max-width: 320px;
  width: 25%;
  position: relative;
  transition: all 0.15s ease-out;

  &:hover {
    outline: 2px solid var(--blue);

    &::after {
      background: var(--blue) url("/icons/ico-eye.png") top center no-repeat;
      background-size: 50%;
      background-position: center center;
      border-radius: 100%;
      bottom: 10px;
      content: "";
      height: 50px;
      right: 10px;
      position: absolute;
      width: 50px;
    }
  }
`;

interface cardProps {
  image: string;
  tag: string;
}

const Preview = styled.div<cardProps>`
  background: url(${({ image }) => image}) top center no-repeat;
  background-size: cover;
  height: 100px;
  padding: 185px 20px 0 20px;
  position: relative;

  &:before {
    background: var(--black);
    border-radius: 50px;
    content: ${({ tag }) => `"${tag}"`};
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
  padding: 40px 20px;
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
  base: string;
  slug: any;
  path: string;
  preview: string;
  courseTrack: string;
  courseName: string;
  courseCode: string;
  courseTime: string;
  courseDuration: string;
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
  courseDuration,
}: Props) => {
  return (
    <Card
      href={base ? `${base}/${slug}/${path}` : `${slug}/${path}`}
      className="course-card"
    >
      <Preview image={preview} tag={courseTrack} />
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 22"
                height="20px"
                fill="#bababa"
                width="20px"
              >
                <g>
                  <g>
                    <path d="M21.19,9.7H5.87A3.84,3.84,0,0,1,2,5.87v-2A3.84,3.84,0,0,1,5.87,0H21.19A.77.77,0,0,1,22,.77a.77.77,0,0,1-.77.76H5.87a2.3,2.3,0,0,0-2.3,2.3v2a2.3,2.3,0,0,0,2.3,2.3H21.19a.77.77,0,1,1,0,1.53Z" />
                    <path d="M21.19,24H3.83A3.84,3.84,0,0,1,0,20.17v-2A3.84,3.84,0,0,1,3.83,14.3H21.19a.77.77,0,1,1,0,1.53H3.83a2.3,2.3,0,0,0-2.3,2.3v2a2.3,2.3,0,0,0,2.3,2.3H21.19a.77.77,0,1,1,0,1.53Z" />
                    <path d="M23.23,15.83H6.89A2.8,2.8,0,0,1,4.09,13V11a2.8,2.8,0,0,1,2.8-2.81H23.23a.77.77,0,1,1,0,1.53H6.89A1.27,1.27,0,0,0,5.62,11v2A1.27,1.27,0,0,0,6.89,14.3H23.23a.77.77,0,1,1,0,1.53Z" />
                    <path d="M20.17,9.7a.77.77,0,0,1-.77-.76V.77a.77.77,0,1,1,1.54,0V8.94A.77.77,0,0,1,20.17,9.7Z" />
                    <path d="M20.17,24a.77.77,0,0,1-.77-.77V15.06a.77.77,0,0,1,1.54,0v8.17A.77.77,0,0,1,20.17,24Z" />
                    <path d="M17.11,19.92H4.85a.77.77,0,0,1,0-1.54H17.11a.77.77,0,0,1,0,1.54Z" />
                    <path d="M17.11,5.62H7.91a.77.77,0,0,1,0-1.54h9.2a.77.77,0,0,1,0,1.54Z" />
                    <path d="M22.21,15.83a.76.76,0,0,1-.76-.77V8.94a.77.77,0,1,1,1.53,0v6.12A.76.76,0,0,1,22.21,15.83Z" />
                  </g>
                </g>
              </svg>
            </span>
            {courseDuration}
          </CourseDetail>
        </CourseDetails>
      </Details>
    </Card>
  );
};

export default CardImageDetail;
