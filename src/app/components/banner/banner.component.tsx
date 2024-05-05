"use client";

import styled from "styled-components";
import RenderThreeDModel from "../three/model.component";

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
      <RenderThreeDModel />
    </BannerWrapper>
  );
};

export default Banner;
