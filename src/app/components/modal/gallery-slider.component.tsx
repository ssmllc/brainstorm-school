"use client";

import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import Modal from "./modal.component";
import Grid from "../layout/grid.component";
import FlexBox from "../layout/flexbox.component";

interface modalProps {
  $poster: string;
  $width: string;
}

const Art = styled.div<modalProps>`
  background: ${({ $poster }) => `url(${$poster}) top center no-repeat`};
  background-size: cover;
  border-radius: 20px;
  position: relative;
  width: ${({ $width }) => $width};
  height: 250px;

  @media (min-width: 1400) {
    height: 350px;
  }
`;

interface Props {
  results?: any;
  selectedInstructor?: any;
}

type Instructor = {
  bio?: any;
  gallery: any[];
  imageUrl: string;
  profession: string;
  slug: any;
  title: string;
  _id: string;
};

const GallerySlide = ({ results, selectedInstructor }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [selectedGallery, setSelectedGallery] = useState<any>([]);
  const [selectedImage, setSelectedImage] = useState<any>([]);
  const [artist, setArtist] = useState<any>([]);

  const handler = (title: string, imageUrl: string, gallery: any[]) => {
    setSelectedGallery(gallery);
    setSelectedImage(imageUrl);
    setArtist(title);
    setIsActive(true);
  };

  return (
    <FlexBox
      sm_margin="20px auto"
      md_margin="20px auto"
      margin="20px 60px 0"
      xl_margin="20px auto 50px"
      xxl_margin="20px auto 50px"
      sm_width="80%"
      md_width="80%"
      width="70%"
      xl_width="80%"
      xxl_width="80%"
    >
      <Grid sm_columns="repeat(2, 1fr)" columns="repeat(4, 1fr)">
        <Modal
          gallery={selectedGallery}
          selectedImage={selectedImage}
          isActive={isActive}
          setIsActive={setIsActive}
          artist={artist}
        />
        {results &&
          results.map((instructor: Instructor) => {
            const { _id, title, imageUrl, gallery } = instructor;
            return (
              <Art
                key={_id}
                $poster={imageUrl}
                $width="100%"
                onClick={() => handler(title, imageUrl, gallery)}
                data-artist={title || "Student"}
              />
            );
          })}

        {selectedInstructor &&
          selectedInstructor.map((instructor: Instructor) => {
            const { title, gallery } = instructor;
            {
              return gallery.map((image: any, index: number) => {
                return (
                  <Art
                    key={index}
                    $poster={image.poster}
                    $width="100%"
                    onClick={() => handler(title, image.poster, gallery)}
                    data-artist={title || "Student"}
                  />
                );
              });
            }
          })}
      </Grid>
    </FlexBox>
  );
};

export default GallerySlide;
