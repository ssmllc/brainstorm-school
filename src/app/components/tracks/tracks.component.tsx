"use client";

import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import RegistrationBlock from "../registration/registration-block.component";

import Link from "next/link";
import Container, { FlexContainer } from "../layout/container.component";
import TextBlock from "../text-block/text-block.component";
import { Card } from "../card/card-card.component";
import { TracksContext } from "@/app/context/tracks-context-provider";
import Header from "../text-block/header.component";
import FlexBox from "../layout/flexbox.component";

const TracksContainer = styled.div`
  /* border: thin solid red; */
  padding: 0 0 75px 0;
  text-align: center;
`;

const Anchor = styled(Link)`
  width: 100%;

  @media (min-width: 800px) {
    width: 25%;
  }
`;

const Tracks = styled.div`
  //border: thin solid red;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  position: relative;
  margin: 0 auto;
  width: 80%;

  @media (min-width: 800px) {
    flex-direction: row;
    max-width: 1280px;
    width: 70%;
  }
`;

interface trackProps {
  poster: string;
}

const Track = styled.div<trackProps>`
  background: var(--black) url(${(props) => props.poster}) top center no-repeat;
  background-size: cover;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  filter: grayscale(0.75);
  flex-grow: 1;
  flex-basis: 25%;
  min-height: 350px;
  padding: 185px 20px 0 20px;
  position: relative;
  transition: all 0.35s ease-out;

  &[data-track="active"] {
    filter: grayscale(0);
  }

  &::after {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 25%,
      var(--off-black) 100%
    );
    content: "";
    border-radius: 20px;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  &:hover {
    filter: grayscale(0);
    cursor: pointer;
  }
`;

const Icon = styled.div`
  align-items: center;
  border: 2px solid var(--white);
  border-radius: 100%;
  display: flex;
  height: 50px;
  justify-content: center;
  position: relative;
  width: 50px;
  z-index: 2;
`;

const Name = styled.p`
  color: var(--white);
  font-weight: bold;
  font-size: 28px;
  padding: 20px 0;
  position: relative;
  text-align: left;
  z-index: 2;
`;

const Terms = styled.div`
  background: var(--off-black);
  border: thin solid var(--darker-grey);
  border-radius: 20px;
  display: flex;
  gap: 15px 0;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 auto;
  padding: 25px 25px;
  width: 80%;

  @media (min-width: 800px) {
    width: 32%;
  }
`;

interface Props {
  results?: any;
}

