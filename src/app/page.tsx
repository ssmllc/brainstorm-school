import Banner from "./components/banner/banner.component";
import RegistrationBlock from "./components/registration/registration-block.component";

const Home = () => {
  return (
    <main>
      <Banner />
      <RegistrationBlock
        primary={true}
        heading="Learn from industry professionals and become a master of your craft today."
        text="Students from around the world gather to learn and develop in our friendly online community."
        cta="View Courses"
        faq={true}
      />
    </main>
  );
};

export default Home;
