"use client";

import { ReactNode } from "react";
import styled from "styled-components";
import Link from "next/link";
import Icon3D from "../icons/icon-3d.component";

interface anchorProps {
  $sm_width?: string;
  $md_width?: string;
  $width?: string;
  $xl_width?: string;
}

const Anchor = styled(Link)<anchorProps>`
  width: ${({ $sm_width }) => ($sm_width ? $sm_width : "100%")};

  @media (min-width: 768px) {
    width: ${({ $md_width }) => ($md_width ? $md_width : "100%")};
  }

  @media (min-width: 1400px) {
    width: ${({ $width }) => ($width ? $width : "100%")};
  }

  @media (min-width: 1900px) {
    width: ${({ $xl_width }) => ($xl_width ? $xl_width : "100%")};
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
  min-height: 150px;
  padding: 100px 20px 0 20px;
  position: relative;
  transition: all 0.35s ease-out;
  width: 100%;

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

interface iconProps {
  $photo?: string;
  $width?: string;
  $height?: string;
}
const Icon = styled.div<iconProps>`
  align-items: center;
  background: ${({ $photo }) => `url(${$photo}) top center no-repeat`};
  background-size: cover;
  border: 2px solid var(--white);
  border-radius: 100%;
  display: flex;
  height: 50px;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 50px;
  z-index: 2;
`;

const Label = styled.p`
  color: var(--white);
  font-weight: bold;
  font-size: 28px;
  padding: 10px 0;
  position: relative;
  z-index: 2;
`;

const Name = styled.p`
  color: var(--white);
  font-size: 14px;
  padding: 0;
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
  md_width?: string;
  width?: string;
  xl_width?: string;
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
  md_width,
  width,
  xl_width,
}: Props) => {
  const baseLocation = base ? base : "";
  const pathLocation = path ? path : "";
  const hrefToPath = `/${baseLocation}/${pathLocation}`;

  return (
    <Anchor
      href={hrefToPath ? hrefToPath : "/course-guide"}
      $sm_width={sm_width}
      $md_width={md_width}
      $width={width}
      $xl_width={xl_width}
    >
      <Track poster={poster}>
        <div
          style={{
            position: "absolute",
            bottom: "15px",
            padding: "0 20px",
          }}
        >
          {children && children}

          {photo && <Icon $photo={photo} />}

          {icon && (
            <Icon $photo={photo}>
              {" "}
              <Icon3D height="48px" width="48px" />
            </Icon>
          )}

          <Label>{label}</Label>
          <Name>{name}</Name>
        </div>
      </Track>
    </Anchor>
  );
};

export default AnchorCard;
