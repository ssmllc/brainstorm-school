"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import styled from "styled-components";
import Container from "../layout/container.component";
import Header from "../text-block/header.component";
import Image from "next/image";
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

const Paragraph = styled.p`
  color: var(--white);
  font-size: 15px;
  line-height: 1.5;
`;

const Anchor = styled(Link)`
  color: var(--white);
  font-size: 15px;
  line-height: 1.5;
  text-decoration: underline;
`;

const CoursesFAQs = () => {
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
        <Header level="2" text="FAQ's" margin="20px 0" />

        <Container
          className="faq-container"
          width="100%"
          background="var(--dark-grey)"
          padding="0 20px"
        >
          <Question
            font-size="16px"
            className="faq-question"
            onClick={() => toggleFAQ(1)}
          >
            <h3>What is the cost of the courses?</h3>
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
              text="Course prices vary depending on the course you take and its duration. A processing fee and a handling fee are attached to each transaction. Tuition in full is due during time of registration."
            />
            <Header
              level="4"
              fontSize="15px"
              margin="20px 150px 20px 0"
              text="Don't worry if you can't pay in full upon registration. We understand that financial situations can vary, so we offer flexible payment arrangements. A 50% deposit and registration fee are required upon registration, and the remaining balance can be paid in installments. However, please note that if the payments have not been completed prior to the start of the course, you might be subject to a $50 late payment, or you could lose your place on the course."
            />
            <Header
              level="4"
              fontSize="15px"
              margin="20px 150px 20px 0"
              text="Don't worry if you can't pay in full upon registration. We understand that financial situations can vary, so we offer flexible payment arrangements. A 50% deposit and registration fee are required upon registration, and the remaining balance can be paid in installments. However, please note that if the payments have not been completed prior to the start of the course, you might be subject to a $50 late payment, or you could lose your place on the course."
            />
            <Header
              level="5"
              href="/faqs"
              fontSize="15px"
              margin="20px 150px 20px 0"
              text="For terms and conditions, see FAQ."
            />
          </Answer>
        </Container>

        <Container
          className="faq-container"
          width="100%"
          background="var(--dark-grey)"
          padding="0 20px"
        >
          <Question
            font-size="16px"
            className="faq-question"
            onClick={() => toggleFAQ(2)}
          >
            <h3>What are the registration dates for upcoming courses?</h3>
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
              text="Registration dates can vary by term and course. For more detailed information, please see the specific course you wish to register for for full details and requirements."
            />
          </Answer>
        </Container>

        <Container
          className="faq-container"
          width="100%"
          background="var(--dark-grey)"
          padding="0 20px"
        >
          <Question
            font-size="16px"
            className="faq-question"
            onClick={() => toggleFAQ(3)}
          >
            <h3>How long do the courses last?</h3>
            <span>
              <Image
                src={`${
                  selected === 3 ? "/icons/ico-x.png" : "/icons/ico-expand.png"
                }`}
                width={20}
                height={20}
                alt="Expand collapse icon"
              />
            </span>
          </Question>

          <Answer className={`faq-answer ${selected === 3 ? "active" : ""}`}>
            <Header
              level="4"
              fontSize="15px"
              margin="20px 150px 20px 0"
              text="Depending on the course you choose to take, it can take anywhere from 5 to 12 weeks. Flash courses are typically 2 hours per week for 5 weeks. All longer courses, such as character design and storyboarding, are 3-hour sessions for the duration of the course."
            />
          </Answer>
        </Container>

        <Container
          className="faq-container"
          width="100%"
          background="var(--dark-grey)"
          padding="0 20px"
        >
          <Question
            font-size="16px"
            className="faq-question"
            onClick={() => toggleFAQ(4)}
          >
            <h3>How can I get more information about a specific course?</h3>
            <span>
              <Image
                src={`${
                  selected === 4 ? "/icons/ico-x.png" : "/icons/ico-expand.png"
                }`}
                width={20}
                height={20}
                alt="Expand collapse icon"
              />
            </span>
          </Question>

          <Answer className={`faq-answer ${selected === 4 ? "active" : ""}`}>
            <Paragraph>
              We want to ensure you have all the information you need to make an
              informed decision. That&apos;s why we have a range of resources on
              the website to help you learn more about the courses we offer and
              to answer your questions. We have a comprehensive{" "}
              <Anchor href="/faqs">FAQ page</Anchor> that can address most of
              your queries, and all of our course pages have detailed
              descriptions.
            </Paragraph>

            <Paragraph>
              If you need more information or specific questions answered, you
              can visit the Brainstorm School Courses Page or contact{" "}
              <Anchor href="mailto:info@brainstormschool.com">
                info@brainstormschool.com
              </Anchor>{" "}
              for more details.
            </Paragraph>
          </Answer>
        </Container>
      </div>
    </Container>
  );
};

export default CoursesFAQs;
