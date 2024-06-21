"use client";
import React from "react";
import styled from "styled-components";
import Poster from "../poster/poster.component";
import Link from "next/link";

const Content = styled.div`
  padding: 50px 0 0;
  position: relative;
  width: 100vw;

  @media (min-width: 1024px) {
    padding: 50px 0;
  }

  @media (min-width: 1400px) {
    padding: 50px 0;
  }
`;

interface contentProps {
  $flexdirection?: string;
}

const ContentWrapper = styled.div<contentProps>`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;

  @media (min-width: 768px) {
    max-width: 1100px;
    width: 70%;
    flex-direction: ${({ $flexdirection }) =>
      $flexdirection ? $flexdirection : "row"};
  }

  @media (min-width: 1024px) {
    align-items: center;
  }

  @media (min-width: 1400px) {
    max-width: 1150px;
    width: 100%;
  }

  @media (min-width: 1900px) {
    max-width: 1100px;
  }
`;

const Media = styled.div`
  background: var(--black);
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  width: 100%;

  @media (min-width: 800px) {
    width: 50%;
  }
`;

const VideoPlayer = styled.div`
  background: var(--black);
  border-radius: 20px;
  overflow: hidden;
  height: 250px;
  width: 100%;

  @media (min-width: 800px) {
    min-height: 380px;
    height: 100%;
  }

  @media (min-width: 1024px) {
    height: 380px;
  }
`;

interface contentBlockProps {
  $flexdirection?: string;
}

const ContentBlock = styled.div<contentBlockProps>`
  color: var(--white);
  padding: 30px 0;
  width: 100%;

  @media (min-width: 1024px) {
    padding: ${({ $flexdirection }) =>
      $flexdirection === "row-reverse"
        ? "30px 50px 30px 0"
        : "30px 0 30px 50px"};
    width: 50%;
  }

  @media (min-width: 1400px) {
    padding: ${({ $flexdirection }) =>
      $flexdirection === "row-reverse"
        ? "30px 60px 30px 0"
        : "30px 0 30px 60px"};
    width: 50%;
  }

  .heading {
    font-size: 28px;
    font-weight: bold;

    @media (min-width: 800px) {
      font-size: 36px;
    }
  }

  .text {
    font-size: 14px;
    line-height: 1.5;
    padding: 20px 0 0;

    @media (min-width: 800px) {
      font-size: 16px;
    }
  }
`;

const CallToAction = styled(Link)`
  background: var(--primary);
  border-radius: 35px;
  border: 0;
  color: var(--black);
  display: inline-block;
  font-size: 12px;
  letter-spacing: 2px;
  margin: 35px 0 0;
  padding: 15px 20px;
  text-transform: uppercase;
`;

const VideoContentSplit = ({
  flexdirection,
  video,
  image,
  heading,
  text,
  cta,
  href,
}: {
  flexdirection?: string;
  video?: string;
  image?: string;
  heading: string;
  text?: string;
  cta?: string;
  href?: string;
}) => {
  return (
    <Content>
      <ContentWrapper $flexdirection={flexdirection}>
        <Media>
          {video && (
            <VideoPlayer>
              <object width="100%" height="100%">
                <param
                  name="movie"
                  value={`https://youtube.com/embed/${video};controls=0&rel=0`}
                />
                <param name="allow-FullScreen" value="true" />
                <param name="allow-script-access" value="always" />
                <embed
                  width="100%"
                  height="100%"
                  src={`https://youtube.com/embed/${video};controls=0&rel=0`}
                  className="youtube-player"
                  type="text/html"
                  allow-script-access="always"
                  allow-fullscreen="true"
                />
              </object>
            </VideoPlayer>
          )}

          {image && <Poster imageUrl={image} />}
        </Media>

        <ContentBlock $flexdirection={flexdirection}>
          <p className="heading">{heading}</p>
          <p className="text">{text}</p>
          {cta && href && <CallToAction href={href}>{cta}</CallToAction>}
        </ContentBlock>
      </ContentWrapper>
    </Content>
  );
};

export default VideoContentSplit;
