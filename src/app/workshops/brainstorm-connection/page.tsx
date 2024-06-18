import MediaBanner from "@/app/components/banner/media-banner.component";
import FlexBox from "@/app/components/layout/flexbox.component";
import RegistrationBlock from "@/app/components/registration/registration-block.component";
import FAQs from "@/app/components/text-block/faqs.component";
import Header from "@/app/components/text-block/header.component";
import AnchorCard from "@/app/components/tracks/track.component";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connection | In-Person Workshop | Brainstorm School",
  description:
    "Get ready for an in-person experience at our Brainstorm Connection Workshops! Join us for a weekend packed with art, community, and networking opportunities. Register Today!",
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
        header="Brainstorm Connection"
        subHeader="In Person Events"
        label="Workshops"
        hero="false"
        theme="dark"
        background="/banner/banner-19.jpg"
        image="/banner/media-banner.png"
        media="/video/brainstorm-design-solve-learn.mp4"
      />

      <FlexBox
        flexdirection="column"
        sm_margin="100px auto 50px"
        margin="100px auto"
        xl_margin="100px auto 0"
        alignitems="center"
      >
        <FlexBox
          flexdirection="column"
          margin="20px 0"
          xl_margin="20px 0"
          sm_margin="25px 0"
          md_margin="75px 0"
          sm_width="80%"
          md_width="70%"
          width="70%"
          xl_width="70%"
        >
          <Header level="1" text="Brainstorm School In-Person Workshops" />
          <Header
            level="4"
            fontSize="15px"
            text="In the digital age, the power of in-person interaction remains unmatched, especially in the creative fields. At Brainstorm School, we understand the value of face-to-face learning and the unique benefits it brings. Our in-person workshops are designed to foster creativity, provide hands-on experience, and offer unparalleled networking opportunities for artists of all levels."
          />
        </FlexBox>

        <FlexBox
          flexdirection="column"
          sm_margin="20px 0"
          margin="20px 0"
          xl_margin="20px 0"
          sm_width="80%"
          md_width="70%"
          width="70%"
          xl_width="70%"
        >
          <Header level="2" text="Why Choose In-Person Workshops?" />
          <Header
            level="4"
            fontSize="15px"
            text="In-person workshops provide a dynamic and immersive learning environment. Participants can engage directly with instructors, ask questions in real-time, and connect with like minded people.
            The live format not only enhances understanding but also helps students to grow their network. At Brainstorm School, our in-person artist workshops are crafted to maximize these benefits, ensuring that every attendee leaves with new skills and insights."
          />
        </FlexBox>

        <FlexBox
          flexdirection="column"
          sm_margin="20px 0"
          margin="20px 0"
          xl_margin="20px 0"
          sm_width="80%"
          md_width="70%"
          width="70%"
          xl_width="70%"
        >
          <Header level="2" text="Networking Opportunities" />

          <Header
            level="4"
            fontSize="15px"
            text="One of the standout advantages of attending our in-person workshops is the chance to network with fellow artists. These networking opportunities are invaluable for building connections within the art community, exchanging ideas, and even finding potential collaborators for future projects. During our workshops, you'll have ample time to interact with peers, share your experiences, and learn from others' perspectives. These connections can lead to long-term professional relationships and open doors to new career opportunities."
          />
        </FlexBox>

        <FlexBox
          flexdirection="column"
          sm_margin="20px 0"
          margin="20px 0"
          xl_margin="20px 0"
          sm_width="80%"
          md_width="70%"
          width="70%"
          xl_width="70%"
        >
          <Header level="2" text="In-Person Artist" />

          <Header
            level="4"
            fontSize="15px"
            text="Brainstorm School offers a variety of in-person artist workshops tailored to different skill levels and artistic interests. Whether you're a beginner looking to learn the basics or a seasoned artist aiming to refine your techniques, we have a workshop that suits your needs. Our instructors are industry professionals with years of experience, ready to share their knowledge and guide you through your artistic journey."
          />
        </FlexBox>

        <FlexBox
          flexdirection="column"
          sm_margin="20px 0"
          margin="20px 0"
          xl_margin="20px 0"
          sm_width="80%"
          md_width="70%"
          width="70%"
          xl_width="70%"
        >
          <Header level="3" text="Weekend In-Person Workshops" />

          <Header
            level="4"
            fontSize="15px"
            text="For those with busy schedules, our weekend in-person workshops provide the perfect solution. These intensive sessions are designed to fit into your weekend, allowing you to dive deep into specific topics without long-term time commitments. Over the course of a weekend, you can immerse yourself in focused studying a room full of like minded artists"
          />
        </FlexBox>

        <FlexBox
          flexdirection="column"
          sm_margin="20px 0"
          margin="20px 0"
          xl_margin="20px 0"
          sm_width="80%"
          md_width="70%"
          width="70%"
          xl_width="70%"
        >
          <Header level="3" text="The Brainstorm School Experience" />

          <Header
            level="4"
            fontSize="15px"
            text="At Brainstorm School, we pride ourselves on creating a supportive and inspiring environment for all our participants. Our artist in-person workshops are more than just classes; they are experiences that foster growth, creativity, and community. From the moment you arrive, you'll be welcomed into a vibrant community of like-minded individuals, all passionate about art and eager to learn."
          />

          <Header
            level="4"
            fontSize="15px"
            text="Our workshops cover a wide range of topics, including digital painting, concept art, character design, and more. Ready to take your skills to the next level? Explore our upcoming in-person workshops at Brainstorm School and find the perfect fit for your artistic goals. Whether you're interested in expanding your network, learning new techniques, or simply spending a weekend doing what you love, our workshops offer something for everyone. Don’t miss out on the opportunity to grow as an artist and connect with a community of creative professionals."
          />

          <Header
            level="4"
            fontSize="15px"
            text="By choosing Brainstorm School for your in-person artist workshops, you're investing in your future as an artist. We look forward to seeing you at our next workshop."
          />
        </FlexBox>

        <RegistrationBlock
          primary={false}
          heading="Ready to take the next step?"
          scale="xl"
          cta="Register Today"
          ctaType="primary"
        />

        <FlexBox
          flexdirection="column"
          xl_width="70%"
          width="70%"
          md_width="70%"
        >
          <FlexBox flexdirection="column" sm_width="80%" margin="25px 0">
            <Header level="3" text="Free Workshops" />
          </FlexBox>

          <FlexBox
            xl_width="100%"
            width="100%"
            md_width="100%"
            sm_width="80%"
            flexwrap="wrap"
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
        </FlexBox>

        <FlexBox sm_width="80%" xl_width="70%" width="70%" md_width="70%">
          <FAQs results={result[0]} />
        </FlexBox>
      </FlexBox>
    </>
  );
}
