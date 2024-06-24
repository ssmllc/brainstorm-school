import MediaBanner from "@/app/components/banner/media-banner.component";
import CardImageDetail from "@/app/components/card/card-image-detail.component";
import FlexBox from "@/app/components/layout/flexbox.component";
import GallerySlide from "@/app/components/modal/gallery-slider.component";
import Header from "@/app/components/text-block/header.component";
import DecipherText from "@/app/courses/components/decipher-text.component";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Our Instructors | Brainstorm School",
  description:
    "Discover the insights of top industry professionals at Brainstorm School to guide you toward success in concept design for film, gaming, environment, and more. Register Today!",
};

const fetchData = async () => {
  const query =
    "https://y8rjsgga.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27instructors%27%5D+%7B%0A++_id%2C%0A++title%2C%0A++%22headshot%22%3A+photo.asset-%3E+url%2C%0A++%22slug%22%3A+slug.current%2C%0A++profession%2C%0A++%22imageUrl%22%3A+poster.asset-%3Eurl%2C%0A++bio%2C%0A++gallery+%5B%5D+-%3E+%7B%0A++++%22poster%22%3A+portfolio.asset-%3Eurl%0A++%7D%2C%0A++courses%5B%5D+-%3E+%7B%0A++++_id%2C%0A++++%22slug%22%3A+slug.current%2C%0A++++%22imageUrl%22%3A+preview.asset-%3Eurl%2C%0A++++code%2C%0A++++category%2C%0A++++section%2C%0A++++name%2C%0A++++price%2C%0A++++difficulty%2C%0A++++schedule%5B%5D+-%3E%2C%0A++%7D%0A%7D";
  // const response = await fetch(query);
  const response = await fetch(query, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  const { result } = await response.json();

  return result;
};

export default async function Instructors({
  params,
}: {
  params: { instructorsId: string };
}) {
  const result = await fetchData();

  const selectedInstructor = result.filter((instructor: any) => {
    return instructor.slug === params.instructorsId;
  });

  const { title, profession, headshot, imageUrl, bio, courses } =
    selectedInstructor[0];

  console.log("title", title);
  return (
    <>
      <MediaBanner
        header={title}
        subHeader={profession}
        hero="false"
        theme="dark"
        background={imageUrl}
        headshot={headshot}
        randomize={false}
      />

      <FlexBox
        flexdirection="column"
        sm_margin="50px auto"
        margin="100px auto 50px"
        xl_margin="100px auto 50px"
      >
        <FlexBox
          sm_margin="20px auto"
          md_margin="20px auto"
          margin="20px auto"
          xl_margin="20px auto"
          sm_width="70%"
          md_width="80%"
          width="70%"
          xl_width="80%"
          flexdirection="column"
        >
          <Header text="Instructor Bio" level="1" />

          <DecipherText description={bio} />
        </FlexBox>
      </FlexBox>

      <FlexBox
        alignitems="center"
        sm_margin="20px auto"
        md_margin="20px auto"
        margin="20px auto"
        xl_margin="20px auto"
        sm_width="100%"
        md_width="80%"
        width="100%"
        xl_width="80%"
        flexdirection="column"
      >
        <GallerySlide selectedInstructor={selectedInstructor} />
      </FlexBox>

      <FlexBox
        alignitems="center"
        borderTop="thin solid var(--medium-grey)"
        flexdirection="column"
        sm_margin="0 auto"
        margin="0 auto"
        xl_margin="75px auto"
        sm_width="80%"
        width="80%"
        xl_width="80%"
      >
        <Header
          text="Courses by this instructor"
          level="1"
          margin="50px 0 10px"
        />

        <FlexBox
          alignitems="center"
          justifycontent="center"
          sm_margin="20px auto"
          margin="20px auto"
          xl_margin="20px auto"
          sm_width="100%"
          width="100%"
          xl_width="100%"
        >
          {courses &&
            courses.map((course: any) => {
              const {
                _id,
                imageUrl,
                slug,
                category,
                name,
                code,
                schedule,
                price,
                difficulty,
              } = course;
              return (
                <CardImageDetail
                  key={_id}
                  base="/courses"
                  preview={imageUrl}
                  slug={
                    category
                      ? category
                          .toLocaleLowerCase()
                          .replaceAll(" ", "-")
                          .replaceAll("&", "and")
                      : "foundation"
                  }
                  path={slug}
                  courseTrack={category}
                  courseName={name}
                  courseCode={code}
                  courseTime={schedule && schedule[0]?.time}
                  courseDuration={schedule && schedule[0]?.duration}
                  coursePrice={price}
                  courseDifficulty={difficulty}
                  width={"100%"}
                />
              );
            })}
        </FlexBox>
      </FlexBox>
    </>
  );
}
