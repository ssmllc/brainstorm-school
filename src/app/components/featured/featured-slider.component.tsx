"use client";

import React from "react";
import styled from "styled-components";
import RegistrationBlock from "../registration/registration-block.component";

const Content = styled.div`
  margin: 50px 0;
  width: 100vw;
`;

const Featured = styled.div`
  border-radius: 20px;
  box-shadow: 0 0 15px #222;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  overflow: hidden;
  width: 65%;
`;

const Slider = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Post = styled.div`
  display: flex;
  flex-direction: row;
  height: 350px;
  width: 100%;
`;

interface posterProps {
  image: string;
}

const Poster = styled.div<posterProps>`
  background: ${({ image }) => `url(${image}) top center no-repeat`};
  background-size: cover;
  height: 100%;
  width: 45%;
`;

const Details = styled.div`
  background: var(--off-black);
  height: 100%;
  width: 55%;
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
          <Post>
            <Poster image="/backgrounds/sci-fi-city.jpg"></Poster>
            <Details></Details>
          </Post>
        </Slider>
      </Featured>
    </Content>
  );
};

export default FeaturedSlider;
