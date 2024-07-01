import MediaBanner from "@/app/components/banner/media-banner.component";
import FlexBox from "@/app/components/layout/flexbox.component";
import RegistrationBlock from "@/app/components/registration/registration-block.component";
import Header from "@/app/components/text-block/header.component";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brainstorm Compliance Line",
  description: "Compliance line",
};

export default async function ComplianceLine() {
  return (
    <>
      <MediaBanner
        header="Compliance Line"
        label="About"
        subHeader="A safe learning environment"
        hero="false"
        theme="dark"
        background="/banner/banner-31.jpg"
      />

      <FlexBox
        alignitems="center"
        flexdirection="column"
        sm_margin="50px auto 50px"
        md_margin="50px auto 50px"
        margin="100px auto"
        xl_margin="100px auto"
        xxl_margin="100px auto"
      >
        <FlexBox
          flexdirection="column"
          sm_margin="20px 60px 0"
          md_margin="20px 60px 0"
          margin="20px 60px 0"
          xl_margin="20px 60px 0"
          xxl_margin="20px 60px 0"
          sm_width="85%"
          md_width="70%"
          width="70%"
          xl_width="80%"
          xxl_width="80%"
        >
          <Header level="1" text="Compliance Line" />
          <Header
            level="4"
            text=" We at Brainstorm aim to provide a safe learning environment."
            fontSize="15px"
          />
        </FlexBox>

        <FlexBox
          flexdirection="column"
          sm_margin="20px 60px 0"
          md_margin="20px 60px 0"
          margin="20px 60px 0"
          xl_margin="20px 60px 0"
          xxl_margin="20px 60px 0"
          sm_width="80%"
          md_width="70%"
          width="70%"
          xl_width="80%"
          xxl_width="80%"
        >
          <Header
            level="4"
            text="We understand that relationships with others are the basis of trust and a necessity for a wholesome community. We are all citizens of the world and members of our school community."
            fontSize="15px"
          />
          <Header
            level="4"
            text="We will participate in creating a positive school environment and have a zero tolerance of any misconduct such threatening acts to the health and safety of others. Students and Staff shall be respectful of school personnel, fellow students regardless of religious, national, ethnic, or social origin."
            fontSize="15px"
          />
        </FlexBox>

        <FlexBox
          flexdirection="column"
          sm_margin="20px 60px 0"
          md_margin="20px 60px 0"
          margin="20px 60px 0"
          xl_margin="20px 60px 0"
          xxl_margin="20px 60px 0"
          sm_width="80%"
          md_width="70%"
          width="70%"
          xl_width="80%"
          xxl_width="80%"
        >
          <Header level="2" text="We value diversity" />
          <Header
            level="4"
            text="We understand that a safe environment is important for the well-being of the school and art community as a whole. If you are ever feeling threatened, abused or harassed by a student, staff, or teacher please report to third party compliance hotline."
            fontSize="15px"
          />
        </FlexBox>

        <RegistrationBlock
          primary={true}
          heading="24 hours a day, 7 days a week"
          scale="xl"
          cta="Begin Report"
          ctaType="primary"
          href="https://www.mycompliancereport.com/report?cid=BSS&fbclid=IwAR2BbW3h-863VM3NoKK1SGJZmhYX13jdT5WAsIoy2INK6K8oObMTwwZolTI"
        />
      </FlexBox>
    </>
  );
}
