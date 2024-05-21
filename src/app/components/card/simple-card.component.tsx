import React from "react";
import styled from "styled-components";

const CardHeader = ({ text }: { text: string }) => <p>{text}</p>;

interface previewProps {
  image: string;
}
const Preview = styled("div")<previewProps>`
  background: ${({ image }) => `url(${image}) top center no-repeat`};
  background-size: cover;
`;

const CardImage = ({ preview }: { preview: string }) => (
  <Preview image={preview} />
);
