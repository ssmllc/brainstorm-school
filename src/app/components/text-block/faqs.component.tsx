"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import styled from "styled-components";
import Container from "../layout/container.component";
import TextHeaderBlock from "./text-header-block.component";

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

const FAQs = ({ results }: any) => {
  const [selected, setSelected] = useState<number | null>(null);
  const { faqs } = results;

  const toggleFAQ = (selectedIndex: number) => {
    if (selected === selectedIndex) {
      return setSelected(null);
    }

    setSelected(selectedIndex);
  };
  return (
    <>
      {faqs?.length > 0 && (
        <Container width="100%">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "70%",
              position: "relative",
              margin: "75px auto",
              padding: "0",
            }}
          >
            <TextHeaderBlock fontSize="36px" fontWeight="bold">
              Course FAQ&apos;s
            </TextHeaderBlock>

            {faqs.map(
              (
                {
                  question,
                  answer,
                  _id,
                }: {
                  question: string;
                  answer: string;
                  _id: number;
                },
                index: number
              ) => (
                <Container
                  key={_id}
                  className="faq-container"
                  width="100%"
                  background="var(--dark-grey)"
                  padding="0 20px"
                >
                  <Question
                    key={_id}
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{question}</span>
                    <span>
                      <img
                        src={` ${
                          selected === index
                            ? "/icons/ico-x.png"
                            : "/icons/ico-expand.png"
                        }`}
                        height="20px"
                        width="20px"
                      />
                    </span>
                  </Question>

                  <Answer
                    className={`faq-answer ${
                      selected === index ? "active" : ""
                    }`}
                  >
                    {answer}
                  </Answer>
                </Container>
              )
            )}
          </div>
        </Container>
      )}
    </>
  );
};

export default FAQs;
