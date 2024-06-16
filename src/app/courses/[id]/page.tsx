import React from "react";
import MediaBanner from "@/app/components/banner/media-banner.component";
import RenderCourses from "../components/render-courses.component";
import RegistrationBlock from "@/app/components/registration/registration-block.component";
import FAQs from "@/app/components/text-block/faqs.component";
import DecipherText from "../components/decipher-text.component";
import FlexBox from "@/app/components/layout/flexbox.component";
import Header from "@/app/components/text-block/header.component";
import FeaturedCard from "@/app/components/card/featured-card.component";

const fetchData = async () => {
  const query =
    "https://y8rjsgga.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27courses%27%5D+%7B%0A++category%2C%0A++slug+%7B%0A++++current%0A++%7D%2C%0A++details%2C%0A++faqs%5B%5D+-%3E+%7B%0A++++question%2C%0A++++answer%2C%0A++%7D%2C%0A++sections%5B%5D+-%3E+%7B%0A++++section%2C%0A++++category%2C%0A++++slug%2C%0A++++courses%5B%5D+-%3E+%7B%0A++++++_id%2C%0A++++++name%2C%0A++++++section%2C%0A++++++category%2C%0A++++++slug%2C%0A++++++code%2C%0A++++++description%5B0%5D+%7B%0A++++++++children%5B0%5D+%7B%0A++++++++++text%0A++++++++%7D%0A++++++%7D%2C%0A++++++preview+%7B%0A++++++++asset+-%3E+%7B%0A++++++++++url%0A++++++++%7D%2C%0A++++++%7D%2C%0A++++++instructors%5B%5D+-%3E+%7B%0A++++++++title%2C%0A++++++++profession%2C%0A++++++++bio%2C%0A++++++%7D%2C%0A++++++schedule%5B%5D+-%3E+%7B%0A++++++++instructor%5B0%5D+-%3E+%7B%0A++++++++++title%2C%0A++++++++%7D%2C%0A++++++++registration%2C%0A++++++++term%2C%0A++++++++time%2C%0A++++++++duration%2C%0A++++++++start%2C%0A++++++%7D%2C%0A++++%7D%2C%0A++%7D%2C%0A%7D";
  // const response = await fetch(query);
  const response = await fetch(query, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  const { result } = await response.json();

  return result;
};

export default async function Page({ params }: { params: { id: string } }) {
  const result = await fetchData();

  const selectedCourses = result.filter(
    (res: any) => res.slug.current === params.id
  );

  const selectedResults = result.filter((course: any) => {
    // console.log("slug", course.slug.current);
    // console.log("params.id[0]", params.id);
    return course.slug.current === params.id;
  })[0];

  const { category } = selectedResults && selectedResults;

  return (
    <>
      <MediaBanner
        header={category}
        subHeader="2024"
        hero="false"
        theme="dark"
        background="/banner/banner-39.jpg"
        image="/banner/media-banner.png"
        media="/video/brainstorm-design-solve-learn.mp4"
      />

      <FlexBox flexdirection="column" margin="100px auto" alignitems="center">
        <FlexBox
          flexdirection="column"
          margin="20px 0"
          xl_margin="100px 0 50px"
          sm_width="80%"
          width="70%"
          xl_width="70%"
        >
          <DecipherText results={selectedResults} />
        </FlexBox>
      </FlexBox>

      <FlexBox flexdirection="column" margin="100px auto" alignitems="center">
        <FlexBox
          margin="25px 60px 0"
          xl_margin="25px 60px 0"
          sm_width="85%"
          width="70%"
          xl_width="70%"
          flexdirection="column"
        >
          <Header level="3" text="Featured Course" />
        </FlexBox>

        <FeaturedCard
          poster="/banner/banner-5.jpg"
          superheading="Rhythm & Structure"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eligendi, aliquam rem quidem fugit culpa molestiae neque incidunt distinctio. Distinctio tenetur dolorem nihil deleniti eos iure rerum, minus rem reiciendis."
          heading="James Paick"
          margin="25px 0"
        />

        <RenderCourses
          selectedCourses={selectedCourses}
          noheading={true}
          width="33%"
        />

        <FlexBox
          margin="25px 60px 0"
          xl_margin="25px 60px 0"
          sm_width="85%"
          width="70%"
          xl_width="80%"
          flexdirection="column"
        >
          <FAQs results={selectedResults} />
        </FlexBox>

        <RegistrationBlock
          primary={false}
          heading="Not what you are looking for?"
          scale="xl"
          cta="View All Courses"
          ctaType="primary"
        />
      </FlexBox>
    </>
  );
}
