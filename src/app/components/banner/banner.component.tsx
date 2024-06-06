"use client";

import styled from "styled-components";
import RegistrationBlock from "../registration/registration-block.component";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Header from "../text-block/header.component";
import Link from "next/link";

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
  height: 75vh;
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

const Credit = styled(Link)`
  background: var(--off-black);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  padding: 15px 15px;
  position: absolute;
  right: 25px;
  top: 125px;
`;

const CreditTag = ({
  label,
  artist,
  slug,
}: {
  label: string;
  artist: string;
  slug: string;
}) => {
  const artistTagRef = useRef(null);

  useEffect(() => {
    gsap.to(artistTagRef.current, {
      ease: "power1.out",
      duration: 0.5,
      opacity: 1,
      right: "50px",
    });
  }, []);

  return (
    <Credit ref={artistTagRef} href={`/instructors/${slug}`}>
      <Header level="4" text={label} fontSize="14px" fontWeight="bold" />
      <Header level="4" text={artist} fontSize="12px" margin="10px 0 0" />
    </Credit>
  );
};

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
  const [randomBanner, setRandomBanner] = useState<string>("");
  const [randomArtist, setRandomArtist] = useState<string>("");
  const [randomTitle, setRandomTitle] = useState<string>("");
  const [randomSlug, setRandomSlug] = useState<string>("");
  const bannerRef = useRef(null);

  useEffect(() => {
    if (bannerRef.current) {
      const randomBannerImage = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
      };

      const getRandomArt = randomBannerImage(0, gallery.length - 1);
      const { title } = gallery[getRandomArt];
      const {
        _id,
        artist: { title: artistName, slug: pathToArtist },
        imageUrl,
      } = gallery[getRandomArt];

      // const randomBanner = `/banner/banner-${randomBannerImage(1, 45)}.jpg`;

      setRandomTitle(title);
      setRandomArtist(artistName);
      setRandomSlug(pathToArtist);
      setRandomBanner(`${imageUrl}?w=1920`);

      gsap.to(bannerRef.current, {
        ease: "power1.out",
        duration: 0.5,
        opacity: 1,
      });
    }
  }, []);

  return (
    <BannerWrapper ref={bannerRef} background={randomBanner}>
      <CreditTag label={randomTitle} artist={randomArtist} slug={randomSlug} />
      <RegistrationBlock
        primary={true}
        heading={header}
        scale="xl"
        cta="Register Today"
        ctaType="primary"
      />
      <Overlay />
    </BannerWrapper>
  );
};

export default Banner;
