import Banner from "./components/banner/banner.component";
import Content from "./components/content/content.component";
import RegistrationBlock from "./components/registration/registration-block.component";
import VideoContentSplit from "./components/registration/video-content-split.component";
import TracksGroup from "./components/tracks/tracks.component";

const Home = () => {
  return (
    <main>
      <Banner />
      <Content>
        <RegistrationBlock
          primary={true}
          heading="Learn from industry professionals and become a master of your craft today."
          text="Students from around the world gather to learn and develop in our friendly online community."
          cta="View Courses"
          faq={true}
        />
        <VideoContentSplit
          video="https://youtu.be/cidlS92hRTQ?si=pWk-plQpUEOP_jt8"
          heading="Who we are"
          text="Brainstorm is an online concept art, design and illustration program focused on artistic development. Students from around the world gather to learn & develop in our friendly online community."
          cta="View Courses"
        />
        <TracksGroup />
      </Content>
    </main>
  );
};

export default Home;
