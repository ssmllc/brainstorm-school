"use client";

import Header from "@/app/components/text-block/header.component";
import Link from "next/link";
import styled from "styled-components";

interface Props {
  results?: any;
  description?: any;
  fontSize?: string;
  sm_width?: string;
  width?: string;
  sm_margin?: string;
  margin?: string;
}

const Anchor = styled(Link)`
  color: var(--white);
  font-size: 15px;
  text-decoration: underline;
`;

interface textGroupProps {
  fontSize?: string;
  sm_width?: string;
  width?: string;
  sm_margin?: string;
  margin?: string;
}
const TextGroup = styled.div<textGroupProps>`
  color: var(--white);
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "15px")};
  line-height: 1.5;
  margin: ${({ sm_margin }) => (sm_margin ? sm_margin : "10px 0")};

  @media (min-width: 800px) {
    margin: ${({ margin }) => (margin ? margin : "10px 0")};
  }
`;

const DecipherText = ({
  fontSize,
  results,
  description,
  sm_margin,
  margin,
  width,
  sm_width,
}: Props) => {
  const { details } = results || [];

  const textToDecifer = details?.length > 0 ? details : description;
  return (
    <>
      {textToDecifer?.map((block: any, index: number) => {
        if (block.style === "h1") {
          return (
            <Header
              level="1"
              key={block._key}
              text={block.children[0].text}
              margin="0 0 20px 0"
            />
          );
        }

        if (block.style === "h2") {
          return (
            <Header
              level="2"
              key={block._key}
              text={block.children[0].text}
              margin="20px 0"
            />
          );
        }

        if (block.style === "h3") {
          return (
            <Header
              level="3"
              key={block._key}
              text={block.children[0].text}
              margin="20px 0"
            />
          );
        }

        if (block.style === "normal") {
          return (
            <TextGroup
              key={index}
              sm_margin={sm_margin}
              margin={margin}
              sm_width={sm_width}
              width={width}
              fontSize={fontSize}
            >
              {block.children.map((mark: any) => {
                console.log("mark", mark);
                if (block.markDefs.length > 0) {
                  if (mark.marks.length > 0) {
                    console.log("markDefs", block.markDefs);
                    return block.markDefs.map((marker: any) => {
                      if (mark.marks[0] === marker._key && marker.href) {
                        return (
                          <Anchor key={marker._key} href={marker.href}>
                            {mark.text}
                          </Anchor>
                        );
                      }
                    });
                  }
                }
                return (
                  <Header
                    key={mark._key}
                    level="6"
                    fontSize="15px"
                    margin="20px 0"
                    text={mark.text}
                  />
                );
              })}
            </TextGroup>
          );
        }
      })}
    </>
  );
};

export default DecipherText;
