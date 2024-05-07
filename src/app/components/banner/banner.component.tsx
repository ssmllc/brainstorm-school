"use client";

import styled from "styled-components";
import RenderThreeDModel from "../three/model.component";
import ActionButton from "../buttons/action-button.component";

const BannerWrapper = styled.div`
  align-items: center;
  background: url(/banner/banner-background.jpg);
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: relative;
  width: 100vw;
`;

const Heading = styled.p`
  color: var(--white);
  font-size: 48px;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;

  @media (min-width: 800px) {
    font-size: 96px;
  }
`;

const SubHeading = styled.p`
  color: var(--white);
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 2px;
  line-height: 1.5;
  padding: 20px 0;
  text-align: center;
  width: 80%;

  @media (min-width: 800px) {
    padding: 10px 0;
    width: 50%;
  }
`;

const Banner = () => {
  return (
    <BannerWrapper>
      {/* <RenderThreeDModel /> */}
      <Heading>Brainstorm School</Heading>
      <SubHeading>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis amet
        ratione velit eaque sunt, voluptatibus ad harum? Dignissimos facilis
        veritatis accusantium, perspiciatis ullam cupiditate nesciunt voluptas
        aliquam a deserunt. Non.
      </SubHeading>
      <ActionButton type="primary" label="View Courses"></ActionButton>
    </BannerWrapper>
  );
};

export default Banner;
