import React from "react";

interface Props {
  height: string;
  width: string;
}

export const IconCalendar = ({ height, width }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="#bababa"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20 4.026H22V7H2V4.026H4V3.026H1V21H23V3.026H20V4.026ZM22 20H2V8.026H22V20ZM7 4.026V3.026H17V4.026H7ZM5 2H6V5H5V2ZM18 2H19V5H18V2Z"
        fill-opacity="0.5"
      />
    </svg>
  );
};
