"use client";

import styled from "styled-components";

const BannerWrapper = styled.div`
  align-items: center;
  background: url(/banner/banner-background.jpeg);
  background-size: cover;
  display: flex;
  height: 100vh;
  justify-content: center;
  position: relative;
  width: 100vw;
`;

const Banner = () => {
  return (
    <BannerWrapper>
      <h1>Brainstorm</h1>
    </BannerWrapper>
  );
};

export default Banner;
