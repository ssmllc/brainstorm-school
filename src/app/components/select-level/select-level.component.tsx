"use client";

import FlexBox from "../layout/flexbox.component";
import Header from "../text-block/header.component";

interface Props {
  setLevelOfExpertise: (l: string) => void;
}
const SelectLevel = ({ setLevelOfExpertise }: Props) => {
  return (
    <FlexBox
      flexdirection="column"
      width="70%"
      xl_width="70%"
      sm_width="70%"
      margin="50px auto 0"
      xl_margin="50px auto 0"
      alignitems="center"
      justifycontent="center"
    >
      <Header level="3" text="Select your experience level?" />

      <select
        style={{
          appearance: "none",
          background: "var(--dark-grey)",
          backgroundImage: `url("data:image/svg+xml;charset=utf-8,<svg width='10' height='6' fill='none' xmlns='http:%2F%2Fwww.w3.org/2000/svg'><path d='M1 1l4 4 4-4' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "97% 50%",
          borderRadius: "10px",
          color: "var(--white)",
          fontWeight: "bold",
          fontSize: "16px",
          width: "50%",
          minWidth: "300px",
          margin: "20px 0 0",
          padding: "15px 15px",
        }}
        onChange={(evt) => setLevelOfExpertise(evt.target.value)}
      >
        <option defaultChecked>Select your level</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
    </FlexBox>
  );
};

export default SelectLevel;
