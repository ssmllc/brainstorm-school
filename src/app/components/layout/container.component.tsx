"use client";

import React, { ReactNode } from "react";
import styled from "styled-components";

interface sectionProps {
  alignitems?: string;
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
  overflow?: string;
  position?: string;
  width?: string;
}

const FlexSection = styled.div<sectionProps>`
  align-items: ${({ alignitems }) => alignitems};
  background: ${({ background }) => (background ? background : "0")};
  border: ${({ border }) => (border ? "thin dashed blue" : 0)};
  border-radius: ${({ borderradius }) => (borderradius ? borderradius : 0)};
  display: ${({ display }) => (display ? display : "block")};
  gap: ${({ gap }) => (gap ? gap : 0)};
  height: ${({ height }) => (height ? height : "auto")};
  flex-direction: column;
  flex-wrap: ${({ flexwrap }) => (flexwrap ? flexwrap : "nowrap")};
  justify-content: ${({ justifycontent }) =>
    justifycontent ? justifycontent : "start"};
  margin: ${({ margin }) => (margin ? margin : "0")};
  overflow: ${({ overflow }) => overflow};
  padding: ${({ padding }) => (padding ? padding : "0")};
  position: ${({ position }) => (position ? position : "relative")};
  width: ${({ width }) => (width ? width : "100vw")};

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

const Section = styled.div<sectionProps>`
  align-items: ${({ alignitems }) => alignitems};
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
  overflow: ${({ overflow }) => overflow};
  padding: ${({ padding }) => (padding ? padding : "0")};
  position: ${({ position }) => (position ? position : "relative")};
  width: ${({ width }) => (width ? width : "100vw")};
`;

interface Props {
  alignitems?: string;
  background?: string;
  border?: boolean;
  borderradius?: string;
  children: string | ReactNode | JSX.Element | JSX.Element[];
  className?: string;
  display?: string;
  flexdirection?: string;
  flexwrap?: string;
  gap?: string;
  height?: string;
  justifycontent?: string;
  margin?: string;
  overflow?: string;
  padding?: string;
  position?: string;
  width?: string;
}

export const FlexContainer = ({
  alignitems,
  background,
  border,
  borderradius,
  children,
  className,
  display,
  flexdirection,
  flexwrap,
  gap,
  height,
  justifycontent,
  margin,
  overflow,
  padding,
  position,
  width,
}: Props) => {
  return (
    <FlexSection
      alignitems={alignitems}
      background={background}
      border={border}
      borderradius={borderradius}
      className={className}
      display={display}
      justifycontent={justifycontent}
      flexdirection={flexdirection}
      flexwrap={flexwrap}
      gap={gap}
      height={height}
      margin={margin}
      overflow={overflow}
      padding={padding}
      position={position}
      width={width}
    >
      {children}
    </FlexSection>
  );
};

const Container = ({
  alignitems,
  background,
  border,
  borderradius,
  children,
  className,
  display,
  flexdirection,
  flexwrap,
  gap,
  height,
  justifycontent,
  margin,
  overflow,
  padding,
  position,
  width,
}: Props) => {
  return (
    <Section
      alignitems={alignitems}
      background={background}
      border={border}
      borderradius={borderradius}
      className={className}
      display={display}
      justifycontent={justifycontent}
      flexdirection={flexdirection}
      flexwrap={flexwrap}
      gap={gap}
      height={height}
      margin={margin}
      overflow={overflow}
      padding={padding}
      position={position}
      width={width}
    >
      {children}
    </Section>
  );
};

export default Container;
