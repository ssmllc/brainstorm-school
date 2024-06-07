"use client";

import React from "react";
import styled from "styled-components";

interface posterProps {
  $imageUrl: string;
}

const Preview = styled.div<posterProps>`
  background: ${({ $imageUrl }) => `url(${$imageUrl}) top left no-repeat`};
  background-size: cover;
  border-radius: 20px;
  height: 400px;
  overflow: hidden;
  margin: 50px 0;
  width: 100%;
`;

interface Props {
  imageUrl: string;
}

const Poster = ({ imageUrl }: Props) => {
  return <Preview $imageUrl={imageUrl} />;
};

export default Poster;
