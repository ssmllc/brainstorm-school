"use client";

import styled from "styled-components";
import FlexBox from "../layout/flexbox.component";
import Header from "../text-block/header.component";

interface Props {
  setLevelOfExpertise: (l: string) => void;
  setDayOfTheWeek: (d: string) => void;
  setPrice: (p: string) => void;
}

const FilterSystem = styled.div`
  border-radius: 20px;
  padding: 25px 0;
  width: 100%;

  @media (min-width: 1024px) {
    padding: 10px 20px 40px;
  }
`;

const DropdownSelect = styled.select`
  appearance: none;
  background: var(--dark-grey);
  background-image: url("data:image/svg+xml;charset=utf-8,<svg width='10' height='6' fill='none' xmlns='http:%2F%2Fwww.w3.org/2000/svg'><path d='M1 1l4 4 4-4' stroke='white' stroke-width='2' stroke-linecap='round' strokeLinejoin='round'/></svg>");
  background-repeat: no-repeat;
  background-position: 97% 50%;
  border-radius: 10px;
  border: thin solid var(--medium-grey);
  color: var(--white);
  font-weight: bold;
  font-size: 16px;
  width: 100%;
  margin: 0;
  padding: 15px 15px;

  @media (min-width: 1024px) {
    width: 30%;
  }
`;

const CoursesFilter = ({
  setLevelOfExpertise,
  setDayOfTheWeek,
  setPrice,
}: Props) => {
  return (
    <FlexBox
      alignitems="center"
      flexdirection="column"
      sm_width="100%"
      width="95%"
      md_width="80%"
      xl_width="80%"
      xxl_width="80%"
      sm_margin="20px auto"
      md_margin="20px auto"
      margin="20px auto 25px"
      xl_margin="20px auto 0"
      xxl_margin="20px auto 0"
      justifycontent="center"
    >
      <FilterSystem>
        <FlexBox
          alignitems="center"
          sm_width="100%"
          md_width="100%"
          width="100%"
          xl_width="100%"
          xxl_width="100%"
        >
          <FlexBox
            sm_width="100%"
            md_width="100%"
            width="10%"
            xl_width="10%"
            xxl_width="10%"
          >
            <Header
              level="6"
              text="Filter by:"
              color="var(--white)"
              fontSize="18px"
              fontWeight="bold"
              margin="0 10px 0 0"
            />
          </FlexBox>
          <DropdownSelect
            onChange={(evt) => setLevelOfExpertise(evt.target.value)}
          >
            <option defaultChecked value="All">
              Experience
            </option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </DropdownSelect>

          <DropdownSelect onChange={(evt) => setDayOfTheWeek(evt.target.value)}>
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
          </DropdownSelect>

          <DropdownSelect onChange={(evt) => setPrice(evt.target.value)}>
            <option defaultChecked value="All">
              Price
            </option>
            <option value="asc">Lowest to Highest</option>
            <option value="desc">Highest to Lowest</option>
          </DropdownSelect>
        </FlexBox>
      </FilterSystem>
    </FlexBox>
  );
};

export default CoursesFilter;
