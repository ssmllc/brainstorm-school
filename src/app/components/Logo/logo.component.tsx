"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";

interface logoProps {
  justify: string;
  padding?: boolean;
}

const Logo = styled.div<logoProps>`
  align-items: center;
  display: flex;
  justify-content: ${({ justify }) => justify};
  padding: ${({ padding }) => (padding ? "20px 20px" : "0 20px")};
`;

const Company = styled.span`
  color: var(--white);
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  margin: 0 10px;
  text-transform: uppercase;
`;

interface Props {
  justify: string;
  padding?: boolean;
}

const BrainstormLogo = ({ justify, padding }: Props) => {
  return (
    <Logo justify={justify} padding={padding}>
      <Image
        src="/logo/brainstorm-logo.png"
        width={42}
        height={42}
        alt="Brainstorm School Logo"
      />
      <Company>
        <p>Brainstorm</p>
        <p style={{ textAlign: "right" }}>Online</p>
      </Company>
    </Logo>
  );
};

export default BrainstormLogo;
