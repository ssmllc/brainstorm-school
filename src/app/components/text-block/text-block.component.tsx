"use client";

import { ReactNode } from "react";
import styled from "styled-components";

interface textProps {
  color?: string;
  size?: string;
  padding?: string;
}

const Text = styled.div<textProps>`
  align-items: center;
  color: ${({ color }) => (color ? color : "var(--white)")};
  display: flex;
  font-size: ${({ size }) => (size ? size : "18px")};
  gap: 10px;
  line-height: 1.5;
  padding: ${({ padding }) => (padding ? padding : "25px 0")};
  width: 50%;
`;

interface Props {
  color?: string;
  size?: string;
  padding?: string;
  children: string | ReactNode | JSX.Element | JSX.Element[];
}

const TextBlock = ({ children, color, size, padding }: Props) => {
  return (
    <Text color={color} size={size} padding={padding}>
      {children}
    </Text>
  );
};

export default TextBlock;
