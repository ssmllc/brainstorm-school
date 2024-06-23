"use client";

import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import GalleryCarousel from "../carousel/gallery-carousel.component";

const ModalOverlay = styled.div`
  background: var(--black);
  /* border: thin dashed var(--primary); */
  display: none;
  height: 100vh;
  left: 0;
  opacity: 0;
  padding: 75px 0 0;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 999;

  @media (min-width: 1400px) {
    padding: 50px 0 0;
  }

  /* &::before {
    content: "Loading ...";
    color: var(--white-50);
    font-size: 24px;
    left: 50%;
    letter-spacing: 1px;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
  } */
`;

const ExitModal = styled.button`
  background: var(--off-black);
  border-radius: 100px;
  border: 3px solid var(--primary);
  height: 75px;
  top: 25px;
  position: absolute;
  right: 25px;
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
      <ExitModal
        onClick={() => {
          setIsActive(false);
        }}
      />

      <GalleryCarousel
        selectedInstructor={artist}
        gallery={gallery}
        imageUrl={currentImage}
        bgSize="contain"
        margin="0"
      />
    </ModalOverlay>
  );
};

export default Modal;
