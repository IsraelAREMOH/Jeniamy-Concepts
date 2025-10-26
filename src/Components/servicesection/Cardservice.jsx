import "./Cardservice.css";
import { Cardbutton } from "../../Components";
import Hall from "../../assets/Hall.jpg";

const Cardservice = () => {
  return (
    <div>
      <section className="card-service">
        <div className="card-service-row">
          <div className="card-servic-column">
            <img
              className="card-service-img"
              src={Hall}
              alt="face of company"
            />
          </div>
          <div className="card-service-column">
            <div className="card-service-info">
              <div className="card-service-heading">
                <h1>Capital Markets Transaction Advisory Services</h1>
              </div>
              <p>
                Our company offers a range of services to help listed entities
                understand and comply with their obligations in the context of a
                transaction. Our capital markets team has the expertise and
                experience to guide you through the deal process, ensuring that
                all local regulatory requirements are met.
              </p>
              <p>
                Our team can provide you with the necessary support and guidance
                to ensure that your transaction is successful, while also
                ensuring that you remain compliant with all relevant
                regulations. Whether you are looking to raise capital, acquire a
                new business, or divest from an existing investment, our team
                can help you navigate the complex world of capital markets to
                achieve your goals.
              </p>
              <Cardbutton />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cardservice;
