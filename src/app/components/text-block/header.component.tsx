"use client";

import Link from "next/link";
import styled from "styled-components";

interface textProps {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  margin?: string;
  textalign?: string;
  href?: string;
}

const Header1 = styled.h1<textProps>`
  color: var(--white);
  font-size: 36px;
  font-weight: bold;
  line-height: 1.25;
  margin: ${({ margin }) => margin};
  position: relative;
  text-align: ${({ textalign }) => textalign};
  text-transform: capitalize;

  @media (min-width: 800px) {
    font-size: 42px;
  }
`;

const Header2 = styled.h2<textProps>`
  color: var(--white);
  font-size: 32px;
  font-weight: bold;
  line-height: 1.25;
  margin: ${({ margin }) => margin};
  position: relative;
  text-align: ${({ textalign }) => textalign};
  text-transform: capitalize;

  @media (min-width: 800px) {
    font-size: 36px;
  }
`;

const Header3 = styled.h3<textProps>`
  color: var(--white);
  font-size: 28px;
  font-weight: bold;
  line-height: 1.25;
  margin: ${({ margin }) => margin};
  position: relative;
  text-align: ${({ textalign }) => textalign};
  text-transform: capitalize;
`;

const Header4 = styled.p<textProps>`
  color: var(--white);
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "24px")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "normal")};
  margin: ${({ margin }) => margin};
  position: relative;
  text-align: ${({ textalign }) => textalign};
  text-transform: capitalize;
  line-height: 1.5;
`;

const Header5 = styled(Link)<textProps>`
  color: ${({ color }) => (color ? color : "var(--white)")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "24px")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "normal")};
  display: inline;
  margin: ${({ margin }) => margin};
  position: relative;
  text-align: ${({ textalign }) => textalign};
  text-decoration: underline;
  line-height: 1.5;
`;

const Header6 = styled("span")<textProps>`
  color: var(--white);
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "24px")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "normal")};
  margin: ${({ margin }) => margin};
  position: relative;
  text-align: ${({ textalign }) => textalign};
  line-height: 1.5;
`;

interface Props {
  level: string;
  text: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  margin?: string;
  href?: string;
  textalign?: string;
}

const Header = ({
  level,
  text,
  color,
  fontSize,
  fontWeight,
  margin,
  href,
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
          fontSize={fontSize}
          fontWeight={fontWeight}
          margin={margin}
        >
          {text}
        </Header4>
      )}
      {level === "5" && (
        <Header5
          href={href}
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight}
          margin={margin}
        >
          {text}
        </Header5>
      )}
      {level === "6" && (
        <Header6
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight}
          margin={margin}
        >
          {text}
        </Header6>
      )}
    </>
  );
};

export default Header;
