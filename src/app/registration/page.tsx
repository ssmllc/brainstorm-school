import type { Metadata } from "next";
import MediaBanner from "../components/banner/media-banner.component";
import { FlexContainer } from "../components/layout/container.component";
import RegistrationBlock from "../components/registration/registration-block.component";
import VideoContentSplit from "../components/registration/video-content-split.component";
import { Card } from "../components/card/card-card.component";
import { MiniCards } from "../components/card/mini-card.component";
import FlexBox from "../components/layout/flexbox.component";
import Header from "../components/text-block/header.component";
import FAQs from "@/app/components/text-block/faqs.component";

export const metadata: Metadata = {
  title: "About Brainstorm School",
  description:
    "Brainstorm School offers online courses for students of all levels including foundation classes, digital painting, character design, and more. Register Today!",
};

const fetchData = async () => {
  const query =
    "https://y8rjsgga.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27about%27%5D+%7B%0A++quarters%5B%5D+-%3E+%7B%0A++++_id%2C%0A++++nextup%2C%0A++++term%2C%0A++++year%2C%0A++++open%2C%0A++++start%2C%0A++%7D%2C%0A++faqs%5B%5D+-%3E+%7B%0A++++_id%2C%0A++++question%2C%0A++++answer%0A++%7D%0A%7D";
  // const response = await fetch(query);
  const response = await fetch(query, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  const { result } = await response.json();

  return result;
};

export default async function About() {
  const result = await fetchData();

  return (
    <>
      <MediaBanner
        header=""
        subHeader=""
        hero="false"
        theme="dark"
        background="/banner/banner-1.jpg"
      />

      <FlexBox
        margin="75px auto"
        flexdirection="column"
        alignitems="center"
        width="100%"
      >
        <FlexBox
          sm_width="80%"
          width="70%"
          flexdirection="column"
          margin="20px 0"
        >
          <Header
            level="1"
            text="Welcome to Brainstorm School! Are you Ready?"
          />
        </FlexBox>

        <FlexBox
          sm_width="80%"
          width="70%"
          flexdirection="column"
          margin="20px 0"
        >
          <Header
            level="2"
            text="Find the class you want to take and click `Register`"
          />

          <Header
            level="4"
            text="At Brainstorm School, your educational journey begins with becoming acquainted with our courses. Before you begin the application process, you should have a notion of which courses match your interests and your preferred study strategy."
            fontSize="15px"
            margin="10px 0 5px"
          />

          <Header
            level="4"
            text="If you are not quite ready to commit to a course and still have questions, please contact our helpful admissions team. We are dedicated to your success and are available to help you at every stage of your learning journey."
            fontSize="15px"
            margin="10px 0 5px"
          />

          <p
            style={{
              fontSize: "15px",
              margin: "10px 0 5px",
              color: "var(--white)",
            }}
          >
            If you are not sure where to begin, view our{" "}
            <a
              href="/courses"
              style={{
                fontSize: "15px",
                color: "var(--white)",
                textDecoration: "underline",
              }}
            >
              courses page
            </a>{" "}
            or our{" "}
            <a
              href="/faqs"
              style={{
                fontSize: "15px",
                color: "var(--white)",
                textDecoration: "underline",
              }}
            >
              FAQ page
            </a>{" "}
            for helpful information.
          </p>

          <Header
            level="4"
            text="Please enter your information below, and someone from our admissions office will contact you shortly!"
            fontSize="15px"
            margin="10px 0 5px"
          />
        </FlexBox>
      </FlexBox>
    </>
  );
}
