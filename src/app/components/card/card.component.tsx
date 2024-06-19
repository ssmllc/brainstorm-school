"use client";

import React, { ReactNode, useEffect, useState } from "react";
import gsap from "gsap";
import styled from "styled-components";
import DecipherText from "@/app/courses/components/decipher-text.component";
import { IconTime } from "../icons/icon-time.component";
import { IconDuration } from "../icons/icon-duration.component";

interface cardProps {
  variant: string;
  image?: string;
  tag?: string;
}

const Card = styled.div<cardProps>`
  /* border: thin solid red; */
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  width: 100%;
  position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    height: 250px;
  }

  @media (min-width: 1400px) {
    flex-direction: row;
    height: 325px;
  }
`;

const Poster = styled.div<cardProps>`
  background: url(${({ image }) => image}) top center no-repeat;
  background-size: cover;
  height: ${({ variant }) => (variant === "sm" ? "100px" : "100%")};
  padding: 185px 20px 20px 20px;
  position: relative;
  width: 100%;

  @media (min-width: 800px) {
    height: 100%;
    padding: 185px 20px 0 20px;
    width: 45%;
  }

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

const Content = styled.div<cardProps>`
  background: var(--off-black);
  min-height: ${({ variant }) => (variant === "sm" ? "100px;" : "100%")};
  padding: ${({ variant }) => (variant === "sm" ? "40px 20px;" : "40px 40px;")};
  position: relative;
  width: 100%;

  @media (min-width: 800px) {
    min-height: 100%;
    padding: 40px 40px;
    width: 55%;
  }
`;

const SuperHeading = styled.p`
  color: var(--primary);
  font-size: 12px;
  font-weight: bold;
  padding: 0 0 10px 0;
  text-transform: uppercase;
`;

const Heading = styled.p`
  color: var(--white);
  font-size: 24px;
  font-weight: bold;
  padding: 0;
`;

const Details = styled.ul<cardProps>`
  color: #ccc;
  display: block;
  gap: ${({ variant }) => (variant === "sm" ? "unset" : "20px")};
  font-size: 12px;

  @media (min-width: 800px) {
    display: flex;
  }

  li {
    padding: 20px 0 0 0;
    text-transform: uppercase;
  }
`;

const Info = styled.p`
  color: var(--white);
  font-size: 14px;
  line-height: 1.5;
  padding: 20px 0;
`;

const Tag = ({ children }: any) => {
  return (
    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      {children}
    </li>
  );
};

interface Props {
  variant?: string;
  heading: string;
  subheading?: string;
  poster: string;
  superHeading?: string;
  info?: string;
  bio?: string;
  tags?: boolean;
  slug?: string;
  cta?: string;
}

const ImageDetailCard = ({
  variant = "sm",
  poster,
  superHeading,
  heading,
  subheading,
  info,
  bio,
  tags,
  slug,
  cta,
}: Props) => {
  return (
    <Card className="course-card" variant={variant}>
      <Poster variant={variant} image={poster} tag={superHeading} />
      <Content variant={variant}>
        {subheading && <SuperHeading>{subheading}</SuperHeading>}
        <Heading>{heading}</Heading>
        {tags && (
          <Details variant={variant}>
            <Tag>
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
              FIG RS
            </Tag>

            <Tag>
              <span>
                <IconTime width="24px" height="24px" />
              </span>
              Fri 10am - 1pm (PST)
            </Tag>

            <Tag>
              <span>
                <IconDuration width="24px" height="24px" />
              </span>
              10 Week Course
            </Tag>
          </Details>
        )}
        {info && <Info>{info}</Info>}
        {bio && (
          <>
            <div
              style={{
                height: "125px",
                overflow: "hidden",
                padding: "10px 0",
              }}
            >
              <DecipherText description={bio} />
            </div>
            <a
              href={`/instructors/${slug}`}
              style={{
                textDecoration: "none",
                color: "var(--primary)",
                display: "block",
                padding: "25px 0",
              }}
            >
              {cta}
            </a>
          </>
        )}
      </Content>
    </Card>
  );
};

export default ImageDetailCard;
