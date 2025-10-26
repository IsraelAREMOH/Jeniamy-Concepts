import "./Header.css";
import { Cardbutton } from "../../Components";
import TakaDollar from "../../assets/TakaDollar.png";
import siteImage1 from "../../assets/siteImage1.png";
import merge from "../../assets/merge.png";
import finance from "../../assets/finance.png";
const Header = () => {
  return (
    <div className="main-hero">
      <section className="hero-banner">
        <div className="container">
          <div className="hero-bg">
            <div className="hero-content">
              <div className="title">
                <h5 className="title">
                  We Are Leaders in Trade, Production, and Supply
                </h5>
              </div>
              <div>
                <h2 className="hero_span">
                  <span className="hero-span">
                    Delivering Excellence Through Experience & Innovation
                  </span>
                </h2>
              </div>
              <p className="hero-text">
                Welcome to Our Integrated Production, Supply, and Contracting
                Solutions.
                <br /> With a legacy of expertise and a commitment to
                operational excellence,
                <br /> we support businesses, distributors, and organizations
                with strategic, end-to-end solutions! and <br /> make informed
                decisions about your debt and capital needs.
              </p>
            </div>
          </div>
          <div className="hero-wrapper">
            <div className="form-tab">
              <h2>Our Services</h2>
              <div className="p-text">
                <p>
                  As experienced industry professionals, we recognize that every
                  client has unique operational goals and supply needs. That is
                  why we provide personalized and comprehensive solutions
                  designed to drive efficiency, reliability, and long-term
                  growth. Our team combines deep market insight with proven
                  expertise to deliver tailored support across the following
                  areas:
                </p>
                <Cardbutton />
              </div>
            </div>
            <ul className="service-list">
              <li>
                <div className="service-card">
                  <div className="card-icon">
                    <img className="ion-icon" src={siteImage1} />
                  </div>
                  <h3 className="mb-3">Food Production & Processing</h3>
                  <p className="text-secondary">
                    We oversee every stage of the production process — from
                    sourcing and processing to packaging and distribution —
                    ensuring the highest standards of quality, safety, and
                    compliance.
                  </p>
                </div>
              </li>
              <li>
                <div className="service-card">
                  <div className="card-icon">
                    <img className="ion-icon" src={TakaDollar} />
                  </div>
                  <h3 className="mb-3">
                    Sales & Supply of Consumer and Non-Consumer Goods
                  </h3>
                  <p className="text-secondary">
                    Leveraging an extensive supply network, we provide timely
                    delivery of consumer and industrial products, maintaining
                    consistency, transparency, and value across the supply
                    chain.
                  </p>
                </div>
              </li>
              <li>
                <div className="service-card">
                  <div className="card-icon">
                    <img className="ion-icon" src={finance} />
                  </div>
                  <h3 className="mb-3">General Contracts & Merchandise</h3>
                  <p className="text-secondary">
                    We manage general contracting and merchandise operations
                    with precision and accountability, offering procurement,
                    logistics, and project support that align with each client’s
                    strategic objectives.
                  </p>
                </div>
              </li>
              <li>
                <div className="service-card">
                  <div className="card-icon">
                    <img className="ion-icon" src={merge} />
                  </div>
                  <h3 className="mb-3">Transaction Advisory Service</h3>
                  <p className="text-secondary">
                    This service involves helping businesses secure funding
                    through various sources, such as loans, equity investments,
                    or bonds.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
