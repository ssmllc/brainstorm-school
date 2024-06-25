import type { Metadata } from "next";
import MediaBanner from "../components/banner/media-banner.component";
import FlexBox from "../components/layout/flexbox.component";
import Header from "../components/text-block/header.component";
import CoursesFAQs from "../components/faqs/courses-faqs.component";
import FeaturedCard from "../components/card/featured-card.component";
import RenderAllCourses from "./components/render-all-courses.component";

export const metadata: Metadata = {
  title: "All Courses | Brainstorm School",
  description:
    "Enhance your skills with live classes, personalized mentorship, workshops, and interactive boot camps. Join our vibrant community and elevate your creative career. Visit now to learn more!",
};

const fetchData = async () => {
  const query =
    "https://y8rjsgga.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27course%27%5D+%7C+order%28name+asc%29+%7B%0A++_id%2C%0A++name%2C%0A++%22slug%22%3A+slug.current%2C%0A++category%2C%0A++%22slug%22%3A+slug.current%2C%0A++%22imageUrl%22%3A+preview.asset-%3E+url%2C%0A++difficulty%2C%0A++price%2C%0A++schedule%5B%5D+-%3E+%7B%0A++++registration%2C%0A++++duration%2C%0A++++time%2C%0A++%7D%2C%0A++code%2C%0A++duration%2C%0A++description%2C%0A++section%2C%0A++_type%0A%7D";
  // const response = await fetch(query);
  const response = await fetch(query, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  const { result } = await response.json();

  return result;
};

export default async function Courses() {
  const result = await fetchData();

  let featuredCourse: any = [];

  for (let i = 0; i < 1; i++) {
    let idx = Math.floor(Math.random() * (result.length - 1 - 0 + 1) + 0);
    featuredCourse.push(result[idx]);
    result.splice(idx, 1);
  }

  console.log("featuredCourse", featuredCourse);

  const {
    name,
    category,
    imageUrl,
    slug,
    description,
    code,
    duration,
    schedule,
  } = featuredCourse[0];

  const categorySlug = category
    .toLocaleLowerCase()
    .replaceAll(" ", "-")
    .replaceAll("&", "and");
  const newPath = `/${categorySlug}/${slug}`;
  return (
    <>
      <MediaBanner
        header="Course Catalog"
        subHeader="2024"
        label="All Courses"
        hero="false"
        theme="dark"
        background="/banner/banner-19.jpg"
        image="/banner/media-banner.png"
        media="/video/brainstorm-design-solve-learn.mp4"
      />

      <FlexBox
        flexdirection="column"
        sm_margin="100px auto"
        xl_margin="100px auto 50px"
        margin="100px auto 0"
        alignitems="center"
      >
        <FlexBox
          flexdirection="column"
          margin="20px 0"
          xl_margin="20px 0"
          sm_width="80%"
          md_width="70%"
          width="70%"
          xl_width="80%"
        >
          <Header
            level="1"
            text="Unlock your creativity with our expert-led online courses"
          />

          <Header
            level="4"
            text="Are you ready to unleash your potential in concept art, environmental design, character design, storyboarding, and digital painting? At Brainstorm School, our expert-led online courses offer a unique blend of theory and practical application, equipping you with the skills to excel in your chosen field. Whether you're a novice seeking to master the basics or a seasoned professional looking to enhance your portfolio, our diverse range of courses is designed to unlock your creative power."
            fontSize="15px"
          />

          <Header
            level="4"
            text="All our courses are delivered online and are conducted live with the instructor. This means you'll be actively participating in the learning process, not just passively watching videos. You'll be expected to be present for the lessons throughout the duration of the course, which includes engaging lectures, interactive sessions, demos, and feedback. The class will meet in an online meeting room hosted by Brainstorm School."
            fontSize="15px"
          />

          <Header
            level="4"
            text="No in-person classes are offered at this time."
            fontSize="15px"
          />
        </FlexBox>
      </FlexBox>

      <FlexBox
        sm_width="100%"
        sm_margin="0 auto"
        flexdirection="column"
        alignitems="center"
      >
        <FeaturedCard
          poster={imageUrl}
          superheading={category}
          subheading="Featured Course"
          bio={description}
          heading={name}
          margin="25px 0"
          sm_margin="25px 0"
          tags={true}
          cta="View Course"
          base="courses"
          slug={newPath}
          code={code}
          time={schedule[0].time}
          duration={duration}
        />
      </FlexBox>

      <RenderAllCourses selectedCourses={result} width="33.33%" />

      <FlexBox flexdirection="column" margin="100px auto" alignitems="center">
        <FlexBox
          margin="25px 60px 0"
          xl_margin="25px 60px 0"
          sm_width="80%"
          width="70%"
          xl_width="80%"
          flexdirection="column"
        >
          <CoursesFAQs />
        </FlexBox>
      </FlexBox>
    </>
  );
}
