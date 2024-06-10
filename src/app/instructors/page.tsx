import MediaBanner from "@/app/components/banner/media-banner.component";
import FlexBox from "@/app/components/layout/flexbox.component";
import Header from "@/app/components/text-block/header.component";
import AnchorCard from "@/app/components/tracks/track.component";
import type { Metadata } from "next";
import FeaturedCard from "../components/card/featured-card.component";

export const metadata: Metadata = {
  title: "Meet our Instructors | Brainstorm School",
  description:
    "Discover the insights of top industry professionals at Brainstorm School to guide you toward success in concept design for film, gaming, environment, and more. Register Today!",
};

const fetchData = async () => {
  const query =
    "https://y8rjsgga.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27instructors%27%5D+%7B%0A++_id%2C%0A++title%2C%0A++%22headshot%22%3A+photo.asset-%3E+url%2C%0A++%22slug%22%3A+slug.current%2C%0A++profession%2C%0A++%22imageUrl%22%3A+poster.asset-%3Eurl%2C%0A++bio%0A%7D";
  // const response = await fetch(query);
  const response = await fetch(query, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  const { result } = await response.json();

  return result;
};

export default async function Instructors() {
  const result = await fetchData();

  let featuredInstructors: any = [];

  for (let i = 0; i < 1; i++) {
    let idx = Math.floor(Math.random() * (result.length - 1 - 0 + 1) + 0);
    featuredInstructors.push(result[idx]);
    result.splice(idx, 1);
  }

  console.log("find it here =>", featuredInstructors);

  return (
    <>
      <MediaBanner
        label="Instructors"
        header="Brainstorm Instructors"
        subHeader="Experienced Instructors"
        hero="false"
        theme="dark"
        background="/banner/banner-17.jpg"
        image="/banner/media-banner.png"
        media="/video/brainstorm-design-solve-learn.mp4"
      />

      <FlexBox flexdirection="column" margin="100px auto" alignitems="center">
        <FlexBox
          margin="20px 60px 0"
          sm_width="85%"
          width="70%"
          flexdirection="column"
        >
          <Header level="1" text="Brainstorm School Instructors" />

          <Header
            level="4"
            text="At Brainstorm School, we take immense pride in our team of highly skilled and experienced instructors who are dedicated to educating the next generation of creative talent. Our instructors are industry professionals with extensive backgrounds in concept design, concept gaming design, the gaming industry, the film industry, and environment design. They bring a wealth of knowledge and expertise to our classrooms, ensuring that students receive the highest quality education and mentorship."
            fontSize="15px"
          />
        </FlexBox>

        <FlexBox
          margin="20px 60px 0"
          sm_width="85%"
          width="70%"
          flexdirection="column"
        >
          <Header level="2" text="Expert Guidance in Concept Design" />

          <Header
            level="4"
            text="Concept design is at the heart of what we do at Brainstorm School. Our instructors have years of experience creating innovative and captivating concepts that bring stories and worlds to life. Whether you’re interested in character design, vehicle design, or creating fantastical creatures, our instructors will guide you through the process, teaching you the techniques and skills needed to excel in this field. Creating believable and captivating environments is crucial in both games and films. Our instructors excel in environment design, teaching students how to develop rich, detailed worlds that enhance storytelling and gameplay. From lush forests to futuristic cities, our instructors cover all aspects of environment design, providing students with a comprehensive understanding of this vital discipline."
            fontSize="15px"
          />
        </FlexBox>

        <FlexBox
          margin="25px 60px 0"
          sm_width="85%"
          width="70%"
          flexdirection="column"
        >
          <Header level="3" text="Featured Instructor" />
        </FlexBox>

        <FeaturedCard
          poster={featuredInstructors[0].imageUrl}
          superheading={featuredInstructors[0].profession}
          heading={featuredInstructors[0].title}
          margin="25px 0"
          bio={featuredInstructors[0].bio}
          slug={featuredInstructors[0].slug}
        />

        <FlexBox
          margin="20px 60px 0"
          sm_margin="20px 25px"
          sm_width="85%"
          width="70%"
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px 20px",
              width: "100%",
            }}
          >
            {result &&
              result.map((instructor: any) => {
                return (
                  <AnchorCard
                    base="instructors"
                    path={instructor?.slug || ""}
                    key={instructor._id}
                    label={instructor.title}
                    name={instructor.profession}
                    poster={instructor.imageUrl}
                    photo={instructor.headshot || "/instructors/ico-image.png"}
                    width="100%"
                  />
                );
              })}
          </div>
        </FlexBox>
      </FlexBox>
    </>
  );
}
