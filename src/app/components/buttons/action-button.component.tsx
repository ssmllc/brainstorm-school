"use client";

import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface buttonProps {
  type: string;
  margin?: string;
  offsetPadding?: string;
}

type Props = {
  type: string;
  label: string;
  href?: string;
  margin?: string;
  offsetPadding?: string;
};

const CallToAction = styled.button<buttonProps>`
  background: ${(props) =>
    props.type === "primary"
      ? "var(--primary)"
      : props.type === "tertiary"
      ? "transparent"
      : "var(--primary)"};
  border-radius: 35px;
  border: ${(props) =>
    props.type === "tertiary" ? "3px solid var(--primary)" : 0};
  color: ${(props) =>
    props.type === "primary"
      ? "var(--black)"
      : props.type === "tertiary"
      ? "var(--primary)"
      : "#000"};
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  margin: ${({ margin }) => (margin ? `${margin}` : "35px 0 0")};
  padding: ${({ offsetPadding }) =>
    offsetPadding ? `${offsetPadding}` : "15px 30px"};
  text-transform: uppercase;
`;

interface linkProps {
  type: string;
}
const Anchor = styled(Link)<linkProps>`
  color: ${(props) =>
    props.type === "primary"
      ? "var(--black)"
      : props.type === "tertiary"
      ? "var(--primary)"
      : "#000"};
`;

const ActionButton = ({ href, type, label, margin, offsetPadding }: Props) => {
  return (
    <CallToAction type={type} margin={margin} offsetPadding={offsetPadding}>
      {href ? (
        <Anchor type={type} href={href}>
          {label}
        </Anchor>
      ) : (
        label
      )}
    </CallToAction>
  );
};

export default ActionButton;
