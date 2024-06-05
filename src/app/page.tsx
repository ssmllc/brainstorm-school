import Banner from "./components/banner/banner.component";
import Content from "./components/content/content.component";
import FeaturedSlider from "./components/featured/featured-slider.component";
import ImageGallery from "./components/gallery/image-gallery.component";
import VideoContentSplit from "./components/registration/video-content-split.component";
import CardSlider from "./components/tracks/card-slider.component";
import TracksGroup from "./components/tracks/tracks.component";
import ContactBlock from "./components/contact/contact-block.component";
import RegistrationBlock from "./components/registration/registration-block.component";
import CardGroup from "./components/card/card-group.component";
import { Metadata } from "next";
import Slide from "./components/featured/slide.component";

export const metadata: Metadata = {
  title:
    "Animation, 3D, Online Game Concept Design, and Digital Art Courses | Brainstorm School",
  description:
    "Our courses cover a wide range of creative fields, including animation, 3D modeling, concept, online game design, and digital art. Register Today!",
};

const Home = async () => {
  return (
    <main>
      <Banner />

      <Content>
        <VideoContentSplit
          video="https://youtu.be/cidlS92hRTQ?si=pWk-plQpUEOP_jt8"
          heading="Online education tailored for creatives at every stage"
          text="From those eager to kickstart their careers to seasoned professionals seeking to refine their skills and stay ahead in the industry. Brainstorm School provides online classes for concept art, design, and illustration. Our program is dedicated to artistic development, bringing together students from around the globe to learn and grow in a supportive online community. Our courses, led by professionals in the field, teach the most recent techniques utilized in today's entertainment industry, including concept art for games and films, visual development, and more."
          cta="View Courses"
        />

        <TracksGroup />

        <CardSlider />

        <ImageGallery header="Gallery of Instructors Work" />

        <CardGroup />

        <FeaturedSlider
          heading="The Latest Industry Blogs, News and Insights"
          textalign="center"
        >
          <Slide
            poster="banner/banner-1.jpg"
            heading="Lorem ipsum dolor"
            variantType="lg"
          />
          <Slide
            poster="banner/banner-2.jpg"
            heading="Lorem ipsum dolor"
            variantType="lg"
          />
          <Slide
            poster="banner/banner-3.jpg"
            heading="Lorem ipsum dolor"
            variantType="lg"
          />
          <Slide
            poster="banner/banner-4.jpg"
            heading="Lorem ipsum dolor"
            variantType="lg"
          />
        </FeaturedSlider>

        <ContactBlock
          heading="Not sure where to start?"
          subheading="Contact us today"
        />

        <RegistrationBlock
          primary={false}
          heading="Ready to start your journey?"
          scale="xl"
          cta="Register"
          ctaType="primary"
        />
      </Content>
    </main>
  );
};

export default Home;
