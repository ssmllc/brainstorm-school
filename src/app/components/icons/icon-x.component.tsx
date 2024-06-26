import React from "react";

interface Props {
  height: string;
  width: string;
}

const IconX = ({ height, width }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M85.49,12.23h15.19l-33.19,37.93,39.04,51.61h-30.57l-23.94-31.3-27.4,31.3h-15.2l35.5-40.57L7.47,12.23h31.34l21.64,28.61,25.03-28.61ZM80.15,92.68h8.42L34.24,20.84h-9.03l54.95,71.84Z" />
    </svg>
  );
};

export default IconX;
