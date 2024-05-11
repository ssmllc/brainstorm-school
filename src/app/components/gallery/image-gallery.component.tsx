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
    left: -100px;
    top: 50%;
    transform: translateY(-50%);
  }

  &.next {
    position: absolute;
    right: -100px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Gallery = styled.div`
  /* border: thin dashed cyan; */
  width: 100vw;
`;

const Carousel = styled.div`
  /* border: thin dashed red; */
  display: flex;
  height: 500px;
  margin: 0 auto;
  position: relative;
  width: 100%;
`;

interface cardProps {
  image: string;
}

const Card = styled.div<cardProps>`
  background: ${({ image }) => `url(${image}) top center no-repeat`};
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
                height: "450px",
                left: "27.5%",
                width: "350px",
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
                height: "450px",
                left: "61%",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: "9",
              });
            }

            if (slide.dataset.position === "4") {
              gsap.to(slide, {
                height: "400px",
                left: "66%",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: "8",
              });
            }

            if (slide.dataset.position === "5") {
              gsap.to(slide, {
                height: "350px",
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
                height: "400px",
                left: "23%",
                width: "350px",
                zIndex: "9",
              });
            }

            if (slide.dataset.position === "2") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "450px",
                left: "27.5%",
                width: "350px",
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
                height: "450px",
                left: "61.25%",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: "8",
              });
            }

            if (slide.dataset.position === "5") {
              gsap.to(slide, {
                height: "400px",
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
                height: "350px",
                left: "18.5%",
                width: "350px",
                zIndex: "7",
              });
            }

            if (slide.dataset.position === "2") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "400px",
                left: "23%",
                width: "350px",
                zIndex: "8",
              });
            }

            if (slide.dataset.position === "3") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "450px",
                left: "27.5%",
                width: "350px",
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
                height: "450px",
                left: "61%",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
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
                height: "300px",
                left: "15%",
                width: "350px",
                zIndex: "6",
              });
            }

            if (slide.dataset.position === "2") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "350px",
                left: "18.5%",
                width: "350px",
                zIndex: "7",
              });
            }

            if (slide.dataset.position === "3") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "400px",
                left: "23%",
                width: "350px",
                zIndex: "8",
              });
            }

            if (slide.dataset.position === "4") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "450px",
                left: "27.5%",
                width: "350px",
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
          currentPosition = 0;
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
                height: "500px",
                left: "50%",
                position: "absolute",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: "850px",
                zIndex: "10",
              });
            }

            if (slide.dataset.position === "2") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "450px",
                left: "780px",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                width: "350px",
                zIndex: "9",
              });
            }

            if (slide.dataset.position === "3") {
              gsap.to(slide, {
                height: "400px",
                left: "835px",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: "8",
              });
            }

            if (slide.dataset.position === "4") {
              gsap.to(slide, {
                height: "350px",
                left: "890px",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: "7",
              });
            }

            if (slide.dataset.position === "5") {
              gsap.to(slide, {
                height: "300px",
                left: "940px",
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
                height: "450px",
                left: "340px",
                width: "350px",
                zIndex: "9",
              });
            }

            if (slide.dataset.position === "2") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "500px",
                left: "50%",
                width: "850px",
                zIndex: "10",
                transform: "translate(-50%, -50%)",
              });
            }

            if (slide.dataset.position === "3") {
              gsap.to(slide, {
                height: "450px",
                left: "775px",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                width: "350px",
                zIndex: "9",
              });
            }

            if (slide.dataset.position === "4") {
              gsap.to(slide, {
                height: "400px",
                left: "825px",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: "8",
              });
            }

            if (slide.dataset.position === "5") {
              gsap.to(slide, {
                height: "350px",
                left: "875px",
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
                height: "400px",
                left: "275px",
                width: "350px",
                zIndex: "9",
              });
            }

            if (slide.dataset.position === "2") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "450px",
                left: "335px",
                width: "350px",
                zIndex: "9",
              });
            }

            if (slide.dataset.position === "3") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "500px",
                left: "50%",
                width: "850px",
                zIndex: "10",
                transform: "translate(-50%, -50%)",
              });
            }

            if (slide.dataset.position === "4") {
              gsap.to(slide, {
                height: "450px",
                left: "780px",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                width: "350px",
                zIndex: "8",
              });
            }

            if (slide.dataset.position === "5") {
              gsap.to(slide, {
                height: "400px",
                left: "835px",
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
                height: "350px",
                left: "220px",
                width: "350px",
                zIndex: "7",
              });
            }

            if (slide.dataset.position === "2") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "400px",
                left: "275px",
                width: "350px",
                zIndex: "8",
              });
            }

            if (slide.dataset.position === "3") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "450px",
                left: "335px",
                width: "350px",
                zIndex: "9",
              });
            }

            if (slide.dataset.position === "4") {
              gsap.to(slide, {
                duration: 0.5,
                ease: "power1.out",
                height: "500px",
                left: "50%",
                width: "850px",
                zIndex: "10",
                transform: "translate(-50%, -50%)",
              });
            }

            if (slide.dataset.position === "5") {
              gsap.to(slide, {
                height: "450px",
                left: "780px",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                width: "350px",
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
        heading="Work from our students"
        primary={false}
        scale="xl"
      />

      <div
        style={{
          border: "thin dashed purple",
          width: "75%",
          margin: "0 auto",
          position: "relative",
        }}
      >
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
      </div>
    </Gallery>
  );
};

export default ImageGallery;
