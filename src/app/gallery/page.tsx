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

  return (
    <>
      <MediaBanner
        header="School Gallery"
        label="Gallery"
        subHeader="A World of Creativity"
        hero="false"
        theme="dark"
        background="/banner/banner-21.jpg"
      />

      <FlexBox
        alignitems="center"
        flexdirection="column"
        sm_margin="50px auto 50px"
        md_margin="50px auto 50px"
        margin="100px auto"
        xl_margin="100px auto"
      >
        <FlexBox
          flexdirection="column"
          sm_margin="20px 0"
          md_margin="20px 0"
          margin="20px 0"
          xl_margin="20px 0"
          sm_width="80%"
          md_width="70%"
          width="70%"
          xl_width="80%"
          xxl_width="80%"
        >
          <Header level="1" text="Brainstorm School Gallery" />
          <Header
            level="4"
            fontSize="15px"
            text="Welcome to the Brainstorm School Gallery, your gateway to a world of creativity and innovation. Here, you will find a diverse collection of artwork showcasing the talents of our students and instructors. From concept design to environment design, our gallery features stunning pieces that reflect the skills and dedication of our community. Whether you're interested in the gaming industry, the film industry, or simply seeking artistic inspiration, the Brainstorm School Gallery has something for everyone."
          />
        </FlexBox>

        <FlexBox
          flexdirection="column"
          sm_margin="20px 0"
          md_margin="20px 0"
          margin="20px 0"
          xl_margin="20px 0"
          sm_width="80%"
          md_width="70%"
          width="70%"
          xl_width="80%"
          xxl_width="80%"
        >
          <Header level="2" text="Discover Concept Design Masterpiece" />
          <Header
            level="4"
            fontSize="15px"
            text="At Brainstorm School, concept design is at the core of our curriculum. Our gallery features exceptional concept art that brings characters, creatures, and worlds to life. These pieces demonstrate the foundational skills and creative techniques taught in our courses, providing a glimpse into the imaginative processes of our students and instructors."
          />
        </FlexBox>

        <FlexBox
          flexdirection="column"
          sm_margin="20px 0"
          md_margin="20px 0"
          margin="20px 0"
          xl_margin="20px 0"
          sm_width="80%"
          md_width="70%"
          width="70%"
          xl_width="80%"
          xxl_width="80%"
        >
          <Header
            level="4"
            text="Character Designs: Explore a variety of character concepts, each with unique personalities and detailed features."
          />

          <Header
            level="4"
            fontSize="15px"
            text="Creature Designs: Discover imaginative creatures, from mythical beasts to futuristic aliens, showcasing the creativity of our artists."
          />

          <Header
            level="4"
            fontSize="15px"
            text="Concept Gaming Design: For enthusiasts of the gaming industry. Here, you will find concept art for games, including character development, environment layouts, and game mechanics illustrations. These artworks highlight the intricate process of game design, from initial sketches to polished concepts ready for production."
          />

          <Header
            level="4"
            fontSize="15px"
            text="Game Characters: Dive into the world of gaming with detailed character designs that capture the essence of various game genres."
          />

          <Header
            level="4"
            fontSize="15px"
            text="Game Environments: View immersive game environments that set the stage for thrilling adventures and engaging gameplay."
          />

          <Header
            level="4"
            fontSize="15px"
            text="Film industry: Illustrating the vital role of concept art in movie production. These pieces include storyboard art, scene layouts, and visual effects designs that contribute to the storytelling process in films. The creativity and technical skills of our artists are evident in every piece, reflecting their ability to bring cinematic visions to life."
          />

          <Header
            level="4"
            fontSize="15px"
            text="Storyboards: See the visual narratives that outline key scenes and sequences in film production."
          />

          <Header
            level="4"
            fontSize="15px"
            text="Scene Concepts: Explore detailed scene concepts that help filmmakers visualize their stories before filming begins."
          />

          <Header
            level="4"
            fontSize="15px"
            text="Environment design: Our gallery features breathtaking landscapes and intricate settings that serve as the backdrop for both games and films. These artworks demonstrate the importance of creating immersive and believable worlds, showcasing the attention to detail and artistic vision of our students and instructors."
          />
        </FlexBox>

        <FlexBox
          flexdirection="column"
          sm_margin="20px 0"
          md_margin="20px 0"
          margin="20px 0"
          xl_margin="20px 0"
          sm_width="80%"
          md_width="70%"
          width="70%"
          xl_width="80%"
          xxl_width="80%"
        >
          <Header level="2" text="Student Gallery" />

          <Header
            level="4"
            fontSize="15px"
            text="The student gallery is a testament to the hard work and progress of our talented students. Here, you will find a wide range of artworks, each reflecting the individual style and creativity of our emerging artists. The student gallery is constantly updated with new pieces, providing a dynamic and ever-evolving showcase of talent."
          />
        </FlexBox>

        <FlexBox
          flexdirection="column"
          sm_margin="20px 0"
          md_margin="20px 0"
          margin="20px 0"
          xl_margin="20px 0"
          sm_width="80%"
          md_width="70%"
          width="70%"
          xl_width="80%"
          xxl_width="80%"
        >
          <Header level="2" text="Instructors Gallery" />

          <Header
            level="4"
            fontSize="15px"
            text="Our instructor gallery features the works of Brainstorm School's esteemed instructors. These pieces serve as both inspiration and benchmarks for our students, demonstrating the high level of expertise and creativity that our instructors bring to the classroom"
          />
        </FlexBox>

        <FlexBox
          margin="20px 60px 0"
          sm_margin="20px 25px"
          md_margin="20px 25px"
          xl_margin="20px 60px 0"
          sm_width="80%"
          width="70%"
          md_width="70%"
          xl_width="80%"
          xxl_width="80%"
        >
          <FlexBox
            sm_width="100%"
            md_width="100%"
            width="100%"
            xl_width="100%"
            xxl_width="100%"
          >
            <AnchorCard
              base="gallery"
              path="students"
              label="Students"
              name="Students Work Gallery"
              poster="https://cdn.sanity.io/images/y8rjsgga/production/dbe0f90d49ecc458b97ab1efcea97632eae87bf7-1866x1126.jpg"
              width="50%"
            />
            <AnchorCard
              base="gallery"
              path="instructors"
              label="Instructors"
              name="Instructors Work Gallery"
              poster="https://cdn.sanity.io/images/y8rjsgga/production/edafb39d7261d2f9492ac1728b2bd7a4c4725086-3885x1959.jpg"
              width="50%"
            />
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </>
  );
}
