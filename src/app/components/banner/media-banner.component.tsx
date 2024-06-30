"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import ActionButton from "../buttons/action-button.component";
import Pill from "../pill/pill.component";
import Heading from "../heading/heading.component";
import CourseDetail from "../course-detail/course-detail.component";
import gsap from "gsap";
import FlexBox from "../layout/flexbox.component";
import { IconDuration } from "../icons/icon-duration.component";
import { IconTerm } from "../icons/icon-term.component";

interface bannerProps {
  theme: string;
  $hero: string;
  $background: string;
}

const Banner = styled.div<bannerProps>`
  background: ${({ theme }) =>
    theme === "light" ? "var(--white)" : "var(--black)"};
  display: flex;
  height: ${({ $hero }) => ($hero === "true" ? "100vh" : "65vh")};
  flex-direction: column;
  overflow: hidden;
  position: relative;
  width: 100vw;

  @media (min-width: 768px) {
    height: 50vh;
  }

  @media (min-width: 1024px) {
    height: ${({ $hero }) => ($hero === "true" ? "100vh" : "75vh")};
  }

  @media (min-width: 1360px) {
    height: 75vh;
  }

  &::before {
    background: ${({ $background }) =>
      $background ? `url(${$background}) top left no-repeat` : "var(--black)"};
    background-size: cover;
    content: "";
    display: block;
    height: 100%;
    /* filter: ${({ $hero }) =>
      $hero === "true" ? "blur(5px)" : "blur(0)"}; */
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  &::after {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      var(--off-black) 100%
    );
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

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 70%;
  }

  @media (min-width: 1360px) {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
  }

  @media (min-width: 1400px) {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
  }

  @media (min-width: 1900px) {
    left: 50%;
    max-width: 1450px;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const BannerWrapper = styled.div`
  /* border: thin solid red; */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1024px) {
    align-items: center;
    flex-direction: row;
  }

  @media (min-width: 1360px) {
    flex-direction: row;
  }
`;

interface columnProps {
  $width?: string;
}
const Column = styled.div<columnProps>`
  width: 100%;

  @media (min-width: 768px) {
    width: ${({ $width }) => ($width ? $width : "25%")};
  }
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

  @media (min-width: 1024px) {
    align-items: center;
    gap: 40px;
    flex-direction: row;
    margin: 0;
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
  border: 5px solid white;
  height: 175px;
  overflow: hidden;
  margin: 0;
  position: relative;
  width: 175px;
  z-index: 50;
`;

const Media = styled.div<mediaProps>`
  background: ${({ $image }) =>
    $image ? `url(${$image}) top center no-repeat` : "var(--black)"};
  background-size: cover;
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

  @media (min-width: 1024px) {
    height: 300px;
    width: 55%;
  }

  @media (min-width: 1360px) {
    height: 400px;
    margin: 50px auto;
    width: 60%;
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

      randomBanner = `/banner/banner-${randomBannerImage(1, 45)}.jpg`;
    } else {
      randomBanner = background;
    }

    setRandomBanner(randomBanner);

    // gsap.to(".banner-wrapper", {
    //   ease: "power1.out",
    //   duration: 1,
    //   opacity: 1,
    // });
  }, [background, randomize]);

  return (
    <Banner
      theme={theme}
      $hero={hero}
      $background={randomize ? randomBanner : background}
    >
      <Content>
        <BannerWrapper>
          <Column $width="50%">
            {label && <Pill label={label} />}
            {header && !headshot && (
              <Heading header={header} subHeader={subHeader ? subHeader : ""} />
            )}

            {header && headshot && (
              <FlexBox
                alignitems="center"
                gap="25px"
                margin="0"
                sm_width="100%"
              >
                <Headshot $headshot={headshot} />
                <Heading
                  header={header}
                  subHeader={subHeader ? subHeader : ""}
                />
              </FlexBox>
            )}
          </Column>

          <ActionWrapper>
            <Column $width="60%">
              {!hero && <StartDate>Courses begin: May 20, 2024</StartDate>}
              {hero === "true" && (
                <>
                  <CourseDetail color="var(--white)">
                    <span>
                      <IconTerm width="24px" height="24px" />
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
              <Column $width="40%">
                <ActionButton
                  href={registration}
                  type="primary"
                  label="Register Today"
                  margin="0"
                  offsetPadding="15px 15px"
                />
              </Column>
            )}
          </ActionWrapper>
        </BannerWrapper>

        <div style={{ width: "100%", height: "100%" }}>
          {/* {hero === "true" && image && !media && <Media $image={image} />} */}

          {/* {hero === "true" && media && (
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
          )} */}
        </div>
      </Content>
    </Banner>
  );
};

export default MediaBanner;
