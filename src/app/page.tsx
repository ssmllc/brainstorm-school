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
import Header from "./components/text-block/header.component";

export const metadata: Metadata = {
  title: "Brainstorm Courses - Brainstorm School",
  description: "Brainstorm School",
};

const Home = async () => {
  return (
    <main>
      <Banner />

      <Content>
        <VideoContentSplit
          video="https://youtu.be/cidlS92hRTQ?si=pWk-plQpUEOP_jt8"
          heading="Who we are"
          text="Brainstorm is an online concept art, design and illustration program focused on artistic development. Students from around the world gather to learn & develop in our friendly online community."
          cta="View Courses"
        />

        <TracksGroup />

        <CardSlider />

        <ImageGallery />

        <CardGroup />

        <FeaturedSlider
          heading="News to keep you up to date with the latest from Brainstorm"
          textalign="center"
        >
          <Slide variantType="lg" />
          <Slide variantType="lg" />
          <Slide variantType="lg" />
          <Slide variantType="lg" />
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
        />
      </Content>
    </main>
  );
};

export default Home;
