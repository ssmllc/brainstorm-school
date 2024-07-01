"use client";

import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import Link from "next/link";
import TextBlock from "../text-block/text-block.component";
import { Card } from "../card/card-card.component";
import { TracksContext } from "@/app/context/tracks-context-provider";
import Header from "../text-block/header.component";
import FlexBox from "../layout/flexbox.component";
import Icon3D from "../icons/icon-3d.component";
import { Results } from "@/app/types/types";

const TracksContainer = styled.div`
  /* border: thin solid red; */
  padding: 0 0 50px 0;
  text-align: center;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 800px) {
    padding: 0 0 75px 0;
  }

  @media (min-width: 1024px) {
    width: 100%;
  }

  @media (min-width: 1400px) {
    width: 100%;
  }
`;

const Anchor = styled(Link)`
  display: block;
  width: 100%;

  @media (min-width: 768px) {
    width: 49%;
  }

  @media (min-width: 768px) {
    min-width: 200px;
    width: 49%;
  }

  @media (min-width: 1024px) {
    min-width: 200px;
    width: 24%;
  }

  @media (min-width: 1400px) {
    min-width: 200px;
    width: 25%;
  }
`;

const Tracks = styled.div`
  /* border: thin solid red; */
  display: flex;
  flex-direction: row;
  gap: 10px 5px;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  margin: 0 auto;
  width: 80%;

  @media (min-width: 768px) {
    gap: 10px 0;
    flex-direction: row;
    flex-wrap: wrap;
    width: 75%;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 20px;
    max-width: 1150px;
    width: 90%;
  }

  @media (min-width: 1360px) {
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 20px;
    max-width: 1150px;
    width: 80%;
  }

  @media (min-width: 1900px) {
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 20px;
    max-width: 1150px;
    width: 100%;
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
  /* filter: grayscale(0.75); */
  min-height: 150px;
  padding: 100px 20px 0 20px;
  position: relative;
  transition: all 0.25s ease-out;
  width: 100%;

  @media (min-width: 768px) {
    padding: 125px 20px 0 20px;
    min-height: 280px;
    width: 100%;
  }

  @media (min-width: 1024px) {
    padding: 125px 20px 0 20px;
    min-height: 280px;
    min-width: 180px;
    width: 100%;
  }

  @media (min-width: 1360px) {
    min-height: 350px;
    padding: 185px 20px 0 20px;
    min-width: 250px;
    width: 100%;
  }

  &[data-track="active"] {
    /* filter: grayscale(0); */
    box-shadow: 0 0 0 3px var(--primary);
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
    /* filter: grayscale(0); */
    cursor: pointer;
    box-shadow: 0 0 0 3px var(--primary);
  }
`;

const Icon = styled.div`
  background: var(--off-black);
  align-items: center;
  border-radius: 100%;
  display: none;
  height: 50px;
  justify-content: center;
  position: relative;
  width: 50px;
  z-index: 2;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const Name = styled.p`
  color: var(--white);
  font-weight: bold;
  font-size: 24px;
  padding: 20px 0;
  position: relative;
  text-align: left;
  z-index: 2;

  @media (min-width: 1400px) {
    font-size: 28px;
  }
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
  width: 100%;

  @media (min-width: 800px) {
    width: 32%;
  }
