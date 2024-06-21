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

const fetchData = async () => {
  const query =
    "https://y8rjsgga.api.sanity.io/v2022-03-07/data/query/production?query=%7B%27home%27%3A+*%5B_type+%3D%3D+%27home%27%5D+%7B%0A++header%2C%0A++gallery%5B%5D+-%3E+%7B%0A++++_id%2C%0A++++title%2C%0A++++artist%5B0%5D+-%3E+%7B%0A++++++_id%2C%0A++++++title%2C%0A++++++%22slug%22%3A+slug.current%0A++%7D%2C%0A++++%22imageUrl%22%3A+portfolio.asset-%3Eurl%2C%0A++%7D%0A%7D%2C%0A%27instructors%27%3A+*%5B_type+%3D%3D+%27instructors%27%5D+%7B%0A++_id%2C%0A++title%2C%0A++profession%2C%0A++%22headshot%22%3A+photo.asset-%3Eurl%2C%0A++%22poster%22%3A+poster.asset-%3Eurl%2C%0A++%22slug%22%3A+slug.current%0A%7D%0A%7D";
  // const response = await fetch(query);
  const response = await fetch(query, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  const { result } = await response.json();

  return result;
};

const Home = async () => {
  const result = await fetchData();

  const { home, instructors } = result;

  const { header, gallery } = home[0] || [];

  return (
    <main>
      <Banner header={header} gallery={gallery} />

      <Content>
        <VideoContentSplit
          video="cidlS92hRTQ?si=pWk-plQpUEOP_jt8"
          heading="Online education tailored for creatives at every stage"
          text="From those eager to kickstart their careers to seasoned professionals seeking to refine their skills and stay ahead in the industry. Brainstorm School provides online classes for concept art, design, and illustration. Our program is dedicated to artistic development, bringing together students from around the globe to learn and grow in a supportive online community. Our courses, led by professionals in the field, teach the most recent techniques utilized in today's entertainment industry, including concept art for games and films, visual development, and more."
          cta="View Courses"
          href="/courses"
        />

        <TracksGroup />

        <CardSlider />

        <ImageGallery header="Gallery of Instructors Work" />

        <CardGroup
          padding="25px 25px"
          instructors={instructors}
          icon_height="100px"
          icon_width="120px"
        />

        <FeaturedSlider
          heading="The Latest Industry Blogs, News and Insights"
          textalign="center"
        >
          <Slide
            poster="banner/banner-1.jpg"
            superheading="Featured Blog"
            subheading="Featured Blog"
            heading="Do I need to be good at drawing to succeed in game art?"
            variantType="sm"
            info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est eum, sint laboriosam, cupiditate hic explicabo qui repudiandae, fugit nesciunt perferendis obcaecati placeat in dicta rerum aliquid inventore maiores provident incidunt."
          />
          <Slide
            poster="banner/banner-2.jpg"
            superheading="Featured Blog"
            subheading="Featured Blog"
            heading="Developing Backstories for Characters"
            variantType="sm"
            info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est eum, sint laboriosam, cupiditate hic explicabo qui repudiandae, fugit nesciunt perferendis obcaecati placeat in dicta rerum aliquid inventore maiores provident incidunt."
          />
          <Slide
            poster="banner/banner-3.jpg"
            superheading="Featured Blog"
            subheading="Featured Blog"
            heading="Exploring Career Opportunities in Concept Art"
            variantType="sm"
            info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est eum, sint laboriosam, cupiditate hic explicabo qui repudiandae, fugit nesciunt perferendis obcaecati placeat in dicta rerum aliquid inventore maiores provident incidunt."
          />
          <Slide
            poster="banner/banner-4.jpg"
            superheading="Featured Blog"
            subheading="Featured Blog"
            heading="How important is a portfolio for getting a job in game art?"
            variantType="sm"
            info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est eum, sint laboriosam, cupiditate hic explicabo qui repudiandae, fugit nesciunt perferendis obcaecati placeat in dicta rerum aliquid inventore maiores provident incidunt."
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
          cta="Register Today"
          ctaType="primary"
          href="/courses"
        />
      </Content>
    </main>
  );
};

export default Home;
