import React from "react";

interface Props {
  height: string;
  width: string;
}

export const IconPrevious = ({ height, width }: Props) => {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="#bababa"
      width={width}
      height={height}
      className="icon-arrow"
    >
      <path d="M30.1123,42a.99756.99756,0,0,1-.63964-.23193L12.207,27.37988a4.39934,4.39934,0,0,1,.001-6.76025L29.47266,6.23193a1.00017,1.00017,0,1,1,1.28125,1.53614L13.48828,22.15625a2.39914,2.39914,0,0,0-.001,3.687L30.75391,40.23193A1,1,0,0,1,30.1123,42Z" />
    </svg>
  );
};

export const IconNext = ({ height, width }: Props) => {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="#bababa"
      width={width}
      height={height}
      className="icon-arrow"
    >
      <path d="M16.625,42a1,1,0,0,1-.6416-1.76807L33.249,25.84375a2.39879,2.39879,0,0,0,0-3.6875L15.9834,7.76807a1.00017,1.00017,0,1,1,1.28125-1.53614L34.53027,20.62012a4.39969,4.39969,0,0,1,0,6.75976L17.26465,41.76807A.99756.99756,0,0,1,16.625,42Z" />
    </svg>
  );
};
