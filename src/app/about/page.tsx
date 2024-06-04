import type { Metadata } from "next";
import MediaBanner from "../components/banner/media-banner.component";
import { FlexContainer } from "../components/layout/container.component";
import RegistrationBlock from "../components/registration/registration-block.component";
import VideoContentSplit from "../components/registration/video-content-split.component";
import { Card } from "../components/card/card-card.component";
import { MiniCards } from "../components/card/mini-card.component";
import FlexBox from "../components/layout/flexbox.component";
import Header from "../components/text-block/header.component";

export const metadata: Metadata = {
  title: "About Brainstorm School",
  description:
    "Brainstorm School offers online courses for students of all levels including foundation classes, digital painting, character design, and more. Register Today!",
};

const fetchData = async () => {
  const query =
    "https://y8rjsgga.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27courses%27%5D+%7B%0A++category%2C%0A++slug+%7B%0A++++current%0A++%7D%2C%0A++details%5B0%5D+%7B%0A++++children%5B0%5D+%7B%0A++++++text%0A++++%7D%0A++%7D%2C%0A++faqs%5B%5D+-%3E+%7B%0A++++question%2C%0A++++answer%2C%0A++%7D%2C%0A++sections%5B%5D+-%3E+%7B%0A++++section%2C%0A++++category%2C%0A++++slug%2C%0A++++courses%5B%5D+-%3E+%7B%0A++++++_id%2C%0A++++++name%2C%0A++++++section%2C%0A++++++category%2C%0A++++++slug%2C%0A++++++code%2C%0A++++++description%5B0%5D+%7B%0A++++++++children%5B0%5D+%7B%0A++++++++++text%0A++++++++%7D%0A++++++%7D%2C%0A++++++preview+%7B%0A++++++++asset+-%3E+%7B%0A++++++++++url%0A++++++++%7D%2C%0A++++++%7D%2C%0A++++++instructors%5B%5D+-%3E+%7B%0A++++++++title%2C%0A++++++++profession%2C%0A++++++++bio%2C%0A++++++%7D%2C%0A++++++schedule%5B%5D+-%3E+%7B%0A++++++++instructor%5B0%5D+-%3E+%7B%0A++++++++++title%2C%0A++++++++%7D%2C%0A++++++++registration%2C%0A++++++++term%2C%0A++++++++time%2C%0A++++++++duration%2C%0A++++++++start%2C%0A++++++%7D%2C%0A++++%7D%2C%0A++%7D%2C%0A%7D";
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
        image="/banner/media-banner.png"
        media="/video/brainstorm-design-solve-learn.mp4"
      />

      <FlexBox
        margin="75px auto"
        flexdirection="column"
        alignitems="center"
        width="100%"
      >
        <FlexBox width="70%" flexdirection="column" margin="20px 0">
          <Header level="1" text="About Brainstorm School" />
          <Header
            level="4"
            fontSize="15px"
            text="Brainstorm is an online school for concept art, design, and illustration that focuses on artistic development. Students from all around the world come together to learn and grow in our welcoming online community. All of our courses are led by industry professionals who teach the latest design and creative methods used in today's entertainment business."
          />
        </FlexBox>

        <FlexBox width="70%" flexdirection="column" margin="20px 0">
          <Header level="2" text="What we do" />
          <Header
            level="4"
            fontSize="15px"
            text="At Brainstorm School, we offer a diverse range of courses tailored to different skill levels and interests. Our offerings include beginner courses for those new to concept art, advanced concept classes for experienced artists looking to refine their skills, and gaming industry courses designed to support career advancement in the gaming sector. All our courses provide opportunities for students to learn, gain experience, and receive feedback and criticism from industry professionals."
          />

          <Header
            level="4"
            fontSize="15px"
            text="At Brainstorm School, we offer a variety of course formats to cater to different learning preferences. Students can choose from flash courses lasting 5 weeks to longer courses that take up to 12 weeks to complete. They can also participate in workshops and mentorships, which provide opportunities to explore different art forms, techniques, and more, thereby pushing the boundaries of their creativity."
          />

          <Header
            level="4"
            fontSize="15px"
            text="Brainstorm School offers a full learning experience for beginners and seasoned professionals.  We offer foundation class, digital painting and design courses focused around Character, Environment and Prop Design. Perfect for a student that is looking to sharpen their skills, whether you are applying for art schools, leveling up your professional portfolio or interested in learning new design techniques to help you on the job. We have classes for you!"
          />

          <Header
            level="4"
            fontSize="18px"
            fontWeight="bold"
            margin="20px 0 10px"
            text="Fall 2024"
          />
          <Header level="4" fontSize="16px" text="Registration: tbd" />

          <Header
            level="4"
            fontSize="18px"
            fontWeight="bold"
            margin="20px 0 10px"
            text="Winter 2024"
          />
          <Header level="4" fontSize="16px" text="Registration: tbd" />
        </FlexBox>

        <FlexBox width="70%" flexdirection="column" margin="20px 0">
          <Header level="2" text="What should I expect?" />
          <Header
            level="4"
            fontSize="15px"
            text="Expect to have an incredible learning experience. Our community and school culture are supportive and welcoming.  Be prepared to work hard and develop your skills! The average class requires approximately 20 hours of homework per week."
          />
        </FlexBox>

        <FlexBox width="70%" flexdirection="column" margin="20px 0">
          <Header level="2" text="Brainstorm School Mentorships" />
          <Header
            level="4"
            fontSize="15px"
            text="Classes are the most popular method of learning. A 10-week course focusing on a specific subject, or 5-8 week hyper-focused bootcamps. Lectures, demonstrations, homework, and feedback are important components that make classrooms an effective learning environment.  Class sizes range from ten to twenty students."
          />
        </FlexBox>

        <FlexBox width="70%" flexdirection="column" margin="20px 0">
          <Header level="2" text="Brainstorm School Classes" />
          <Header
            level="4"
            fontSize="15px"
            text="A true mentoring experience! Our team of core mentors will take you through a 12-week intensive curriculum that is completely tailored to you! They will collaborate with you to develop a plan that is tailored to your specific objectives, requirements, and expectations. You will meet with your mentor weekly for private sessions to go over your learning plan and how you are progressing toward your goals.  The most intensive technique to improve your artistic, soft, and professional talents."
          />
        </FlexBox>

        <FlexBox width="70%" flexdirection="column" margin="20px 0">
          <Header
            level="2"
            text="Brainstorm School Flash Courses - Short Courses"
          />
          <Header
            level="4"
            fontSize="15px"
            text="A five-week cost-effective course designed to give focused information and practices. Classes are live and will only include demonstrations and lectures.  No feedback will be given. Students are issued self-study assignments and encouraged to provide peer critique."
          />
        </FlexBox>

        <FlexBox width="70%" flexdirection="column" margin="20px 0">
          <Header level="2" text="Brainstorm School Workshops" />
          <Header
            level="4"
            fontSize="15px"
            text="Workshops are precisely designed to provide attendees with hands-on experience, experienced advice, and a supportive community—all of which are essential for perfecting your skills and advancing your career in the entertainment industry. In Person Workshop or Online Workshops."
          />
        </FlexBox>

        <FlexBox width="70%" flexdirection="column" margin="20px 0">
          <Header level="2" text="Brainstorm School Quarterly Schedule" />
          <Header
            level="4"
            fontSize="15px"
            text="Creative education courses at Brainstorm School start in the Spring, Summer, and Fall, with registration opening two months prior to the state of the overuse for prospective students to register their interest."
          />
        </FlexBox>

        {/* <RegistrationBlock
          primary={true}
          heading="About Brainstorm School"
          text="Brainstorm is an online school for concept art, design, and illustration that focuses on artistic development. Students from all around the world come together to learn and grow in our welcoming online community. All of our courses are led by industry professionals who teach the latest design and creative methods used in today's entertainment business."
          scale="xl"
          cta="Register Today"
          ctaType="primary"
        /> */}

        <VideoContentSplit
          video="F2itysjblHA?si=w3ET9c6hsGqlTg7m"
          heading="Who we are"
          text="Brainstorm is an online concept art, design and illustration program focused on artistic development. Students from around the world gather to learn & develop in our friendly online community."
          cta="View Courses"
        />

        <VideoContentSplit
          video="S6TDzSuykV0?si=q3HmbL3tF3qKJlMp"
          heading="What we do"
          text="Brainstorm is an online concept art, design and illustration program focused on artistic development. Students from around the world gather to learn & develop in our friendly online community."
          cta="View Courses"
          flexdirection="row-reverse"
        />

        <FlexContainer display="flex" margin="0 auto">
          <FlexContainer display="flex" gap="10px" width="80%" margin="0 auto">
            <Card
              href="/courses"
              background="var(--black-60)"
              alignitems="start"
              stacked="true"
              icon="/instructors/ico-image.png"
              heading="Courses"
              subHeading="Traditional drawing supplies, pen & paper, sketchbook"
              text="Optional: Computer or Tablet with comparable drawing software such as photoshop, procreate, etc."
              width="100%"
            />

            <Card
              href="/workshops"
              background="var(--black-60)"
              alignitems="start"
              stacked="true"
              icon="/instructors/ico-image.png"
              heading="Workshops"
              text="Optional: Computer or Tablet with comparable drawing software such as photoshop, procreate, etc."
              width="100%"
            />

            <Card
              href="/programs"
              background="var(--black-60)"
              alignitems="start"
              stacked="true"
              icon="/instructors/ico-image.png"
              heading="Programs"
              text="Optional: Computer or Tablet with comparable drawing software such as photoshop, procreate, etc."
              width="100%"
            />

            <Card
              href="/blog"
              background="var(--black-60)"
              alignitems="start"
              stacked="true"
              icon="/instructors/ico-image.png"
              heading="Blog"
              text="Optional: Computer or Tablet with comparable drawing software such as photoshop, procreate, etc."
              width="100%"
            />
          </FlexContainer>
        </FlexContainer>

        <FlexContainer width="100%" margin="0 auto">
          <MiniCards header="Spring 2024" width="100%" />
        </FlexContainer>

        <RegistrationBlock
          primary={false}
          heading="Get updates to your inbox"
          scale="xl"
          cta="Sign Me Up"
          ctaType="primary"
        />

        {/* <FAQs results={selectedResults} /> */}
      </FlexBox>
    </>
  );
}
