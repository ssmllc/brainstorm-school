"use client";

import styled from "styled-components";

interface PillContainerProps {
  background?: string;
  boxshadow?: string;
  padding?: string;
  $sm_padding?: string;
}

const PillContainer = styled.span<PillContainerProps>`
  background: ${({ background }) => (background ? background : "var(--black)")};
  border-radius: 25px;
  box-shadow: ${({ boxshadow }) => (boxshadow ? boxshadow : "0")};
  color: var(--white);
  display: inline-block;
  font-size: 12px;
  letter-spacing: 1px;
  padding: ${({ $sm_padding }) => ($sm_padding ? $sm_padding : "12px 15px")};
  text-transform: uppercase;
  width: max-content;

  @media (min-width: 768px) {
    padding: ${({ padding }) => (padding ? padding : "15px 15px")};
    font-size: 12px;
  }
`;

interface Props {
  label: string;
  background?: string;
  boxshadow?: string;
  padding?: string;
  sm_padding?: string;
}

const Pill = ({ label, background, boxshadow, padding, sm_padding }: Props) => {
  return (
    <PillContainer
      background={background}
      boxshadow={boxshadow}
      padding={padding}
      $sm_padding={sm_padding}
    >
      {label}
    </PillContainer>
  );
};

export default Pill;
