"use client";

import React from "react";
import styled from "styled-components";
import { CardIcon } from "./card-icon.component";
import { CardDetails } from "./card-details.component";
import Link from "next/link";
import { IconSchedule } from "../icons/icon-schedule.component";
import { FlexContainer } from "../layout/container.component";
import TextHeaderBlock from "../text-block/text-header-block.component";

type Props = {
  header: string;
  label?: string;
  openDate?: string;
  startDate?: string;
  width?: string;
};

type containerProps = {
  width?: string;
};

const Container = styled.div<containerProps>`
  background: var(--off-black);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  position: relative;
  width: ${({ width }) => (width ? width : "100vw")};

  @media (min-width: 800px) {
    flex-direction: row;
    width: 80%;
  }
`;

const MiniCard = styled.div`
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  width: 25%;

  &:hover {
    box-shadow: 0 0 0 2px var(--blue);
  }
`;

const Label = styled.p`
  color: var(--blue);
  font-size: 12px;
  font-weight: bold;
  line-height: 1.5;
`;

const Header = styled.p`
  color: var(--white);
  font-size: 28px;
  font-weight: bold;
  line-height: 1.5;
`;

const Text = styled.p`
  color: var(--white);
  font-size: 14px;
  line-height: 1.5;
  padding: 5px 0;
`;

const BoldText = styled.span`
  color: var(--white);
  font-size: 14px;
  font-weight: bold;
  line-height: 1.5;
`;

interface rowProps {
  background?: string;
}
const Row = styled.div<rowProps>`
  background: ${({ background }) => background};
  display: flex;
  flex-direction: row;
  padding: 25px 25px;
  position: relative;
  width: 100%;
`;

interface colProps {
  width?: string;
}
const Col = styled.div<colProps>`
  width: ${({ width }) => (width ? width : "50%")};
`;

const Icon = styled.div`
  align-items: center;
  display: flex;
  justify-content: right;
  width: 50%;
`;

export const MiniCards = ({ width }: Props) => {
  return (
    <FlexContainer>
      <FlexContainer width="80%" margin="50px auto">
        <TextHeaderBlock fontSize="36px" fontWeight="bold">
          Schedule
        </TextHeaderBlock>
      </FlexContainer>
      <Container width={width}>
        <MiniCard>
          <Row>
            <Col>
              <Label>Next up!</Label>
              <Header>Spring 2024</Header>
            </Col>
            <Icon>
              <IconSchedule height="48" width="48" />
            </Icon>
          </Row>

          <Row background="var(--medium-grey)">
            <Col width="100%">
              <Text>
                <BoldText>Opens</BoldText>: November 6, 2023
              </Text>
              <Text>
                <BoldText>Starts</BoldText>: January 22, 2024
              </Text>
            </Col>
          </Row>
        </MiniCard>

        <MiniCard>
          <Row>
            <Col>
              <Label>Next up!</Label>
              <Header>Summer 2024</Header>
            </Col>
            <Icon>
              <IconSchedule height="48" width="48" />
            </Icon>
          </Row>

          <Row background="var(--medium-grey)">
            <Col width="100%">
              <Text>
                <BoldText>Opens</BoldText>: November 6, 2023
              </Text>
              <Text>
                <BoldText>Starts</BoldText>: January 22, 2024
              </Text>
            </Col>
          </Row>
        </MiniCard>

        <MiniCard>
          <Row>
            <Col>
              <Label>Next up!</Label>
              <Header>Fall 2024</Header>
            </Col>
            <Icon>
              <IconSchedule height="48" width="48" />
            </Icon>
          </Row>

          <Row background="var(--medium-grey)">
            <Col width="100%">
              <Text>
                <BoldText>Opens</BoldText>: November 6, 2023
              </Text>
              <Text>
                <BoldText>Starts</BoldText>: January 22, 2024
              </Text>
            </Col>
          </Row>
        </MiniCard>

        <MiniCard>
          <Row>
            <Col>
              <Label>Next up!</Label>
              <Header>Winter 2024</Header>
            </Col>
            <Icon>
              <IconSchedule height="48" width="48" />
            </Icon>
          </Row>

          <Row background="var(--medium-grey)">
            <Col width="100%">
              <Text>
                <BoldText>Opens</BoldText>: November 6, 2023
              </Text>
              <Text>
                <BoldText>Starts</BoldText>: January 22, 2024
              </Text>
            </Col>
          </Row>
        </MiniCard>
      </Container>
    </FlexContainer>
  );
};
