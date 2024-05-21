"use client";

import React from "react";
import styled from "styled-components";
import Pill from "../pill/pill.component";

const CardHeader = ({ text }: { text: string }) => <h2>{text}</h2>;

interface previewProps {
  image: string;
}
const Preview = styled("div")<previewProps>`
  background: ${({ image }) => `url(${image}) top center no-repeat`};
  background-size: cover;
`;

const CardImage = ({ preview }: { preview: string }) => (
  <Preview image={preview} />
);

const CardDetails = ({ text }: { text: string }) => <p>{text}</p>;

const CardTags = ({ tags }: { tags?: string[] }) => (
  <div>
    <p>What you will learn</p>
    <div>
      <Pill label="Understanding Proportions" />
      <Pill label="Basic Anatomy" />
      <Pill label="Gesture & Rhythm" />
      <Pill label="Intro to construction" />
      <Pill label="Anatomical Focus" />
    </div>
  </div>
);

const CardLayout = () => {
  return (
    <div
      style={{ border: "thin solid white", width: "100vw", display: "flex" }}
    >
      <div style={{ border: "thin dashed red", width: "60%" }}>
        <CardHeader text="Gain understanding of the rhythm and structure for anatomical background" />
        <CardImage preview="card/sci-fi-city.jpg" />
        <CardDetails text="An 8 week introduction to figure drawing and the basic skills of gesture drawing, construction, and basic anatomy. This course focuses on building a process from gesture to form, construction and surface anatomy. It is a perfect class for a beginner artist looking for the proper starting point." />
        <CardTags />
      </div>
      <div style={{ border: "thin dashed blue", width: "40%" }}></div>
    </div>
  );
};

export default CardLayout;
