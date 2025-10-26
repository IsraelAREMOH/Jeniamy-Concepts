import { Fragment } from "react";
import mihaiVlasceanu from "../../assets/mihaiVlasceanu.jpg";
import "./AboutSectionCard.css";

function AboutSectionCard() {
  return (
    <Fragment>
      <section className="about-sec">
        <div className="about-row">
          <div className="about-column">
            <img
              className="about-img"
              src={mihaiVlasceanu}
              alt="face of company"
            />
          </div>
          <div className="about-column">
            <div className="abt-info">
              <div className="main-title">
                <p>What we do and why it matters</p>
              </div>
              <h4>
                With more than 5 years of experience in Corporate Advisory,
                Trade, Production and Capital Markets, we know just what you
                need.
              </h4>
              <p>
                With years of proven expertise in food production, supply chain
                management, and general contracting, we understand precisely
                what businesses need to thrive in today’s dynamic marketplace.
                Our experience spans across production, distribution, and
                strategic sourcing, giving us a deep understanding of the
                evolving landscape of trade, consumer demand, and operational
                efficiency.
              </p>
              <p>
                Our team of professionals offers a wide range of services
                designed to support businesses at every stage of their growth.
                Whether you are an emerging enterprise seeking reliable product
                sourcing, a growing organization optimizing supply operations,
                or a large institution managing complex contracts, we possess
                the expertise and insight to deliver measurable value.
              </p>
              <p>
                We pride ourselves on offering personalized, comprehensive
                support to our clients. From identifying the best financing
                options to structuring and executing transactions, we work
                closely with you to understand your unique needs and help you
                succeed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default AboutSectionCard;
