"use client";

import React, { useState } from "react";
import styled from "styled-components";
import RegistrationBlock from "../registration/registration-block.component";
import gsap from "gsap";
import { IconNext, IconPrevious } from "../icons/icon-arrow.component";
import Header from "../text-block/header.component";
import FlexBox from "../layout/flexbox.component";

const Button = styled.button`
  height: 65px;
  width: 65px;
  border-radius: 100%;
  background: #222;
  border: 0;
  color: #fff;

  &.prev {
    position: absolute;
    left: 25px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 20;

    @media (min-width: 800px) {
      left: -25px;
    }
  }

  &.next {
    position: absolute;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 20;

    @media (min-width: 800px) {
      right: -25px;
    }
  }
`;

const Gallery = styled.div`
  /* border: thin dashed cyan; */
  margin: 0 0 50px 0;
  width: 100vw;

  @media (min-width: 1024px) {
    margin: 50px 0;
  }
`;

const Carousel = styled.div`
  /* border: thin dashed red; */
  display: flex;
  height: 400px;
  margin: 0 auto;
  position: relative;
  width: 100%;

  @media (min-width: 1024px) {
    height: 400px;
  }

  @media (min-width: 1400px) {
    height: 500px;
  }
`;

interface cardProps {
  $image: string;
}

const Card = styled.div<cardProps>`
  background: ${({ $image }) => `url(${$image}) center center no-repeat`};
  background-size: cover;
  border-radius: 25px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  /* max-width: 350px; */
  width: 25%;

  &[data-position="1"] {
    height: 100%;
    left: 50%;
    max-height: 500px;
    max-width: 850px;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 65%;
    z-index: 10;
  }

  &[data-position="2"] {
    /* max-height: 450px; */
    height: 90%;
    left: 62%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 9;
  }

  &[data-position="3"] {
    /* max-height: 400px; */
    height: 80%;
    left: 66%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 8;
  }

  &[data-position="4"] {
    /* max-height: 350px; */
    height: 70%;
    left: 70%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 7;
  }

  &[data-position="5"] {
    /* max-height: 300px; */
    height: 60%;
    left: 73.5%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 6;
  }
`;

const CarouselWrapper = styled.div`
  /* border: thin dashed purple; */
  margin: 0 auto;
  position: relative;
  width: 100%;

  @media (min-width: 1024px) {
    max-width: 1200px;
    width: 85%;
  }

  @media (min-width: 1400px) {
    max-width: 1200px;
    width: 75%;
  }
`;

interface Props {
  header: string;
}

