"use client";

import { ReactNode } from "react";
import styled from "styled-components";

interface textProps {
  fontweight?: string;
  color?: string;
  fontsize?: string;
  padding?: string;
  texttransform?: string;
  width?: string;
}

const Text = styled.div<textProps>`
  align-items: center;
  color: ${({ color }) => (color ? color : "var(--white)")};
  display: flex;
  font-size: ${({ fontsize }) => (fontsize ? fontsize : "18px")};
  font-weight: ${({ fontweight }) => (fontweight ? fontweight : "normal")};
  gap: 10px;
  line-height: 1.5;
  padding: ${({ padding }) => (padding ? padding : "25px 0")};
  text-transform: ${({ texttransform }) =>
    texttransform ? texttransform : "none"};
  width: ${({ width }) => (width ? width : "100%")};
`;

interface Props {
  color?: string;
  fontsize?: string;
  fontweight?: string;
  padding?: string;
  texttransform?: string;
  width?: string;
  children: string | ReactNode | JSX.Element | JSX.Element[];
}

const TextBlock = ({
  children,
  color,
  fontsize,
  fontweight,
  padding,
  texttransform,
  width,
}: Props) => {
  return (
    <Text
      color={color}
      fontsize={fontsize}
      fontweight={fontweight}
      padding={padding}
      texttransform={texttransform}
      width={width}
    >
      {children}
    </Text>
  );
};

export default TextBlock;
