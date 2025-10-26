import loanImages from "../../assets/loanImages.jpg";
import "./Cardservice1.css";
import { Cardbutton } from "../../Components";

const Cardservice1 = () => {
  return (
    <div>
      <section className="card-sevice1">
        <div className="card-service1-row">
          <div className="card-service1-column">
            <img className="card-service1-img" src={loanImages} />
          </div>
          <div
            className="card-service1-column"
            data-aos="fade-down-left"
            data-aos-duration="1000"
          >
            <div className="card-service1-info">
              <h2 className="card-service1-heading">
                International Business Loans
              </h2>
              <p className="card-service1-text">
                We help businesses secure international funding from banks and
                institutions. Our team can structure a debt system to help
                businesses pay back investors and support their growth. We offer
                this service to businesses looking to pursue new or existing
                bankable projects or services.
              </p>
              <p className="card-service1-text">
                If your business is interested in obtaining project/trade
                capital funding from our network of banks and institutional
                investors, we encourage you to pre-apply for approvals with us.
                Our team has the expertise and resources to guide you through
                the funding process and help you achieve your business goals.
              </p>
              <Cardbutton />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cardservice1;
