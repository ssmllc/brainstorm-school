"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import ActionButton from "../buttons/action-button.component";
import Pill from "../pill/pill.component";
import Heading from "../heading/heading.component";
import CourseDetail from "../course-detail/course-detail.component";
import gsap from "gsap";
import FlexBox from "../layout/flexbox.component";
import { IconTime } from "../icons/icon-time.component";
import { IconDuration } from "../icons/icon-duration.component";

interface bannerProps {
  theme: string;
  $hero: string;
  $background: string;
}

const Banner = styled.div<bannerProps>`
  background: ${({ theme }) =>
    theme === "light" ? "var(--white)" : "var(--black)"};
  display: flex;
  height: ${({ $hero }) => ($hero === "true" ? "100vh" : "40vh")};
  flex-direction: column;
  overflow: hidden;
  position: relative;
  width: 100vw;

  @media (min-width: 768px) {
    height: 60vh;
  }

  @media (min-width: 1024px) {
    height: ${({ $hero }) => ($hero === "true" ? "80vh" : "50vh")};
  }

  @media (min-width: 1400px) {
    height: ${({ $hero }) => ($hero === "true" ? "100vh" : "50vh")};
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

const BannerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const Content = styled.div`
  /* border: thin dashed red; */
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
  position: absolute;
  max-width: 1400px;
  width: 80%;
  z-index: 5;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 70%;
  }

  @media (min-width: 1400px) {
    left: 50%;
    top: 55%;
    transform: translate(-50%, -50%);
    width: 80%;
  }

  @media (min-width: 1900px) {
    left: 50%;
    max-width: 1450px;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Column = styled.div`
  min-width: 25%;
  /* border: thin dashed blue; */
`;

const ActionWrapper = styled.div`
  /* border: thin dashed blue; */
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 15px 0;
  gap: 10px;

  @media (min-width: 768px) {
    gap: 20px;
  }

  @media (min-width: 800px) {
    align-items: center;
    gap: 50px;
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
  width: 100%;
  z-index: 50;

  @media (min-width: 768px) {
    height: 300px;
  }

  @media (min-width: 800px) {
    height: 400px;
    margin: 50px auto;
    width: 50%;
  }

  @media (min-width: 1900px) {
    height: 400px;
    margin: 150px auto 0;
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
  }, [background, randomize]);

  return (
    <Banner theme={theme} $hero={hero} $background={randomBanner}>
      <Content>
        <BannerWrapper>
          <Column>
            {label && <Pill label={label} />}
            {header && !headshot && (
              <Heading header={header} subHeader={subHeader ? subHeader : ""} />
            )}

            {header && headshot && (
              <FlexBox gap="25px" alignitems="center" margin="0">
                <Headshot $headshot={headshot} />
                <Heading
                  header={header}
                  subHeader={subHeader ? subHeader : ""}
                />
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
                      <IconTime width="24px" height="24px" />
                    </span>
                    {time}
                  </CourseDetail>

                  <CourseDetail color="var(--white)">
                    <span>
                      <IconDuration width="24px" height="24px" />
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
        </BannerWrapper>

        <div style={{ width: "100%", height: "100%" }}>
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
        </div>
      </Content>
    </Banner>
  );
};

export default MediaBanner;
