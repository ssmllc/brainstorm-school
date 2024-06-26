import React from "react";

interface Props {
  height: string;
  width: string;
}

const IconIG = ({ height, width }: Props) => {
  return (
    <svg
      id="Layer_4"
      data-name="Layer 4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 114 114"
      style={{ height: "24px", width: "24px", fill: "#fff" }}
    >
      <rect
        style={{ fill: "#000" }}
        x="35.01"
        y="36.43"
        width="45"
        height="42"
      />
      <path d="M110.47,43.04c0-12.96-10.51-23.47-23.47-23.47H27c-12.96,0-23.47,10.51-23.47,23.47v27.92c0,12.96,10.51,23.47,23.47,23.47h60c12.96,0,23.47-10.51,23.47-23.47v-27.92ZM75.18,59.09l-26.91,13.31c-1.05.57-4.64-.19-4.64-1.39v-27.32c0-1.22,3.61-1.98,4.67-1.38l25.76,14.01c1.08.62,2.21,2.18,1.12,2.77Z" />
    </svg>
  );
};

export default IconIG;
