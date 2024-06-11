"use client";

import React from "react";
import styled from "styled-components";
import { CardIcon } from "./card-icon.component";
import { CardDetails } from "./card-details.component";
import Link from "next/link";

type containerProps = {
  stacked: string;
  alignitems?: string;
  $border?: string;
  $background?: string;
  boxshadow?: string;
  width?: string;
  sm_padding?: string;
  $md_padding?: string;
  padding?: string;
};

const Container = styled.div<containerProps>`
  align-items: ${({ alignitems }) => (alignitems ? alignitems : "center")};
  background: ${({ $background }) =>
    $background ? $background : "var(--off-black)"};
  box-shadow: ${({ boxshadow }) =>
    boxshadow ? boxshadow : "0 0 15px rgba(0, 0, 0, 0.5)"};
  border-radius: 20px;
  border: ${({ $border }) => $border};
  display: flex;
  flex-direction: ${({ stacked }) => (stacked === "true" ? "column" : "row")};
  padding: ${({ sm_padding }) => (sm_padding ? sm_padding : "25px 10px")};
  min-height: ${({ stacked }) => (stacked === "true" ? "300px" : "auto")};
  overflow: hidden;
  position: relative;
  gap: 15px;
  width: ${({ width }) => (width ? width : "100%")};

  @media (min-width: 768px) {
    flex-direction: ${({ stacked }) => (stacked === "true" ? "column" : "row")};
    padding: ${({ $md_padding }) => ($md_padding ? $md_padding : "25px 10px")};
  }

  @media (min-width: 1024px) {
    flex-direction: ${({ stacked }) => (stacked === "true" ? "column" : "row")};
    padding: ${({ padding }) => (padding ? padding : "15px 10px")};
    width: ${({ width }) => (width ? width : "33.33%")};
  }

  @media (min-width: 1400px) {
    flex-direction: row;
    padding: ${({ padding }) => (padding ? padding : "15px 15px")};
    width: ${({ width }) => (width ? width : "33.33%")};
  }
`;

const Text = styled.p`
  color: var(--white);
  font-size: 13px;
  line-height: 1.55;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const Anchor = styled(Link)`
  background: var(--black);
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  padding: 25px 25px;
  width: 100%;

  @media (min-width: 768px) {
    min-height: 350px;
  }

  @media (min-width: 1024px) {
    width: 49%;
  }

  @media (min-width: 1400px) {
    width: 24%;
  }
`;

type Props = {
  stacked: string;
  icon: string;
  heading: string;
  href?: string;
  alignitems?: string;
  background?: string;
  boxshadow?: string;
  border?: string;
  borderradius?: string;
  subHeading?: string;
  text?: string;
  width?: string;
  sm_padding?: string;
  md_padding?: string;
  padding?: string;
  icon_width?: string;
  icon_height?: string;
  show_icon?: boolean;
};
export const Card = ({
  href,
  alignitems,
  background,
  boxshadow,
  borderradius,
  border,
  stacked,
  icon,
  heading,
  subHeading,
  text,
  sm_padding,
  md_padding,
  padding,
  width,
  icon_width,
  icon_height,
  show_icon,
}: Props) => {
  return (
    <>
      {href ? (
        <Anchor href={href}>
          {icon && (
            <CardIcon
              image={icon}
              borderradius={borderradius}
              width={icon_width}
              height={icon_height}
            />
          )}
          {heading && <CardDetails heading={heading} subHeading={subHeading} />}
          {text && <Text>{text}</Text>}
        </Anchor>
      ) : (
        <Container
          alignitems={alignitems}
          $background={background}
          $border={border}
          boxshadow={boxshadow}
          stacked={stacked}
          width={width}
          padding={padding}
          sm_padding={sm_padding}
          $md_padding={md_padding}
        >
          {icon && (
            <CardIcon
              image={icon}
              borderradius={borderradius}
              width={icon_width}
              height={icon_height}
            />
          )}
          {heading && (
            <CardDetails
              heading={heading}
              subHeading={subHeading}
              show_icon={show_icon}
            />
          )}
          {text && <Text>{text}</Text>}
        </Container>
      )}
    </>
  );
};
