import MediaBanner from "@/app/components/banner/media-banner.component";
import FlexBox from "@/app/components/layout/flexbox.component";
import Header from "@/app/components/text-block/header.component";
import AnchorCard from "@/app/components/tracks/track.component";
import type { Metadata } from "next";
import FeaturedCard from "../components/card/featured-card.component";

export const metadata: Metadata = {
  title: "Blogs, News, and Insights | Brainstorm School",
  description:
    "Explore insights, tips, and inspiration from artists on the Brainstorm School blog. Elevate your skills, and stay updated with the latest design and gaming trends.",
};

const fetchData = async () => {
  const query =
    "https://y8rjsgga.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27instructors%27%5D+%7B%0A++_id%2C%0A++title%2C%0A++slug%2C%0A++profession%2C%0A++%22imageUrl%22%3A+poster.asset-%3Eurl%2C%0A++bio%0A%7D";
  // const response = await fetch(query);
  const response = await fetch(query, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  const { result } = await response.json();

  return result;
};

export default async function Blog() {
  const result = await fetchData();

  return (
    <>
      <MediaBanner
        header="Blogs"
        subHeader="Latest on Brainstorm"
        label="Blog"
        hero="false"
        theme="dark"
        background="/banner/banner-19.jpg"
        image="/banner/media-banner.png"
        media="/video/brainstorm-design-solve-learn.mp4"
      />

      <FlexBox
        flexdirection="column"
        xl_margin="100px auto"
        margin="100px auto"
        alignitems="center"
      >
        <FlexBox
          flexdirection="column"
          margin="20px 60px 0"
          xl_margin="20px 60px 0"
          sm_width="85%"
          width="70%"
          xl_width="80%"
        >
          <Header
            level="1"
            text="Brainstorm School Blog - Explore Insights, Tips, and Inspiration"
          />

          <Header
            level="4"
            text="Welcome to the Brainstorm School blog, your go-to source for expert insights, practical tips, and creative inspiration from some of the most talented artists in the industry. Whether you're looking to elevate your skills, stay updated with the latest design and gaming trends, or simply find inspiration for your next project, our blog has something for everyone."
            fontSize="15px"
          />
        </FlexBox>

        <FlexBox
          flexdirection="column"
          margin="20px 60px 0"
          xl_margin="20px 60px 0"
          sm_width="85%"
          width="70%"
          xl_width="80%"
        >
          <Header level="2" text="Insights from Industry Experts" />

          <Header
            level="4"
            text="Our blog features a wealth of articles written by industry professionals who share their experiences and knowledge. These insights can help you navigate the ever-evolving world of art and design. Learn about the latest techniques, discover new tools, and get advice on how to succeed in the competitive creative industry."
            fontSize="15px"
          />
        </FlexBox>

        <FlexBox
          flexdirection="column"
          margin="25px 60px 0"
          xl_margin="25px 60px 0"
          sm_width="85%"
          width="70%"
          xl_width="80%"
        >
          <Header level="2" text="Practical Tips for Artists" />

          <Header
            level="4"
            text="At Brainstorm School, we believe in providing actionable advice that you can apply to your own work. Our blog is packed with practical tips and tutorials designed to help you improve your skills and overcome common challenges faced by artists."
            fontSize="15px"
          />
        </FlexBox>

        <FlexBox
          flexdirection="column"
          margin="25px 60px 0"
          xl_margin="25px 60px 0"
          sm_width="85%"
          width="70%"
          xl_width="80%"
        >
          <Header level="2" text="Inspiration to Fuel Your Creativity" />

          <Header
            level="4"
            text="Finding inspiration can sometimes be the biggest hurdle for an artist. Our blog is dedicated to sparking your creativity by showcasing stunning artwork, sharing artist success stories, and exploring innovative trends in the design and gaming industries."
            fontSize="15px"
          />
        </FlexBox>

        <FlexBox
          margin="25px 60px 0"
          xl_margin="25px 60px 0"
          sm_width="85%"
          width="70%"
          xl_width="80%"
          flexdirection="column"
        >
          <Header level="2" text="Stay Updated with the Latest Trends" />

          <Header
            level="4"
            text="The world of art and design is constantly evolving, and it's essential to stay informed about the latest trends and developments. Our blog covers a wide range of topics, including emerging trends in digital art, game design, and animation."
            fontSize="15px"
          />
        </FlexBox>

        <FlexBox
          margin="20px 60px 0"
          xl_margin="20px 60px 0"
          sm_margin="20px 25px"
          sm_width="85%"
          width="70%"
          xl_width="80%"
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px 20px",
              width: "100%",
            }}
          >
            <AnchorCard
              base="blog"
              path="blog-1"
              label="Blog 1"
              poster="/banner/banner-1.jpg"
              width="100%"
            />

            <AnchorCard
              base="blog"
              path="blog-2"
              label="Blog 2"
              poster="/banner/banner-2.jpg"
              width="100%"
            />

            <AnchorCard
              base="blog"
              path="blog-3"
              label="Blog 3"
              poster="/banner/banner-3.jpg"
              width="100%"
            />

            <AnchorCard
              base="blog"
              path="blog-4"
              label="Blog 4"
              poster="/banner/banner-4.jpg"
              width="100%"
            />
          </div>
        </FlexBox>
      </FlexBox>
    </>
  );
}
