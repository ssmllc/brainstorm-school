"use client";

import Link from "next/link";
import styled from "styled-components";

interface textProps {
  color?: string;
  fontSize?: string;
  $sm_fontSize?: string;
  fontWeight?: string;
  $sm_margin?: string;
  $md_margin?: string;
  $margin?: string;
  $xl_margin?: string;
  $xxl_margin?: string;
  textalign?: string;
  $texttransform?: string;
  href?: string;
}

const Header1 = styled.h1<textProps>`
  color: var(--white);
  font-size: 36px;
  font-weight: bold;
  line-height: 1.25;
  margin: ${({ $margin }) => $margin};
  position: relative;
  text-align: ${({ textalign }) => textalign};
  text-transform: capitalize;

  @media (min-width: 1024px) {
    font-size: 42px;
  }
`;

const Header2 = styled.h2<textProps>`
  color: var(--white);
  font-size: 32px;
  font-weight: bold;
  line-height: 1.25;
  margin: ${({ $sm_margin }) => ($sm_margin ? $sm_margin : "50px 0")};
  position: relative;
  text-align: center;
  text-transform: capitalize;

  @media (min-width: 390px) {
    font-size: 32px;
  }

  @media (min-width: 768px) {
    font-size: 36px;
    margin: ${({ $md_margin }) => ($md_margin ? $md_margin : "50px 0")};
  }

  @media (min-width: 1024px) {
    text-align: ${({ textalign }) => (textalign ? textalign : "left")};
    margin: ${({ $margin }) => ($margin ? $margin : "50px 0")};
  }

  @media (min-width: 1360px) {
    text-align: ${({ textalign }) => (textalign ? textalign : "left")};
    margin: ${({ $xl_margin }) => ($xl_margin ? $xl_margin : "50px 0")};
  }

  @media (min-width: 1900px) {
    text-align: ${({ textalign }) => (textalign ? textalign : "left")};
    margin: ${({ $xxl_margin }) => ($xxl_margin ? $xxl_margin : "50px 0")};
  }
`;

const Header3 = styled.h3<textProps>`
  color: var(--white);
  font-size: 28px;
  font-weight: bold;
  line-height: 1.25;
  margin: ${({ $margin }) => $margin};
  position: relative;
  text-align: ${({ textalign }) => textalign};
  text-transform: capitalize;
`;

const Header4 = styled.p<textProps>`
  color: var(--white);
  font-size: ${({ $sm_fontSize }) => ($sm_fontSize ? $sm_fontSize : "18px")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "normal")};
  margin: 5px 0;
  position: relative;
  text-align: ${({ textalign }) => textalign};
  text-transform: ${({ $texttransform }) =>
    $texttransform ? $texttransform : "capitalize"};
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "24px")};
  }
`;

const Header5 = styled(Link)<textProps>`
  color: ${({ color }) => (color ? color : "var(--white)")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "24px")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "normal")};
  display: inline;
  margin: ${({ $margin }) => $margin};
  position: relative;
  text-align: ${({ textalign }) => textalign};
  text-decoration: underline;
  line-height: 1.5;
`;

const Header6 = styled("span")<textProps>`
  color: var(--white);
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "24px")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "normal")};
  margin: ${({ $margin }) => $margin};
  position: relative;
  text-align: ${({ textalign }) => textalign};
  line-height: 1.5;
`;

interface Props {
  level: string;
  text: string;
  color?: string;
  fontSize?: string;
  sm_fontSize?: string;
  fontWeight?: string;
  sm_margin?: string;
  md_margin?: string;
  margin?: string;
  xl_margin?: string;
  xxl_margin?: string;
  href?: string;
  textalign?: string;
  texttransform?: string;
}

const Header = ({
  level,
  text,
  color,
  fontSize,
  sm_fontSize,
  fontWeight,
  sm_margin,
  md_margin,
  margin,
  xl_margin,
  xxl_margin,
  href,
  textalign,
  texttransform,
}: Props) => {
  return (
    <>
      {level === "1" && (
        <Header1 color={color} $margin={margin} textalign={textalign}>
          {text}
        </Header1>
      )}
      {level === "2" && (
        <Header2
          color={color}
          $sm_margin={sm_margin}
          $md_margin={md_margin}
          $margin={margin}
          $xl_margin={xl_margin}
          $xxl_margin={xxl_margin}
          textalign={textalign}
        >
          {text}
        </Header2>
      )}
      {level === "3" && (
        <Header3 color={color} $margin={margin} textalign={textalign}>
          {text}
        </Header3>
      )}
      {level === "4" && (
        <Header4
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight}
          $sm_fontSize={sm_fontSize}
          $margin={margin}
          textalign={textalign}
          $texttransform={texttransform}
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
          $margin={margin}
        >
          {text}
        </Header5>
      )}
      {level === "6" && (
        <Header6
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight}
          $margin={margin}
        >
          {text}
        </Header6>
      )}
    </>
  );
};

export default Header;
