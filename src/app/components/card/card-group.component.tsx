"use client";

import React, { useEffect, useState } from "react";
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 2;
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
  instructors?: any;
}
const CardGroup = ({
  padding,
  icon_height,
  icon_width,
  instructors,
}: Props) => {
  const [featured, setFeatured] = useState<any>([]);

  useEffect(() => {
    let featuredInstructors = [];

    for (let i = 0; i < 6; i++) {
      let idx = Math.floor(Math.random() * (instructors.length - 0 + 1) + 0);
      featuredInstructors.push(instructors[idx]);
      instructors.splice(idx, 1);
    }

    setFeatured(featuredInstructors);
  }, []);

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
          {featured?.length > 0 &&
            featured.map((instructor: any) => {
              return (
                <>
                  <Card
                    key={instructor._id}
                    stacked="false"
                    icon={
                      instructor?.headshot
                        ? instructor.headshot
                        : "/instructors/ico-image.png"
                    }
                    heading={instructor.title}
                    padding={padding}
                    subHeading={instructor.profession}
                    icon_height={icon_height}
                    icon_width={icon_width}
                    width="100%"
                  />
                </>
              );
            })}
        </Row>
        <ReadMore>
          <ActionButton type="tertiary" label="Browse Instructors" />
        </ReadMore>
      </Group>
    </Container>
  );
};

export default CardGroup;
