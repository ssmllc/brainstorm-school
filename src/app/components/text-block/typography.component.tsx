"use client";

import { ReactNode } from "react";
import styled from "styled-components";

interface textProps {
  fontWeight?: string;
  color?: string;
  fontSize?: string;
  sm_padding?: string;
  md_padding?: string;
  lg_padding?: string;
}

const Text = styled.div<textProps>`
  color: ${({ color }) => (color ? color : "var(--white)")};
  padding: ${({ sm_padding }) => (sm_padding ? sm_padding : "25px 25px")};
  width: 100%;

  @media (min-width: 768px) {
    margin: 0 auto;
    padding: ${({ md_padding }) => (md_padding ? md_padding : "50px 0")};
    width: 75%;
  }

  @media (min-width: 1400px) {
    margin: 0 auto;
    padding: ${({ lg_padding }) => (lg_padding ? lg_padding : "50px 30px")};
    width: 75%;
  }

  @media (min-width: 1900px) {
    margin: 0 auto;
    padding: 50px 0;
    width: 70%;
  }
`;

const Header = styled.h1`
  font-size: 36px;
  line-height: 1.25;
`;

const Copy = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin: 10px 0;

  @media (min-width: 768px) {
    width: 75%;
  }

  @media (min-width: 1024px) {
    width: 100%;
  }
`;

interface Props {
  heading: string;
  text?: string;
  sm_padding?: string;
  md_padding?: string;
  lg_padding?: string;
}

const Typography = ({
  heading,
  text,
  sm_padding,
  md_padding,
  lg_padding,
}: Props) => {
  return (
    <Text
      sm_padding={sm_padding}
      md_padding={md_padding}
      lg_padding={lg_padding}
    >
      <Header>{heading}</Header>

      <Copy>
        If you wish to pursue a career in gaming and concept, these workshops,
        when combined with practice, can prepare you for our courses.
      </Copy>

      <Copy>
        Welcome to Brainstorm School&apos;s Workshops, designed for aspiring
        artists and designers seeking to elevate their skills in visual
        storytelling, concept art workshops, and design. Our workshops are
        precisely designed to provide attendees with hands-on experience,
        experienced advice, and a supportive community—all of which are
        essential for perfecting your skills and advancing your career in the
        entertainment industry.
      </Copy>
    </Text>
  );
};

export default Typography;
