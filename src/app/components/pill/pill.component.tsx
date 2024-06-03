"use client";

import styled from "styled-components";

interface PillContainerProps {
  background?: string;
  boxshadow?: string;
  padding?: string;
}

const PillContainer = styled.span<PillContainerProps>`
  background: ${({ background }) => (background ? background : "var(--black)")};
  border-radius: 25px;
  box-shadow: ${({ boxshadow }) => (boxshadow ? boxshadow : "0")};
  color: var(--white);
  display: inline-block;
  font-size: 12px;
  letter-spacing: 1px;
  padding: ${({ padding }) => (padding ? padding : "15px 15px")};
  text-transform: uppercase;
`;

interface Props {
  label: string;
  background?: string;
  boxshadow?: string;
  padding?: string;
}

const Pill = ({ label, background, boxshadow, padding }: Props) => {
  return (
    <PillContainer
      background={background}
      boxshadow={boxshadow}
      padding={padding}
    >
      {label}
    </PillContainer>
  );
};

export default Pill;