const TracksGroup = ({ results }: Props) => {
  const { selectedContextTrack, setSelectedContextTrack }: any =
    useContext(TracksContext);
  const [currentTrack, setCurrentTrack] = useState([]);
  const [heading, setHeading] = useState(null);

  useEffect(() => {
    if (results) {
      const currentTrack = results.filter(
        (track: any) => track.slug.current === selectedContextTrack
      );

      const heading = results.filter((track: any) => {
        if (track.slug.current === selectedContextTrack) {
          return track.name;
        }
      })[0]["name"];

      setHeading(heading);
      setCurrentTrack(currentTrack);
    }
  }, [results, selectedContextTrack]);

  return (
    <TracksContainer>
      <Header
        level="2"
        text="Course Guide - Tracks"
        color="white"
        margin="50px 0"
      />
      <Tracks>
        {results && results.length ? (
          results.map((track: any, index: number) => {
            return (
              <Track
                key={index}
                poster={track.imageUrl}
                data-track={
                  selectedContextTrack === track.slug.current ? "active" : null
                }
                onClick={() => {
                  setSelectedContextTrack(`${track.slug.current}`);
                }}
              >
                <Icon>
                  <svg
                    style={{ width: "25px", height: "25px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g style={{ fill: "#fff" }}>
                      <g id="Layer_1" data-name="Layer 1">
                        <path
                          className="cls-1"
                          d="M12,9.7a.68.68,0,0,1-.34-.08L3.49,5.54a.78.78,0,0,1-.43-.69.76.76,0,0,1,.43-.68L11.66.08a.74.74,0,0,1,.68,0l8.17,4.09a.76.76,0,0,1,.43.68.78.78,0,0,1-.43.69L12.34,9.62A.68.68,0,0,1,12,9.7ZM5.54,4.85,12,8.08l6.46-3.23L12,1.62Z"
                        />
                        <path
                          className="cls-1"
                          d="M12,17.87a.68.68,0,0,1-.34-.08L3.49,13.71A.78.78,0,0,1,3.06,13V4.85a.77.77,0,0,1,1.54,0v7.7l7.4,3.7,7.4-3.7V4.85a.77.77,0,0,1,1.54,0V13a.78.78,0,0,1-.43.69l-8.17,4.08A.68.68,0,0,1,12,17.87Z"
                        />
                        <path
                          className="cls-1"
                          d="M12,17.87a.77.77,0,0,1-.77-.76V8.94a.77.77,0,1,1,1.54,0v8.17A.77.77,0,0,1,12,17.87Z"
                        />
                        <path
                          className="cls-1"
                          d="M12,24C6.18,24,0,22.3,0,19.15a.77.77,0,0,1,.77-.77.77.77,0,0,1,.76.77c0,1.2,3,2.82,8.05,3.22L7.46,20.78a.77.77,0,0,1-.16-1.07.76.76,0,0,1,1.07-.15l4.09,3.06a.78.78,0,0,1,.27.86A.78.78,0,0,1,12,24Z"
                        />
                        <path
                          className="cls-1"
                          d="M.77,19.92A.77.77,0,0,1,0,19.15c0-1.6,1.63-3,4.6-3.88a.78.78,0,0,1,1,.51.77.77,0,0,1-.52,1c-2.13.64-3.51,1.59-3.51,2.41A.77.77,0,0,1,.77,19.92Z"
                        />
                        <path
                          className="cls-1"
                          d="M23.23,19.92a.77.77,0,0,1-.76-.77c0-.82-1.38-1.77-3.51-2.41a.77.77,0,1,1,.44-1.47c3,.9,4.6,2.28,4.6,3.88A.77.77,0,0,1,23.23,19.92Z"
                        />
                        <path
                          className="cls-1"
                          d="M15.08,23.84A.76.76,0,0,1,15,22.32c4.67-.49,7.47-2,7.47-3.17a.77.77,0,1,1,1.53,0c0,2.29-3.47,4.13-8.84,4.69Z"
                        />
                      </g>
                    </g>
                  </svg>
                </Icon>
                <Name>{track.name}</Name>
              </Track>
            );
          })
        ) : (
          <>
            <Anchor href="/course-guide">
              <Track
                onClick={() => setSelectedContextTrack("3d-concept")}
                poster="https://cdn.sanity.io/images/y8rjsgga/production/dbe0f90d49ecc458b97ab1efcea97632eae87bf7-1866x1126.jpg"
              >
                <Icon>
                  <svg
                    style={{ width: "25px", height: "25px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g style={{ fill: "#fff" }}>
                      <g id="Layer_1" data-name="Layer 1">
                        <path
                          className="cls-1"
                          d="M12,9.7a.68.68,0,0,1-.34-.08L3.49,5.54a.78.78,0,0,1-.43-.69.76.76,0,0,1,.43-.68L11.66.08a.74.74,0,0,1,.68,0l8.17,4.09a.76.76,0,0,1,.43.68.78.78,0,0,1-.43.69L12.34,9.62A.68.68,0,0,1,12,9.7ZM5.54,4.85,12,8.08l6.46-3.23L12,1.62Z"
                        />
                        <path
                          className="cls-1"
                          d="M12,17.87a.68.68,0,0,1-.34-.08L3.49,13.71A.78.78,0,0,1,3.06,13V4.85a.77.77,0,0,1,1.54,0v7.7l7.4,3.7,7.4-3.7V4.85a.77.77,0,0,1,1.54,0V13a.78.78,0,0,1-.43.69l-8.17,4.08A.68.68,0,0,1,12,17.87Z"
                        />
                        <path
                          className="cls-1"
                          d="M12,17.87a.77.77,0,0,1-.77-.76V8.94a.77.77,0,1,1,1.54,0v8.17A.77.77,0,0,1,12,17.87Z"
                        />
                        <path
                          className="cls-1"
                          d="M12,24C6.18,24,0,22.3,0,19.15a.77.77,0,0,1,.77-.77.77.77,0,0,1,.76.77c0,1.2,3,2.82,8.05,3.22L7.46,20.78a.77.77,0,0,1-.16-1.07.76.76,0,0,1,1.07-.15l4.09,3.06a.78.78,0,0,1,.27.86A.78.78,0,0,1,12,24Z"
                        />
                        <path
                          className="cls-1"
                          d="M.77,19.92A.77.77,0,0,1,0,19.15c0-1.6,1.63-3,4.6-3.88a.78.78,0,0,1,1,.51.77.77,0,0,1-.52,1c-2.13.64-3.51,1.59-3.51,2.41A.77.77,0,0,1,.77,19.92Z"
                        />
                        <path
                          className="cls-1"
                          d="M23.23,19.92a.77.77,0,0,1-.76-.77c0-.82-1.38-1.77-3.51-2.41a.77.77,0,1,1,.44-1.47c3,.9,4.6,2.28,4.6,3.88A.77.77,0,0,1,23.23,19.92Z"
                        />
                        <path
                          className="cls-1"
                          d="M15.08,23.84A.76.76,0,0,1,15,22.32c4.67-.49,7.47-2,7.47-3.17a.77.77,0,1,1,1.53,0c0,2.29-3.47,4.13-8.84,4.69Z"
                        />
                      </g>
                    </g>
                  </svg>
                </Icon>
                <Name>3D Concept</Name>
              </Track>
            </Anchor>

            <Anchor href="/course-guide">
              <Track
                onClick={() => setSelectedContextTrack("environmental-design")}
                poster="https://cdn.sanity.io/images/y8rjsgga/production/edafb39d7261d2f9492ac1728b2bd7a4c4725086-3885x1959.jpg"
              >
                <Icon>
                  <svg
                    style={{ width: "25px", height: "25px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g style={{ fill: "#fff" }}>
                      <g id="Layer_1" data-name="Layer 1">
                        <path
                          className="cls-1"
                          d="M12,9.7a.68.68,0,0,1-.34-.08L3.49,5.54a.78.78,0,0,1-.43-.69.76.76,0,0,1,.43-.68L11.66.08a.74.74,0,0,1,.68,0l8.17,4.09a.76.76,0,0,1,.43.68.78.78,0,0,1-.43.69L12.34,9.62A.68.68,0,0,1,12,9.7ZM5.54,4.85,12,8.08l6.46-3.23L12,1.62Z"
                        />
                        <path
                          className="cls-1"
                          d="M12,17.87a.68.68,0,0,1-.34-.08L3.49,13.71A.78.78,0,0,1,3.06,13V4.85a.77.77,0,0,1,1.54,0v7.7l7.4,3.7,7.4-3.7V4.85a.77.77,0,0,1,1.54,0V13a.78.78,0,0,1-.43.69l-8.17,4.08A.68.68,0,0,1,12,17.87Z"
                        />
                        <path
                          className="cls-1"
                          d="M12,17.87a.77.77,0,0,1-.77-.76V8.94a.77.77,0,1,1,1.54,0v8.17A.77.77,0,0,1,12,17.87Z"
                        />
                        <path
                          className="cls-1"
                          d="M12,24C6.18,24,0,22.3,0,19.15a.77.77,0,0,1,.77-.77.77.77,0,0,1,.76.77c0,1.2,3,2.82,8.05,3.22L7.46,20.78a.77.77,0,0,1-.16-1.07.76.76,0,0,1,1.07-.15l4.09,3.06a.78.78,0,0,1,.27.86A.78.78,0,0,1,12,24Z"
                        />
                        <path
                          className="cls-1"
                          d="M.77,19.92A.77.77,0,0,1,0,19.15c0-1.6,1.63-3,4.6-3.88a.78.78,0,0,1,1,.51.77.77,0,0,1-.52,1c-2.13.64-3.51,1.59-3.51,2.41A.77.77,0,0,1,.77,19.92Z"
                        />
                        <path
                          className="cls-1"
                          d="M23.23,19.92a.77.77,0,0,1-.76-.77c0-.82-1.38-1.77-3.51-2.41a.77.77,0,1,1,.44-1.47c3,.9,4.6,2.28,4.6,3.88A.77.77,0,0,1,23.23,19.92Z"
                        />
                        <path
                          className="cls-1"
                          d="M15.08,23.84A.76.76,0,0,1,15,22.32c4.67-.49,7.47-2,7.47-3.17a.77.77,0,1,1,1.53,0c0,2.29-3.47,4.13-8.84,4.69Z"
                        />
                      </g>
                    </g>
                  </svg>
                </Icon>
                <Name>Environmental Design</Name>
              </Track>
            </Anchor>

            <Anchor href="/course-guide">
              <Track
                onClick={() => setSelectedContextTrack("character-design")}
                poster="https://cdn.sanity.io/images/y8rjsgga/production/9c7210b2b15a0a81a7ddef73464dba57107501e3-1085x2048.jpg"
              >
                <Icon>
                  <svg
                    style={{ width: "25px", height: "25px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g style={{ fill: "#fff" }}>
                      <g id="Layer_1" data-name="Layer 1">
                        <path
                          className="cls-1"
                          d="M12,9.7a.68.68,0,0,1-.34-.08L3.49,5.54a.78.78,0,0,1-.43-.69.76.76,0,0,1,.43-.68L11.66.08a.74.74,0,0,1,.68,0l8.17,4.09a.76.76,0,0,1,.43.68.78.78,0,0,1-.43.69L12.34,9.62A.68.68,0,0,1,12,9.7ZM5.54,4.85,12,8.08l6.46-3.23L12,1.62Z"
                        />
                        <path
                          className="cls-1"
                          d="M12,17.87a.68.68,0,0,1-.34-.08L3.49,13.71A.78.78,0,0,1,3.06,13V4.85a.77.77,0,0,1,1.54,0v7.7l7.4,3.7,7.4-3.7V4.85a.77.77,0,0,1,1.54,0V13a.78.78,0,0,1-.43.69l-8.17,4.08A.68.68,0,0,1,12,17.87Z"
                        />
                        <path
                          className="cls-1"
                          d="M12,17.87a.77.77,0,0,1-.77-.76V8.94a.77.77,0,1,1,1.54,0v8.17A.77.77,0,0,1,12,17.87Z"
                        />
                        <path
                          className="cls-1"
                          d="M12,24C6.18,24,0,22.3,0,19.15a.77.77,0,0,1,.77-.77.77.77,0,0,1,.76.77c0,1.2,3,2.82,8.05,3.22L7.46,20.78a.77.77,0,0,1-.16-1.07.76.76,0,0,1,1.07-.15l4.09,3.06a.78.78,0,0,1,.27.86A.78.78,0,0,1,12,24Z"
                        />
                        <path
                          className="cls-1"
                          d="M.77,19.92A.77.77,0,0,1,0,19.15c0-1.6,1.63-3,4.6-3.88a.78.78,0,0,1,1,.51.77.77,0,0,1-.52,1c-2.13.64-3.51,1.59-3.51,2.41A.77.77,0,0,1,.77,19.92Z"
                        />
                        <path
                          className="cls-1"
                          d="M23.23,19.92a.77.77,0,0,1-.76-.77c0-.82-1.38-1.77-3.51-2.41a.77.77,0,1,1,.44-1.47c3,.9,4.6,2.28,4.6,3.88A.77.77,0,0,1,23.23,19.92Z"
                        />
                        <path
                          className="cls-1"
                          d="M15.08,23.84A.76.76,0,0,1,15,22.32c4.67-.49,7.47-2,7.47-3.17a.77.77,0,1,1,1.53,0c0,2.29-3.47,4.13-8.84,4.69Z"
                        />
                      </g>
                    </g>
                  </svg>
                </Icon>
                <Name>Character Design</Name>
              </Track>
            </Anchor>

            <Anchor href="/course-guide">
              <Track
                onClick={() => setSelectedContextTrack("storyboarding")}
                poster="https://cdn.sanity.io/images/y8rjsgga/production/7fea55489b20ab06011bd39fbad35bace2170cbb-1075x1512.jpg"
              >
                <Icon>
                  <svg
                    style={{ width: "25px", height: "25px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g style={{ fill: "#fff" }}>
                      <g id="Layer_1" data-name="Layer 1">
                        <path
                          className="cls-1"
                          d="M12,9.7a.68.68,0,0,1-.34-.08L3.49,5.54a.78.78,0,0,1-.43-.69.76.76,0,0,1,.43-.68L11.66.08a.74.74,0,0,1,.68,0l8.17,4.09a.76.76,0,0,1,.43.68.78.78,0,0,1-.43.69L12.34,9.62A.68.68,0,0,1,12,9.7ZM5.54,4.85,12,8.08l6.46-3.23L12,1.62Z"
                        />
                        <path
                          className="cls-1"
                          d="M12,17.87a.68.68,0,0,1-.34-.08L3.49,13.71A.78.78,0,0,1,3.06,13V4.85a.77.77,0,0,1,1.54,0v7.7l7.4,3.7,7.4-3.7V4.85a.77.77,0,0,1,1.54,0V13a.78.78,0,0,1-.43.69l-8.17,4.08A.68.68,0,0,1,12,17.87Z"
                        />
                        <path
                          className="cls-1"
                          d="M12,17.87a.77.77,0,0,1-.77-.76V8.94a.77.77,0,1,1,1.54,0v8.17A.77.77,0,0,1,12,17.87Z"
                        />
                        <path
                          className="cls-1"
                          d="M12,24C6.18,24,0,22.3,0,19.15a.77.77,0,0,1,.77-.77.77.77,0,0,1,.76.77c0,1.2,3,2.82,8.05,3.22L7.46,20.78a.77.77,0,0,1-.16-1.07.76.76,0,0,1,1.07-.15l4.09,3.06a.78.78,0,0,1,.27.86A.78.78,0,0,1,12,24Z"
                        />
                        <path
                          className="cls-1"
                          d="M.77,19.92A.77.77,0,0,1,0,19.15c0-1.6,1.63-3,4.6-3.88a.78.78,0,0,1,1,.51.77.77,0,0,1-.52,1c-2.13.64-3.51,1.59-3.51,2.41A.77.77,0,0,1,.77,19.92Z"
                        />
                        <path
                          className="cls-1"
                          d="M23.23,19.92a.77.77,0,0,1-.76-.77c0-.82-1.38-1.77-3.51-2.41a.77.77,0,1,1,.44-1.47c3,.9,4.6,2.28,4.6,3.88A.77.77,0,0,1,23.23,19.92Z"
                        />
                        <path
                          className="cls-1"
                          d="M15.08,23.84A.76.76,0,0,1,15,22.32c4.67-.49,7.47-2,7.47-3.17a.77.77,0,1,1,1.53,0c0,2.29-3.47,4.13-8.84,4.69Z"
                        />
                      </g>
                    </g>
                  </svg>
                </Icon>
                <Name>Storyboarding</Name>
              </Track>
            </Anchor>
          </>
        )}
      </Tracks>

      <FlexBox width="100%" flexdirection="column" alignitems="center">
        {currentTrack.length > 0 && (
          <TextBlock
            justifycontent="center"
            fontSize="28px"
            padding="100px 0 50px"
          >
            Roadmap for{" "}
            <span style={{ color: "var(--blue)", fontWeight: "bold" }}>
              {heading}
            </span>
          </TextBlock>
        )}

        <FlexContainer
          display="flex"
          flexwrap="wrap"
          gap="20px 10px"
          margin="0 auto"
          width="100%"
          justifycontent="space-between"
        >
          {currentTrack.length > 0 &&
            currentTrack?.map((track: any) =>
              track?.tracks.map((courses: any, index: number) => (
                <Terms key={index}>
                  <TextBlock
                    justifycontent="left"
                    fontSize="24px"
                    fontWeight="bold"
                  >
                    {courses.term}
                  </TextBlock>

                  {courses.courses.map((course: any, index: number) => {
                    // console.log("looking for name", course);
                    return (
                      <Link
                        key={index}
                        href={`courses/${course.category
                          .toLocaleLowerCase()
                          .replaceAll(" ", "-")}/${course.slug.current}`}
                      >
                        <Card
                          background="var(--black)"
                          borderradius="10px"
                          stacked="false"
                          boxshadow="0"
                          icon={course.imageUrl}
                          heading={course.name}
                          subHeading={course.code}
                          width="100%"
                          icon_width="75px"
                          icon_height="75px"
                        />
                      </Link>
                    );
                  })}
                </Terms>
              ))
            )}
        </FlexContainer>
      </FlexBox>
    </TracksContainer>
  );
};

export default TracksGroup;
