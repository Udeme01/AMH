import Campaign from "../component/homepage/Campaign";
import Founder from "../component/homepage/Founder";
import Hero from "../component/homepage/Hero";
import Impact from "../component/homepage/Impact";
import MyStory from "../component/homepage/MyStory";
import Testimonials from "../component/homepage/Testimonials";
import Ready from "../component/homepage/Ready";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Founder />
      <MyStory />
      <Impact />
      <Campaign />
      <Testimonials />
      {/* <Ready /> */}
    </>
  );
};

export default Homepage;
