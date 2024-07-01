import React from "react";
import MediaBanner from "@/app/components/banner/media-banner.component";
import CardLayout, {
  CardImage,
} from "@/app/components/card/simple-card.component";
import Carousel from "@/app/components/carousel/carousel.component";
import TextHeaderBlock from "@/app/components/text-block/text-header-block.component";
import SimilarCourses from "@/app/components/similar-courses/similar-courses.component";
import FlexBox from "@/app/components/layout/flexbox.component";
import { Metadata } from "next";
import InstructorBio from "@/app/components/instructors/instructor.component";

const fetchData = async () => {
  const query =
    "https://y8rjsgga.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27course%27%5D+%7B%0A++_id%2C%0A++metatitle%2C%0A++metadescription%2C%0A++name%2C%0A++category%2C%0A++section%2C%0A++slug%2C%0A++code%2C%0A++duration%2C%0A++difficulty%2C%0A++format%2C%0A++time%2C%0A++price%2C%0A++materials%2C%0A++requirements%2C%0A++instructors%5B%5D+-%3E+%7B%0A++++title%2C%0A++++profession%2C%0A++++bio%2C%0A++++%22headshot%22%3A+photo.asset-%3Eurl%2C%0A++++gallery%5B%5D+-%3E+%7B%0A++++++_id%2C%0A++++++%22imageUrl%22%3A+portfolio.asset-%3Eurl%0A++++%7D%0A++%7D%2C%0A++schedule%5B%5D+-%3E+%7B%0A++++instructor%5B0%5D+-%3E+%7B%0A++++++title%2C%0A++++%7D%2C%0A++++registration%2C%0A++++term%2C%0A++++time%2C%0A++++duration%2C%0A++++open%2C%0A++++start%2C%0A++%7D%2C%0A++%22imageUrl%22%3A+preview.asset+-%3E+url%2C%0A++description%2C%0A++tags%5B%5D+-%3E+%7B%0A++++title%2C%0A++%7D%0A%7D";
  const response = await fetch(query, { cache: "no-store" });
  // const response = await fetch(query);

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  const { result } = await response.json();

  return result;
};

type Props = {
  params: { courseId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const query =
    "https://y8rjsgga.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27course%27%5D+%7B%0A++_id%2C%0A++metatitle%2C%0A++metadescription%2C%0A++name%2C%0A++category%2C%0A++section%2C%0A++slug%2C%0A++code%2C%0A++duration%2C%0A++difficulty%2C%0A++format%2C%0A++time%2C%0A++price%2C%0A++instructors%5B%5D+-%3E+%7B%0A++++title%2C%0A++++profession%2C%0A++++bio%2C%0A++%7D%2C%0A++schedule%5B%5D+-%3E+%7B%0A++++instructor%5B0%5D+-%3E+%7B%0A++++++title%2C%0A++++%7D%2C%0A++++registration%2C%0A++++term%2C%0A++++time%2C%0A++++duration%2C%0A++++open%2C%0A++++start%2C%0A++%7D%2C%0A++%22imageUrl%22%3A+preview.asset+-%3E+url%2C%0A++description%2C%0A++tags%5B%5D+-%3E+%7B%0A++++title%2C%0A++%7D%0A%7D";
  const response = await fetch(query, { cache: "no-store" });
  // const response = await fetch(query);

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  const { result } = await response.json();

  const selectedResults = result.filter((course: any) => {
    return course.slug.current === params.courseId[0];
  })[0];

  const { metatitle, metadescription } = selectedResults;

  return {
    title: metatitle,
    description: metadescription,
  };
}

export default async function Page({
  params,
}: {
  params: { courseId: string };
}) {
  const result = await fetchData();

  const header = result.filter((course: any) => {
    return course.slug.current === params.courseId[0];
  })[0]["name"];

  const selectedResults = result.filter((course: any) => {
    return course.slug.current === params.courseId[0];
  })[0];

  const { category, instructors, schedule, code, imageUrl } = selectedResults;
  const { duration, time, registration } = schedule[0];

  const { gallery } = instructors && instructors[0];

  return (
    <>
      <MediaBanner
        label={category}
        header={header}
        subHeader={code}
        duration={duration}
        time={time}
        registration={registration}
        hero="true"
        theme="dark"
        background={imageUrl}
        image={imageUrl}
        randomize={false}
      />

      <CardLayout results={selectedResults} />

      {gallery.length > 0 && (
        <FlexBox margin="0 auto">
          <FlexBox flexdirection="column">
            <FlexBox
              alignitems="center"
              sm_margin="50px auto 0px"
              md_margin="50px auto 0px"
              margin="50px auto 0"
              xl_margin="50px auto 0"
              xxl_margin="50px auto 0"
              sm_width="80%"
              md_width="80%"
              width="80%"
              xl_width="85%"
              xxl_width="85%"
            >
              <TextHeaderBlock fontSize="36px" fontWeight="bold">
                Gallery
              </TextHeaderBlock>
            </FlexBox>

            <FlexBox
              alignitems="center"
              sm_width="80%"
              md_width="80%"
              width="80%"
              xl_width="85%"
              xxl_width="85%"
            >
              <Carousel instructors={instructors}>
                {gallery.map((g: any, index: number) => {
                  return (
                    <CardImage
                      key={index}
                      boxshadow="0 0 10px var(--black)"
                      className="slide"
                      preview={g.imageUrl}
                      width="350px"
                    />
                  );
                })}
              </Carousel>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      )}

      <FlexBox flexdirection="column">
        <FlexBox
          alignitems="center"
          sm_width="80%"
          md_width="80%"
          width="80%"
          xl_width="85%"
          xxl_width="85%"
          sm_margin="50px auto 0px"
          md_margin="50px auto 0px"
          margin="25px auto 0"
          xl_margin="25px auto 0"
          xxl_margin="25px auto 0"
        >
          <TextHeaderBlock fontSize="36px" fontWeight="bold">
            Meet Your Instructor
          </TextHeaderBlock>
        </FlexBox>
        {instructors?.map(
          (
            {
              title,
              profession,
              bio,
              headshot,
            }: {
              bio: string | null;
              title: string;
              profession: string;
              headshot: string;
            },
            index: number
          ) => {
            return (
              <InstructorBio
                key={index}
                title={title}
                profession={profession}
                bio={bio}
                registration={registration}
                icon={headshot}
              />
            );
          }
        )}
      </FlexBox>

      <SimilarCourses header="View Similar Courses" />
    </>
  );
}
