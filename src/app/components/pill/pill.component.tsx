"use client";

import styled from "styled-components";

const PillContainer = styled.span`
  background: var(--black);
  border-radius: 25px;
  color: var(--white);
  font-size: 12px;
  display: inline-block;
  padding: 10px 15px;
`;

interface PillProps {
  label: string;
}

const Pill = ({ label }: PillProps) => {
  return <PillContainer>{label}</PillContainer>;
};

export default Pill;
