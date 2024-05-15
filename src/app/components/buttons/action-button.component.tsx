"use client";

import React from "react";
import styled from "styled-components";

interface buttonProps {
  type?: string;
  offsetMargin?: string;
  offsetPadding?: string;
}

type Action = {
  type: string;
  label: string;
  offsetMargin?: string;
  offsetPadding?: string;
};

const CallToAction = styled.button<buttonProps>`
  background: ${(props) =>
    props.type === "primary"
      ? "#0091ff"
      : props.type === "tertiary"
      ? "transparent"
      : "#fff"};
  border-radius: 35px;
  border: ${(props) => (props.type === "tertiary" ? "3px solid #fff" : 0)};
  color: ${(props) =>
    props.type === "primary"
      ? "#fff"
      : props.type === "tertiary"
      ? "#fff"
      : "#000"};
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  margin: ${({ offsetMargin }) =>
    offsetMargin ? `${offsetMargin}` : "35px 0 0"};
  padding: ${({ offsetPadding }) =>
    offsetPadding ? `${offsetPadding}` : "15px 20px"};
  text-transform: uppercase;
`;

const ActionButton = ({ type, label, offsetMargin, offsetPadding }: Action) => {
  return (
    <CallToAction
      type={type}
      offsetMargin={offsetMargin}
      offsetPadding={offsetPadding}
    >
      {label}
    </CallToAction>
  );
};

export default ActionButton;
