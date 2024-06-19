"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import styled from "styled-components";
import Container from "../layout/container.component";
import Image from "next/image";
import Header from "./header.component";
import Link from "next/link";

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
  padding: 25px 20px;
  text-align: left;
  width: 100%;

  @media (min-width: 1024px) {
    padding: 25px 0;
  }
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
    max-height: 9999px;
    opacity: 1;
    padding: 25px 20px;
    transition: all 0.35s ease-out;

    @media (min-width: 1024px) {
      padding: 25px 0;
    }
  }
`;

const Anchor = styled(Link)`
  color: var(--white);
  font-size: 15px;
  text-decoration: underline;
`;

const FAQs = ({ results }: any) => {
  const [selected, setSelected] = useState<number | null>(null);
  const { faqs } = results;

  console.log("client faqs component", results);

  const toggleFAQ = (selectedIndex: number) => {
    if (selected === selectedIndex) {
      return setSelected(null);
    }

    setSelected(selectedIndex);
  };
  return (
    <>
      {faqs?.length > 0 && (
        <Container width="100%" margin="0 auto">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              position: "relative",
              margin: "25px auto",
              padding: "0",
            }}
          >
            <Header level="2" text="FAQ's" margin="20px 0" />

            {faqs.map(
              (
                {
                  question,
                  answer,
                  _id,
                }: {
                  question: string;
                  answer: string | any;
                  _id: number;
                },
                index: number
              ) => (
                <Container
                  key={index}
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
                    <Header level="4" font-size="16px" text={question} />
                    <span>
                      <Image
                        src={`${
                          selected === index
                            ? "/icons/ico-x.png"
                            : "/icons/ico-expand.png"
                        }`}
                        width={20}
                        height={20}
                        alt="Expand collapse icon"
                      />
                    </span>
                  </Question>

                  <Answer
                    className={`faq-answer ${
                      selected === index ? "active" : ""
                    }`}
                  >
                    {answer.map((block: any, j: number) => {
                      // console.log("block style", block.style);
                      if (block.style === "h1") {
                        return (
                          <Header
                            level="1"
                            key={j}
                            text={block.children[0].text}
                          />
                        );
                      }

                      if (block.style === "h2") {
                        return (
                          <Header
                            level="2"
                            key={block._key}
                            text={block.children[0].text}
                          />
                        );
                      }

                      if (block.style === "h3") {
                        return (
                          <Header
                            level="3"
                            key={block._key}
                            text={block.children[0].text}
                          />
                        );
                      }

                      if (block.style === "normal") {
                        return block.children.map((mark: any) => {
                          if (block.markDefs.length > 0) {
                            if (mark.marks.length > 0) {
                              return block.markDefs.map((marker: any) => {
                                if (mark.marks[0] === marker._key) {
                                  return (
                                    <Anchor
                                      key={marker._key}
                                      href={marker.href}
                                    >
                                      {mark.text}
                                    </Anchor>
                                  );
                                }
                              });
                            }
                          }
                          return (
                            <Header
                              key={mark._key}
                              level="6"
                              fontSize="15px"
                              text={mark.text}
                            />
                          );
                        });
                      }
                    })}
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
