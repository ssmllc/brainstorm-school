"use client";

import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import Link from "next/link";
import CardImageDetail from "./card-image-detail.component";
import FlexBox from "../layout/flexbox.component";
import Header from "../text-block/header.component";
import ActionButton from "../buttons/action-button.component";

const Anchor = styled(Link)`
  width: 25%;
`;

interface trackProps {
  poster: string;
}

const Track = styled.div<trackProps>`
  background: var(--black) url(${(props) => props.poster}) top center no-repeat;
  background-size: cover;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  filter: grayscale(0.75);
  flex-grow: 1;
  flex-basis: 25%;
  padding: 100px 20px 0 20px;
  position: relative;
  transition: all 0.35s ease-out;

  &[data-track="active"] {
    filter: grayscale(0);
  }

  &::after {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 25%,
      var(--off-black) 100%
    );
    content: "";
    border-radius: 20px;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  &:hover {
    filter: grayscale(0);
    cursor: pointer;
  }
`;

const Icon = styled.div`
  align-items: center;
  border: 2px solid var(--white);
  border-radius: 100%;
  display: flex;
  height: 50px;
  justify-content: center;
  position: relative;
  width: 50px;
  z-index: 2;
`;

const Label = styled.p`
  color: var(--white);
  font-weight: bold;
  font-size: 28px;
  padding: 20px 0 10px;
  position: relative;
  z-index: 2;
`;

const Name = styled.p`
  color: var(--white);
  font-size: 14px;
  padding: 0 0 25px 0;
  position: relative;
  z-index: 2;
`;

interface Props {
  poster: string;
  label: string;
  name?: string;
  results?: any;
}

const AnchorCard = ({ poster, label, results, name }: Props) => {
  return (
    <FlexBox margin="20px 60px" sm_width="85%" width="70%" alignitems="center">
      <CardImageDetail
        slug="workshops"
        path="introduction-to-zbrush"
        preview="/banner/banner-21.jpg"
        courseTrack="2D - 3D Concept Design"
        courseName="Introduction to ZBrush"
        courseCode="ZB1"
        courseTime="Fri 10am-1pm (PST)"
        courseDuration="10-week Course"
        width="50%"
      />
      <FlexBox
        alignitems="center"
        flexdirection="column"
        margin="20px 60px"
        sm_width="85%"
        width="70%"
        sm_textalign="center"
        textalign="center"
      >
        <Header level="4" text="This blog mentions this course." />
        <ActionButton type="primary" label="Register Today" margin="20px 0" />
      </FlexBox>
    </FlexBox>
  );
};

export default AnchorCard;
