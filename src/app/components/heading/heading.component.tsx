"use client";

import styled from "styled-components";

const Content = styled.div`
  margin: 5px 0;
`;

const SuperHeader = styled.h1`
  color: var(--white);
  font-size: 28px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  text-transform: capitalize;
  width: 70%;

  @media (min-width: 800px) {
    font-size: 48px;
  }
`;

const Header = styled.p`
  color: var(--white);
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 10px 0;
  text-transform: capitalize;
  width: 100%;

  @media (min-width: 768px) {
    font-size: 48px;
  }

  @media (min-width: 800px) {
    font-size: 60px;
  }
`;

const SubHeader = styled.p`
  color: var(--white);
  font-size: 18px;

  @media (min-width: 768px) {
    font-size: 28px;
  }

  @media (min-width: 1440px) {
    font-size: 36px;
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
