"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import styled from "styled-components";
import CourseDetail from "../course-detail/course-detail.component";
import { IconNext, IconPrevious } from "../icons/icon-arrow.component";
import { IconTime } from "../icons/icon-time.component";
import { IconDuration } from "../icons/icon-duration.component";
import Link from "next/link";

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
  height: 500px;
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
  padding: 5px 0 15px;
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
            <Card
              href="/courses/foundation/figure-drawing-1"
              className="slider-course-card"
            >
              <Poster image="/banner/banner-1.jpg" tag="Foundation" />
              <Details>
                <CourseName>Figure Drawing 1</CourseName>
                <CourseDetails>
                  <CourseDetail>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 22"
                        height="20px"
                        fill="#bababa"
                        width="20px"
                      >
                        <g>
                          <g>
                            <path
                              className="cls-1"
                              d="M12,15.86a.75.75,0,0,1-.41-.12L.35,8.58a.78.78,0,0,1,0-1.3L11.59.12a.76.76,0,0,1,.82,0L23.65,7.28a.78.78,0,0,1,0,1.3L12.41,15.74A.75.75,0,0,1,12,15.86ZM2.19,7.93,12,14.18l9.81-6.25L12,1.68Z"
                            />
                            <path
                              className="cls-1"
                              d="M12,22a.75.75,0,0,1-.41-.12L4.44,17.32a.76.76,0,0,1-.35-.65V10.53a.76.76,0,0,1,.76-.76.77.77,0,0,1,.77.76v5.72L12,20.32l6.38-4.07V10.53a.77.77,0,0,1,.77-.76.76.76,0,0,1,.76.76v6.14a.76.76,0,0,1-.35.65l-7.15,4.56A.75.75,0,0,1,12,22Z"
                            />
                            <path
                              className="cls-1"
                              d="M23.23,14.84a.77.77,0,0,1-.76-.77V7.93a.77.77,0,1,1,1.53,0v6.14A.77.77,0,0,1,23.23,14.84Z"
                            />
                          </g>
                        </g>
                      </svg>
                    </span>
                    FIG 1
                  </CourseDetail>

                  <CourseDetail>
                    <span>
                      <IconTime width="24px" height="24px" />
                    </span>
                    Fri 10am - 1pm (PST)
                  </CourseDetail>

                  <CourseDetail>
                    <span>
                      <IconDuration width="24px" height="24px" />
                    </span>
                    10 Week Course
                  </CourseDetail>
                </CourseDetails>
              </Details>
            </Card>

            <Card
              href="/courses/2d-3d-concept-design"
              className="slider-course-card"
            >
              <Poster image="/banner/banner-2.jpg" tag="2D-3D Concept Design" />
              <Details>
                <CourseName>2D 3D Concept Design</CourseName>
                <CourseDetails>
                  <CourseDetail>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 22"
                        height="20px"
                        fill="#bababa"
                        width="20px"
                      >
                        <g>
                          <g id="Layer_1" data-name="Layer 1">
                            <path
                              className="cls-1"
                              d="M12,15.86a.75.75,0,0,1-.41-.12L.35,8.58a.78.78,0,0,1,0-1.3L11.59.12a.76.76,0,0,1,.82,0L23.65,7.28a.78.78,0,0,1,0,1.3L12.41,15.74A.75.75,0,0,1,12,15.86ZM2.19,7.93,12,14.18l9.81-6.25L12,1.68Z"
                            />
                            <path
                              className="cls-1"
                              d="M12,22a.75.75,0,0,1-.41-.12L4.44,17.32a.76.76,0,0,1-.35-.65V10.53a.76.76,0,0,1,.76-.76.77.77,0,0,1,.77.76v5.72L12,20.32l6.38-4.07V10.53a.77.77,0,0,1,.77-.76.76.76,0,0,1,.76.76v6.14a.76.76,0,0,1-.35.65l-7.15,4.56A.75.75,0,0,1,12,22Z"
                            />
                            <path
                              className="cls-1"
                              d="M23.23,14.84a.77.77,0,0,1-.76-.77V7.93a.77.77,0,1,1,1.53,0v6.14A.77.77,0,0,1,23.23,14.84Z"
                            />
                          </g>
                        </g>
                      </svg>
                    </span>
                    FIG RS
                  </CourseDetail>

                  <CourseDetail>
                    <span>
                      <IconTime width="24px" height="24px" />
                    </span>
                    Fri 10am - 1pm (PST)
                  </CourseDetail>

                  <CourseDetail>
                    <span>
                      <IconDuration width="24px" height="24px" />
                    </span>
                    10 Week Course
                  </CourseDetail>
                </CourseDetails>
              </Details>
            </Card>

            <Card href="/courses/foundation" className="slider-course-card">
              <Poster image="/banner/banner-3.jpg" tag="Concept Art & Design" />
              <Details>
                <CourseName>Foundation Courses</CourseName>
                <CourseDetails>
                  <CourseDetail>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 22"
                        height="20px"
                        fill="#bababa"
                        width="20px"
                      >
                        <g>
                          <g id="Layer_1" data-name="Layer 1">
                            <path
                              className="cls-1"
                              d="M12,15.86a.75.75,0,0,1-.41-.12L.35,8.58a.78.78,0,0,1,0-1.3L11.59.12a.76.76,0,0,1,.82,0L23.65,7.28a.78.78,0,0,1,0,1.3L12.41,15.74A.75.75,0,0,1,12,15.86ZM2.19,7.93,12,14.18l9.81-6.25L12,1.68Z"
                            />
                            <path
                              className="cls-1"
                              d="M12,22a.75.75,0,0,1-.41-.12L4.44,17.32a.76.76,0,0,1-.35-.65V10.53a.76.76,0,0,1,.76-.76.77.77,0,0,1,.77.76v5.72L12,20.32l6.38-4.07V10.53a.77.77,0,0,1,.77-.76.76.76,0,0,1,.76.76v6.14a.76.76,0,0,1-.35.65l-7.15,4.56A.75.75,0,0,1,12,22Z"
                            />
                            <path
                              className="cls-1"
                              d="M23.23,14.84a.77.77,0,0,1-.76-.77V7.93a.77.77,0,1,1,1.53,0v6.14A.77.77,0,0,1,23.23,14.84Z"
                            />
                          </g>
                        </g>
                      </svg>
                    </span>
                    FIG RS
                  </CourseDetail>

                  <CourseDetail>
                    <span>
                      <IconTime width="24px" height="24px" />
                    </span>
                    Fri 10am - 1pm (PST)
                  </CourseDetail>

                  <CourseDetail>
                    <span>
                      <IconDuration width="24px" height="24px" />
                    </span>
                    10 Week Course
                  </CourseDetail>
                </CourseDetails>
              </Details>
            </Card>

            <Card
              href="/workshops/brainstorm-connection"
              className="slider-course-card"
            >
              <Poster
                image="/banner/banner-4.jpg"
                tag="Brainstorm Connection"
              />
              <Details>
                <CourseName>Brainstorm Connection</CourseName>
                <CourseDetails>
                  <CourseDetail>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 22"
                        height="20px"
                        fill="#bababa"
                        width="20px"
                      >
                        <g>
                          <g id="Layer_1" data-name="Layer 1">
                            <path
                              className="cls-1"
                              d="M12,15.86a.75.75,0,0,1-.41-.12L.35,8.58a.78.78,0,0,1,0-1.3L11.59.12a.76.76,0,0,1,.82,0L23.65,7.28a.78.78,0,0,1,0,1.3L12.41,15.74A.75.75,0,0,1,12,15.86ZM2.19,7.93,12,14.18l9.81-6.25L12,1.68Z"
                            />
                            <path
                              className="cls-1"
                              d="M12,22a.75.75,0,0,1-.41-.12L4.44,17.32a.76.76,0,0,1-.35-.65V10.53a.76.76,0,0,1,.76-.76.77.77,0,0,1,.77.76v5.72L12,20.32l6.38-4.07V10.53a.77.77,0,0,1,.77-.76.76.76,0,0,1,.76.76v6.14a.76.76,0,0,1-.35.65l-7.15,4.56A.75.75,0,0,1,12,22Z"
                            />
                            <path
                              className="cls-1"
                              d="M23.23,14.84a.77.77,0,0,1-.76-.77V7.93a.77.77,0,1,1,1.53,0v6.14A.77.77,0,0,1,23.23,14.84Z"
                            />
                          </g>
                        </g>
                      </svg>
                    </span>
                    FIG RS
                  </CourseDetail>

                  <CourseDetail>
                    <span>
                      <IconTime width="24px" height="24px" />
                    </span>
                    Fri 10am - 1pm (PST)
                  </CourseDetail>

                  <CourseDetail>
                    <span>
                      <IconDuration width="24px" height="24px" />
                    </span>
                    10 Week Course
                  </CourseDetail>
                </CourseDetails>
              </Details>
            </Card>

            <Card
              href="/courses/concept-art-games-and-film/concept-art-boot-camp"
              className="slider-course-card"
            >
              <Poster image="/banner/banner-6.jpg" tag="Concept Art & Design" />
              <Details>
                <CourseName>Concept Art Bootcamp</CourseName>
                <CourseDetails>
                  <CourseDetail>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 22"
                        height="20px"
                        fill="#bababa"
                        width="20px"
                      >
                        <g>
                          <g id="Layer_1" data-name="Layer 1">
                            <path
                              className="cls-1"
                              d="M12,15.86a.75.75,0,0,1-.41-.12L.35,8.58a.78.78,0,0,1,0-1.3L11.59.12a.76.76,0,0,1,.82,0L23.65,7.28a.78.78,0,0,1,0,1.3L12.41,15.74A.75.75,0,0,1,12,15.86ZM2.19,7.93,12,14.18l9.81-6.25L12,1.68Z"
                            />
                            <path
                              className="cls-1"
                              d="M12,22a.75.75,0,0,1-.41-.12L4.44,17.32a.76.76,0,0,1-.35-.65V10.53a.76.76,0,0,1,.76-.76.77.77,0,0,1,.77.76v5.72L12,20.32l6.38-4.07V10.53a.77.77,0,0,1,.77-.76.76.76,0,0,1,.76.76v6.14a.76.76,0,0,1-.35.65l-7.15,4.56A.75.75,0,0,1,12,22Z"
                            />
                            <path
                              className="cls-1"
                              d="M23.23,14.84a.77.77,0,0,1-.76-.77V7.93a.77.77,0,1,1,1.53,0v6.14A.77.77,0,0,1,23.23,14.84Z"
                            />
                          </g>
                        </g>
                      </svg>
                    </span>
                    CABC
                  </CourseDetail>

                  <CourseDetail>
                    <span>
                      <IconTime width="24px" height="24px" />
                    </span>
                    Fri 10am - 1pm (PST)
                  </CourseDetail>

                  <CourseDetail>
                    <span>
                      <IconDuration width="24px" height="24px" />
                    </span>
                    10 Week Course
                  </CourseDetail>
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
