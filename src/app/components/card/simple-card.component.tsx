"use client";

import React from "react";
import styled from "styled-components";
import Pill from "../pill/pill.component";
import TextBlock from "../text-block/text-block.component";

const CardHeader = ({ text }: { text: string }) => <h2>{text}</h2>;

interface previewProps {
  image: string;
}
const Preview = styled("div")<previewProps>`
  background: ${({ image }) => `url(${image}) top center no-repeat`};
  background-size: cover;
  border-radius: 20px;
  height: 400px;
  overflow: hidden;
  margin: 25px 0;
  width: 100%;
`;

const CardImage = ({ preview }: { preview: string }) => (
  <Preview image={preview} />
);

const CardDetails = ({ text }: { text: string }) => (
  <TextBlock fontsize="14px" padding="0" width="100%">
    {text}
  </TextBlock>
);

const Tags = styled("div")`
  padding: 50px 0;
`;

const CardTags = ({ tags }: { tags?: string[] }) => (
  <Tags>
    <TextBlock fontsize="28px" width="100%">
      What you'll learn
    </TextBlock>
    <div>
      <Pill label="Understanding Proportions" />
      <Pill label="Basic Anatomy" />
      <Pill label="Gesture & Rhythm" />
      <Pill label="Intro to construction" />
      <Pill label="Anatomical Focus" />
    </div>
  </Tags>
);

const CardLayout = () => {
  return (
    <div
      style={{
        width: "100vw",
        padding: "50px",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          width: "80%",
          display: "flex",
        }}
      >
        <div style={{ width: "60%", padding: "50px" }}>
          <CardHeader text="Gain understanding of the rhythm and structure for anatomical background" />
          <CardImage preview="/cards/character-design.jpg" />
          <CardDetails text="An 8 week introduction to figure drawing and the basic skills of gesture drawing, construction, and basic anatomy. This course focuses on building a process from gesture to form, construction and surface anatomy. It is a perfect class for a beginner artist looking for the proper starting point." />
          <CardTags />
        </div>
        <div style={{ width: "40%" }}>
          <div
            style={{
              background: "var(--dark-grey)",
              borderRadius: "20px",
              width: "80%",
              height: "100%",
              margin: "0 auto",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
