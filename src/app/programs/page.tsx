import MediaBanner from "@/app/components/banner/media-banner.component";
import FlexBox from "@/app/components/layout/flexbox.component";
import Pill from "@/app/components/pill/pill.component";
import Header from "@/app/components/text-block/header.component";
import AnchorCard from "@/app/components/tracks/track.component";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs | Brainstorm School",
  description:
    "Without mentorship, progressing can feel like an uphill battle. Brainstorm School is here to bridge that gap!",
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

export default async function Programs() {
  const result = await fetchData();

  return (
    <>
      <MediaBanner
        header=""
        subHeader=""
        hero="false"
        theme="dark"
        background="/banner/banner-19.jpg"
      />

      <FlexBox flexdirection="column" margin="100px auto" alignitems="center">
        <FlexBox
          margin="20px 60px 0"
          xl_margin="100px auto 0"
          md_margin="75px 60px 0"
          sm_margin="25px 60px 0"
          sm_width="85%"
          width="70%"
          xl_width="70%"
          md_width="70%"
          flexdirection="column"
        >
          <Header
            level="1"
            text="Master Concept Art with Brainstorms' Industry Programs"
          />

          <Header
            level="4"
            text="Without mentorship, progressing can feel like an uphill battle.
            Brainstorm School is here to bridge that gap!"
            fontSize="15px"
          />

          <Header
            level="4"
            text="Mentorships: Learn from industry professionals who are actively shaping the entertainment world. Gain insider knowledge and personalized feedback to elevate your skills."
            fontSize="15px"
          />

          <Header
            level="4"
            text="Scholarships Available: We offer scholarships to make our education accessible to talented students worldwide. Don’t let financial constraints hold you back from achieving your dreams."
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
          margin="20px 60px 10px"
          xl_margin="50px 60px"
          sm_margin="20px 25px"
          sm_width="85%"
          md_width="70%"
          width="70%"
          xl_width="70%"
        >
          <AnchorCard
            base="programs"
            path="mentorship"
            label="Mentorship"
            poster="https://cdn.sanity.io/images/y8rjsgga/production/dbe0f90d49ecc458b97ab1efcea97632eae87bf7-1866x1126.jpg"
            width="50%"
          />
          <AnchorCard
            base="programs"
            path="scholarship"
            label="Scholarship"
            poster="https://cdn.sanity.io/images/y8rjsgga/production/edafb39d7261d2f9492ac1728b2bd7a4c4725086-3885x1959.jpg"
            width="50%"
          />
        </FlexBox>
      </FlexBox>
    </>
  );
}