`;

interface Props {
  results?: Results[];
}

const TracksGroup = ({ results }: Props) => {
  const { selectedContextTrack, setSelectedContextTrack }: any =
    useContext(TracksContext);
  const [currentTrack, setCurrentTrack] = useState<Results[]>([]);
  const [heading, setHeading] = useState<string | undefined>("");

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
      <FlexBox
        justifycontent="center"
        sm_margin="0 auto"
        md_margin="0 auto"
        margin="0 auto"
        xl_margin="0 auto"
        xxl_margin="0 auto"
        sm_width="80%"
        md_width="60%"
        width="60%"
        xl_width="60%"
        xxl_width="60%"
      >
        <Header
          level="2"
          text="Course Guide - Tracks"
          color="white"
          margin="50px 0 25px"
        />
      </FlexBox>

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
                  <Icon3D width="28px" height="28px" />
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
                poster="https://cdn.sanity.io/images/y8rjsgga/production/045b94172d3c14adae7092cbf40a2756c817bed9-1125x633.jpg?w=800"
              >
                <Icon>
                  <Icon3D width="28px" height="28px" />
                </Icon>
                <Name>3D Concept</Name>
              </Track>
            </Anchor>

            <Anchor href="/course-guide">
              <Track
                onClick={() => setSelectedContextTrack("environmental-design")}
                poster="https://cdn.sanity.io/images/y8rjsgga/production/5fab0dcacffa3c467db8c2cbc2b770c162daae2e-1920x839.jpg?w=800"
              >
                <Icon>
                  <Icon3D width="28px" height="28px" />
                </Icon>
                <Name>Environmental Design</Name>
              </Track>
            </Anchor>

            <Anchor href="/course-guide">
              <Track
                onClick={() => setSelectedContextTrack("character-design")}
                poster="https://cdn.sanity.io/images/y8rjsgga/production/c4f32c61805a41b426e14fd39ed13ae2384b2713-1822x1406.jpg?w=800"
              >
                <Icon>
                  <Icon3D width="28px" height="28px" />
                </Icon>
                <Name>Character Design</Name>
              </Track>
            </Anchor>

            <Anchor href="/course-guide">
              <Track
                onClick={() => setSelectedContextTrack("storyboarding")}
                poster="https://cdn.sanity.io/images/y8rjsgga/production/893bbf16a0442facfdac4b5cdaf804309252fbc2-1242x711.png?w=800"
              >
                <Icon>
                  <Icon3D width="28px" height="28px" />
                </Icon>
                <Name>Storyboarding</Name>
              </Track>
            </Anchor>
          </>
        )}
      </Tracks>

      <FlexBox
        alignitems="center"
        flexdirection="column"
        sm_width="100%"
        md_width="75%"
        width="100%"
        xl_width="100%"
        xxl_width="100%"
      >
        {currentTrack.length > 0 && (
          <TextBlock
            justifycontent="center"
            fontSize="28px"
            padding="100px 0 50px"
          >
            Roadmap for{" "}
            <span style={{ color: "var(--primary)", fontWeight: "bold" }}>
              {heading}
            </span>
          </TextBlock>
        )}

        <FlexBox
          flexwrap="wrap"
          gap="20px 10px"
          justifycontent="space-between"
          sm_margin="0 auto"
          md_margin="0 auto"
          margin="0 auto"
          xl_margin="0 auto"
          xxl_margin="0 auto"
          sm_width="100%"
          md_width="100%"
          width="100%"
          xl_width="100%"
          xxl_width="100%"
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
                    let color: string = "";

                    if (course?.difficulty === "Beginner") {
                      color = "green";
                    } else if (course?.difficulty === "Intermediate") {
                      color = "var(--primary)";
                    } else if (course?.difficulty === "Advanced") {
                      color = "red";
                    }
                    return (
                      <Link
                        key={index}
                        href={`courses/${course.category
                          .toLocaleLowerCase()
                          .replaceAll(" ", "-")}/${course.slug.current}`}
                      >
                        <Card
                          background="var(--off-black)"
                          borderradius="10px"
                          stacked="false"
                          icon={course.imageUrl}
                          heading={course.name}
                          subHeading={course.code}
                          width="100%"
                          icon_width="100px"
                          icon_height="100px"
                          padding="0"
                          show_icon={true}
                        />
                      </Link>
                    );
                  })}
                </Terms>
              ))
            )}
        </FlexBox>
      </FlexBox>
    </TracksContainer>
  );
};

export default TracksGroup;
