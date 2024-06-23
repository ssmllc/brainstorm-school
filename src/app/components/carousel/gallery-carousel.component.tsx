"use client";

import { CardImage } from "../card/simple-card.component";
import FlexBox from "../layout/flexbox.component";
import Carousel from "./carousel.component";
import Poster from "../poster/poster.component";
import { useState } from "react";
import styled from "styled-components";

const CarouselWrapper = styled.div`
  width: 70%;

  @media (min-width: 1024px) {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 50%;
  }
`;

interface Props {
  selectedInstructor: any;
  gallery: any[];
  imageUrl: string;
  bgSize?: string;
  margin?: string;
}

const GalleryCarousel = ({
  selectedInstructor,
  gallery,
  imageUrl,
  bgSize,
  margin,
}: Props) => {
  const [preview, setPreview] = useState<string>(gallery && gallery[0]?.poster);

  return (
    <FlexBox flexdirection="column" margin="0 auto" alignitems="center">
      <Poster imageUrl={preview || imageUrl} bgSize={bgSize} margin={margin} />

      {gallery?.length > 0 && (
        <CarouselWrapper>
          <Carousel sm_height="200px" height="180px">
            {gallery &&
              gallery.map((art: any, index: number) => {
                console.log("gallery", gallery);
                return (
                  <CardImage
                    key={index}
                    boxshadow="0 0 10px var(--black)"
                    className="slide"
                    preview={art.poster ? art.poster : art.imageUrl}
                    width="320px"
                    sm_height="150px"
                    height="120px"
                    setPreview={setPreview}
                  />
                );
              })}
          </Carousel>
        </CarouselWrapper>
      )}
    </FlexBox>
  );
};

export default GalleryCarousel;
