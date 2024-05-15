"use client";

import styled from "styled-components";

const Content = styled.div`
  margin: 10px 0;
`;

const Header = styled.p`
  color: var(--white);
  font-size: 32px;
  font-weight: bold;
  padding: 15px 0;
`;

const SubHeader = styled.p`
  color: var(--white);
  font-size: 18px;
`;

interface HeadingProps {
  header: string;
  subHeader: string;
}

const Heading = ({ header, subHeader }: HeadingProps) => {
  return (
    <Content>
      <Header>{header}</Header>
      <SubHeader>{subHeader}</SubHeader>
    </Content>
  );
};

export default Heading;
