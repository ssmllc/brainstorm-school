import MediaBanner from "@/app/components/banner/media-banner.component";
import CardImageDetail from "@/app/components/card/card-image-detail.component";
import FeaturedCard from "@/app/components/card/featured-card.component";
import FlexBox from "@/app/components/layout/flexbox.component";
import FAQs from "@/app/components/text-block/faqs.component";
import Header from "@/app/components/text-block/header.component";
import Typography from "@/app/components/text-block/typography.component";
import AnchorCard from "@/app/components/tracks/track.component";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brainstorm Workshops",
  description: "Workshops",
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

export default async function Workshops() {
  const result = await fetchData();

  console.log("workshops", result[0].faqs);

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
          flexdirection="column"
          margin="20px 0"
          sm_width="80%"
          width="70%"
        >
          <Header level="1" text="Brainstorm School Open Canvas" />
          <Header
            level="4"
            fontSize="15px"
            text="At Brainstorm School, we are excited to introduce our Open Canvas Workshop, a dynamic platform designed to bring together artists from all walks of life. Whether you are a seasoned professional or an aspiring artist, our Open Canvas Workshop offers a unique opportunity to connect, create, and grow within a vibrant artist community."
          />
        </FlexBox>

        <FlexBox
          flexdirection="column"
          margin="20px 0"
          sm_width="80%"
          width="70%"
        >
          <Header level="2" text="What is the Open Canvas Workshop?" />
          <Header
            level="4"
            fontSize="15px"
            text="The Open Canvas Workshop is a series of interactive sessions that encourage creativity and collaboration among artists. This workshop is open to all skill levels and, structured similar to a podcast, can give students valuable insights into an artist's working process."
          />
        </FlexBox>

        <FlexBox
          flexdirection="column"
          margin="20px 0"
          sm_width="80%"
          width="70%"
        >
          <Header
            level="3"
            text="Benefits of Joining the Open Canvas Workshop"
          />

          <Header
            level="4"
            fontSize="15px"
            text="1. Connectivity: The Open Canvas workshops are designed to give you a glimpse into the classroom and an opportunity to meet and ask questions to our teachers and industry professionals."
          />

          <Header
            level="4"
            fontSize="15px"
            text="2. Informal Environment: Its an easy place to connect with professional artists, ask questions, and gain valuable insights from them as they discuss their careers or demo a specific art technique. The collaborative nature of the workshop fosters a sense of connectivity and community."
          />

          <Header
            level="4"
            fontSize="15px"
            text="3. Expert Guidance: Learn from experienced instructors who are passionate about teaching and sharing information about themselves and the industry. Providing the motivation you may need to keep you moving towards your goals."
          />
        </FlexBox>

        <FlexBox
          flexdirection="column"
          margin="20px 0"
          sm_width="80%"
          width="70%"
        >
          <Header level="3" text="Connecting with the Artist Community" />

          <Header
            level="4"
            fontSize="15px"
            text="One of the core aspects of the Open Canvas Workshop is the strong artist community it builds. Being part of a community of like-minded individuals can be incredibly motivating and inspiring. At Brainstorm School, we believe that the best learning happens when artists come together to share their experiences and knowledge. The Open Canvas Workshop is a perfect opportunity to expand your network, find potential collaborators, and make lasting friendships."
          />
        </FlexBox>

        <FlexBox
          flexdirection="column"
          margin="20px 0"
          sm_width="80%"
          width="70%"
        >
          <Header level="3" text="Online Open Canvas Workshop" />

          <Header
            level="4"
            fontSize="15px"
            text="In addition to our in-person sessions, we offer an online open canvas option for those who prefer or need to participate remotely. The online workshop provides the same interactive and engaging experience as our on-campus sessions, ensuring that you can benefit from the workshop no matter where you are. Our online platform is equipped with tools that facilitate real-time collaboration, feedback, and learning."
          />
        </FlexBox>

        <FlexBox flexdirection="column">
          <FlexBox flexdirection="column" sm_width="80%" margin="25px 0">
            <Header level="3" text="Free Courses" />
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
        </FlexBox>

        <FlexBox sm_width="80%">
          <FAQs results={result[0]} />
        </FlexBox>
      </FlexBox>
    </>
  );
}
