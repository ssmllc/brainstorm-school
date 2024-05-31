"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import styled from "styled-components";
import Container from "../layout/container.component";
import TextHeaderBlock from "./text-header-block.component";
import Image from "next/image";
import Header from "./header.component";

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
  color: var(--white);
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  padding: 0;
  transition: all 0.35s ease-out;

  &.active {
    max-height: 999px;
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
    console.log("selectedIndex", selectedIndex);
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
          key={1}
          className="faq-container"
          width="100%"
          background="var(--dark-grey)"
          padding="0 20px"
        >
          <Question
            key={11}
            className="faq-question"
            onClick={() => toggleFAQ(1)}
          >
            <span>How to Apply for the Brainstorm School Scholarship?</span>
            <span>
              <Image
                src={`${
                  selected === 1 ? "/icons/ico-x.png" : "/icons/ico-expand.png"
                }`}
                width={20}
                height={20}
                alt="Expand collapse icon"
              />
            </span>
          </Question>

          <Answer className={`faq-answer ${selected === 1 ? "active" : ""}`}>
            <Header
              level="4"
              fontSize="15px"
              margin="20px 150px 20px 0"
              text="Applying for the Brainstorm School Scholarship is a straightforward process. Prospective students need to complete an application form and submit a portfolio showcasing their artistic abilities. Detailed instructions and deadlines for scholarship applications can be found on our FAQ page."
            />
            <Header
              level="4"
              fontSize="15px"
              margin="20px 150px 20px 0"
              text="** Scholarships awarded to students before the start of each term,
              can only be used for the classes that are eligible for scholarship
              use."
            />
            <Header
              level="4"
              fontSize="15px"
              margin="20px 150px 20px 0"
              text="* Please note that our scholarship policy is subject to change each
              school term."
            />
            <Header
              level="4"
              fontSize="15px"
              margin="20px 200px 20px 0"
              text="* Full or partial scholarships cannot be used towards
              classes that have already been purchased. If a student has already
              registered for a class, and is awarded a scholarship for the same
              course, Brainstorm will provide school credits to be used in future
              term courses."
            />

            <Header
              level="4"
              fontSize="15px"
              margin="20px 150px 20px 0"
              text="** The email used to register will be used for correspondence between
              school and students."
            />

            <Header
              level="4"
              fontSize="15px"
              margin="20px 150px 20px 0"
              text="* Scholarship award registration fee: $25.99"
            />
          </Answer>
        </Container>

        <Container
          key={2}
          className="faq-container"
          width="100%"
          background="var(--dark-grey)"
          padding="0 20px"
        >
          <Question
            key={22}
            className="faq-question"
            onClick={() => toggleFAQ(2)}
          >
            <span>Why Choose Brainstorm School?</span>
            <span>
              <Image
                src={`${
                  selected === 2 ? "/icons/ico-x.png" : "/icons/ico-expand.png"
                }`}
                width={20}
                height={20}
                alt="Expand collapse icon"
              />
            </span>
          </Question>

          <Answer className={`faq-answer ${selected === 2 ? "active" : ""}`}>
            <Header
              level="4"
              fontSize="15px"
              margin="20px 150px 20px 0"
              text="By choosing Brainstorm School, you are investing in an education
              that will equip you with the skills and knowledge needed to excel in
              the competitive world of art and design."
            />
          </Answer>
        </Container>
      </div>
    </Container>
  );
};

export default FAQsV2;
