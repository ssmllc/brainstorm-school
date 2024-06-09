"use client";

import styled from "styled-components";
import { ReactNode } from "react";

interface containerProps {
  $alignitems?: string;
  $flexdirection?: string;
  flexwrap?: string;
  justifycontent?: string;
  $margin?: string;
  $gap?: string;
  textalign?: string;
  sm_textalign?: string;
  sm_margin?: string;
  $width?: string;
  $sm_width?: string;
  $md_width?: string;
}
const Container = styled.div<containerProps>`
  align-items: ${({ $alignitems }) => $alignitems};
  /* border: thin dashed cyan; */
  display: flex;
  flex-wrap: ${({ flexwrap }) => flexwrap};
  gap: ${({ $gap }) => ($gap ? $gap : "10px")};
  flex-direction: ${({ $flexdirection }) =>
    $flexdirection ? $flexdirection : "column"};
  justify-content: ${({ justifycontent }) => justifycontent};
  margin: ${({ sm_margin }) => (sm_margin ? sm_margin : "0 auto")};
  text-align: ${({ sm_textalign }) => (sm_textalign ? sm_textalign : "left")};
  max-width: 1400px;
  width: ${({ $sm_width }) => ($sm_width ? $sm_width : "100vw")};

  //medium
  @media (min-width: 768px) {
    align-items: ${({ $alignitems }) => $alignitems};
    flex-direction: ${({ $flexdirection }) =>
      $flexdirection ? $flexdirection : "row"};
    margin: ${({ $margin }) => ($margin ? $margin : "0 auto")};
    text-align: ${({ sm_textalign }) => (sm_textalign ? sm_textalign : "left")};
    width: ${({ $md_width }) => ($md_width ? $md_width : "100vw")};
  }

  //large
  @media (min-width: 1024px) {
    width: ${({ $width }) => ($width ? $width : "100vw")};
  }

  //x-large
  @media (min-width: 1400px) {
  }

  //xx-large
  @media (min-width: 1900px) {
  }
`;

interface Props {
  alignitems?: string;
  children: string | ReactNode | JSX.Element | JSX.Element[];
  flexdirection?: string;
  flexwrap?: string;
  gap?: string;
  justifycontent?: string;
  sm_margin?: string;
  margin?: string;
  textalign?: string;
  sm_textalign?: string;
  sm_width?: string;
  md_width?: string;
  width?: string;
}
const FlexBox = ({
  alignitems,
  children,
  flexdirection,
  flexwrap,
  gap,
  justifycontent,
  margin,
  textalign,
  sm_textalign,
  sm_margin,
  width,
  sm_width,
  md_width,
}: Props) => {
  return (
    <Container
      $alignitems={alignitems}
      $flexdirection={flexdirection}
      $gap={gap}
      flexwrap={flexwrap}
      justifycontent={justifycontent}
      $margin={margin}
      textalign={textalign}
      sm_textalign={sm_textalign}
      sm_margin={sm_margin}
      $width={width}
      $sm_width={sm_width}
      $md_width={md_width}
    >
      {children}
    </Container>
  );
};

export default FlexBox;
