"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RegistrationBlock from "../registration/registration-block.component";
import ImageDetailCard from "../card/card.component";
import gsap from "gsap";
import ActionButton from "../buttons/action-button.component";

const Content = styled.div`
  margin: 50px 0;
  width: 100vw;
`;

const Featured = styled.div`
  /* border: thin solid blue; */
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  position: relative;
  width: 85%;

  @media (min-width: 800px) {
    width: 65%;
  }
`;

const SliderWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
`;

const Slider = styled.div`
  box-shadow: 0 0 15px #222;
  display: flex;
  flex-direction: row;
`;

const Slide = styled.div`
  /* border: thin solid green; */
  width: 320px;

  @media (min-width: 800px) {
    width: 1125px;
  }
`;

const ReadMore = styled.div`
  padding: 0;
  text-align: center;

  @media (min-width: 800px) {
    padding: 25px 0;
  }
`;

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

const FeaturedSlider = () => {
  const [slideWidth, setSlideWidth] = useState<number>(0);
  const [slideCardWidth, setSlideCardWidth] = useState<number>(0);
  const [slidesTotal, setSlidesTotal] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

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

    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, [windowWidth]);

  return (
    <Content>
      <RegistrationBlock
        primary={false}
        heading="Latest news from Brainstorm"
        scale="xl"
      />

      <Featured>
        <Button className="prev" onClick={() => handleCardSliderMove("prev")}>
          <svg
            viewBox="0 0 48 48"
            fill="#bababa"
            style={{ width: "28px", height: "28px" }}
          >
            <path d="M30.1123,42a.99756.99756,0,0,1-.63964-.23193L12.207,27.37988a4.39934,4.39934,0,0,1,.001-6.76025L29.47266,6.23193a1.00017,1.00017,0,1,1,1.28125,1.53614L13.48828,22.15625a2.39914,2.39914,0,0,0-.001,3.687L30.75391,40.23193A1,1,0,0,1,30.1123,42Z" />
          </svg>
        </Button>
        <SliderWrapper style={{ width: `${slideWidth}px` }}>
          <Slider className="slider-wrapper">
            <Slide className="slide">
              <ImageDetailCard
                variant={windowWidth < 800 ? "sm" : "lg"}
                superHeading="Featured Blog"
                info="Lorem ipsum dolor sit amet, Optio pariatur blanditiis accusantium placeat."
              />
            </Slide>

            <Slide className="slide">
              <ImageDetailCard
                variant={windowWidth < 800 ? "sm" : "lg"}
                superHeading="Featured Blog"
                info="Lorem ipsum dolor sit amet, Optio pariatur blanditiis accusantium placeat."
              />
            </Slide>

            <Slide className="slide">
              <ImageDetailCard
                variant={windowWidth < 800 ? "sm" : "lg"}
                superHeading="Featured Blog"
                info="Lorem ipsum dolor sit amet, Optio pariatur blanditiis accusantium placeat."
              />
            </Slide>
          </Slider>
        </SliderWrapper>

        <Button className="next" onClick={() => handleCardSliderMove("next")}>
          <svg
            viewBox="0 0 48 48"
            fill="#bababa"
            style={{ width: "28px", height: "28px" }}
          >
            <path d="M16.625,42a1,1,0,0,1-.6416-1.76807L33.249,25.84375a2.39879,2.39879,0,0,0,0-3.6875L15.9834,7.76807a1.00017,1.00017,0,1,1,1.28125-1.53614L34.53027,20.62012a4.39969,4.39969,0,0,1,0,6.75976L17.26465,41.76807A.99756.99756,0,0,1,16.625,42Z" />
          </svg>
        </Button>
      </Featured>

      <ReadMore>
        <ActionButton type="tertiary" label="Read More" />
      </ReadMore>
    </Content>
  );
};

export default FeaturedSlider;
