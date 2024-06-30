"use client";

import styled from "styled-components";
import { ReactNode } from "react";

interface containerProps {
  $alignitems?: string;
  $background?: string;
  $border?: string;
  $borderTop?: string;
  $borderRight?: string;
  $borderBottom?: string;
  $borderLeft?: string;
  $flexdirection?: string;
  flexwrap?: string;
  justifycontent?: string;
  $margin?: string;
  $gap?: string;
  textalign?: string;
  sm_textalign?: string;
  $sm_margin?: string;
  $md_margin?: string;
  $xl_margin?: string;
  $xxl_margin?: string;
  $width?: string;
  $sm_width?: string;
  $md_width?: string;
  $xl_width?: string;
  $xxl_width?: string;
}
const Container = styled.div<containerProps>`
  align-items: ${({ $alignitems }) => $alignitems};
  background: ${({ $background }) => `url(${$background}) 100% 0 no-repeat`};
  background-size: contain;
  border: ${({ $border }) => $border};
  border-top: ${({ $borderTop }) => $borderTop};
  border-right: ${({ $borderRight }) => $borderRight};
  border-bottom: ${({ $borderBottom }) => $borderBottom};
  border-left: ${({ $borderLeft }) => $borderLeft};
  display: flex;
  flex-wrap: ${({ flexwrap }) => flexwrap};
  gap: ${({ $gap }) => ($gap ? $gap : "10px")};
  flex-direction: ${({ $flexdirection }) =>
    $flexdirection ? $flexdirection : "column"};
  justify-content: ${({ justifycontent }) => justifycontent};
  margin: ${({ $sm_margin }) => ($sm_margin ? $sm_margin : "0 auto")};
  text-align: ${({ sm_textalign }) => (sm_textalign ? sm_textalign : "left")};
  max-width: 1400px;
  width: ${({ $sm_width }) => ($sm_width ? $sm_width : "100vw")};

  //medium
  @media (min-width: 768px) {
    align-items: ${({ $alignitems }) => $alignitems};
    flex-direction: ${({ $flexdirection }) =>
      $flexdirection ? $flexdirection : "row"};
    margin: ${({ $md_margin }) => ($md_margin ? $md_margin : "0 auto")};
    text-align: ${({ sm_textalign }) => (sm_textalign ? sm_textalign : "left")};
    width: ${({ $md_width }) => ($md_width ? $md_width : "100vw")};
  }

  //large
  @media (min-width: 1024px) {
    margin: ${({ $margin }) => ($margin ? $margin : "0 auto")};
    width: ${({ $width }) => ($width ? $width : "100vw")};
  }

  //x-large
  @media (min-width: 1360px) {
    margin: ${({ $xl_margin }) => ($xl_margin ? $xl_margin : "0 auto")};
    width: ${({ $xl_width }) => ($xl_width ? $xl_width : "100vw")};
  }

  //xx-large
  @media (min-width: 1900px) {
    margin: ${({ $xxl_margin }) => ($xxl_margin ? $xxl_margin : "0 auto")};
    width: ${({ $xxl_width }) => ($xxl_width ? $xxl_width : "100vw")};
  }
`;

interface Props {
  alignitems?: string;
  background?: string;
  border?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;
  children: string | ReactNode | JSX.Element | JSX.Element[];
  flexdirection?: string;
  flexwrap?: string;
  gap?: string;
  justifycontent?: string;
  sm_margin?: string;
  md_margin?: string;
  xl_margin?: string;
  xxl_margin?: string;
  margin?: string;
  textalign?: string;
  sm_textalign?: string;
  sm_width?: string;
  md_width?: string;
  width?: string;
  xl_width?: string;
  xxl_width?: string;
}
const FlexBox = ({
  alignitems,
  background,
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  children,
  flexdirection,
  flexwrap,
  gap,
  justifycontent,
  margin,
  textalign,
  sm_textalign,
  sm_margin,
  md_margin,
  xl_margin,
  xxl_margin,
  width,
  sm_width,
  md_width,
  xl_width,
  xxl_width,
}: Props) => {
  return (
    <Container
      $alignitems={alignitems}
      $background={background}
      $border={border}
      $borderTop={borderTop}
      $borderRight={borderRight}
      $borderBottom={borderBottom}
      $borderLeft={borderLeft}
      $flexdirection={flexdirection}
      $gap={gap}
      flexwrap={flexwrap}
      justifycontent={justifycontent}
      $margin={margin}
      textalign={textalign}
      sm_textalign={sm_textalign}
      $sm_margin={sm_margin}
      $md_margin={md_margin}
      $xl_margin={xl_margin}
      $xxl_margin={xxl_margin}
      $width={width}
      $sm_width={sm_width}
      $md_width={md_width}
      $xl_width={xl_width}
      $xxl_width={xxl_width}
    >
      {children}
    </Container>
  );
};

export default FlexBox;
