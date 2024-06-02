"use client";

import Header from "@/app/components/text-block/header.component";
import Link from "next/link";
import styled from "styled-components";

interface Props {
  results: any;
}

const Anchor = styled(Link)`
  color: var(--white);
  font-size: 15px;
  text-decoration: underline;
`;

const DecipherText = ({ results }: Props) => {
  const { details } = results;

  return (
    <>
      {details?.map((block: any, index: number) => {
        console.log("block style", block.style);
        if (block.style === "h1") {
          return (
            <Header
              level="1"
              key={block._key}
              text={block.children[0].text}
              margin="20px 0"
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
            <div key={index}>
              {block.children.map((mark: any) => {
                if (block.markDefs.length > 0) {
                  if (mark.marks.length > 0) {
                    return block.markDefs.map((marker: any) => {
                      if (mark.marks[0] === marker._key) {
                        // console.log("marker match", marker._key);
                        // console.log("marker match", marker._type);
                        // console.log("marker match", marker.href);
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
            </div>
          );
        }
      })}
    </>
  );
};

export default DecipherText;
