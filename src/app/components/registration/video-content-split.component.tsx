"use client";
import React from "react";
import styled from "styled-components";

const Content = styled.div`
  /* border: thin solid red; */
  /* height: 100vh; */
  padding: 75px 0;
  width: 100vw;

  @media (min-width: 800px) {
    /* height: 50vh; */
  }
`;

const CallToAction = styled.button`
  background: #0091ff;
  border-radius: 35px;
  border: 0;
  color: #fff;
  font-size: 12px;
  letter-spacing: 2px;
  margin: 35px 0 0;
  padding: 15px 20px;
  text-transform: uppercase;
`;

const VideoContentSplit = ({
  video,
  image,
  heading,
  text,
  cta,
}: {
  video: string;
  image: string;
  heading: string;
  text?: string;
  cta: string;
}) => {
  return <Content></Content>;
};

export default VideoContentSplit;
