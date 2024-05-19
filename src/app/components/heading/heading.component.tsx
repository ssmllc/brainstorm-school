"use client";

import styled from "styled-components";

const Content = styled.div`
  margin: 10px 0;
`;

const SuperHeader = styled.h1`
  color: var(--white);
  font-size: 28px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  text-transform: capitalize;

  @media (min-width: 800px) {
    font-size: 32px;
  }
`;

const Header = styled.p`
  color: var(--white);
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 20px 0;
  text-transform: capitalize;

  @media (min-width: 800px) {
    font-size: 32px;
  }
`;

const SubHeader = styled.p`
  color: var(--white);
  font-size: 16px;

  @media (min-width: 800px) {
    font-size: 18px;
  }
`;

interface HeadingProps {
  header: string;
  subHeader?: string;
  superHeader?: boolean;
}

const Heading = ({ header, subHeader, superHeader = false }: HeadingProps) => {
  return (
    <Content>
      {superHeader && <SuperHeader>{header}</SuperHeader>}
      {!superHeader && <Header>{header}</Header>}
      {SubHeader && <SubHeader>{subHeader}</SubHeader>}
    </Content>
  );
};

export default Heading;
