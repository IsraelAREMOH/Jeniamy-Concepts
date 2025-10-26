import { Fragment } from "react";
import photo1 from "../../assets/photo1.jpg";
import "./Details.css";

function Details() {
  return (
    <Fragment>
      <section className="Details-about">
        <div className="Details-row">
          <div className="Details-column">
            <img className="Details-img" src={photo1} alt="face of company" />
          </div>
          <div className="Details-column">
            <div className="Details-info">
              <div className="Details-main-title">
                <h2>About Us</h2>
              </div>
              <h3>Contract and Supply Financing</h3>
              <p>
                Empowering Growth Through Reliable Business Support. At Jeniamy
                Concepts, we provide contract and supply financing solutions
                designed to support businesses in emerging and established
                markets. Our financing model enables qualified partners to
                access working capital for production, procurement, and
                large-scale supply projects, ensuring smooth operations and
                uninterrupted growth.
              </p>

              <div className="-Details-content-list">
                <p>Service We Offer:</p>
                <ul>
                  <li>
                    <span className="Details-content-span">
                      Financing: $1000 and above.
                    </span>
                  </li>
                  <li>
                    <span className="Details-content-span">
                      Submit KYC/AML Form
                    </span>
                  </li>
                  <li>
                    <span className="Details-content-span">
                      Review & Sign Agreement
                    </span>
                  </li>
                  <li>
                    <span className="Detais-content-span">
                      Repayment period: 12-36 months
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Details;
