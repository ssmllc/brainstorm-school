"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import ActionButton from "../buttons/action-button.component";
import Pill from "../pill/pill.component";
import Heading from "../heading/heading.component";
import CourseDetail from "../course-detail/course-detail.component";
import gsap from "gsap";
import FlexBox from "../layout/flexbox.component";

interface bannerProps {
  theme: string;
  $hero: string;
  $background: string;
}

const Banner = styled.div<bannerProps>`
  background: ${({ theme }) =>
    theme === "light" ? "var(--white)" : "var(--black)"};
  display: flex;
  height: ${({ $hero }) => ($hero === "true" ? "80vh" : "65vh")};
  flex-direction: column;
  overflow: hidden;
  /* padding: 100px 0 0 0; */
  position: relative;
  width: 100vw;

  @media (min-width: 800px) {
    height: ${({ $hero }) => ($hero === "true" ? "80vh" : "50vh")};
    /* padding: 150px 0 0 0; */
  }

  &::before {
    background: ${({ $background }) =>
      $background ? `url(${$background}) top left no-repeat` : "var(--black)"};
    background-size: cover;
    content: "";
    display: block;
    height: 100%;
    filter: ${({ $hero }) => ($hero === "true" ? "blur(5px)" : "blur(0)")};
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  &::after {
    background: ${({ $hero }) =>
      $hero === "false"
        ? "linear-gradient(to bottom, var(--off-black) 0%, rgba(0, 0, 0, 0) 100%)"
        : "linear-gradient(to bottom, var(--off-black) 15%, rgba(0, 0, 0, 0) 80%, var(--off-black) 100%)"};
    content: "";
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }
`;

const Content = styled.div`
  /* border: thin dashed red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 80%;
  z-index: 5;

  @media (min-width: 800px) {
    flex-direction: row;
    width: 70%;
  }
`;

const Column = styled.div`
  min-width: 50%;
  /* border: thin dashed blue; */
`;

const ActionWrapper = styled.div`
  /* border: thin dashed blue; */
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 50px;

  @media (min-width: 800px) {
    align-items: center;
    flex-direction: row;
    min-width: 450px;
  }
`;

interface mediaProps {
  $image?: string;
  $headshot?: string;
  media?: string;
}

const Headshot = styled.div<mediaProps>`
  background: ${({ $headshot }) => `url(${$headshot}) top left no-repeat`};
  background-size: cover;
  border-radius: 100%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
  overflow: hidden;
  height: 140px;
  margin: 0px 0;
  position: relative;
  width: 140px;
  z-index: 50;
`;

const Media = styled.div<mediaProps>`
  background: ${({ $image }) =>
    $image ? `url(${$image}) top center no-repeat` : "var(--black)"};
  background-size: contain;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
  overflow: hidden;
  height: 250px;
  margin: 25px auto;
  max-width: 800px;
  position: relative;
  width: 80%;
  z-index: 50;

  @media (min-width: 800px) {
    height: 500px;
    margin: 50px auto;
    width: 50%;
  }
`;

const StartDate = styled.p`
  color: var(--white);
  font-size: 12px;
  text-transform: uppercase;
`;

interface Props {
  header?: string;
  subHeader?: string;
  theme: string;
  hero: string;
  background: string;
  label?: string;
  image?: string;
  headshot?: string;
  media?: string;
  duration?: string;
  time?: string;
  registration?: string;
  randomize?: boolean;
}

const MediaBanner = ({
  background,
  header,
  subHeader,
  label,
  theme,
  hero,
  image,
  headshot,
  media,
  duration,
  time,
  registration,
  randomize = true,
}: Props) => {
  const [randomBanner, setRandomBanner] = useState<string>("");

  useEffect(() => {
    let randomBanner: string = "";

    if (randomize === true) {
      const randomBannerImage = (min: number, max: number) => {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
      };

      randomBanner = `/banner/banner-${randomBannerImage(1, 20)}.jpg`;
    } else {
      randomBanner = background;
    }

    setRandomBanner(randomBanner);

    gsap.to(".banner-wrapper", {
      ease: "power1.out",
      delay: 0.1,
      duration: 1,
      opacity: 1,
    });
  }, []);

  return (
    <Banner theme={theme} $hero={hero} $background={randomBanner}>
      <Content>
        <Column>
          {label && <Pill label={label} />}
          {header && !headshot && (
            <Heading header={header} subHeader={subHeader ? subHeader : ""} />
          )}

          {header && headshot && (
            <FlexBox gap="25px" alignitems="center" margin="0">
              <Headshot $headshot={headshot} />
              <Heading header={header} subHeader={subHeader ? subHeader : ""} />
            </FlexBox>
          )}
        </Column>

        <ActionWrapper>
          <Column>
            {!hero && <StartDate>Courses begin: May 20, 2024</StartDate>}
            {hero === "true" && (
              <>
                <CourseDetail color="var(--white)">
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
                  {time}
                </CourseDetail>

                <CourseDetail color="var(--white)">
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
                  {duration}
                </CourseDetail>
              </>
            )}
          </Column>
          {hero === "true" && (
            <Column>
              <ActionButton
                href={registration}
                type="primary"
                label="Register"
                margin="0"
              />
            </Column>
          )}
        </ActionWrapper>
      </Content>

      {hero === "true" && image && !media && <Media $image={image} />}

      {hero === "true" && media && (
        <Media>
          <video
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              objectFit: "cover",
            }}
            width="100%"
            height="100%"
            controls
          >
            <source src={media} type="video/mp4" />
          </video>
        </Media>
      )}
    </Banner>
  );
};

export default MediaBanner;
