"use client";

import styled from "styled-components";
import RegistrationBlock from "../registration/registration-block.component";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface bannerProps {
  background?: string;
}

const BannerWrapper = styled("div")<bannerProps>`
  background: var(--dark-grey)
    ${({ background }) => `url(${background}) top left no-repeat`};
  background-size: cover;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 75vh;
  justify-content: center;
  opacity: 1;
  padding-top: 10%;
  position: relative;
  width: 100vw;

  @media (min-width: 768px) {
    height: 50vh;
  }

  @media (min-width: 1024px) {
    height: 50vh;
  }

  @media (min-width: 1440px) {
    height: 100vh;
  }

  /* @media (min-width: 1900px) {
    height: 75vh;
  } */
`;

const Overlay = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 90%,
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
  z-index: 2;
`;

interface Props {
  header: string;
  gallery: {
    _id: string;
    title: string;
    artist: any;
    slug: string;
    imageUrl: string;
  }[];
}
const Banner = ({ header, gallery }: Props) => {
  // const [randomBanner, setRandomBanner] = useState<string>("");
  // const [randomArtist, setRandomArtist] = useState<string>("");
  // const [randomTitle, setRandomTitle] = useState<string>("");
  // const [randomSlug, setRandomSlug] = useState<string>("");
  // const bannerRef = useRef(null);

  // useEffect(() => {
  //   if (bannerRef.current) {
  //     const randomBannerImage = (min: number, max: number) => {
  //       return Math.floor(Math.random() * (max - min + 1) + min);
  //     };
  //     const getRandomArt = randomBannerImage(0, gallery.length - 1);
  //     const { title } = gallery[getRandomArt];
  //     console.log("gallery", gallery);
  //     const { _id, artist, imageUrl } = gallery[getRandomArt];
  //     // const randomBanner = `/banner/banner-${randomBannerImage(1, 45)}.jpg`;
  //     setRandomTitle(title || "");
  //     setRandomArtist(artist?.title);
  //     setRandomSlug(artist?.slug);
  //     setRandomBanner(`${imageUrl}?w=1920`);
  //     gsap.to(bannerRef.current, {
  //       ease: "power1.out",
  //       duration: 0.5,
  //       opacity: 1,
  //     });
  //   }
  // }, []);

  return (
    <BannerWrapper>
      <RegistrationBlock
        primary={true}
        heading={header}
        scale="xl"
        cta="Register Today"
        ctaType="primary"
        href="/courses"
      />
      <Overlay />

      <video
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          objectFit: "cover",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
        width="100%"
        height="100%"
        muted
        autoPlay
        loop
        preload="auto"
        playsInline
      >
        <source src="/video/brainstorm-main-banner.mp4" type="video/mp4" />
      </video>
    </BannerWrapper>
  );
};

export default Banner;
