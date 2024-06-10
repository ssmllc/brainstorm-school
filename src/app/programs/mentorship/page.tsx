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
          md_margin="75px 60px 0"
          sm_margin="25px 60px 0"
          sm_width="85%"
          width="70%"
          md_width="70%"
          flexdirection="column"
        >
          <Header
            level="1"
            text="Brainstorm School Online Mentorship Program"
          />

          <Header
            level="4"
            text="Our online mentorships are not one-size-fits-all. They are meticulously designed to help students develop their skills and equip them with everything they need to succeed as artists. Whether you need to learn the basics or want to expand into different skill sets, our mentors are there to provide personalized guidance and support, tailoring their approach to your unique needs. This not only enhances your career prospects and creativity but also makes you feel valued and catered to. Our line up of core mentors will guide you through a full 12 week intensive program that will be 100% personalized to you!"
            fontSize="15px"
          />

          <Header
            level="4"
            text="At Brainstorm School, our mentors are professionals with years of experience in the industry. Their experience and expertise make our mentors well-equipped to guide students and mentees in honing their craft and exploring the scope of their talents. Working closely with mentors, participants in the mentorship program can benefit from their guidance and experience, inspiring confidence and equipping them with the valuable skills they need to succeed."
            fontSize="15px"
          />

          <Header
            level="4"
            text="Our online mentorships can assist you in advancing your career goals in animation, gaming, computer-generated art, and digital art. For three months, the main focus will be on a strategy centered on objectives, expectations, and outcomes. Weekly private learning sessions tailored to your needs, objectives, and desired outcomes will be held with your mentor!"
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
          md_width="70%"
          width="70%"
        >
          <Header
            level="2"
            text="There are three opportunities to begin a mentorship during the calendar year:"
            margin="20px 0"
            fontSize="15px"
          />
        </FlexBox>

        <FlexBox
          flexdirection="row"
          justifycontent="center"
          sm_margin="40px 60px 20px"
          md_margin="40px 60px 20px"
          margin="0 60px"
          sm_width="90%"
          md_width="70%"
          width="70%"
        >
          <Pill
            background="rgba(255, 255, 255, .10)"
            label="Summer"
            padding="12px 35px"
            boxshadow="0 0 7px var(--black)"
          />
          <Pill
            background="rgba(255, 255, 255, .10)"
            label="Spring"
            padding="12px 35px"
            boxshadow="0 0 7px var(--black)"
          />
          <Pill
            background="rgba(255, 255, 255, .10)"
            label="Fall"
            padding="12px 35px"
            boxshadow="0 0 7px var(--black)"
          />
        </FlexBox>

        <FlexBox
          margin="20px 60px 0"
          sm_margin="20px 25px"
          sm_width="85%"
          md_width="70%"
          flexwrap="wrap"
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
          md_width="70%"
          flexwrap="wrap"
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
          md_width="70%"
          flexwrap="wrap"
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

        {/* <FlexBox
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
        </FlexBox> */}
      </FlexBox>
    </>
  );
}
