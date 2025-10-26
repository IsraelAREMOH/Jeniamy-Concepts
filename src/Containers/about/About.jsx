import "./About.css";
import { Headersection } from "../../Components";
import { AboutSectionCard } from "../../Components";
import { Overlay } from "../../Components";
import { Teamcard } from "../../Components";

const About = () => {
  return (
    <div>
      <Headersection />
      <AboutSectionCard />
      <Overlay />
      <Teamcard />
      <Overlay />
    </div>
  );
};

export default About;
