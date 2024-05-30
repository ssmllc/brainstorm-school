"use client";

import styled from "styled-components";
import { ReactNode } from "react";

interface containerProps {
  alignitems?: string;
  flexdirection?: string;
  flexwrap?: string;
  margin?: string;
  textalign?: string;
  sm_textalign?: string;
  sm_margin?: string;
  width?: string;
  sm_width?: string;
}
const Container = styled.div<containerProps>`
  align-items: ${({ alignitems }) => alignitems};
  /* border: thin dashed cyan; */
  display: flex;
  flex-wrap: ${({ flexwrap }) => flexwrap};
  gap: 10px;
  flex-direction: ${({ flexdirection }) =>
    flexdirection ? flexdirection : "column"};
  margin: ${({ sm_margin }) => (sm_margin ? sm_margin : "0 auto")};
  text-align: ${({ sm_textalign }) => (sm_textalign ? sm_textalign : "left")};
  max-width: 1400px;
  width: ${({ sm_width }) => (sm_width ? sm_width : "100vw")};

  //medium
  @media (min-width: 768px) {
    flex-direction: ${({ flexdirection }) =>
      flexdirection ? flexdirection : "row"};
    margin: ${({ margin }) => (margin ? margin : "0 auto")};
    text-align: ${({ sm_textalign }) => (sm_textalign ? sm_textalign : "left")};
    width: ${({ width }) => (width ? width : "100vw")};
  }

  //large
  @media (min-width: 1024px) {
  }

  //x-large
  @media (min-width: 1400px) {
  }

  //xx-large
  @media (min-width: 1900px) {
  }
`;

interface Props {
  children: string | ReactNode | JSX.Element | JSX.Element[];
  alignitems?: string;
  flexdirection?: string;
  flexwrap?: string;
  sm_margin?: string;
  margin?: string;
  textalign?: string;
  sm_textalign?: string;
  sm_width?: string;
  width?: string;
}
const FlexBox = ({
  children,
  alignitems,
  flexdirection,
  flexwrap,
  margin,
  textalign,
  sm_textalign,
  sm_margin,
  width,
  sm_width,
}: Props) => {
  return (
    <Container
      alignitems={alignitems}
      flexdirection={flexdirection}
      flexwrap={flexwrap}
      margin={margin}
      textalign={textalign}
      sm_textalign={sm_textalign}
      sm_margin={sm_margin}
      width={width}
      sm_width={sm_width}
    >
      {children}
    </Container>
  );
};

export default FlexBox;
