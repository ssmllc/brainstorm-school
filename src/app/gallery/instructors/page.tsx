import MediaBanner from "@/app/components/banner/media-banner.component";
import FlexBox from "@/app/components/layout/flexbox.component";
import FAQs from "@/app/components/text-block/faqs.component";
import Header from "@/app/components/text-block/header.component";
import AnchorCard from "@/app/components/tracks/track.component";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Brainstorm School",
  description:
    "Brainstorm School's gallery. Immerse yourself in a visual journey of creativity, innovation, and talent from our students and instructors. Register Today!",
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

export default async function Gallery() {
  const result = await fetchData();

  console.log("workshops", result[0].faqs);

  return (
    <>
      <MediaBanner
        header=""
        subHeader=""
        hero="false"
        theme="dark"
        background="/banner/banner-21.jpg"
        image="/banner/media-banner.png"
        media="/video/brainstorm-design-solve-learn.mp4"
      />

      <FlexBox flexdirection="column" margin="100px auto" alignitems="center">
        <FlexBox
          flexdirection="column"
          margin="20px 0"
          sm_width="80%"
          width="70%"
        >
          <Header level="1" text="Instructors Gallery" />

          <Header
            level="4"
            fontSize="15px"
            text="Our instructor gallery features the works of Brainstorm School's esteemed instructors. These pieces serve as both inspiration and benchmarks for our students, demonstrating the high level of expertise and creativity that our instructors bring to the classroom"
          />
        </FlexBox>

        <FlexBox flexdirection="column" margin="75px 0 0">
          <FlexBox>
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
              label="Mentorship Online"
              name="Oliver Beck"
              poster="https://cdn.sanity.io/images/y8rjsgga/production/dbe0f90d49ecc458b97ab1efcea97632eae87bf7-1866x1126.jpg"
            />
            <AnchorCard
              label="Character Design"
              name="Gue Yang"
              poster="https://cdn.sanity.io/images/y8rjsgga/production/edafb39d7261d2f9492ac1728b2bd7a4c4725086-3885x1959.jpg"
            />
          </FlexBox>

          <FlexBox>
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
              label="Mentorship Online"
              name="Oliver Beck"
              poster="https://cdn.sanity.io/images/y8rjsgga/production/dbe0f90d49ecc458b97ab1efcea97632eae87bf7-1866x1126.jpg"
            />
            <AnchorCard
              label="Character Design"
              name="Gue Yang"
              poster="https://cdn.sanity.io/images/y8rjsgga/production/edafb39d7261d2f9492ac1728b2bd7a4c4725086-3885x1959.jpg"
            />
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </>
  );
}
