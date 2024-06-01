"use client";

import { useEffect, useState, useContext, ReactNode } from "react";
import styled from "styled-components";
import Link from "next/link";
import Icon3D from "../icons/icon-3d.component";
import Image from "next/image";

interface anchorProps {
  sm_width?: string;
  width?: string;
}

const Anchor = styled(Link)<anchorProps>`
  width: ${({ width }) => (width ? width : "25%")};

  @media (min-width: 768px) {
    width: ${({ width }) => (width ? width : "25%")};
  }
`;

interface trackProps {
  poster: string;
}

const Track = styled.div<trackProps>`
  background: var(--black) url(${(props) => props.poster}) top center no-repeat;
  background-size: cover;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  filter: grayscale(0.75);
  flex-grow: 1;
  flex-basis: 25%;
  padding: 100px 20px 0 20px;
  position: relative;
  transition: all 0.35s ease-out;

  @media (min-width: 768px) {
    min-height: 300px;
  }

  &[data-track="active"] {
    filter: grayscale(0);
  }

  &::after {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 25%,
      var(--off-black) 100%
    );
    content: "";
    border-radius: 20px;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  &:hover {
    filter: grayscale(0);
    cursor: pointer;
  }
`;

const Icon = styled.div`
  align-items: center;
  border: 2px solid var(--white);
  border-radius: 100%;
  display: flex;
  height: 50px;
  justify-content: center;
  position: relative;
  width: 50px;
  z-index: 2;
`;

const Label = styled.p`
  color: var(--white);
  font-weight: bold;
  font-size: 28px;
  padding: 20px 0 10px;
  position: relative;
  z-index: 2;
`;

const Name = styled.p`
  color: var(--white);
  font-size: 14px;
  padding: 0 0 25px 0;
  position: relative;
  text-align: left;
  z-index: 2;
`;

interface Props {
  base?: string;
  path?: string;
  poster: string;
  label?: string;
  icon?: string;
  photo?: string;
  name?: string;
  sm_width?: string;
  width?: string;
  children?: string | ReactNode | JSX.Element | JSX.Element[];
}

const AnchorCard = ({
  base,
  path,
  poster,
  label,
  children,
  icon,
  photo,
  name,
  sm_width,
  width,
}: Props) => {
  const baseLocation = base ? base : "";
  const pathLocation = path ? path : "";
  const hrefToPath = `/${baseLocation}/${pathLocation}`;

  return (
    <Anchor
      href={hrefToPath ? hrefToPath : "/course-guide"}
      sm_width={sm_width}
      width={width}
    >
      <Track poster={poster}>
        {children && children}

        {photo && (
          <Icon>
            <Image
              src={photo}
              width={42}
              height={42}
              alt="Brainstorm School Logo"
            />
          </Icon>
        )}

        {icon && (
          <Icon>
            {" "}
            <Icon3D height="48px" width="48px" />
          </Icon>
        )}

        <Label>{label}</Label>
        <Name>{name}</Name>
      </Track>
    </Anchor>
  );
};

export default AnchorCard;
