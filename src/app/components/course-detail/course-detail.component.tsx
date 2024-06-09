"use client";

import { ReactNode } from "react";
import styled from "styled-components";

interface listItemProps {
  color?: string;
}

const ListItem = styled.div<listItemProps>`
  align-items: center;
  display: flex;
  font-size: 14px;
  gap: 10px;
  color: ${({ color }) => (color ? `${color}` : "var(--white-50)")};
  padding: 10px 0;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

interface Props {
  color?: string;
  children: string | ReactNode | JSX.Element | JSX.Element[];
}

const CourseDetail = ({ children, color }: Props) => {
  return <ListItem color={color}>{children}</ListItem>;
};

export default CourseDetail;
