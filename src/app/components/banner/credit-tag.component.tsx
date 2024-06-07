"use client";

import styled from "styled-components";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Header from "../text-block/header.component";
import Link from "next/link";

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

export default CreditTag;
