import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import Resume from "../components/Resume/Resume";
import Video from "../components/VideoResume/Video";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Video />
      <Resume />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
