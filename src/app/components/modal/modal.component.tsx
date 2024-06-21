"use client";

import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import Image from "next/image";

const ModalOverlay = styled.div`
  background: var(--black);
  /* border: thin dashed var(--primary); */
  display: none;
  height: 100vh;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 999;
`;

interface carouselProps {
  $background: string;
}
const Carousel = styled.div<carouselProps>`
  background: ${({ $background }) =>
    `url(${$background}) top center no-repeat`};
  /* border: thin dashed var(--primary); */
  background-size: contain;
  background-position: center;
  display: flex;
  height: 85vh;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  justify-content: space-between;
  width: 90vw;
`;

interface carouselSliderProps {
  $totalWidth: number;
}
const CarouselSlider = styled.div<carouselSliderProps>`
  /* border: thin dashed var(--blue); */
  background: var(--black);
  border-radius: 20px;
  display: flex;
  gap: 0 5px;
  height: 120px;
  left: 50%;
  padding: 10px 10px;
  position: absolute;
  bottom: 0;
  transform: translateX(-50%);
  width: ${({ $totalWidth }) => `${$totalWidth}px`};
`;

interface imageProps {
  $bgImage: string;
}

const Thumbnail = styled.div<imageProps>`
  background: ${({ $bgImage }) => `url(${$bgImage}) top center no-repeat`};
  background-size: cover;
  border: 3px solid var(--white-50);
  border-radius: 20px;
  background-position: center;
  height: 100px;
  width: 100px;
`;

const ExitModal = styled.button`
  background: var(--off-black);
  border-radius: 100px;
  border: 3px solid var(--primary);
  height: 75px;
  top: -25px;
  position: absolute;
  right: -25px;
  width: 75px;
  z-index: 100;

  &::after {
    background: var(--primary);
    content: "";
    height: 3px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 25px;
  }

  &::before {
    background: var(--primary);
    content: "";
    height: 3px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 25px;
  }
`;

interface Props {
  isActive: boolean;
  setIsActive: (a: boolean) => void;
  selectedImage: string;
  artist: string;
  gallery?: any;
}

const Modal = ({
  isActive,
  setIsActive,
  artist,
  selectedImage,
  gallery,
}: Props) => {
  const [sliderWidth, setSliderWidth] = useState<number>(0);
  const [cardWidth, setCardWidth] = useState<number>(100);
  const [currentImage, setCurrentImage] = useState<string>("");
  const modalRef = useRef(null);

  useGSAP(() => {
    // console.log("from modal showIt", gallery.length);

    if (gallery?.length > 0) {
      const totalW = gallery.length * cardWidth;

      setSliderWidth(totalW);
      setCurrentImage(`${selectedImage}?w=1440`);

      if (isActive) {
        gsap.set(modalRef.current, {
          display: "block",
        });

        gsap.to(modalRef.current, {
          ease: "power3.out",
          duration: 0.5,
          opacity: 1,
        });
      } else {
        gsap.to(modalRef.current, {
          ease: "power3.out",
          duration: 0.5,
          opacity: 0,
        });

        gsap.set(modalRef.current, {
          display: "none",
        });
      }
    } else {
      setCurrentImage(`${selectedImage}?w=1440`);

      if (isActive) {
        gsap.set(modalRef.current, {
          display: "block",
        });

        gsap.to(modalRef.current, {
          ease: "power3.out",
          duration: 0.5,
          opacity: 1,
        });
      } else {
        gsap.to(modalRef.current, {
          ease: "power3.out",
          duration: 0.5,
          opacity: 0,
        });

        gsap.set(modalRef.current, {
          display: "none",
        });
      }
    }
  }, [isActive]);

  return (
    <ModalOverlay ref={modalRef}>
      <Carousel $background={currentImage}>
        <ExitModal
          onClick={() => {
            setIsActive(false);
          }}
        />

        {/* <Image src={currentImage} alt={artist} /> */}
        <CarouselSlider $totalWidth={sliderWidth}>
          {gallery &&
            gallery.map(({ imageUrl }: { imageUrl: string }, index: number) => {
              return (
                <Thumbnail
                  key={index}
                  $bgImage={`${imageUrl}?w=100`}
                  className="gallery-card"
                  onClick={() => {
                    setCurrentImage(imageUrl);
                  }}
                />
              );
            })}
        </CarouselSlider>
      </Carousel>
    </ModalOverlay>
  );
};

export default Modal;
