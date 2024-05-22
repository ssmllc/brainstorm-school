"use client";

import React, { ReactNode } from "react";
import styled from "styled-components";

interface sectionProps {
  border?: boolean;
  display?: string;
  gap?: string;
  height?: string;
  justifyContent?: string;
  flexwrap?: string;
  margin?: string;
  padding?: string;
  width?: string;
}

const Section = styled.div<sectionProps>`
  border: ${({ border }) => (border ? "thin dashed blue" : 0)};
  display: ${({ display }) => (display ? display : "block")};
  gap: ${({ gap }) => (gap ? gap : 0)};
  height: ${({ height }) => (height ? height : "auto")};
  flex-wrap: ${({ flexwrap }) => (flexwrap ? flexwrap : "no-wrap")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "start"};
  margin: ${({ margin }) => (margin ? margin : "0")};
  padding: ${({ padding }) => (padding ? padding : "0")};
  width: ${({ width }) => (width ? width : "100vw")};
`;

interface Props {
  children: string | ReactNode | JSX.Element | JSX.Element[];
  display?: string;
  gap?: string;
  height?: string;
  justifyContent?: string;
  margin?: string;
  flexwrap?: string;
  padding?: string;
  width?: string;
}

const Container = ({
  children,
  display,
  gap,
  height,
  justifyContent,
  flexwrap,
  margin,
  padding,
  width,
}: Props) => {
  return (
    <Section
      display={display}
      gap={gap}
      height={height}
      justifyContent={justifyContent}
      margin={margin}
      flexwrap={flexwrap}
      padding={padding}
      width={width}
    >
      {children}
    </Section>
  );
};

export default Container;
