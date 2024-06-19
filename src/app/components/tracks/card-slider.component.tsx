"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import styled from "styled-components";
import { IconNext, IconPrevious } from "../icons/icon-arrow.component";
import Link from "next/link";
import CardImageDetail from "../card/card-image-detail.component";

const CardSliderContainer = styled.div`
  /* border: thin solid red; */
  display: flex;
  justify-content: end;
  padding: 0;
  position: relative;
  width: 100vw;

  @media (min-width: 800px) {
    height: 550px;
    margin: 60px 0;
  }
`;

const CardSliderControls = styled.div`
  padding: 0 20px 20px;
  margin: 0 auto;
  width: 80%;

  @media (min-width: 1024px) {
    height: 100%;
    margin: 0;
    padding: 150px 0 0;
    width: 25%;
  }

  @media (min-width: 1400px) {
    height: 100%;
    margin: 0;
    padding: 150px 50px 0;
    width: 25%;
  }
`;

const CardSliderCards = styled.div`
  /* border: thin dashed green; */
  display: flex;
  overflow: hidden;
  position: relative;
  height: 550px;
  padding: 0;
  width: 95%;

  &::after {
    background: linear-gradient(
      to left,
      #151515 0,
      rgba(0, 0, 0, 0) 10%,
      rgba(0, 0, 0, 0) 98%,
      #151515 100%
    );
    content: "";
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    pointer-events: none;
    width: 100%;
    z-index: 10;
  }

  @media (min-width: 800px) {
    width: 75%;
  }
`;

const Card = styled(Link)`
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  max-width: 320px;
  width: 25%;
  position: relative;
  transition: all 0.15s ease-out;

  &:hover {
    outline: 2px solid var(--primary);

    &::after {
      background: var(--primary) url("/icons/ico-eye.png") top center no-repeat;
      background-size: 50%;
      background-position: center center;
      border-radius: 100%;
      bottom: 10px;
      content: "";
      height: 50px;
      right: 10px;
      position: absolute;
      width: 50px;
    }
  }
`;

interface cardProps {
  image: string;
  tag: string;
}

// const Poster = styled.div<cardProps>`
//   background: url(${({ image }) => image}) top center no-repeat;
//   background-size: cover;
//   height: 100px;
//   padding: 185px 20px 0 20px;
//   position: relative;

//   &:before {
//     background: var(--black);
//     border-radius: 50px;
//     content: ${({ tag }) => `"${tag}"`};
//     color: var(--white);
//     font-size: 10px;
//     font-weight: 500;
//     left: 15px;
//     letter-spacing: 1px;
//     padding: 12px 15px;
//     position: absolute;
//     top: 15px;
//     text-transform: uppercase;
//     z-index: 5;
//   }
// `;

// const Details = styled.div`
//   background: var(--off-black);
//   min-height: 100px;
//   padding: 25px 20px;
//   position: relative;
// `;

// const CourseName = styled.p`
//   min-height: 70px;
//   color: var(--white);
//   font-size: 24px;
//   font-weight: bold;
//   padding: 5px 0 15px;
// `;

// const CourseDetails = styled.ul`
//   color: #ccc;
//   font-size: 12px;

//   li {
//     padding: 20px 0 0 0;
//     text-transform: uppercase;
//   }
// `;

interface cardWrapperProps {
  width: string;
}

const CardWrapper = styled.div<cardWrapperProps>`
  /* border: thin dashed cyan; */
  display: flex;
  gap: 20px;
  left: 25px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: ${(props) => props.width};
`;

const Heading = styled.p`
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;

const CardsCarousel = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;

  @media (min-width: 400px) {
    width: 95%;
  }

  @media (min-width: 800px) {
    flex-direction: row;
    max-width: 1980px;
    width: 95%;
  }

  @media (min-width: 1400px) {
    flex-direction: row;
    max-width: 1980px;
    width: 85%;
  }

  @media (min-width: 1900px) {
    flex-direction: row;
    max-width: 1900px;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 35px 0;
  justify-content: center;
`;

const Button = styled.button`
  height: 65px;
  width: 65px;
  border-radius: 100%;
  background: #222;
  border: 0;
  color: #fff;
`;

