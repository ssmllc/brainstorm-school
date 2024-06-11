"use client";

import React, { useContext } from "react";
import styled from "styled-components";
import Icon3D from "../icons/icon-3d.component";
import IconStory from "../icons/icon-story.component";
import IconPencil from "../icons/icon-pencil.component";
import { TracksContext } from "@/app/context/tracks-context-provider";

import { useRef } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollToPlugin);

const Content = styled.div`
  /* border: thin dashed red; */
  padding: 35px 0 25px;
  position: relative;
  max-width: 1400px;
  width: 100%;

  @media (min-width: 800px) {
    padding: 75px 0;
  }
`;

const ContentBlock = styled.div`
  /* border: thin dashed green; */
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 0 auto;
  width: 80%;

  @media (min-width: 800px) {
    flex-direction: row;
    width: 100%;
  }
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  &.no-hot-spot {
    padding: 30px 20px;

    @media (min-width: 800px) {
      padding: 40px 0;
    }
  }

  @media (min-width: 800px) {
    width: 33.33%;
  }
`;

const FlexBlock = styled.div`
  /* border: thin dashed yellow; */
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const HotSpot = styled.div`
  box-shadow: inset 0 0 0 1px #3f3f3f;
  border-radius: 20px;
  display: flex;
  min-height: 200px;
  padding: 25px 25px;
  transition: all 0.25s ease-out;

  &:hover {
    box-shadow: inset 0 0 0 1px var(--primary);
    cursor: pointer;

    .contact-info {
      color: var(--primary);
    }
  }
`;

const Heading = styled.p`
  color: var(--white);
  font-size: 32px;
  font-weight: bold;
`;

const Caption = styled.p`
  color: var(--white);
  font-size: 32px;
`;

const MoreTracks = () => {
  const { selectedContextTrack, setSelectedContextTrack }: any =
    useContext(TracksContext);

  return (
    <Content>
      <ContentBlock>
        <Block className="no-hot-spot">
          <Heading>Explore More Tracks</Heading>
        </Block>
        <Block className="block">
          <HotSpot
            onClick={() => {
              setSelectedContextTrack("character-design");
            }}
          >
            <FlexBlock>
              <IconPencil width="48px" height="48px" />
              <Caption>Character Design</Caption>
            </FlexBlock>
          </HotSpot>
        </Block>
        <Block>
          <HotSpot
            onClick={() => {
              setSelectedContextTrack("3d-concept");
            }}
          >
            <FlexBlock>
              <Icon3D width="48px" height="48px" />
              <Caption>3D Concept Design</Caption>
            </FlexBlock>
          </HotSpot>
        </Block>
        <Block>
          <HotSpot
            onClick={() => {
              setSelectedContextTrack("storyboarding");
            }}
          >
            <FlexBlock>
              <IconStory width="48px" height="48px" />
              <Caption>Storyboarding</Caption>
            </FlexBlock>
          </HotSpot>
        </Block>
      </ContentBlock>
    </Content>
  );
};

export default MoreTracks;
