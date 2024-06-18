"use client";

import DecipherText from "@/app/courses/components/decipher-text.component";
import { CardImage } from "../card/simple-card.component";
import FlexBox from "../layout/flexbox.component";
import Header from "../text-block/header.component";
import Carousel from "./carousel.component";
import Poster from "../poster/poster.component";
import { useState } from "react";

interface Props {
  selectedInstructor: any;
  gallery: any[];
  imageUrl: string;
}

const CarouselPreview = ({ selectedInstructor, gallery, imageUrl }: Props) => {
  const [preview, setPreview] = useState<string>(gallery && gallery[0]?.poster);

  return (
    <FlexBox flexdirection="column" margin="100px auto" alignitems="center">
      <FlexBox
        margin="20px 60px 0"
        xl_margin="50px 60px"
        sm_margin="50px auto 0"
        sm_width="80%"
        width="50%"
        xl_width="75%"
        flexdirection="column"
      >
        <Header level="1" text="Instructor Bio." />

        <DecipherText description={selectedInstructor.bio} />

        <Poster imageUrl={preview || imageUrl} />
      </FlexBox>

      <FlexBox
        sm_width="60%"
        width="50%"
        xl_width="75%"
        sm_margin="0 auto"
        margin="0 auto"
        xl_margin="0 auto"
      >
        {gallery?.length > 0 && (
          <Carousel sm_height="200px" height="350px">
            {gallery &&
              gallery.map((art: any) => {
                return (
                  <div key={art._id}>
                    <CardImage
                      key={art._id}
                      boxshadow="0 0 10px var(--black)"
                      className="slide"
                      preview={art.poster}
                      width="320px"
                      sm_height="150px"
                      setPreview={setPreview}
                    />
                  </div>
                );
              })}
          </Carousel>
        )}
      </FlexBox>
    </FlexBox>
  );
};

export default CarouselPreview;
