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
  poster?: string;
  $sm_padding?: string;
  $md_padding?: string;
  $padding?: string;
  $xl_padding?: string;
}

const TrackWrapper = styled.div<trackProps>`
  position: absolute;
  bottom: 15px;
  padding: ${({ $sm_padding }) => ($sm_padding ? $sm_padding : "0 10px")};

  @media (min-width: 768px) {
    padding: ${({ $md_padding }) => ($md_padding ? $md_padding : "0 20px")};
  }

  @media (min-width: 1024px) {
    padding: ${({ $padding }) => ($padding ? $padding : "0 20px")};
  }

  @media (min-width: 1400px) {
    padding: ${({ $xl_padding }) => ($xl_padding ? $xl_padding : "0 20px")};
  }
`;

const Track = styled.div<trackProps>`
  background: var(--black) url(${(props) => props.poster}) top center no-repeat;
  background-size: cover;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  min-height: 150px;
  padding: 100px 20px 0 20px;
  position: relative;
  transition: all 0.35s ease-out;
  width: 100%;

  @media (min-width: 768px) {
    min-height: 300px;
  }

  &[data-track="active"] {
    box-shadow: 0 0 0 1px var(--primary);
  }

  &::after {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0,
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
    cursor: pointer;
    box-shadow: 0 0 0 1px var(--primary);
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
  height: 55px;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 55px;
  z-index: 2;

  @media (min-width: 1024px) {
    height: 75px;
    width: 75px;
  }
`;

const Label = styled.p`
  color: var(--white);
  font-weight: bold;
  font-size: 24px;
  padding: 5px 0;
  position: relative;
  z-index: 2;

  @media (min-width: 1024px) {
    padding: 10px 0;
    font-size: 28px;
  }
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
  sm_padding?: string;
  md_width?: string;
  md_padding?: string;
  width?: string;
  padding?: string;
  xl_width?: string;
  xl_padding?: string;
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
  sm_padding,
  md_width,
  md_padding,
  width,
  padding,
  xl_width,
  xl_padding,
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
        <TrackWrapper
          $sm_padding={sm_padding}
          $md_padding={md_padding}
          $padding={padding}
          $xl_padding={xl_padding}
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
        </TrackWrapper>
      </Track>
    </Anchor>
  );
};

export default AnchorCard;
