"use client";

import styled from "styled-components";

interface PillContainerProps {
  background?: string;
  boxShadow?: string;
  padding?: string;
}

const PillContainer = styled.span<PillContainerProps>`
  background: ${({ background }) => (background ? background : "var(--black)")};
  border-radius: 25px;
  box-shadow: ${({ boxShadow }) => (boxShadow ? boxShadow : "0")};
  color: var(--white);
  display: inline-block;
  font-size: 12px;
  padding: ${({ padding }) => (padding ? padding : "10px 15px")};
`;

interface Props {
  label: string;
  background?: string;
  boxShadow?: string;
  padding?: string;
}

const Pill = ({ label, background, boxShadow, padding }: Props) => {
  return (
    <PillContainer
      background={background}
      boxShadow={boxShadow}
      padding={padding}
    >
      {label}
    </PillContainer>
  );
};

export default Pill;
