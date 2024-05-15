"use client";

import React from "react";
import styled from "styled-components";
import { Card } from "./card-card.component";
import RegistrationBlock from "../registration/registration-block.component";
import ActionButton from "../buttons/action-button.component";

const Container = styled.div`
  /* border: thin dashed red; */
  width: 100vw;
`;

const Group = styled.div`
  /* border: thin dashed green; */
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  padding: 0 0 50px 0;
  width: 60%;
`;

const Row = styled.div`
  /* border: thin dashed cyan; */
  display: flex;
  gap: 20px;
`;

const ReadMore = styled.div`
  padding: 0;
  text-align: center;

  @media (min-width: 800px) {
    padding: 25px 0;
  }
`;

const CardGroup = () => {
  return (
    <Container>
      <RegistrationBlock
        primary={false}
        heading="Learn from todays top instructors"
        scale="xl"
      />
      <Group>
        <Row>
          <Card
            stacked={false}
            icon="/instructors/ico-image.png"
            heading="Christian Nacordia"
            subHeading="Concept Artist & Instructor"
          />
          <Card
            stacked={false}
            icon="/instructors/ico-image.png"
            heading="Christian Nacordia"
            subHeading="Concept Artist & Instructor"
          />
          <Card
            stacked={false}
            icon="/instructors/ico-image.png"
            heading="Christian Nacordia"
            subHeading="Concept Artist & Instructor"
          />
        </Row>

        <Row>
          <Card
            stacked={false}
            icon="/instructors/ico-image.png"
            heading="Christian Nacordia"
            subHeading="Concept Artist & Instructor"
          />
          <Card
            stacked={false}
            icon="/instructors/ico-image.png"
            heading="Christian Nacordia"
            subHeading="Concept Artist & Instructor"
          />
          <Card
            stacked={false}
            icon="/instructors/ico-image.png"
            heading="Christian Nacordia"
            subHeading="Concept Artist & Instructor"
          />
        </Row>

        <ReadMore>
          <ActionButton type="secondary" label="Browse Instructors" />
        </ReadMore>
      </Group>
    </Container>
  );
};

export default CardGroup;
