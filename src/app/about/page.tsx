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
        image="/banner/media-banner.png"
        media="/video/brainstorm-design-solve-learn.mp4"
      />

      <FlexBox
        margin="75px auto"
        flexdirection="column"
        alignitems="center"
        width="100%"
      >
        <RegistrationBlock
          primary={true}
          heading="We are Brainstorm School!"
          text="Students from around the world gather to learn & develop in our friendly online community."
          scale="xl"
          cta="Register Today"
          ctaType="primary"
        />

        <VideoContentSplit
          video="F2itysjblHA?si=w3ET9c6hsGqlTg7m"
          heading="About Brainstorm School"
          text="Brainstorm is an online school for concept art, design, and illustration that focuses on artistic development. Students from all around the world come together to learn and grow in our welcoming online community. All of our courses are led by industry professionals who teach the latest design and creative methods used in today's entertainment business."
          cta="View Courses"
        />

        <VideoContentSplit
          video="S6TDzSuykV0?si=q3HmbL3tF3qKJlMp"
          heading="What we do"
          text="At Brainstorm School, we offer a diverse range of courses tailored to different skill levels and interests. Our offerings include beginner courses for those new to concept art, advanced concept classes for experienced artists looking to refine their skills, and gaming industry courses designed to support career advancement in the gaming sector. All our courses provide opportunities for students to learn, gain experience, and receive feedback and criticism from industry professionals."
          cta="View Courses"
          flexdirection="row-reverse"
        />

        <FlexBox
          sm_width="80%"
          width="70%"
          flexdirection="column"
          margin="20px 0"
        >
          <Header level="2" text="What should I expect?" />

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
            fontSize="15px"
            text="Expect to have an incredible learning experience. Our community and school culture are supportive and welcoming.  Be prepared to work hard and develop your skills! The average class requires approximately 20 hours of homework per week."
          />
        </FlexBox>

        <FlexContainer display="flex" margin="50px auto">
          <FlexContainer display="flex" gap="10px" width="80%" margin="0 auto">
            <Card
              href="/courses"
              background="var(--black-60)"
              alignitems="start"
              stacked="true"
              icon="/instructors/ico-image.png"
              heading="Courses"
              text="Classes are the most popular method of learning. A 10-week course focusing on a specific subject, or 5-8 week hyper-focused bootcamps. Lectures, demonstrations, homework, and feedback are important components that make classrooms an effective learning environment.  Class sizes range from ten to twenty students."
              width="100%"
            />

            <Card
              href="/workshops"
              background="var(--black-60)"
              alignitems="start"
              stacked="true"
              icon="/instructors/ico-image.png"
              heading="Workshops"
              text="Workshops are precisely designed to provide attendees with hands-on experience, experienced advice, and a supportive community—all of which are essential for perfecting your skills and advancing your career in the entertainment industry. In Person Workshop or Online Workshops."
              width="100%"
            />

            <Card
              href="/programs"
              background="var(--black-60)"
              alignitems="start"
              stacked="true"
              icon="/instructors/ico-image.png"
              heading="Programs"
              text="A true mentoring experience! Our team of core mentors will take you through a 12-week intensive curriculum that is completely tailored to you! You will meet with your mentor weekly for private sessions to go over your learning plan and how you are progressing toward your goals.  The most intensive technique to improve your artistic, soft, and professional talents."
              width="100%"
            />

            <Card
              href="/courses/flash"
              background="var(--black-60)"
              alignitems="start"
              stacked="true"
              icon="/instructors/ico-image.png"
              heading="Flash Courses"
              text="A five-week cost-effective course designed to give focused information and practices. Classes are live and will only include demonstrations and lectures. No feedback will be given. Students are issued self-study assignments and encouraged to provide peer critique."
              width="100%"
            />
          </FlexContainer>
        </FlexContainer>

        <FlexContainer width="100%" margin="0 auto">
          <MiniCards header="Spring 2024" width="100%" results={result[0]} />
        </FlexContainer>

        <RegistrationBlock
          primary={false}
          heading="Get updates to your inbox"
          scale="xl"
          cta="Sign Me Up"
          ctaType="primary"
        />

        <FlexBox width="80%" margin="0 auto" flexdirection="column">
          <FAQs results={result[0]} />
        </FlexBox>
      </FlexBox>
    </>
  );
}
