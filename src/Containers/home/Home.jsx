import {
  Header,
  Aboutcard,
  Servicecard,
  Details,
  Overlay,
  Testimonial,
} from "../../Components";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Home = () => {
  return (
    <div className="home">
      <Header />
      <Aboutcard />
      <Servicecard />
      <Overlay />
      <Details />
      <Testimonial />
    </div>
  );
};

export default Home;
