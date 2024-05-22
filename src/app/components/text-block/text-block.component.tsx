"use client";

import { ReactNode } from "react";
import styled from "styled-components";

interface textProps {
  color?: string;
  fontsize?: string;
  padding?: string;
  width?: string;
}

const Text = styled.div<textProps>`
  align-items: center;
  color: ${({ color }) => (color ? color : "var(--white)")};
  display: flex;
  font-size: ${({ fontsize }) => (fontsize ? fontsize : "18px")};
  gap: 10px;
  line-height: 1.5;
  padding: ${({ padding }) => (padding ? padding : "25px 0")};
  width: ${({ width }) => (width ? width : "60%")};
`;

interface Props {
  color?: string;
  fontsize?: string;
  padding?: string;
  width?: string;
  children: string | ReactNode | JSX.Element | JSX.Element[];
}

const TextBlock = ({ children, color, fontsize, padding, width }: Props) => {
  return (
    <Text color={color} fontsize={fontsize} padding={padding} width={width}>
      {children}
    </Text>
  );
};

export default TextBlock;
