"use client";

import React from "react";
import styled from "styled-components";
import { IconSchedule } from "../icons/icon-schedule.component";
import TextHeaderBlock from "../text-block/text-header-block.component";
import FlexBox from "../layout/flexbox.component";
import Header from "../text-block/header.component";

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
  width: 100%;

  @media (min-width: 768px) {
    width: 45%;
  }

  @media (min-width: 1024px) {
    width: 24%;
  }

  &:hover {
    box-shadow: 0 0 0 2px var(--primary);
  }
`;

const Label = styled.p`
  color: var(--primary);
  font-size: 12px;
  font-weight: bold;
  line-height: 1.5;
`;

const HeaderText = styled.p`
  color: var(--white);
  font-size: 28px;
  font-weight: bold;
  line-height: 1.5;
  text-transform: capitalize;
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
  height: 50%;
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

interface Props {
  header: string;
  label?: string;
  openDate?: string;
  startDate?: string;
  results?: any;
  width?: string;
}

export const MiniCards = ({ width, results }: Props) => {
  const { quarters } = results;

  return (
    <FlexBox
      flexdirection="column"
      sm_width="100%"
      md_width="70%"
      width="100%"
      xl_width="100%"
      xxl_width="100%"
      sm_margin="0 auto"
      md_margin="50px auto"
      margin="0 auto"
      xl_margin="50px auto 0"
      xxl_margin="50px auto 0"
    >
      <FlexBox
        flexdirection="column"
        sm_margin="25px auto"
        md_margin="25px auto"
        margin="25px auto"
        xl_margin="25px auto"
        xxl_margin="25px auto"
        sm_width="80%"
        md_width="100%"
        width="80%"
        xl_width="80%"
        xxl_width="80%"
      >
        <TextHeaderBlock fontSize="36px" fontWeight="bold">
          Quarterly Schedule
        </TextHeaderBlock>

        <FlexBox
          sm_width="100%"
          md_width="100%"
          width="80%"
          xl_width="70%"
          flexdirection="column"
          margin="20px 0"
          xl_margin="0"
          md_margin="20px 0"
        >
          <Header
            level="4"
            fontSize="16px"
            text="Creative education courses at Brainstorm School start in the Spring, Summer, and Fall, with registration opening two months prior for prospective students to register."
          />
        </FlexBox>
      </FlexBox>

      <FlexBox
        sm_width="80%"
        md_width="100%"
        width="90%"
        xl_width="82%"
        xxl_width="82%"
        flexwrap="wrap"
      >
        {quarters.length > 0 &&
          quarters.map((quarter: any) => {
            const { _id, nextup, term, year, open, start } = quarter;
            const formatOpen = new Date(open).toDateString();
            const formatStart = new Date(start).toDateString();

            return (
              <MiniCard key={_id}>
                <Row>
                  <Col>
                    {nextup && <Label>Next up!</Label>}
                    <HeaderText>{`${term} ${year}`}</HeaderText>
                  </Col>
                  <Icon>
                    <IconSchedule height="48" width="48" />
                  </Icon>
                </Row>

                <Row background="var(--medium-grey)">
                  <Col width="100%">
                    <Text>
                      <BoldText>Opens</BoldText>: {formatOpen}
                    </Text>
                    <Text>
                      <BoldText>Starts</BoldText>: {formatStart}
                    </Text>
                  </Col>
                </Row>
              </MiniCard>
            );
          })}
      </FlexBox>
    </FlexBox>
  );
};
