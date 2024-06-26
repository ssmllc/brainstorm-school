import React from "react";

interface Props {
  height: string;
  width: string;
}

const IconFB = ({ height, width }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 114 114"
      style={{ height: "24px", width: "24px" }}
    >
      <circle style={{ fill: "#fff" }} cx="57" cy="57" r="57" />
      <path d="M77.84,62.6l2.49-16.21h-15.55v-10.52c0-4.43,2.17-8.75,9.14-8.75h7.07v-13.8s-6.42-1.09-12.55-1.09c-12.81,0-21.17,7.76-21.17,21.81v12.35h-14.23v16.21h14.23v39.17h17.52v-39.17h13.06Z" />
    </svg>
  );
};

export default IconFB;