const ImageGallery = ({ header }: Props) => {
  let currentPosition: number = 1;

  const handleCardSliderMove = (direction: "next" | "prev") => {
    const featuredWorkSlides = [].slice.call(
      document.querySelectorAll(".gallery-card")
    );

    if (!!featuredWorkSlides.length) {
      if (direction === "next") {
        if (currentPosition >= featuredWorkSlides.length) {
          currentPosition = featuredWorkSlides.length;
        } else {
          currentPosition++;
        }
        console.log("next", currentPosition);

        // CurrentPosition 2
        if (currentPosition === 2) {
          featuredWorkSlides.map((slide: HTMLElement) => {
            if (slide.dataset.position === "1") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "90%",
                left: "25.5%",
                width: "25%",
                zIndex: "9",
              });
            }

            // Current
            if (slide.dataset.position === "2") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "100%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "65%",
                zIndex: "10",
              });
            }

            if (slide.dataset.position === "3") {
              gsap.to(slide, {
                height: "90%",
                left: "62%",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                width: "25%",
                zIndex: "9",
              });
            }

            if (slide.dataset.position === "4") {
              gsap.to(slide, {
                height: "80%",
                left: "66%",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: "8",
              });
            }

            if (slide.dataset.position === "5") {
              gsap.to(slide, {
                height: "70%",
                left: "70%",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: "7",
              });
            }
          });
        }

        // CurrentPosition 3
        if (currentPosition === 3) {
          featuredWorkSlides.map((slide: HTMLElement) => {
            if (slide.dataset.position === "1") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "80%",
                left: "22%",
                width: "25%",
                zIndex: "9",
              });
            }

            if (slide.dataset.position === "2") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "90%",
                left: "25.5%",
                width: "25%",
                zIndex: "9",
              });
            }

            // Current
            if (slide.dataset.position === "3") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "100%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "65%",
                zIndex: "10",
              });
            }

            if (slide.dataset.position === "4") {
              gsap.to(slide, {
                height: "90%",
                left: "62%",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: "8",
              });
            }

            if (slide.dataset.position === "5") {
              gsap.to(slide, {
                height: "80%",
                left: "66%",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: "7",
              });
            }
          });
        }

        // CurrentPosition 4
        if (currentPosition === 4) {
          featuredWorkSlides.map((slide: HTMLElement) => {
            if (slide.dataset.position === "1") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "70%",
                left: "18%",
                width: "25%",
                zIndex: "7",
              });
            }

            if (slide.dataset.position === "2") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "80%",
                left: "21.5%",
                width: "25%",
                zIndex: "8",
              });
            }

            if (slide.dataset.position === "3") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "90%",
                left: "25.5%",
                width: "25%",
                zIndex: "9",
              });
            }

            // Current
            if (slide.dataset.position === "4") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "100%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "65%",
                zIndex: "10",
              });
            }

            if (slide.dataset.position === "5") {
              gsap.to(slide, {
                height: "90%",
                left: "62%",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                width: "25%",
                zIndex: "9",
              });
            }
          });
        }

        // CurrentPosition 5
        if (currentPosition === 5) {
          featuredWorkSlides.map((slide: HTMLElement) => {
            if (slide.dataset.position === "1") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "60%",
                left: "14.5%",
                width: "25%",
                zIndex: "6",
              });
            }

            if (slide.dataset.position === "2") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "70%",
                left: "18%",
                width: "25%",
                zIndex: "7",
              });
            }

            if (slide.dataset.position === "3") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "80%",
                left: "21.5%",
                width: "25%",
                zIndex: "8",
              });
            }

            if (slide.dataset.position === "4") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "90%",
                left: "25.5%",
                width: "25%",
                zIndex: "9",
              });
            }

            // Current
            if (slide.dataset.position === "5") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "100%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "65%",
                zIndex: "10",
              });
            }
          });
        }
      } else if (direction === "prev") {
        if (currentPosition <= 0) {
          currentPosition = 1;
        } else {
          currentPosition--;
        }

        console.log("prev", currentPosition);

        if (currentPosition === 1) {
          featuredWorkSlides.map((slide: HTMLElement) => {
            if (slide.dataset.position === "1") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "100%",
                left: "50%",
                position: "absolute",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: "65%",
                zIndex: "10",
              });
            }

            if (slide.dataset.position === "2") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "90%",
                left: "62%",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                width: "25%",
                zIndex: "9",
              });
            }

            if (slide.dataset.position === "3") {
              gsap.to(slide, {
                height: "80%",
                left: "66%",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                width: "25%",
                zIndex: "8",
              });
            }

            if (slide.dataset.position === "4") {
              gsap.to(slide, {
                height: "70%",
                left: "70%",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                width: "25%",
                zIndex: "7",
              });
            }

            if (slide.dataset.position === "5") {
              gsap.to(slide, {
                height: "60%",
                left: "73%",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: "6",
              });
            }
          });
        }

        // CurrentPosition 2
        if (currentPosition === 2) {
          featuredWorkSlides.map((slide: HTMLElement) => {
            if (slide.dataset.position === "1") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "90%",
                left: "25.5%",
                width: "25%",
                zIndex: "9",
              });
            }

            // Current
            if (slide.dataset.position === "2") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "100%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "65%",
                zIndex: "10",
              });
            }

            if (slide.dataset.position === "3") {
              gsap.to(slide, {
                height: "90%",
                left: "62%",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                width: "25%",
                zIndex: "9",
              });
            }

            if (slide.dataset.position === "4") {
              gsap.to(slide, {
                height: "80%",
                left: "66%",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: "8",
              });
            }

            if (slide.dataset.position === "5") {
              gsap.to(slide, {
                height: "70%",
                left: "70%",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: "7",
              });
            }
          });
        }

        // CurrentPosition 3
        if (currentPosition === 3) {
          featuredWorkSlides.map((slide: HTMLElement) => {
            if (slide.dataset.position === "1") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "80%",
                left: "21.5%",
                width: "25%",
                zIndex: "9",
              });
            }

            if (slide.dataset.position === "2") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "90%",
                left: "25.5%",
                width: "25%",
                zIndex: "9",
              });
            }

            // Current
            if (slide.dataset.position === "3") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "100%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "65%",
                zIndex: "10",
              });
            }

            if (slide.dataset.position === "4") {
              gsap.to(slide, {
                height: "90%",
                left: "62%",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                width: "25%",
                zIndex: "8",
              });
            }

            if (slide.dataset.position === "5") {
              gsap.to(slide, {
                height: "80%",
                left: "66%",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: "7",
              });
            }
          });
        }

        // CurrentPosition 4
        if (currentPosition === 4) {
          featuredWorkSlides.map((slide: HTMLElement) => {
            if (slide.dataset.position === "1") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "70%",
                left: "18%",
                width: "25%",
                zIndex: "7",
              });
            }

            if (slide.dataset.position === "2") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "80%",
                left: "21.5%",
                width: "25%",
                zIndex: "8",
              });
            }

            if (slide.dataset.position === "3") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "90%",
                left: "25.5%",
                width: "25%",
                zIndex: "9",
              });
            }

            // Current
            if (slide.dataset.position === "4") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "100%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "65%",
                zIndex: "10",
              });
            }

            if (slide.dataset.position === "5") {
              gsap.to(slide, {
                height: "90%",
                left: "62%",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                width: "25%",
                zIndex: "9",
              });
            }
          });
        }
      }
    }
  };

  return (
    <Gallery>
      <FlexBox
        sm_width="80%"
        width="70%"
        sm_margin="50px auto"
        margin="50px auto"
        md_margin="50px auto"
        flexdirection="column"
      >
        <Header
          level="2"
          text="Gallery of Instructors Work"
          textalign="center"
        />
      </FlexBox>

      <CarouselWrapper>
        <Button className="prev" onClick={() => handleCardSliderMove("prev")}>
          <IconPrevious width="28px" height="28px" />
        </Button>
        <Carousel>
          <Card
            $image="/banner/banner-1.jpg"
            data-position="1"
            data-active="true"
            className="gallery-card"
          />
          <Card
            $image="/banner/banner-15.jpg"
            data-position="2"
            data-active="false"
            className="gallery-card"
          />
          <Card
            $image="/banner/banner-2.jpg"
            data-position="3"
            data-active="false"
            className="gallery-card"
          />
          <Card
            $image="/banner/banner-24.jpg"
            data-position="4"
            data-active="false"
            className="gallery-card"
          />
          <Card
            $image="/banner/banner-10.jpg"
            data-position="5"
            data-active="false"
            className="gallery-card"
          />
        </Carousel>
        <Button className="next" onClick={() => handleCardSliderMove("next")}>
          <IconNext width="28px" height="28px" />
        </Button>
      </CarouselWrapper>
    </Gallery>
  );
};

export default ImageGallery;
