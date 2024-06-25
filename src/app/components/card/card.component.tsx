"use client";

import React, { ReactNode, useEffect, useState } from "react";
import gsap from "gsap";
import styled from "styled-components";
import DecipherText from "@/app/courses/components/decipher-text.component";
import { IconTime } from "../icons/icon-time.component";
import { IconDuration } from "../icons/icon-duration.component";
import { IconCap } from "../icons/icon-cap.component";

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
  base?: string;
  path?: string;
  code?: string;
  time?: string;
  duration?: string;
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
  base,
  path,
  code,
  time,
  duration,
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
                <IconCap height="24px" width="24px" />
              </span>
              {code}
            </Tag>

            <Tag>
              <span>
                <IconTime width="24px" height="24px" />
              </span>
              {time}
            </Tag>

            <Tag>
              <span>
                <IconDuration width="24px" height="24px" />
              </span>
              {duration}
            </Tag>
          </Details>
        )}

        {info && cta && (
          <>
            <Info>{info}</Info>

            <a
              href={`/${base}/${path}`}
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

        {bio && slug && (
          <>
            <div
              style={{
                height: "105px",
                overflow: "hidden",
                padding: "10px 0",
              }}
            >
              <DecipherText description={bio} />
            </div>
            <a
              href={`/${base}/${slug}`}
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
