import MediaBanner from "@/app/components/banner/media-banner.component";
import FlexBox from "@/app/components/layout/flexbox.component";
import FAQs from "@/app/components/text-block/faqs.component";
import Header from "@/app/components/text-block/header.component";
import type { Metadata } from "next";
import AnchorCard from "../components/tracks/track.component";
import RegistrationBlock from "../components/registration/registration-block.component";

export const metadata: Metadata = {
  title: "Brainstorm School Workshops",
  description:
    "Explore Brainstorm's online workshops to develop essential creative skills utilized in the design industry, guided by seasoned professional artists. Register Today!",
};

export default async function Workshops() {
  return (
    <>
      <MediaBanner
        header="Featured Workshops"
        label="workshops"
        subHeader="Start Learning"
        hero="false"
        theme="dark"
        background="/banner/banner-1.jpg"
        image="/banner/media-banner.png"
        media="/video/brainstorm-design-solve-learn.mp4"
      />

      <FlexBox flexdirection="column" margin="100px auto" alignitems="center">
        <FlexBox
          flexdirection="column"
          margin="20px 0"
          sm_margin="25px 0"
          md_margin="75px 0"
          xl_margin="100px 0 0"
          sm_width="80%"
          md_width="70%"
          width="70%"
          xl_width="70%"
        >
          <Header
            level="1"
            text="Featured Brainstorm School Online Workshops"
          />

          <Header
            level="4"
            fontSize="15px"
            text="If you wish to pursue a career in gaming and concept, these workshops, when combined with practice, can prepare you for our courses."
          />

          <Header
            level="4"
            fontSize="15px"
            text="Welcome to Brainstorm School's Workshops, designed for aspiring artists and designers seeking to elevate their skills in visual storytelling, concept art workshops, and design. Our workshops are precisely designed to provide attendees with glimpse into the entertainment design industry
            , experienced advice, and exposure to current design techniques—all of which are essential for perfecting your skills and advancing your career in the entertainment industry."
          />

          <Header
            level="4"
            fontSize="15px"
            text="Our instructors are industry professionals with years of experience working for top entertainment companies. They bring a wealth of knowledge and real-world insights to the workshops, providing you with practical advice."
          />

          <Header
            level="4"
            fontSize="15px"
            text="Learn from the best and gain valuable insight that will help you grow as an artist."
          />
        </FlexBox>

        <FlexBox
          flexdirection="column"
          margin="20px 0"
          xl_margin="25px 0"
          sm_width="80%"
          md_width="70%"
          width="70%"
          xl_width="70%"
        >
          <Header level="2" text="What You'll Learn" margin="0 0 25px 0" />

          <Header level="2" text="Fundamentals of Concept Art and Design" />

          <Header
            level="4"
            fontSize="15px"
            text="Our workshop begins with a solid foundation in the basics of concept art and design. You will learn key principles such as composition, color theory, perspective, and lighting. These elements are crucial for creating visually compelling and believable artwork. Our experienced instructors will guide you through various techniques and methodologies, ensuring that you develop a strong understanding of these core concepts."
          />
        </FlexBox>

        <FlexBox
          flexdirection="column"
          margin="20px 0"
          xl_margin="20px 0"
          sm_width="80%"
          md_width="70%"
          width="70%"
          xl_width="70%"
        >
          <Header level="2" text="Character and Environment Design" />

          <Header
            level="4"
            fontSize="15px"
            text="Dive deep into the world of character and environment design, where creativity meets practicality. You will explore the process of developing unique characters and immersive environments that tell a story and captivate audiences. Learn how to create detailed character designs that reflect personality and backstory, as well as environments that enhance the narrative and mood of your projects."
          />
        </FlexBox>

        <FlexBox
          flexdirection="column"
          margin="20px 0"
          xl_margin="20px 0"
          sm_width="80%"
          md_width="70%"
          width="70%"
          xl_width="70%"
        >
          <Header level="2" text="Advanced Digital Painting Techniques" />

          <Header
            level="4"
            fontSize="15px"
            text="Take your digital painting skills to the next level with advanced techniques and tools. Our workshop covers everything from brushwork and texture creation to lighting effects and color grading. You will gain proficiency in industry-standard software, enabling you to produce high-quality digital artwork efficiently and effectively."
          />
        </FlexBox>

        <FlexBox
          flexdirection="column"
          margin="20px 0"
          sm_width="80%"
          md_width="70%"
          width="70%"
          xl_margin="20px 0"
          xl_width="70%"
        >
          <Header level="2" text="Visual Storytelling and Narrative Art" />

          <Header
            level="4"
            fontSize="15px"
            text="Storytelling is at the heart of great art. Our workshops emphasize the importance of visual storytelling and narrative art. Learn how to convey emotions, actions, and stories through your artwork. You will explore different storytelling techniques, including sequential art and storyboarding, which are essential for creating compelling visual narratives."
          />
        </FlexBox>

        <FlexBox
          flexdirection="column"
          margin="20px 0"
          sm_width="80%"
          md_width="70%"
          width="70%"
          xl_margin="20px 0"
          xl_width="70%"
        >
          <Header
            level="2"
            text="Special Effects Drawing and Animation workshops"
          />

          <Header
            level="4"
            fontSize="15px"
            text="Unlock your creative potential with Brainstorm School's Special Effects Drawing and Animation workshops. Designed for aspiring artists and animators, these workshops offer hands-on experience in creating dynamic visual effects and engaging animations. Learn industry-standard techniques for drawing stunning effects, from explosions to magical spells, and master animation principles to bring your creations to life. Guided by experienced professionals, you'll develop a strong foundation in both traditional and digital mediums, enhancing your skills and portfolio. Join us at Brainstorm School and take the first step towards a rewarding career in special effects and animation."
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
          margin="20px 0"
          sm_width="80%"
          md_width="70%"
          width="70%"
          xl_margin="20px 0"
          xl_width="70%"
        >
          <Header
            level="4"
            fontSize="15px"
            text="Enroll in Brainstorm School's workshops today and start designing the future. Our workshops are open to artists of all levels. Don’t miss this opportunity to learn from industry experts, enhance your skills, and connect with a supportive community. Our curriculum is thoughtfully designed to cover all aspects of concept art and design. Whether you are a beginner or an experienced artist looking to refine your skills, our workshop offers something for everyone. From foundational principles to advanced techniques, you will receive a well-rounded education that prepares you for a successful career."
          />

          <Header
            level="4"
            fontSize="15px"
            text="Join us at Brainstorm School and unlock your creative potential. Our workshops are the perfect place to start your journey towards becoming a professional artist and designer. We look forward to seeing you in the workshops and helping you achieve your artistic goals. For more information and to register, visit our enrollment page."
          />
        </FlexBox>

        <FlexBox flexdirection="column" width="70%" xl_width="70%">
          <FlexBox
            flexdirection="column"
            sm_width="80%"
            md_width="70%"
            margin="25px 0"
            md_margin="25px auto"
            sm_margin="25px auto"
            xl_margin="20px 0"
            width="70%"
            xl_width="70%"
          >
            <Header level="3" text="Future Workshops" />
          </FlexBox>

          <FlexBox
            margin="20px 0"
            sm_margin="20px 25px"
            sm_width="85%"
            width="100%"
            xl_margin="20px 0"
            xl_width="100%"
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

        <FlexBox flexdirection="column" width="70%" xl_width="70%">
          <FlexBox
            flexdirection="column"
            sm_width="80%"
            md_width="70%"
            margin="25px 0"
            md_margin="25px auto"
            xl_margin="20px 0"
            width="70%"
            xl_width="70%"
          >
            <Header level="3" text="Previous Workshops" />
          </FlexBox>

          <FlexBox
            margin="20px 0"
            sm_margin="20px 25px"
            sm_width="85%"
            width="100%"
            xl_margin="20px 0"
            xl_width="100%"
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

        <FlexBox sm_width="80%">
          <FAQs results={[]} />
        </FlexBox>
      </FlexBox>
    </>
  );
}
