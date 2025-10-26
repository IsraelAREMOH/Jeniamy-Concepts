import coachspace from "../../assets/coachspace.jpg";
import "./Servicebanner.css";
import { Cardbutton } from "../../Components";

const Servicebanner = () => {
  return (
    <div>
      <section className="sevice-section">
        <div className="service-row">
          <div
            className="service-column"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img className="service-img" src={coachspace} />
          </div>
          <div
            className="service-column"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="service-info">
              <h2 className="service-heading">Food Production and Supply</h2>
              <p className="service-text">
                As a specialized company in food production and processing,
                delivering quality products that meet global standards. Our
                operations extend to the sales and supply of both consumer and
                non-consumer goods, ensuring efficiency across every stage of
                distribution. Through strategic partnerships and innovative
                processes, we provide reliable solutions in general contracts
                and merchandise—driving growth, consistency, and value for our
                clients and stakeholders.
              </p>
              <Cardbutton />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicebanner;
