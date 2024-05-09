"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import styled from "styled-components";

const CardSliderContainer = styled.div`
  /* border: thin solid red; */
  display: flex;
  height: 100vh;
  justify-content: end;
  padding: 0;
  width: 100vw;

  @media (min-width: 800px) {
    height: 500px;
  }
`;

const CardSliderControls = styled.div`
  /* border: thin solid blue; */
  padding: 20px 20px;
  width: 100%;

  @media (min-width: 800px) {
    height: 100%;
    padding: 150px 50px 0;
    width: 25%;
  }
`;

const CardSliderCards = styled.div`
  /* border: thin dashed green; */
  display: flex;
  overflow: hidden;
  position: relative;
  height: 100%;
  padding: 0;
  width: 100%;

  &::after {
    background: linear-gradient(
      to left,
      #000 0,
      rgba(0, 0, 0, 0) 10%,
      rgba(0, 0, 0, 0) 98%,
      #000 100%
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

const Card = styled.div`
  border-radius: 20px;
  box-shadow: 0 0 15px #222;
  overflow: hidden;
  max-width: 320px;
  width: 25%;
  position: relative;
`;

interface cardProps {
  image: string;
  tag: string;
}

const Poster = styled.div<cardProps>`
  background: url(${({ image }) => image}) top center no-repeat;
  background-size: cover;
  height: 100px;
  padding: 185px 20px 0 20px;
  position: relative;

  &:before {
    background: var(--black);
    border-radius: 50px;
    content: ${({ tag }) => `"${tag}"`};
    color: var(--white);
    font-size: 10px;
    font-weight: 500;
    left: 15px;
    letter-spacing: 1px;
    padding: 12px 15px;
    position: absolute;
    top: 15px;
    text-transform: uppercase;
    z-index: 5;
  }
`;

const Details = styled.div`
  background: var(--off-black);
  min-height: 100px;
  padding: 40px 20px;
  position: relative;
`;

const CourseName = styled.p`
  color: var(--white);
  font-size: 24px;
  font-weight: bold;
`;

const CourseDetails = styled.ul`
  color: #ccc;
  font-size: 12px;

  li {
    padding: 20px 0 0 0;
    text-transform: uppercase;
  }
`;

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
  flex-direction: column-reverse;
  width: 100%;

  @media (min-width: 800px) {
    flex-direction: row;
    max-width: 2500px;
    width: 85%;
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
  const minCardsShown = 3;

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
    const card = document.querySelector(".course-card");
    const cardsTotal = [].slice.call(document.querySelectorAll(".course-card"));

    if (card) {
      setCoursesTotal(cardsTotal.length * courseCardWidth);
      setCoursesLength(cardsTotal.length);
    }
  }, [courseCardWidth]);

  return (
    <CardSliderContainer>
      <CardsCarousel>
        <CardSliderControls>
          <Heading>Popular courses from our school</Heading>
          <ButtonsWrapper>
            <Button
              className="prev"
              onClick={() => handleCardSliderMove("prev")}
            >
              <svg
                viewBox="0 0 48 48"
                fill="#fff"
                style={{ width: "28px", height: "28px" }}
              >
                <path d="M30.1123,42a.99756.99756,0,0,1-.63964-.23193L12.207,27.37988a4.39934,4.39934,0,0,1,.001-6.76025L29.47266,6.23193a1.00017,1.00017,0,1,1,1.28125,1.53614L13.48828,22.15625a2.39914,2.39914,0,0,0-.001,3.687L30.75391,40.23193A1,1,0,0,1,30.1123,42Z" />
              </svg>
            </Button>
            <Button
              className="next"
              onClick={() => handleCardSliderMove("next")}
            >
              <svg
                viewBox="0 0 48 48"
                fill="#fff"
                style={{ width: "28px", height: "28px" }}
              >
                <path d="M16.625,42a1,1,0,0,1-.6416-1.76807L33.249,25.84375a2.39879,2.39879,0,0,0,0-3.6875L15.9834,7.76807a1.00017,1.00017,0,1,1,1.28125-1.53614L34.53027,20.62012a4.39969,4.39969,0,0,1,0,6.75976L17.26465,41.76807A.99756.99756,0,0,1,16.625,42Z" />
              </svg>
            </Button>
          </ButtonsWrapper>
        </CardSliderControls>

        <CardSliderCards>
          <CardWrapper className="course-slider" width={`${coursesTotal}px`}>
            <Card className="course-card">
              <Poster
                image="/cards/3d-concept.jpg"
                tag="Concept Art & Design"
              />
              <Details>
                <CourseName>Rhythm & Structure</CourseName>
                <CourseDetails>
                  <li>Fig RS</li>
                  <li>Fri 10am - 1pm (PST)</li>
                  <li>10 Week Course</li>
                </CourseDetails>
              </Details>
            </Card>

            <Card className="course-card">
              <Poster
                image="/cards/character-design.jpg"
                tag="Concept Art & Design"
              />
              <Details>
                <CourseName>Rhythm & Structure</CourseName>
                <CourseDetails>
                  <li>Fig RS</li>
                  <li>Fri 10am - 1pm (PST)</li>
                  <li>10 Week Course</li>
                </CourseDetails>
              </Details>
            </Card>

            <Card className="course-card">
              <Poster
                image="/cards/environmental-design.jpg"
                tag="Concept Art & Design"
              />
              <Details>
                <CourseName>Rhythm & Structure</CourseName>
                <CourseDetails>
                  <li>Fig RS</li>
                  <li>Fri 10am - 1pm (PST)</li>
                  <li>10 Week Course</li>
                </CourseDetails>
              </Details>
            </Card>

            <Card className="course-card">
              <Poster
                image="/cards/storyboarding.jpg"
                tag="Concept Art & Design"
              />
              <Details>
                <CourseName>Rhythm & Structure</CourseName>
                <CourseDetails>
                  <li>Fig RS</li>
                  <li>Fri 10am - 1pm (PST)</li>
                  <li>10 Week Course</li>
                </CourseDetails>
              </Details>
            </Card>

            <Card className="course-card">
              <Poster
                image="/cards/environmental-design.jpg"
                tag="Concept Art & Design"
              />
              <Details>
                <CourseName>Rhythm & Structure</CourseName>
                <CourseDetails>
                  <li>Fig RS</li>
                  <li>Fri 10am - 1pm (PST)</li>
                  <li>10 Week Course</li>
                </CourseDetails>
              </Details>
            </Card>
          </CardWrapper>
        </CardSliderCards>
      </CardsCarousel>
    </CardSliderContainer>
  );
};

export default CardSlider;
