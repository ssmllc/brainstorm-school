"use client";

import styled from "styled-components";
import FlexBox from "../layout/flexbox.component";
import Header from "../text-block/header.component";
import Pill from "../pill/pill.component";

interface Props {
  setLevelOfExpertise: (l: string) => void;
  setDayOfTheWeek: (d: string) => void;
  setPrice: (p: string) => void;
}

const FilterSystem = styled.div`
  border: thin solid var(--medium-grey);
  border-radius: 20px;
  padding: 10px 20px;
  width: 100%;
`;

const SelectLevel = ({
  setLevelOfExpertise,
  setDayOfTheWeek,
  setPrice,
}: Props) => {
  return (
    <FlexBox
      flexdirection="column"
      width="70%"
      xl_width="80%"
      sm_width="70%"
      margin="50px auto 0"
      xl_margin="50px auto 0"
      alignitems="center"
      justifycontent="center"
    >
      {/* <Header level="3" text="Select your experience level?" />

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
        <option defaultChecked value="All">
          Select your level
        </option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select> */}

      <FilterSystem>
        <FlexBox width="100%" xl_width="100%" alignitems="center">
          <FlexBox width="10%" xl_width="10%">
            <Header
              level="6"
              text="Filter by:"
              color="var(--white)"
              fontSize="18px"
              fontWeight="bold"
              margin="0 10px 0 0"
            />
          </FlexBox>
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
              width: "30%",
              margin: "0",
              padding: "15px 15px",
            }}
            onChange={(evt) => setLevelOfExpertise(evt.target.value)}
          >
            <option defaultChecked value="All">
              Experience
            </option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>

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
              width: "30%",
              margin: "0",
              padding: "15px 15px",
            }}
            onChange={(evt) => setDayOfTheWeek(evt.target.value)}
          >
            <option defaultChecked value="All">
              Day of week
            </option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
            <option>Sunday</option>
          </select>

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
              width: "30%",
              margin: "0",
              padding: "15px 15px",
            }}
            onChange={(evt) => setPrice(evt.target.value)}
          >
            <option defaultChecked value="All">
              Price
            </option>
            <option value="asc">Lowest to Highest</option>
            <option value="desc">Highest to Lowest</option>
          </select>
        </FlexBox>
      </FilterSystem>
    </FlexBox>
  );
};

export default SelectLevel;
