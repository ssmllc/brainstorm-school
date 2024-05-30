"use client";

import styled from "styled-components";

interface textProps {
  color?: string;
  fontsize?: string;
  fontweight?: string;
  margin?: string;
  textalign?: string;
}

const Header1 = styled.h1<textProps>`
  color: var(--white);
  font-size: 36px;
  font-weight: bold;
  line-height: 1.25;
  margin: ${({ margin }) => margin};
  text-align: ${({ textalign }) => textalign};
`;

const Header2 = styled.h2<textProps>`
  color: var(--white);
  font-size: 32px;
  font-weight: bold;
  line-height: 1.25;
  margin: ${({ margin }) => margin};
  text-align: ${({ textalign }) => textalign};
`;

const Header3 = styled.h3<textProps>`
  color: var(--white);
  font-size: 28px;
  font-weight: bold;
  line-height: 1.25;
  margin: ${({ margin }) => margin};
  text-align: ${({ textalign }) => textalign};
`;

const Header4 = styled.p<textProps>`
  color: var(--white);
  font-size: ${({ fontsize }) => (fontsize ? fontsize : "24px")};
  font-weight: ${({ fontweight }) => (fontweight ? fontweight : "normal")};
  margin: ${({ margin }) => margin};
  text-align: ${({ textalign }) => textalign};
  line-height: 1.5;
`;

interface Props {
  level: string;
  text: string;
  color?: string;
  fontsize?: string;
  fontweight?: string;
  margin?: string;
  textalign?: string;
}

const Header = ({
  level,
  text,
  color,
  fontsize,
  fontweight,
  margin,
  textalign,
}: Props) => {
  return (
    <>
      {level === "1" && (
        <Header1 color={color} margin={margin} textalign={textalign}>
          {text}
        </Header1>
      )}
      {level === "2" && (
        <Header2 color={color} margin={margin} textalign={textalign}>
          {text}
        </Header2>
      )}
      {level === "3" && (
        <Header3 color={color} margin={margin} textalign={textalign}>
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
