"use client";

import styled from "styled-components";
import RegistrationBlock from "../registration/registration-block.component";
import { useEffect, useState } from "react";
import gsap from "gsap";

interface bannerProps {
  background: string;
}

const BannerWrapper = styled("div")<bannerProps>`
  background: var(--dark-grey)
    ${({ background }) => `url(${background}) top left no-repeat`};
  background-size: cover;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 50vh;
  justify-content: center;
  opacity: 0.5;
  padding-top: 25%;
  position: relative;
  width: 100vw;

  @media (min-width: 800px) {
    height: 100vh;
  }
`;

const Overlay = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 25%,
    var(--off-black) 100%
  );
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
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
  const [randomBanner, setRandomBanner] = useState<string>("");

  useEffect(() => {
    const randomBannerImage = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const randomBanner = `/banner/banner-${randomBannerImage(1, 45)}.jpg`;
    setRandomBanner(randomBanner);

    gsap.to(".banner-wrapper", {
      ease: "power1.out",
      duration: 1,
      opacity: 1,
    });
  }, []);

  return (
    <BannerWrapper className="banner-wrapper" background={randomBanner}>
      <RegistrationBlock
        primary={true}
        heading="Learn from Industry-Leading Professionals in Various Creative Fields!"
        scale="xl"
        cta="Register Today"
        ctaType="primary"
      />
      <Overlay />
    </BannerWrapper>
  );
};

export default Banner;
