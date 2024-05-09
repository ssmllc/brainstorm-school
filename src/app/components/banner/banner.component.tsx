"use client";

import styled from "styled-components";
import RenderThreeDModel from "../three/model.component";
import RegistrationBlock from "../registration/registration-block.component";

const BannerWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding-top: 20%;
  position: relative;
  width: 100vw;
`;

const Overlay = styled.div`
  background: linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.15) 85%);
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  left: 0;
  padding-top: 20%;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100vw;
  z-index: 15;
`;

const Banner = () => {
  return (
    <BannerWrapper>
      <RegistrationBlock
        primary={true}
        heading="Learn from industry professionals and become a master of your craft today."
        scale="xl"
        cta="Register Today"
      />
      <RenderThreeDModel />
      <video
        style={{ position: "absolute", left: 0, top: 0 }}
        muted
        loop
        width="100%"
        height="100%"
        autoPlay={true}
      >
        <source src="/video/lightning.mp4" type="video/mp4" />
      </video>
      <Overlay />
    </BannerWrapper>
  );
};

export default Banner;
