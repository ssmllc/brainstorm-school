import MediaBanner from "@/app/components/banner/media-banner.component";
import ActionButton from "@/app/components/buttons/action-button.component";
import CardImageDetail from "@/app/components/card/card-image-detail.component";
import { CardImage } from "@/app/components/card/simple-card.component";
import FlexBox from "@/app/components/layout/flexbox.component";
import Pill from "@/app/components/pill/pill.component";
import Header from "@/app/components/text-block/header.component";
import Typography from "@/app/components/text-block/typography.component";
import AnchorCard from "@/app/components/tracks/track.component";
import TracksGroup from "@/app/components/tracks/tracks.component";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brainstorm Blog",
  description: "Blog",
};

const fetchData = async () => {
  const query =
    "https://y8rjsgga.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27workshops%27%5D+%7B%0A++workshoptitle%2C%0A++content%2C%0A++future%5B%5D+-%3E+%7B%0A++++_id%2C%0A++++workshopname%2C%0A++++slug%2C%0A++++instructor%2C%0A++++description%5B%5D-%3E%2C%0A++++date%2C%0A++++time%2C%0A++++location%2C%0A++++price%2C%0A++++registration%2C%0A++++%22imageUrl%22%3A+preview.asset-%3Eurl%2C%0A++++workexamples%5B%5D+-%3E%2C%0A++%7D%2C%0A++previous%5B%5D+-%3E+%7B%0A++++_id%2C%0A++++workshopname%2C%0A++++slug%2C%0A++++instructor%2C%0A++++description%5B%5D-%3E%2C%0A++++date%2C%0A++++time%2C%0A++++location%2C%0A++++price%2C%0A++++registration%2C%0A++++%22imageUrl%22%3A+preview.asset-%3Eurl%2C%0A++++workexamples%5B%5D+-%3E%2C%0A++%7D%2C%0A++content%2C%0A++faqs%5B%5D-%3E+%7B%0A++++_id%2C%0A++++question%2C%0A++++answer%0A++%7D%0A%7D";
  // const response = await fetch(query);
  const response = await fetch(query, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  const { result } = await response.json();

  return result;
};

export default async function Mentorship() {
  const result = await fetchData();

  // console.log("workshops", result[0].faqs);

  return (
    <>
      <MediaBanner
        header=""
        subHeader=""
        hero="false"
        theme="dark"
        background="/banner/banner-19.jpg"
        image="/banner/media-banner.png"
        media="/video/brainstorm-design-solve-learn.mp4"
      />

      <FlexBox flexdirection="column" margin="100px auto" alignitems="center">
        <FlexBox
          margin="20px 60px 0"
          sm_width="85%"
          width="70%"
          flexdirection="column"
        >
          <Header level="1" text="Mentorship" />

          <Header
            level="4"
            text="Brainstorm Online Mentorship programs are a true mentorship experience.  Our line up of core mentors will guide you along a full 12 week intensive program that will be 100% personalized to you!  A plan around goals, expectations and results will be the core focus for the 3 months.  You will meet with your mentor weekly to have private learning time specific to you, the goals and the results!"
            fontSize="15px"
          />

          <p style={{ fontSize: "15px", color: "var(--white)" }}>
            To register or questions:{" "}
            <a
              style={{
                color: "var(--white)",
                textDecoration: "underline",
              }}
              href="mailto:mentorship@brainstormschool.com"
            >
              mentorship@brainstormschool.com
            </a>
          </p>
        </FlexBox>

        <FlexBox
          sm_margin="40px 60px 20px"
          margin="20px 60px"
          sm_width="90%"
          width="70%"
          alignitems="center"
        >
          <Header
            level="4"
            text="Enroll for 2024 now!"
            margin="20px 0"
            fontweight="bold"
          />
        </FlexBox>

        <FlexBox
          margin="20px 60px 0"
          sm_margin="20px 25px"
          sm_width="85%"
          width="70%"
        >
          <AnchorCard
            label="Foundation Mentorship"
            name="Jonathan Kuo"
            poster="https://cdn.sanity.io/images/y8rjsgga/production/dbe0f90d49ecc458b97ab1efcea97632eae87bf7-1866x1126.jpg"
          />
          <AnchorCard
            label="Design Mentorship"
            name="Norris Lin"
            poster="https://cdn.sanity.io/images/y8rjsgga/production/edafb39d7261d2f9492ac1728b2bd7a4c4725086-3885x1959.jpg"
          />
          <AnchorCard
            label="Process Mentorship"
            name="Keshan Lam"
            poster="https://cdn.sanity.io/images/y8rjsgga/production/9c7210b2b15a0a81a7ddef73464dba57107501e3-1085x2048.jpg"
          />
          <AnchorCard
            label="Heartstorm Mentorship"
            name="Saiful Haque"
            poster="https://cdn.sanity.io/images/y8rjsgga/production/7fea55489b20ab06011bd39fbad35bace2170cbb-1075x1512.jpg"
          />
        </FlexBox>

        <FlexBox
          margin="20px 60px 0"
          sm_margin="20px 25px"
          sm_width="85%"
          width="70%"
        >
          <AnchorCard
            label="Mentorship Online"
            name="Oliver Beck"
            poster="https://cdn.sanity.io/images/y8rjsgga/production/dbe0f90d49ecc458b97ab1efcea97632eae87bf7-1866x1126.jpg"
          />
          <AnchorCard
            label="Character Design"
            name="Gue Yang"
            poster="https://cdn.sanity.io/images/y8rjsgga/production/edafb39d7261d2f9492ac1728b2bd7a4c4725086-3885x1959.jpg"
          />
          <AnchorCard
            label="Visual Development"
            name="Mike Hernandez"
            poster="https://cdn.sanity.io/images/y8rjsgga/production/9c7210b2b15a0a81a7ddef73464dba57107501e3-1085x2048.jpg"
          />
          <AnchorCard
            label="World Building"
            name="Joon Ahn"
            poster="https://cdn.sanity.io/images/y8rjsgga/production/7fea55489b20ab06011bd39fbad35bace2170cbb-1075x1512.jpg"
          />
        </FlexBox>

        <FlexBox
          margin="20px 60px 10px"
          sm_margin="20px 25px"
          sm_width="85%"
          width="70%"
        >
          <AnchorCard
            label="Advanced Mentorship"
            name="John Park"
            poster="https://cdn.sanity.io/images/y8rjsgga/production/dbe0f90d49ecc458b97ab1efcea97632eae87bf7-1866x1126.jpg"
          />
          <AnchorCard
            label="Advanced Mentorship"
            name="James Paick"
            poster="https://cdn.sanity.io/images/y8rjsgga/production/edafb39d7261d2f9492ac1728b2bd7a4c4725086-3885x1959.jpg"
          />
        </FlexBox>

        <FlexBox
          alignitems="center"
          flexdirection="column"
          margin="100px 60px 0"
          sm_width="85%"
          width="100%"
        >
          <Header
            text="Check out these courses"
            level="1"
            margin="20px 0 10px"
          />
          <FlexBox
            margin="20px 60px"
            sm_width="100%"
            width="100%"
            alignitems="center"
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
            />
            <CardImageDetail
              slug="workshops"
              path="introduction-to-zbrush"
              preview="/banner/banner-21.jpg"
              courseTrack="2D - 3D Concept Design"
              courseName="Introduction to ZBrush"
              courseCode="ZB1"
              courseTime="Fri 10am-1pm (PST)"
              courseDuration="10-week Course"
            />
            <CardImageDetail
              slug="workshops"
              path="introduction-to-zbrush"
              preview="/banner/banner-21.jpg"
              courseTrack="2D - 3D Concept Design"
              courseName="Introduction to ZBrush"
              courseCode="ZB1"
              courseTime="Fri 10am-1pm (PST)"
              courseDuration="10-week Course"
            />
            <CardImageDetail
              slug="workshops"
              path="introduction-to-zbrush"
              preview="/banner/banner-21.jpg"
              courseTrack="2D - 3D Concept Design"
              courseName="Introduction to ZBrush"
              courseCode="ZB1"
              courseTime="Fri 10am-1pm (PST)"
              courseDuration="10-week Course"
            />
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </>
  );
}
