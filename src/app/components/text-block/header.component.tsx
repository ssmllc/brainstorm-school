"use client";

import styled from "styled-components";

interface textProps {
  color?: string;
  fontsize?: string;
  fontweight?: string;
  margin?: string;
}

const Header1 = styled.h1<textProps>`
  color: var(--white);
  font-size: 36px;
  font-weight: bold;
  line-height: 1.25;
  margin: ${({ margin }) => margin};
`;

const Header2 = styled.h2<textProps>`
  color: var(--white);
  font-size: 32px;
  line-height: 1.25;
  margin: ${({ margin }) => margin};
`;

const Header3 = styled.h3<textProps>`
  color: var(--white);
  font-size: 28px;
  line-height: 1.25;
  margin: ${({ margin }) => margin};
`;

const Header4 = styled.p<textProps>`
  color: var(--white);
  font-size: ${({ fontsize }) => (fontsize ? fontsize : "24px")};
  font-size: ${({ fontweight }) => (fontweight ? fontweight : "normal")};
  margin: ${({ margin }) => margin};
  line-height: 1.25;
`;

interface Props {
  level: string;
  text: string;
  color?: string;
  fontsize?: string;
  fontweight?: string;
  margin?: string;
}

const Header = ({
  level,
  text,
  color,
  fontsize,
  fontweight,
  margin,
}: Props) => {
  return (
    <>
      {level === "1" && (
        <Header1 color={color} margin={margin}>
          {text}
        </Header1>
      )}
      {level === "2" && (
        <Header2 color={color} margin={margin}>
          {text}
        </Header2>
      )}
      {level === "3" && (
        <Header3 color={color} margin={margin}>
          {text}
        </Header3>
      )}
      {level === "4" && (
        <Header4
          color={color}
          fontsize={fontsize}
          fontweight={fontweight}
          margin={margin}
        >
          {text}
        </Header4>
      )}
    </>
  );
};

export default Header;
