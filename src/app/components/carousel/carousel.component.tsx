"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Container from "../layout/container.component";
import gsap from "gsap";

const Button = styled.button`
  background: #222;
  border-radius: 100%;
  border: 0;
  color: #fff;
  height: 50px;
  width: 50px;

  @media (min-width: 800px) {
    height: 65px;
    width: 65px;
  }

  &.prev {
    position: absolute;
    left: -20px;
    top: 75px;
    z-index: 10;
  }

  &.next {
    position: absolute;
    right: -20px;
    top: 75px;
    z-index: 10;
  }

  @media (min-width: 800px) {
    &.prev {
      position: absolute;
      left: -100px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 10;
    }

    &.next {
      position: absolute;
      right: -100px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 10;
    }
  }
`;

interface Props {
  children: React.ReactNode;
}

const Carousel = ({ children }: Props) => {
  const [slideCardWidth, setSlideCardWidth] = useState<number>(320);
  const [slidesTotal, setSlidesTotal] = useState<number>(0);
  const [slideWidth, setSlideWidth] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  let currentSlide: number = 0;

  const handleCardSliderMove = (direction: string) => {
    if (direction === "next") {
      if (currentSlide >= slidesTotal - 1) {
        currentSlide = slidesTotal - 1;
      } else {
        currentSlide++;
      }

      const moveAmount = `-${currentSlide * slideCardWidth}px`;

      gsap.to(".slider-wrapper", {
        x: moveAmount,
      });
    }

    if (direction === "prev") {
      if (currentSlide <= 0) {
        currentSlide = 0;
      } else {
        currentSlide--;
      }

      const moveAmount = `-${currentSlide * slideCardWidth}px`;

      gsap.to(".slider-wrapper", {
        x: moveAmount,
      });
    }
  };

  useEffect(() => {
    const slides: any = [].slice.call(document.querySelectorAll(".slide"));

    if (!!slides.length) {
      setSlidesTotal(slides.length);
      const slideCardWidth = slides[0].offsetWidth;
      setSlideCardWidth(slideCardWidth);
      const slideTotalWidth = slides[0].offsetWidth * slides.length;
      setSlideWidth(slideTotalWidth);
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
        const variant = window.innerWidth < 800 ? "sm" : "lg";
        // console.log("variant", variant);
        // console.log("windowWidth", window.innerWidth);
        // setVariantType(variant);
      });
    }
  }, [windowWidth]);

  return (
    <Container display="flex" width={"100%"} height="450px">
      <Button className="prev" onClick={() => handleCardSliderMove("prev")}>
        <svg
          viewBox="0 0 48 48"
          fill="#bababa"
          style={{ width: "28px", height: "28px" }}
        >
          <path d="M30.1123,42a.99756.99756,0,0,1-.63964-.23193L12.207,27.37988a4.39934,4.39934,0,0,1,.001-6.76025L29.47266,6.23193a1.00017,1.00017,0,1,1,1.28125,1.53614L13.48828,22.15625a2.39914,2.39914,0,0,0-.001,3.687L30.75391,40.23193A1,1,0,0,1,30.1123,42Z" />
        </svg>
      </Button>
      <Container overflow="hidden" width="100%">
        <Container
          className="slider-wrapper"
          display="flex"
          width={`2000px`}
          position="absolute"
          gap="20px"
        >
          {children}
        </Container>
      </Container>
      <Button className="next" onClick={() => handleCardSliderMove("next")}>
        <svg
          viewBox="0 0 48 48"
          fill="#bababa"
          style={{ width: "28px", height: "28px" }}
        >
          <path d="M16.625,42a1,1,0,0,1-.6416-1.76807L33.249,25.84375a2.39879,2.39879,0,0,0,0-3.6875L15.9834,7.76807a1.00017,1.00017,0,1,1,1.28125-1.53614L34.53027,20.62012a4.39969,4.39969,0,0,1,0,6.75976L17.26465,41.76807A.99756.99756,0,0,1,16.625,42Z" />
        </svg>
      </Button>
    </Container>
  );
};

export default Carousel;