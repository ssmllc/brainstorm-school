import MediaBanner from "@/app/components/banner/media-banner.component";
import FlexBox from "@/app/components/layout/flexbox.component";
import RegistrationBlock from "@/app/components/registration/registration-block.component";
import FAQsV2 from "@/app/components/text-block/faqs-v2.component";
import Header from "@/app/components/text-block/header.component";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brainstorm School Scholarships",
  description:
    "Discover opportunities for artists with the Brainstorm School Scholarship Program or financial payment plans to pursue your passion in gaming design. Apply today",
};

export default async function Scholarship() {
  return (
    <>
      <MediaBanner
        label="Programs"
        header="Scholarship"
        subHeader="Apply for our scholarship program"
        hero="false"
        theme="dark"
        background="/banner/banner-19.jpg"
        image="/banner/media-banner.png"
        media="/video/brainstorm-design-solve-learn.mp4"
      />

      <FlexBox
        alignitems="center"
        flexdirection="column"
        sm_margin="100px auto 50px"
        margin="100px auto"
        xl_margin="100px auto"
      >
        <FlexBox
          sm_margin="20px 60px 0"
          margin="20px 60px 0"
          xl_margin="20px 60px 0"
          sm_width="80%"
          width="70%"
          xl_width="80%"
          flexdirection="column"
        >
          <Header
            level="1"
            text="Discover Brainstorm School Scholarship Opportunities"
          />
          <Header
            level="4"
            text="At Brainstorm School, we are committed to nurturing the next generation of creative professionals. We understand that pursuing your passion for art and design can be financially challenging, which is why we offer a scholarship. Our scholarships and payment plan options are designed to make our courses accessible to talented students from all backgrounds."
            fontSize="15px"
          />
        </FlexBox>

        <FlexBox
          flexdirection="column"
          sm_margin="20px 60px 0"
          margin="20px 60px 0"
          xl_margin="20px 60px 0"
          sm_width="80%"
          width="70%"
          xl_width="80%"
        >
          <Header level="2" text="What is the Brainstorm School Scholarship?" />
          <Header
            level="4"
            text="The Brainstorm School Scholarship is a program dedicated to supporting students who demonstrate artistic talent and a strong commitment to their craft. Our goal is to reduce the financial burden on aspiring artists, enabling them to focus on their education and creative development. Whether you are interested in concept design, illustration, or any of our other concept courses, our scholarships can help you realize your potential without the worry of overwhelming tuition costs."
            fontSize="15px"
          />
        </FlexBox>

        <FlexBox
          flexdirection="column"
          sm_margin="20px 60px 0"
          margin="20px 60px 0"
          xl_margin="20px 60px 0"
          sm_width="80%"
          width="70%"
          xl_width="80%"
        >
          <Header level="2" text="Online Brainstorm School Scholarship" />
          <Header
            level="4"
            text="Brainstorm School offers a range of online courses that provide high-quality education and expert instruction. Our online school scholarship is specifically designed for students who prefer or need to study remotely. This scholarship ensures that distance and location do not hinder access to our exceptional learning opportunities. By applying for an online scholarship, you can benefit from our comprehensive curriculum and advance your skills from the comfort of your home."
            fontSize="15px"
          />
        </FlexBox>

        <FlexBox
          flexdirection="column"
          sm_margin="20px 60px 0"
          margin="20px 60px 0"
          xl_margin="20px 60px 0"
          sm_width="80%"
          width="70%"
          xl_width="80%"
        >
          <Header level="2" text="Best of term scholarships." />
          <Header
            level="4"
            text="This is an award for current, hardworking Brainstorm students. At the end of the term, each instructor will nominate a student for Best of Term. Five winners who are the top students each term will win a free class for the following term. It is our way of potentially rewarding students for their hard work."
            fontSize="15px"
          />
        </FlexBox>

        <RegistrationBlock
          primary={true}
          heading="Scholarship Applications"
          scale="xl"
          cta="Apply Now"
          ctaType="primary"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeUlK815oUWyjMKRorqD6KMcESkx67JuJ3rrhq4toegr4HtYw/closedform"
        />

        <FlexBox xl_width="80%" width="70%" sm_width="80%">
          <FAQsV2 />
        </FlexBox>
      </FlexBox>
    </>
  );
}
