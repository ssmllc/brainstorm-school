"use client";

import React from "react";
import styled from "styled-components";
import RegistrationBlock from "../registration/registration-block.component";
import gsap from "gsap";

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
      left: -75px;
    }
  }

  &.next {
    position: absolute;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 20;

    @media (min-width: 800px) {
      right: -75px;
    }
  }
`;

const Gallery = styled.div`
  /* border: thin dashed cyan; */
  margin: 75px 0;
  width: 100vw;

  @media (min-width: 800px) {
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

  @media (min-width: 800px) {
    height: 500px;
  }
`;

interface cardProps {
  image: string;
}

const Card = styled.div<cardProps>`
  background: ${({ image }) => `url(${image}) center center no-repeat`};
  background-size: cover;
  border-radius: 25px;
  box-shadow: 0 0 15px #222;
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
    width: 62%;
    z-index: 10;
  }

  &[data-position="2"] {
    /* max-height: 450px; */
    height: 90%;
    left: 61%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 9;
  }

  &[data-position="3"] {
    /* max-height: 400px; */
    height: 80%;
    left: 65.75%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 8;
  }

  &[data-position="4"] {
    /* max-height: 350px; */
    height: 70%;
    left: 70.25%;
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

  @media (min-width: 800px) {
    width: 75%;
  }
`;

const ImageGallery = () => {
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
                left: "26.5%",
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
                width: "62%",
                zIndex: "10",
              });
            }

            if (slide.dataset.position === "3") {
              gsap.to(slide, {
                height: "90%",
                left: "61%",
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
                left: "26.5%",
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
                width: "62%",
                zIndex: "10",
              });
            }

            if (slide.dataset.position === "4") {
              gsap.to(slide, {
                height: "90%",
                left: "61.25%",
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
                left: "22%",
                width: "25%",
                zIndex: "8",
              });
            }

            if (slide.dataset.position === "3") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "90%",
                left: "26.5%",
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
                width: "62%",
                zIndex: "10",
              });
            }

            if (slide.dataset.position === "5") {
              gsap.to(slide, {
                height: "90%",
                left: "61%",
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
                left: "22%",
                width: "25%",
                zIndex: "8",
              });
            }

            if (slide.dataset.position === "4") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "90%",
                left: "26.5%",
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
                width: "62%",
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
                width: "62%",
                zIndex: "10",
              });
            }

            if (slide.dataset.position === "2") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "90%",
                left: "61%",
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
                left: "65.75%",
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
                left: "70.25%",
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
                left: "73.5%",
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
                left: "26.5%",
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
                width: "62%",
                zIndex: "10",
              });
            }

            if (slide.dataset.position === "3") {
              gsap.to(slide, {
                height: "90%",
                left: "61%",
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
                left: "26.5%",
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
                width: "62%",
                zIndex: "10",
              });
            }

            if (slide.dataset.position === "4") {
              gsap.to(slide, {
                height: "90%",
                left: "61.25%",
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
                left: "22%",
                width: "25%",
                zIndex: "8",
              });
            }

            if (slide.dataset.position === "3") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "90%",
                left: "26.5%",
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
                width: "62%",
                zIndex: "10",
              });
            }

            if (slide.dataset.position === "5") {
              gsap.to(slide, {
                height: "90%",
                left: "61%",
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
      <RegistrationBlock
        heading="Students' Gallery"
        primary={false}
        scale="xl"
      />

      <CarouselWrapper>
        <Button className="prev" onClick={() => handleCardSliderMove("prev")}>
          <svg
            viewBox="0 0 48 48"
            fill="#bababa"
            style={{ width: "28px", height: "28px" }}
          >
            <path d="M30.1123,42a.99756.99756,0,0,1-.63964-.23193L12.207,27.37988a4.39934,4.39934,0,0,1,.001-6.76025L29.47266,6.23193a1.00017,1.00017,0,1,1,1.28125,1.53614L13.48828,22.15625a2.39914,2.39914,0,0,0-.001,3.687L30.75391,40.23193A1,1,0,0,1,30.1123,42Z" />
          </svg>
        </Button>
        <Carousel>
          <Card
            image="/cards/3d-concept.jpg"
            data-position="1"
            data-active="true"
            className="gallery-card"
          />
          <Card
            image="/cards/character-design.jpg"
            data-position="2"
            data-active="false"
            className="gallery-card"
          />
          <Card
            image="/cards/environmental-design.jpg"
            data-position="3"
            data-active="false"
            className="gallery-card"
          />
          <Card
            image="/cards/storyboarding.jpg"
            data-position="4"
            data-active="false"
            className="gallery-card"
          />
          <Card
            image="/cards/3d-concept.jpg"
            data-position="5"
            data-active="false"
            className="gallery-card"
          />
        </Carousel>
        <Button className="next" onClick={() => handleCardSliderMove("next")}>
          <svg
            viewBox="0 0 48 48"
            fill="#bababa"
            style={{ width: "28px", height: "28px" }}
          >
            <path d="M16.625,42a1,1,0,0,1-.6416-1.76807L33.249,25.84375a2.39879,2.39879,0,0,0,0-3.6875L15.9834,7.76807a1.00017,1.00017,0,1,1,1.28125-1.53614L34.53027,20.62012a4.39969,4.39969,0,0,1,0,6.75976L17.26465,41.76807A.99756.99756,0,0,1,16.625,42Z" />
          </svg>
        </Button>
      </CarouselWrapper>
    </Gallery>
  );
};

export default ImageGallery;
