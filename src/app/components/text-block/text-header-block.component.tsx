"use client";

import { ReactNode } from "react";
import styled from "styled-components";

interface textProps {
  fontWeight?: string;
  color?: string;
  fontSize?: string;
  padding?: string;
  texttransform?: string;
  width?: string;
}

const Text = styled.div<textProps>`
  align-items: center;
  color: ${({ color }) => (color ? color : "var(--white)")};
  display: flex;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "18px")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "normal")};
  gap: 20px;
  line-height: 1.5;
  padding: ${({ padding }) => (padding ? padding : "25px 0")};
  text-transform: ${({ texttransform }) =>
    texttransform ? texttransform : "none"};
  width: ${({ width }) => (width ? width : "100%")};

  &::after {
    background: var(--medium-grey);
    display: flex;
    flex-grow: 1;
    content: "";
    height: 2px;
    width: 50%;
  }
`;

interface Props {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  padding?: string;
  texttransform?: string;
  width?: string;
  children: string | ReactNode | JSX.Element | JSX.Element[];
}

const TextHeaderBlock = ({
  children,
  color,
  fontSize,
  fontWeight,
  padding,
  texttransform,
  width,
}: Props) => {
  return (
    <Text
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      padding={padding}
      texttransform={texttransform}
      width={width}
    >
      {children}
    </Text>
  );
};

export default TextHeaderBlock;
