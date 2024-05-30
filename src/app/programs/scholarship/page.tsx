import MediaBanner from "@/app/components/banner/media-banner.component";
import ActionButton from "@/app/components/buttons/action-button.component";
import CardImageDetail from "@/app/components/card/card-image-detail.component";
import { CardImage } from "@/app/components/card/simple-card.component";
import FlexBox from "@/app/components/layout/flexbox.component";
import Pill from "@/app/components/pill/pill.component";
import RegistrationBlock from "@/app/components/registration/registration-block.component";
import Header from "@/app/components/text-block/header.component";
import Typography from "@/app/components/text-block/typography.component";
import AnchorCard from "@/app/components/tracks/track.component";
import TracksGroup from "@/app/components/tracks/tracks.component";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brainstorm School Scholarships",
  description:
    "Discover opportunities for artists with the Brainstorm School Scholarship Program or financial payment plans to pursue your passion in gaming design. Apply today",
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

      <FlexBox flexdirection="column" margin="150px auto" alignitems="center">
        <FlexBox
          margin="20px 60px 0"
          sm_width="85%"
          width="70%"
          flexdirection="column"
        >
          <Header
            level="1"
            text="Discover Brainstorm School Scholarship Opportunities"
          />
          <Header
            level="4"
            text="At Brainstorm School, we are committed to nurturing the next generation of creative professionals. We understand that pursuing your passion for art and design can be financially challenging, which is why we offer a scholarship. Our scholarships and payment plan options are designed to make our courses accessible to talented students from all backgrounds."
            fontsize="15px"
          />
        </FlexBox>
        <FlexBox
          margin="20px 60px 0"
          sm_width="85%"
          width="70%"
          flexdirection="column"
        >
          <Header level="2" text="What is the Brainstorm School Scholarship?" />
          <Header
            level="4"
            text="The Brainstorm School Scholarship is a program dedicated to supporting students who demonstrate artistic talent and a strong commitment to their craft. Our goal is to reduce the financial burden on aspiring artists, enabling them to focus on their education and creative development. Whether you are interested in concept design, illustration, or any of our other concept courses, our scholarships can help you realize your potential without the worry of overwhelming tuition costs."
            fontsize="15px"
          />
        </FlexBox>

        <FlexBox
          margin="20px 60px 0"
          sm_width="85%"
          width="70%"
          flexdirection="column"
        >
          <Header level="2" text="Online Brainstorm School Scholarship" />
          <Header
            level="4"
            text="Brainstorm School offers a range of online courses that provide high-quality education and expert instruction. Our online school scholarship is specifically designed for students who prefer or need to study remotely. This scholarship ensures that distance and location do not hinder access to our exceptional learning opportunities. By applying for an online scholarship, you can benefit from our comprehensive curriculum and advance your skills from the comfort of your home."
            fontsize="15px"
          />
        </FlexBox>

        <FlexBox
          margin="20px 60px 0"
          sm_width="85%"
          width="70%"
          flexdirection="column"
        >
          <Header
            level="2"
            text="How to Apply for the Brainstorm School Scholarship"
          />
          <Header
            level="4"
            text="Applying for the Brainstorm School Scholarship is a straightforward process. Prospective students need to complete an application form and submit a portfolio showcasing their artistic abilities. Detailed instructions and deadlines for scholarship applications can be found on our FAQ page."
            fontsize="15px"
          />
        </FlexBox>
        <FlexBox
          margin="20px 60px 0"
          sm_width="85%"
          width="70%"
          flexdirection="column"
        >
          <Header
            level="4"
            text="**Scholarships awarded to students before the start of each term, can only be used for the classes that are eligible for scholarship use."
            fontsize="15px"
          />

          <Header
            level="4"
            text="*Please note that our scholarship policy is subject to change each school term."
            fontsize="15px"
          />

          <Header
            level="4"
            text="*Full or partial scholarships cannot be used towards classes that have already been purchased. If a student has already registered for a class, and is awarded a scholarship for the same course, Brainstorm will provide school credits to be used in future term courses."
            fontsize="15px"
          />

          <Header
            level="4"
            text="*The email used to register will be used for correspondence between school and students."
            fontsize="15px"
          />

          <Header
            level="4"
            text="*Scholarship award registration fee: $25.99"
            fontsize="15px"
            fontweight="bold"
          />
        </FlexBox>

        <FlexBox
          margin="20px 60px 0"
          sm_width="85%"
          width="70%"
          flexdirection="column"
        >
          <Header level="3" text="Why Choose Brainstorm School?" />
          <Header
            level="4"
            text="By choosing Brainstorm School, you are investing in an education that will equip you with the skills and knowledge needed to excel in the competitive world of art and design."
            fontsize="15px"
          />
        </FlexBox>

        <FlexBox
          margin="20px 60px 0"
          sm_width="85%"
          width="70%"
          flexdirection="column"
        >
          <Header level="3" text="Best of term scholarships." />
          <Header
            level="4"
            text="This is an award for current, hardworking Brainstorm students. At the end of the term, each instructor will nominate a student for Best of Term. Five winners who are the top students each term will win a free class for the following term. It is our way of potentially rewarding students for their hard work."
            fontsize="15px"
          />
        </FlexBox>

        <RegistrationBlock
          primary={true}
          heading="Scholarship Applications"
          scale="xl"
          cta="Apply Now"
          ctaType="primary"
        />

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
