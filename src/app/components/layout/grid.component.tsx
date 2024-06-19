"use client";

import styled from "styled-components";
import { ReactNode } from "react";

interface containerProps {
  $sm_columns?: string;
  $md_columns?: string;
  $columns?: string;
  $xl_columns?: string;
  $sm_rows?: string;
  $md_rows?: string;
  $rows?: string;
  $xl_rows?: string;
}

const Container = styled.div<containerProps>`
  display: grid;
  grid-template-columns: ${({ $sm_columns }) => $sm_columns};
  gap: 20px 20px;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: ${({ $md_columns }) => $md_columns};
  }

  @media (min-width: 1024px) {
    grid-template-columns: ${({ $columns }) => $columns};
  }

  @media (min-width: 1900px) {
    grid-template-columns: ${({ $xl_columns }) => $xl_columns};
  }
`;

interface Props {
  sm_columns?: string;
  md_columns?: string;
  columns?: string;
  xl_columns?: string;
  sm_rows?: string;
  md_rows?: string;
  rows?: string;
  xl_rows?: string;
  children: string | ReactNode | JSX.Element | JSX.Element[];
}

const Grid = ({
  sm_columns,
  md_columns,
  columns,
  xl_columns,
  sm_rows,
  md_rows,
  rows,
  xl_rows,
  children,
}: Props) => {
  return (
    <Container
      $sm_columns={sm_columns}
      $md_columns={md_columns}
      $columns={columns}
      $xl_columns={xl_columns}
    >
      {children}
    </Container>
  );
};

export default Grid;
