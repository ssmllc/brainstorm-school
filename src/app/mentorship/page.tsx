import MediaBanner from "@/app/components/banner/media-banner.component";
import FlexBox from "@/app/components/layout/flexbox.component";
import Pill from "@/app/components/pill/pill.component";
import Header from "@/app/components/text-block/header.component";
import AnchorCard from "@/app/components/tracks/track.component";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brainstorm Online Mentorship Programs - Brainschool School",
  description:
    "Elevate your design skills with personalized mentorships. Collaborate with industry experts to sharpen your abilities and achieve your professional aspirations. Register Today!",
};

const fetchData = async () => {
  const query =
    "https://y8rjsgga.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27mentorship%27%5D+%7B%0A++_id%2C%0A++%22slug%22%3A+slug.current%2C%0A++%22imageUrl%22%3A+preview.asset-%3Eurl%2C%0A++mentorship%2C%0A++programs%5B%5D+-%3E+%7B%0A++++_id%2C%0A++++mentor%2C%0A++++description%2C%0A++++registration%2C%0A++++program_name%2C%0A++%7D%2C%0A%7D";
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
        label="Programs"
        header="Mentorship"
        subHeader="One-on-One Mentorship"
        hero="false"
        theme="dark"
        background="/banner/banner-19.jpg"
      />

      <FlexBox
        flexdirection="column"
        sm_margin="50px auto 50px"
        md_margin="50px auto 50px"
        margin="50px auto"
        xl_margin="100px auto"
        xxl_margin="100px auto"
        alignitems="center"
      >
        <FlexBox
          flexdirection="column"
          sm_margin="25px 0"
          md_margin="75px 0"
          margin="20px 0"
          xl_margin="20px 0"
          xxl_margin="20px 0"
          sm_width="85%"
          md_width="70%"
          width="70%"
          xl_width="80%"
          xxl_width="80%"
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
          sm_margin="40px auto 20px"
          md_margin="40px auto 20px"
          margin="20px 60px"
          xl_margin="20px 60px"
          xxl_margin="20px 60px"
          sm_width="80%"
          md_width="70%"
          width="70%"
          xl_width="80%"
          xxl_width="80%"
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
          sm_margin="20px 60px"
          md_margin="40px 60px 20px"
          margin="0 60px"
          xl_margin="0 60px"
          xxl_margin="0 60px"
          sm_width="90%"
          md_width="70%"
          width="70%"
          xl_width="80%"
          xxl_width="80%"
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
          flexwrap="wrap"
          sm_margin="20px 25px"
          md_margin="20px 25px"
          margin="20px 60px 0"
          xl_margin="20px 60px 0"
          xxl_margin="20px 60px 0"
          sm_width="80%"
          md_width="70%"
          width="70%"
          xl_width="80%"
          xxl_width="80%"
        >
          {result &&
            result.map((data: any) => {
              const { _id, slug, imageUrl, programs } = data;
              const { program_name, mentor } = programs[0];
              return (
                <AnchorCard
                  key={_id}
                  base="mentorship"
                  path={slug}
                  label={program_name}
                  name={mentor}
                  poster={imageUrl}
                  width="24%"
                  xl_width="24%"
                />
              );
            })}
        </FlexBox>
      </FlexBox>
    </>
  );
}
