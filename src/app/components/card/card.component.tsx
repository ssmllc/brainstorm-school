"use client";

import React, { ReactNode, useEffect, useState } from "react";
import gsap from "gsap";
import styled from "styled-components";
import DecipherText from "@/app/courses/components/decipher-text.component";
import { IconTime } from "../icons/icon-time.component";
import { IconDuration } from "../icons/icon-duration.component";
import { IconCap } from "../icons/icon-cap.component";
import ActionButton from "../buttons/action-button.component";

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

  /* @media (min-width: 768px) {
    flex-direction: row;
  } */

  @media (min-width: 1024px) {
    flex-direction: row;
    height: 300px;
  }

  @media (min-width: 1360px) {
    flex-direction: row;
    height: 325px;
  }
`;

const Poster = styled.div<cardProps>`
  background: url(${({ image }) => image}) top center no-repeat;
  background-size: cover;
  height: 100px;
  padding: 185px 20px 20px 20px;
  position: relative;
  width: 100%;

  @media (min-width: 768px) {
    height: 100px;
  }

  @media (min-width: 1024px) {
    height: 100%;
    padding: 185px 20px 0 20px;
    width: 60%;
  }

  @media (min-width: 1360px) {
    height: 100%;
    padding: 185px 20px 0 20px;
    width: 40%;
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

  @media (min-width: 1360px) {
    padding: 40px 40px;
    width: 60%;
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

  @media (min-width: 1024px) {
    font-size: 21px;
  }

  @media (min-width: 1360px) {
    font-size: 24px;
  }
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
  /* border: thin solid red; */
  color: var(--white);
  font-size: 14px;
  line-height: 1.5;
  height: 100px;
  overflow: hidden;
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
  href?: string;
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
  href,
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
          <div>
            <Info>{info}</Info>

            <ActionButton
              href={`/${base}/${path}`}
              type={"tertiary"}
              label={cta || "Read More"}
              margin="30px 0 0"
              offsetPadding="10px 20px"
            />
          </div>
        )}

        {bio && slug && (
          <>
            <div
              style={{
                height: "90px",
                overflow: "hidden",
                padding: "10px 0",
              }}
            >
              <DecipherText description={bio} />
            </div>
            <ActionButton
              href={`/${base}/${slug}`}
              type={"tertiary"}
              label={cta || "Read More"}
              margin="20px 0 0"
              offsetPadding="10px 20px"
            />
          </>
        )}

        {bio && href && (
          <>
            <div
              style={{
                height: "90px",
                overflow: "hidden",
                padding: "10px 0",
              }}
            >
              <DecipherText description={bio} />
            </div>
            <ActionButton
              href={href}
              type={"tertiary"}
              label={cta || "Read More"}
              margin="20px 0 0"
              offsetPadding="10px 20px"
              target="_blank"
            />
          </>
        )}
      </Content>
    </Card>
  );
};

export default ImageDetailCard;
