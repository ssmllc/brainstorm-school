import ActionButton from "@/app/components/buttons/action-button.component";
import CardImageDetail from "@/app/components/card/card-image-detail.component";
import { CardImage } from "@/app/components/card/simple-card.component";
import FlexBox from "@/app/components/layout/flexbox.component";
import Pill from "@/app/components/pill/pill.component";
import Header from "@/app/components/text-block/header.component";
import DecipherText from "@/app/courses/components/decipher-text.component";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs, News, and Insights | Brainstorm School",
  description:
    "Explore insights, tips, and inspiration from artists on the Brainstorm School blog. Elevate your skills, and stay updated with the latest design and gaming trends.",
};

const fetchData = async () => {
  const query =
    "https://y8rjsgga.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27blogs%27%5D+%7B%0A++_id%2C%0A++metatitle%2C%0A++metadescription%2C%0A++headline%2C%0A++%22imageUrl%22%3A+poster.asset-%3Eurl%2C%0A++%22slug%22%3A+slug.current%2C%0A++content1%2C%0A++content2%2C%0A++content3%2C%0A++related%5B%5D+-%3E+%7B%0A++++_id%2C%0A++++category%2C%0A++++%22imageUrl%22%3A+preview.asset-%3Eurl%2C%0A++++name%2C%0A++++%22slug%22%3A+slug.current%2C%0A++++code%2C%0A++++schedule%5B%5D-%3E%2C%0A++++price%2C%0A++++difficulty%2C%0A++%7D%2C%0A%7D";
  // const response = await fetch(query);
  const response = await fetch(query, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  const { result } = await response.json();

  return result;
};

export default async function BlogDetails({
  params,
}: {
  params: { blogId: string };
}) {
  const result = await fetchData();

  const selectedResults = result.filter((course: any) => {
    return course.slug === params.blogId;
  })[0];

  const { imageUrl, slug, content1, content2, content3, related } =
    selectedResults;

  return (
    <>
      <FlexBox flexdirection="column" xl_margin="150px auto">
        <FlexBox
          flexdirection="column"
          sm_margin="20px 25px"
          margin="20px 60px"
          xl_margin="0 auto"
          sm_width="85%"
          width="70%"
          xl_width="70%"
        >
          <DecipherText description={content1} />

          <CardImage preview={imageUrl} width="100%" height="450px" />

          <DecipherText description={content2} />
        </FlexBox>

        {/* <FlexBox
          sm_margin="20px 60px"
          margin="20px 60px"
          xl_margin="20px auto"
          sm_width="85%"
          width="70%"
          xl_width="70%"
        >
          <CardImage
            height="200px"
            preview="/banner/banner-2.jpg"
            width="33%"
          />
          <CardImage
            height="200px"
            preview="/banner/banner-3.jpg"
            width="33%"
          />
          <CardImage
            height="200px"
            preview="/banner/banner-4.jpg"
            width="33%"
          />
        </FlexBox> */}

        <FlexBox
          flexdirection="column"
          sm_margin="20px 25px"
          margin="20px 60px"
          xl_margin="0 auto"
          sm_width="85%"
          width="70%"
          xl_width="70%"
        >
          <DecipherText description={content3} />
        </FlexBox>

        {/* <FlexBox
          alignitems="center"
          sm_margin="20px 60px"
          margin="20px 60px"
          xl_margin="20px auto"
          sm_width="85%"
          width="70%"
          xl_width="70%"
        >
          <CardImageDetail
            slug="workshops"
            path="introduction-to-zbrush"
            preview="/banner/banner-21.jpg"
            courseTrack="2D - 3D Concept Design"
            courseName="Introduction to ZBrush"
            courseCode="ZB1"
            courseTime="Fri 10am-1pm (PST)"
            courseDuration="10-week Course"
            width="50%"
          />
          <FlexBox
            alignitems="center"
            flexdirection="column"
            sm_margin="20px 60px"
            margin="20px 60px"
            xl_margin="20px 60px"
            sm_width="85%"
            width="70%"
            xl_width="70%"
            sm_textalign="center"
            textalign="center"
          >
            <Header level="4" text="This blog mentions this course." />
            <ActionButton
              type="primary"
              label="Register Today"
              margin="20px 0"
            />
          </FlexBox>
        </FlexBox> */}

        {/* <FlexBox
          alignitems="center"
          sm_margin="40px 60px 20px"
          margin="20px 60px"
          xl_margin="20px auto"
          sm_width="90%"
          width="70%"
          xl_width="70%"
        >
          <Header level="4" text="More like this" margin="20px 0" />
          <FlexBox
            flexwrap="wrap"
            sm_margin="20px 40px"
            margin="20px 40px"
            xl_margin="20px 40px"
            sm_width="85%"
            width="70%"
            xl_width="70%"
          >
            <Pill padding="15px 20px" label="Understanding Proportions" />
            <Pill padding="15px 20px" label="Basic Anatomy" />
            <Pill padding="15px 20px" label="Gesture & Rhythm" />
            <Pill padding="15px 20px" label="Intro to construction" />
            <Pill padding="15px 20px" label="Anatomical Focus" />
          </FlexBox>
        </FlexBox> */}

        <FlexBox
          alignitems="center"
          borderTop="thin solid var(--medium-grey)"
          flexdirection="column"
          sm_margin="0 60px"
          margin="0 60px"
          xl_margin="50px auto"
          sm_width="85%"
          width="100%"
          xl_width="80%"
        >
          <Header
            text="Courses releated to this blog"
            level="1"
            margin="50px 0 10px"
          />
          <FlexBox
            sm_margin="20px 60px"
            margin="20px 60px"
            xl_margin="20px 60px"
            sm_width="100%"
            width="80%"
            xl_width="100%"
            alignitems="center"
            justifycontent="center"
          >
            {related &&
              related.map((course: any) => {
                const {
                  _id,
                  slug,
                  category,
                  imageUrl,
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
                    width={"33%"}
                  />
                );
              })}
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </>
  );
}
