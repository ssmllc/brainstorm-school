"use client";

import React, { ReactNode } from "react";
import styled from "styled-components";

interface sectionProps {
  background?: string;
  border?: boolean;
  borderradius?: string;
  display?: string;
  gap?: string;
  height?: string;
  justifycontent?: string;
  flexdirection?: string;
  flexwrap?: string;
  margin?: string;
  padding?: string;
  width?: string;
}

const Section = styled.div<sectionProps>`
  background: ${({ background }) => (background ? background : "0")};
  border: ${({ border }) => (border ? "thin dashed blue" : 0)};
  border-radius: ${({ borderradius }) => (borderradius ? borderradius : 0)};
  display: ${({ display }) => (display ? display : "block")};
  gap: ${({ gap }) => (gap ? gap : 0)};
  height: ${({ height }) => (height ? height : "auto")};
  flex-direction: ${({ flexdirection }) =>
    flexdirection ? flexdirection : "row"};
  flex-wrap: ${({ flexwrap }) => (flexwrap ? flexwrap : "nowrap")};
  justify-content: ${({ justifycontent }) =>
    justifycontent ? justifycontent : "start"};
  margin: ${({ margin }) => (margin ? margin : "0")};
  padding: ${({ padding }) => (padding ? padding : "0")};
  width: ${({ width }) => (width ? width : "100vw")};
`;

interface Props {
  background?: string;
  border?: boolean;
  borderradius?: string;
  children: string | ReactNode | JSX.Element | JSX.Element[];
  display?: string;
  flexdirection?: string;
  flexwrap?: string;
  gap?: string;
  height?: string;
  justifycontent?: string;
  margin?: string;
  padding?: string;
  width?: string;
}

const Container = ({
  background,
  border,
  borderradius,
  children,
  display,
  flexdirection,
  flexwrap,
  gap,
  height,
  justifycontent,
  margin,
  padding,
  width,
}: Props) => {
  return (
    <Section
      background={background}
      border={border}
      borderradius={borderradius}
      display={display}
      gap={gap}
      height={height}
      justifycontent={justifycontent}
      margin={margin}
      flexdirection={flexdirection}
      flexwrap={flexwrap}
      padding={padding}
      width={width}
    >
      {children}
    </Section>
  );
};

export default Container;
