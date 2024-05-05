import Banner from "./components/banner/banner.component";
import RegistrationBlock from "./components/registration/registration-block.component";

const Home = () => {
  return (
    <>
      <main>
        <Banner />
        <RegistrationBlock
          primary={true}
          heading="Lorem ipsum dolor sit amet"
        />
      </main>
    </>
  );
};

export default Home;
