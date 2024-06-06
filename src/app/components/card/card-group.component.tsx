"use client";

import React from "react";
import styled from "styled-components";
import { Card } from "./card-card.component";
import ActionButton from "../buttons/action-button.component";
import Header from "../text-block/header.component";
import FlexBox from "../layout/flexbox.component";

const Container = styled.div`
  /* border: thin dashed red; */
  padding: 50px 0;
  position: relative;
  width: 100vw;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  padding: 0 0 50px 0;
  width: 90%;

  @media (min-width: 400px) {
    width: 80%;
  }

  @media (min-width: 768) {
  }

  @media (min-width: 800px) {
    gap: 20px;
    max-width: 1250px;
    width: 60%;
  }
`;

const Row = styled.div`
  /* border: thin dashed cyan; */
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`;

const ReadMore = styled.div`
  padding: 0;
  text-align: center;

  @media (min-width: 800px) {
    padding: 25px 0;
  }
`;

interface Props {
  padding: string;
  icon_height?: string;
  icon_width?: string;
}
const CardGroup = ({ padding, icon_height, icon_width }: Props) => {
  return (
    <Container>
      <FlexBox
        justifycontent="center"
        sm_margin="25px auto"
        margin="50px auto"
        sm_width="80%"
        width="70%"
      >
        <Header
          level="2"
          text="Learn from todays top instructors"
          textalign="center"
        />
      </FlexBox>
      <Group>
        <Row>
          <Card
            stacked="false"
            icon="/instructors/ico-image.png"
            heading="Christian Nacordia"
            padding={padding}
            subHeading="Concept Artist & Instructor"
            icon_height={icon_height}
            icon_width={icon_width}
          />
          <Card
            stacked="false"
            icon="/instructors/ico-image.png"
            heading="Christian Nacordia"
            padding={padding}
            subHeading="Concept Artist & Instructor"
            icon_height={icon_height}
            icon_width={icon_width}
          />
          <Card
            stacked="false"
            icon="/instructors/ico-image.png"
            heading="Christian Nacordia"
            padding={padding}
            subHeading="Concept Artist & Instructor"
            icon_height={icon_height}
            icon_width={icon_width}
          />
        </Row>

        <Row>
          <Card
            stacked="false"
            icon="/instructors/ico-image.png"
            heading="Christian Nacordia"
            padding={padding}
            subHeading="Concept Artist & Instructor"
            icon_height={icon_height}
            icon_width={icon_width}
          />
          <Card
            stacked="false"
            icon="/instructors/ico-image.png"
            heading="Christian Nacordia"
            padding={padding}
            subHeading="Concept Artist & Instructor"
            icon_height={icon_height}
            icon_width={icon_width}
          />
          <Card
            stacked="false"
            icon="/instructors/ico-image.png"
            heading="Christian Nacordia"
            padding={padding}
            subHeading="Concept Artist & Instructor"
            icon_height={icon_height}
            icon_width={icon_width}
          />
        </Row>

        <ReadMore>
          <ActionButton type="tertiary" label="Browse Instructors" />
        </ReadMore>
      </Group>
    </Container>
  );
};

export default CardGroup;
