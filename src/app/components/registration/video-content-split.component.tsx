"use client";
import React from "react";
import styled from "styled-components";

const Content = styled.div`
  /* border: thin solid red; */
  padding: 50px 0;
  position: relative;
  width: 100vw;

  @media (min-width: 800px) {
    padding: 100px 0;
  }
`;

interface contentProps {
  flexdirection?: string;
}

const ContentWrapper = styled.div<contentProps>`
  /* border: thin solid red; */
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;

  @media (min-width: 800px) {
    flex-direction: ${({ flexdirection }) =>
      flexdirection ? flexdirection : "row"};
    width: 70%;
  }
`;

const Media = styled.div`
  /* border: thin solid red; */
  background: var(--black);
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  width: 100%;

  @media (min-width: 800px) {
    width: 50%;
  }
`;

const VideoPlayer = styled.div`
  /* border: thin solid blue; */
  background: var(--black);
  border-radius: 20px;
  overflow: hidden;
  height: 250px;
  width: 100%;

  @media (min-width: 800px) {
    min-height: 380px;
    height: 100%;
  }
`;

const ContentBlock = styled.div`
  color: var(--white);
  padding: 30px 0;
  width: 100%;

  @media (min-width: 800px) {
    padding: 30px 60px;
    width: 50%;
  }

  .heading {
    font-size: 28px;
    font-weight: bold;

    @media (min-width: 800px) {
      font-size: 34px;
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

const CallToAction = styled.button`
  background: var(--white);
  border-radius: 35px;
  border: 0;
  color: var(--black);
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
}: {
  flexdirection?: string;
  video?: string;
  image?: string;
  heading: string;
  text?: string;
  cta: string;
}) => {
  return (
    <Content>
      <ContentWrapper flexdirection={flexdirection}>
        <Media>
          {video && (
            <VideoPlayer>
              <object width="100%" height="100%">
                <param
                  name="movie"
                  value="https://www.youtube.com/embed/cidlS92hRTQ?si=ulzIjzSESEv7r7Nt&amp;controls=0&rel=0"
                />
                <param name="allow-FullScreen" value="true" />
                <param name="allow-script-access" value="always" />
                <embed
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/cidlS92hRTQ?si=ulzIjzSESEv7r7Nt&amp;controls=0&rel=0"
                  className="youtube-player"
                  type="text/html"
                  allow-script-access="always"
                  allow-fullscreen="true"
                />
              </object>
            </VideoPlayer>
          )}
        </Media>
        <ContentBlock>
          <p className="heading">{heading}</p>
          <p className="text">{text}</p>
          {cta && <CallToAction>{cta}</CallToAction>}
        </ContentBlock>
      </ContentWrapper>
    </Content>
  );
};

export default VideoContentSplit;
