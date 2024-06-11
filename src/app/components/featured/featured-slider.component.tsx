"use client";

import React, { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ActionButton from "../buttons/action-button.component";
import { IconNext, IconPrevious } from "../icons/icon-arrow.component";
import Header from "../text-block/header.component";
import FlexBox from "../layout/flexbox.component";

const Content = styled.div`
  margin: 0;
  position: relative;
  width: 100vw;

  @media (min-width: 1024px) {
    margin: 0;
  }

  @media (min-width: 1400px) {
    margin: 50px 0;
  }
`;

const Featured = styled.div`
  /* border: thin solid blue; */
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  position: relative;
  width: 75%;

  @media (min-width: 800px) {
    max-width: 1125px;
    width: 65%;
  }
`;

const SliderWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
`;

const Slider = styled.div`
  box-shadow: 0 0 10px var(--black);
  display: flex;
  flex-direction: row;
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

interface Props {
  heading?: string;
  textalign?: string;
  children: string | ReactNode | JSX.Element | JSX.Element[];
}

const FeaturedSlider = ({ children, heading, textalign }: Props) => {
  const [variantType, setVariantType] = useState<string>("lg");
  const [slideWidth, setSlideWidth] = useState<number>(0);
  const [slideCardWidth, setSlideCardWidth] = useState<number>(0);
  const [slidesTotal, setSlidesTotal] = useState<number>(0);
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
        setVariantType(variant);
      });
    }
  }, [windowWidth]);

  return (
    <Content>
      {heading && (
        <FlexBox
          alignitems="center"
          justifycontent="center"
          sm_width="80%"
          md_width="70%"
          sm_margin="50px auto"
          md_margin="0 auto 50px"
          margin="50px auto"
          width="60%"
        >
          <Header level="2" text={heading} textalign={textalign} />
        </FlexBox>
      )}

      <Featured>
        <Button className="prev" onClick={() => handleCardSliderMove("prev")}>
          <IconPrevious width="28px" height="28px" />
        </Button>

        <SliderWrapper style={{ width: `${slideWidth}px` }}>
          <Slider className="slider-wrapper">{children}</Slider>
        </SliderWrapper>

        <Button className="next" onClick={() => handleCardSliderMove("next")}>
          <IconNext width="28px" height="28px" />
        </Button>
      </Featured>

      <ReadMore>
        <ActionButton type="tertiary" label="Read More" />
      </ReadMore>
    </Content>
  );
};

export default FeaturedSlider;
