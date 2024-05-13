"use client";

import React from "react";
import styled from "styled-components";
import RegistrationBlock from "../registration/registration-block.component";
import ImageDetailCard from "../card/card.component";

const Content = styled.div`
  margin: 50px 0;
  width: 100vw;
`;

const Featured = styled.div`
  border: thin solid blue;
  border-radius: 20px;
  box-shadow: 0 0 15px #222;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  padding: 50px 0;
  /* overflow: hidden; */
  width: 65%;
`;

const Slider = styled.div`
  /* border: thin dashed red; */
  display: flex;
  flex-direction: row;
`;

const FeaturedSlider = () => {
  return (
    <Content>
      <RegistrationBlock
        primary={false}
        heading="Latest news from Brainstorm"
        scale="xl"
      />

      <Featured>
        <Slider>
          <div
            style={{
              border: "thin solid green",
              width: "1200px",
            }}
          >
            <ImageDetailCard
              variant="lg"
              superHeading="Featured Blog"
              info="Lorem ipsum dolor sit amet, Optio pariatur blanditiis accusantium placeat."
            />
          </div>

          <div
            style={{
              border: "thin solid green",
              width: "1200px",
            }}
          >
            <ImageDetailCard
              variant="lg"
              superHeading="Featured Blog"
              info="Lorem ipsum dolor sit amet, Optio pariatur blanditiis accusantium placeat."
            />
          </div>
        </Slider>
      </Featured>
    </Content>
  );
};

export default FeaturedSlider;
