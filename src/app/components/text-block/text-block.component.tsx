"use client";

import { ReactNode } from "react";
import styled from "styled-components";

interface textProps {
  fontWeight?: string;
  color?: string;
  fontSize?: string;
  padding?: string;
  justifycontent?: string;
  texttransform?: string;
  width?: string;
}

const Text = styled.div<textProps>`
  align-items: center;
  color: ${({ color }) => (color ? color : "var(--white)")};
  display: flex;
  font-size: 18px;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "normal")};
  gap: 10px;
  line-height: 1.5;
  padding: 25px 0;
  justify-content: ${({ justifycontent }) => justifycontent};
  text-transform: ${({ texttransform }) =>
    texttransform ? texttransform : "capitalize"};
  width: ${({ width }) => (width ? width : "100%")};

  @media (min-width: 768px) {
    font-size: 24px;
  }

  @media (min-width: 800px) {
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "18px")};
    padding: ${({ padding }) => (padding ? padding : "25px 0")};
  }
`;

interface Props {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  padding?: string;
  justifycontent?: string;
  texttransform?: string;
  width?: string;
  children: string | ReactNode | JSX.Element | JSX.Element[];
}

const TextBlock = ({
  children,
  color,
  fontSize,
  fontWeight,
  padding,
  justifycontent,
  texttransform,
  width,
}: Props) => {
  return (
    <Text
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      padding={padding}
      justifycontent={justifycontent}
      texttransform={texttransform}
      width={width}
    >
      {children}
    </Text>
  );
};

export default TextBlock;