const CardSlider = () => {
  const [courseCardWidth, setCourseCardWidth] = useState<number>(320);
  const [coursesTotal, setCoursesTotal] = useState<number>(0);
  const [coursesLength, setCoursesLength] = useState<number>(0);
  const delta: number = 10;

  let currentSlider = 0;
  const minCardsShown = 1;

  const handleCardSliderMove = (direction: string) => {
    const courseSlider = document.querySelector(".course-slider");
    let moveAmount = 0;

    if (direction === "next") {
      if (currentSlider >= coursesLength - minCardsShown) {
        moveAmount = -(
          courseCardWidth * (coursesLength - minCardsShown) -
          delta
        );
        currentSlider = coursesLength - minCardsShown;
      } else {
        currentSlider++;
        moveAmount = -(courseCardWidth * currentSlider - delta);
      }
    } else if (direction === "prev") {
      if (currentSlider <= 1) {
        moveAmount = 25;
        currentSlider = 0;
      } else {
        currentSlider--;
        moveAmount = -(courseCardWidth * currentSlider - delta);
      }
    }

    gsap.to(courseSlider, {
      ease: "power1.out",
      duration: 0.5,
      left: `${moveAmount}px`,
    });
  };

  useEffect(() => {
    const card = document.querySelector(".slider-course-card");
    const cardsTotal = [].slice.call(
      document.querySelectorAll(".slider-course-card")
    );

    if (card) {
      setCoursesTotal(cardsTotal.length * courseCardWidth);
      setCoursesLength(cardsTotal.length);
    }
  }, [courseCardWidth]);

  return (
    <CardSliderContainer>
      <CardsCarousel>
        <CardSliderControls>
          <Heading>Explore Our Popular Courses</Heading>
          <ButtonsWrapper>
            <Button
              className="prev"
              onClick={() => handleCardSliderMove("prev")}
            >
              <IconPrevious height="28px" width="28px" />
            </Button>
            <Button
              className="next"
              onClick={() => handleCardSliderMove("next")}
            >
              <IconNext height="28px" width="28px" />
            </Button>
          </ButtonsWrapper>
        </CardSliderControls>

        <CardSliderCards>
          <CardWrapper className="course-slider" width={`${coursesTotal}px`}>
            <CardImageDetail
              className="slider-course-card"
              base="/courses"
              preview="/banner/banner-1.jpg"
              slug="foundation"
              path="figure-drawing-1"
              courseName="Figure Drawing & Anatomy"
              courseCode="FIG 1"
              courseTime="Wednesday 2:00pm - 5:00pm (PST)"
              courseDuration="10 - Week Course"
              coursePrice="$100.00"
              courseDifficulty="Beginner"
              width="320px"
              courseTrack="Foundation"
            />

            <CardImageDetail
              className="slider-course-card"
              base="/courses"
              preview="/banner/banner-2.jpg"
              slug="visual-development-and-storyboard"
              path="storyboarding-1"
              courseName="Storyboarding 1"
              courseCode="SB 1"
              courseTime="Sunday 10:00am-1:00pm (PST)"
              courseDuration="10 - Week Course"
              coursePrice="$775.00"
              courseDifficulty="Beginner"
              width="320px"
              courseTrack="Visual Development & Storyboard"
            />

            <CardImageDetail
              className="slider-course-card"
              base="/courses"
              preview="/banner/banner-3.jpg"
              slug="2d-3d-concept-design"
              path="world-building-3d"
              courseName="World Building 3D"
              courseCode="WB3D"
              courseTime="Saturday 7:00pm - 10:00pm (PST)"
              courseDuration="10 - Week Course"
              coursePrice="$625.00"
              courseDifficulty="Beginner"
              width="320px"
              courseTrack="2D 3D CONCEPT DESIGN"
            />

            <CardImageDetail
              className="slider-course-card"
              base="/courses"
              preview="/banner/banner-4.jpg"
              slug="foundation"
              path="figure-drawing-1"
              courseName="Figure Drawing 1"
              courseCode="FIG 1"
              courseTime="Thursday 7:30pm - 10:30pm (PST)"
              courseDuration="10 - Week Course"
              coursePrice="$100.00"
              courseDifficulty="Beginner"
              width="320px"
              courseTrack="2D 3D CONCEPT DESIGN"
            />

            <CardImageDetail
              className="slider-course-card"
              base="/courses"
              preview="/banner/banner-5.jpg"
              slug="concept-art-games-and-film"
              path="environment-design"
              courseName="Environment Design"
              courseCode="WB2"
              courseTime="Thursday 7:30pm - 10:30pm (PST)"
              courseDuration="10 - Week Course"
              coursePrice="$100.00"
              courseDifficulty="Beginner"
              width="320px"
              courseTrack="CONCEPT ART GAMES & FILM"
            />
          </CardWrapper>
        </CardSliderCards>
      </CardsCarousel>
    </CardSliderContainer>
  );
};

export default CardSlider;
