"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import styled from "styled-components";
import Container from "../layout/container.component";
import TextHeaderBlock from "./text-header-block.component";
import Image from "next/image";

const Question = styled("button")`
  align-items: center;
  background: var(--dark-grey);
  border: 0;
  border-bottom: 1px solid var(--medium-grey);
  color: var(--white);
  display: flex;
  font-size: 16px;
  font-weight: bold;
  justify-content: space-between;
  padding: 25px 0;
  text-align: left;
  width: 100%;
`;

const Answer = styled("div")`
  background: var(--dark-grey);
  height: 0;
  overflow: hidden;
  opacity: 0;
  padding: 0;
  transition: all 0.35s ease-out;

  &.active {
    height: 100px;
    opacity: 1;
    padding: 25px 0;
    transition: all 0.35s ease-out;
  }
`;

const FAQsV2 = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const toggleFAQ = (selectedIndex: number) => {
    if (selected === selectedIndex) {
      return setSelected(null);
    }

    setSelected(selectedIndex);
  };
  return (
    <Container width="100%" margin="0 auto">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          position: "relative",
          margin: "75px auto",
          padding: "0",
        }}
      >
        <TextHeaderBlock fontSize="36px" fontWeight="bold">
          Course FAQ&apos;s
        </TextHeaderBlock>

        <Container
          className="faq-container"
          width="100%"
          background="var(--dark-grey)"
          padding="0 20px"
        >
          <Question className="faq-question" onClick={() => toggleFAQ(1)}>
            <span>Question 1</span>
            <span>
              <Image
                src="/icons/ico-expand.png"
                width={20}
                height={20}
                alt="Expand collapse icon"
              />
            </span>
          </Question>

          <Answer>Lorem ipsum dolor sit amet</Answer>
        </Container>

        <Container
          className="faq-container"
          width="100%"
          background="var(--dark-grey)"
          padding="0 20px"
        >
          <Question className="faq-question" onClick={() => toggleFAQ(2)}>
            <span>Question 2</span>
            <span>
              <Image
                src="/icons/ico-expand.png"
                width={20}
                height={20}
                alt="Expand collapse icon"
              />
            </span>
          </Question>

          <Answer>Lorem ipsum dolor sit amet</Answer>
        </Container>
      </div>
    </Container>
  );
};

export default FAQsV2;
