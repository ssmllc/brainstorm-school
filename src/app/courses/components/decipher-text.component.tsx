"use client";

import Header from "@/app/components/text-block/header.component";

interface Props {
  results: any;
}

const DecipherText = ({ results }: Props) => {
  const { details } = results;

  return (
    <>
      {details.map((block: any) => {
        console.log("block style", block.style);
        if (block.style === "h1") {
          return (
            <Header level="1" key={block._key} text={block.children[0].text} />
          );
        }

        if (block.style === "h2") {
          return (
            <Header level="2" key={block._key} text={block.children[0].text} />
          );
        }

        if (block.style === "h3") {
          return (
            <Header level="3" key={block._key} text={block.children[0].text} />
          );
        }

        if (block.style === "normal") {
          return (
            <Header
              level="4"
              fontSize="15px"
              key={block._key}
              text={block.children[0].text}
            />
          );
        }
      })}
    </>
  );
};

export default DecipherText;
