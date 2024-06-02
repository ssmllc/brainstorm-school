"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import styled from "styled-components";

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

  @media (min-width: 800px) {
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
    padding: 185px 20px 0 20px;
    width: ${({ variant }) => (variant === "sm" ? "auto" : "45%")};
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
    width: ${({ variant }) => (variant === "sm" ? "auto" : "55%")};
  }
`;

const SuperHeading = styled.p`
  color: var(--blue);
  font-size: 12px;
  font-weight: bold;
  padding: 0 0 10px 0;
  text-transform: uppercase;
`;

const Heading = styled.p`
  color: var(--white);
  font-size: 24px;
  font-weight: bold;
`;

const Details = styled.ul<cardProps>`
  color: #ccc;
  display: ${({ variant }) => (variant === "sm" ? "block" : "flex")};
  gap: ${({ variant }) => (variant === "sm" ? "unset" : "20px")};
  font-size: 12px;

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
  variant: string;
  heading: string;
  poster: string;
  superHeading?: string;
  info?: string;
}

const ImageDetailCard = ({
  variant = "sm",
  poster,
  superHeading,
  heading,
  info,
}: Props) => {
  return (
    <Card className="course-card" variant={variant}>
      <Poster variant={variant} image={poster} tag="Concept Art & Design" />
      <Content variant={variant}>
        {superHeading && (
          <SuperHeading>
            {superHeading ? superHeading : "Featured Blog"}
          </SuperHeading>
        )}
        <Heading>{heading}</Heading>
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
            Fri 10am - 1pm (PST)
          </Tag>

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
            10 Week Course
          </Tag>
        </Details>
        {info ? <Info>{info}</Info> : <Info>lorem</Info>}
      </Content>
    </Card>
  );
};

export default ImageDetailCard;
