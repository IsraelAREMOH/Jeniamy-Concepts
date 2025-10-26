import "./Servicecard.css";
import { faDonate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import watering from "../../assets/watering.webp";

import supplychain from "../../assets/supplychain.png";

import briefcase from "../../assets/briefcase.png";

function ServiceCard() {
  return (
    <div>
      <div className="site-section">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div className="col-md-6 text-centre">
              <h3 className="section-sub-title">
                Unmatched Expertise in Production and Supply Management
              </h3>
              <h2 className="section-title mb-3">
                Delivering Professional Solutions for Trade, Procurement, and
                Projects.
              </h2>
              <p>
                Our team brings extensive industry experience in food
                production, supply chain operations, and contract execution,
                providing clients with tailored strategies that ensure
                efficiency, quality, and long-term value.
              </p>
            </div>
          </div>
          <div className="container shadow mt-5 border">
            <div className="row">
              <div className="col-md-4 col-sm-6 bg-light text-centre border-end border-bottom py-5 px-3">
                <div className="card-img">
                  <img className="ion-icon" src={watering} />
                </div>
                <h4 className="mb-3 fw-normal text-uppercase">
                  Food Production & Supply
                </h4>
                <p className="text-secondary">
                  Jeniamy Concepts successfully managed the production and
                  distribution of premium food products valued at over USD 1.2
                  million, ensuring seamless delivery through our extensive
                  supply network. Our operations span multiple regions,
                  supporting trade and logistics across markets in Africa,
                  Europe, and the Middle East. This achievement reflects our
                  commitment to quality, reliability, and excellence in every
                  stage of the production and supply process.
                </p>
              </div>
              <div className="col-md-4 col-sm-6 bg-light text-centre border-end border-bottom py-5 px-3">
                <div className="card-img">
                  <img className="ion-icon" src={briefcase} />
                </div>
                <h4 className="mb-3 fw-normal text-uppercase">
                  General Contracting & Project Execution
                </h4>
                <p className="text-secondary">
                  Jeniamy Concepts successfully executed a major supply and
                  contracting project valued at over USD 2.5 million, supporting
                  the development of a large-scale hospitality facility
                  comprising 100 premium guest rooms.
                </p>
              </div>
              <div className="col-md-4 col-sm-6 bg-light text-centre border-bottom py-5 px-3">
                <div className="card-img">
                  <img className="img-ion-icon" src={supplychain} />
                </div>
                <h4 className="mb-3 fw-normal text-uppercase">
                  Industrial Supply & Logistics Management
                </h4>
                <p className="text-secondary">
                  Jeniamy Concepts facilitated a major supply and logistics
                  operation valued at over USD 50 million, enabling the
                  procurement and delivery of industrial-grade materials and
                  energy products across key international markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
