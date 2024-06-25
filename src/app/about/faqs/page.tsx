import MediaBanner from "@/app/components/banner/media-banner.component";
import FlexBox from "@/app/components/layout/flexbox.component";
import FAQs from "@/app/components/text-block/faqs.component";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brainstorm School Frequently Asked Questions",
  description:
    "Questions about Brainstorm School? Learn more about enrolling at Brainstorm School. We've got you covered, from the registration process, course fees and prerequisites",
};

const fetchData = async () => {
  const query =
    "https://y8rjsgga.api.sanity.io/v2022-03-07/data/query/production?query=%7B%22faqs%22%3A+*%5B_type+%3D%3D+%27faq%27%5D+%7B%0A++question%2C%0A++answer%0A%7D%7D";
  // const response = await fetch(query);
  const response = await fetch(query, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  const { result } = await response.json();

  return result;
};

export default async function FAQ() {
  const result = await fetchData();

  return (
    <>
      <MediaBanner
        label="faqs"
        header="Frequently Asked Questions"
        subHeader="Answers to common questions"
        hero="false"
        theme="dark"
        background="/banner/banner-1.jpg"
        image="/banner/media-banner.png"
        media="/video/brainstorm-design-solve-learn.mp4"
      />

      <FlexBox sm_margin="50px 0" margin="50px 0" xl_margin="100px auto 100px">
        <FlexBox sm_width="80%" width="80%" xl_width="80%">
          <FAQs results={result} />
        </FlexBox>
      </FlexBox>
    </>
  );
}
