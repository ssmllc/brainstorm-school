"use client";

import React from "react";
import styled from "styled-components";
import { CardIcon } from "./card-icon.component";
import { CardDetails } from "./card-details.component";
import Link from "next/link";

type containerProps = {
  stacked: string;
  alignitems?: string;
  background?: string;
  boxshadow?: string;
  width?: string;
  sm_padding?: string;
  padding?: string;
};

const Container = styled.div<containerProps>`
  align-items: ${({ alignitems }) => (alignitems ? alignitems : "center")};
  background: ${({ background }) =>
    background ? background : "var(--off-black)"};
  box-shadow: ${({ boxshadow }) =>
    boxshadow ? boxshadow : "0 0 15px rgba(0, 0, 0, 0.5)"};
  border-radius: 20px;
  display: flex;
  flex-direction: ${({ stacked }) => (stacked === "true" ? "column" : "row")};
  padding: ${({ sm_padding }) => (sm_padding ? sm_padding : "25px 10px")};
  min-height: ${({ stacked }) => (stacked === "true" ? "300px" : "auto")};
  position: relative;
  gap: 20px;
  width: ${({ width }) => (width ? width : "100%")};

  @media (min-width: 800px) {
    padding: ${({ padding }) => (padding ? padding : "25px 25px")};
    width: ${({ width }) => (width ? width : "33.33%")};
  }
`;

const Text = styled.p`
  color: var(--white);
  font-size: 12px;
  line-height: 1.5;
`;

type Props = {
  stacked: string;
  icon: string;
  heading: string;
  href?: string;
  alignitems?: string;
  background?: string;
  boxshadow?: string;
  borderradius?: string;
  subHeading?: string;
  text?: string;
  width?: string;
  sm_padding?: string;
  padding?: string;
  icon_width?: string;
  icon_height?: string;
};
export const Card = ({
  href,
  alignitems,
  background,
  boxshadow,
  borderradius,
  stacked,
  icon,
  heading,
  subHeading,
  text,
  sm_padding,
  padding,
  width,
  icon_width,
  icon_height,
}: Props) => {
  return (
    <>
      {href ? (
        <Link href={href}>
          <Container
            alignitems={alignitems}
            background={background}
            boxshadow={boxshadow}
            stacked={stacked}
            width={width}
            padding={padding}
            sm_padding={sm_padding}
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
              <CardDetails heading={heading} subHeading={subHeading} />
            )}
            {text && <Text>{text}</Text>}
          </Container>
        </Link>
      ) : (
        <Container
          alignitems={alignitems}
          background={background}
          boxshadow={boxshadow}
          stacked={stacked}
          width={width}
          padding={padding}
          sm_padding={sm_padding}
        >
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
        </Container>
      )}
    </>
  );
};
