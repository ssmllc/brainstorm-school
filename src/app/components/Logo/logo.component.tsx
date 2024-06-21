"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

interface logoProps {
  $justify: string;
  padding?: string;
}

const Logo = styled(Link)<logoProps>`
  align-items: center;
  display: flex;
  justify-content: ${({ $justify }) => $justify};
  padding: ${({ padding }) => (padding ? padding : "0 20px")};
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
  padding?: string;
}

const BrainstormLogo = ({ justify, padding }: Props) => {
  return (
    <Logo href="/" $justify={justify} padding={padding}>
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
