"use client";

import React, { useState } from "react";
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

  @media (min-width: 1360px) {
    height: 350px;
  }
`;

interface Props {
  results: any;
}

type Student = {
  gallery: any[];
  imageUrl: string;
  title: string;
  _id: string;
};

const StudentGallerySlide = ({ results }: Props) => {
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
      sm_margin="20px 25px"
      md_margin="20px 25px"
      margin="20px 60px 0"
      xl_margin="20px auto 50px"
      sm_width="80%"
      md_width="70%"
      width="80%"
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
          results.map((students: Student) => {
            const { title, gallery } = students;

            return (
              gallery &&
              gallery.map((student: any, index: number) => {
                const { _id, imageUrl } = student;

                return (
                  <Art
                    key={index}
                    $poster={imageUrl}
                    $width="100%"
                    onClick={() => handler(title, imageUrl, gallery)}
                    data-artist={title}
                  />
                );
              })
            );
          })}
      </Grid>
    </FlexBox>
  );
};

export default StudentGallerySlide;
