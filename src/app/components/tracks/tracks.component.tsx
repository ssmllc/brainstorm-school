"use client";

import styled from "styled-components";
import RegistrationBlock from "../registration/registration-block.component";

const Tracks = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  position: relative;
`;

const Track = styled.div`
  background: var(--black);
  position: relative;
`;

const TracksGroup = () => {
  return (
    <div>
      <RegistrationBlock
        primary={false}
        heading="Learn courses relevant to todays market. Our course guides will keep you on track."
      />
      <Tracks>
        <Track></Track>
      </Tracks>
    </div>
  );
};

export default TracksGroup;
