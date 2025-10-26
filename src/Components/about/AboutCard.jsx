import React, { Fragment, useState } from "react";
import "./AboutCard.css";

function AboutCard() {
  const [toggleTab, setToggleTab] = useState(1);
  const toggleState = (index) => {
    setToggleTab(index);
  };
  const handleToggledTab = () => {};
  return (
    <Fragment>
      <section className="about">
        <div className="row">
          <div className="column">
            <div className="about-img">
              <img className="abt-img" src="" alt="" />
            </div>
          </div>
          <div className="column">
            <div className="tabs">
              <div
                className={
                  toggleTab === 1 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(1)}
              >
                <h2>About</h2>
              </div>
              <div
                className={
                  toggleTab === 2 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(2)}
              >
                <h2>History</h2>
              </div>
              <div
                className={
                  toggleTab === 3 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(3)}
              >
                <h2>Vision/Mission</h2>
              </div>
            </div>
            <div className="tab-content">
              {/**About conteent */}
              <div
                className={
                  toggleTab === 1 ? "content active-content" : "content"
                }
              >
                <span className="sub-heading">About Jeniamy Concepts</span>
                <h3>
                  With more than 5 years of experience in Corporate Advisory,
                  Trade, Production and Capital Markets, we know just what you
                  need.
                </h3>
                <p>
                  With years of proven expertise in food production, supply
                  chain management, and general contracting, we understand
                  precisely what businesses need to thrive in today’s dynamic
                  marketplace. Our experience spans across production,
                  distribution, and strategic sourcing, giving us a deep
                  understanding of the evolving landscape of trade, consumer
                  demand, and operational efficiency. <br /> We are committed to
                  helping our clients and partners navigate this environment
                  successfully through dependable, scalable, and result-oriented
                  solutions. <br /> Our team of professionals offers a wide
                  range of services designed to support businesses at every
                  stage of their growth. Whether you are an emerging enterprise
                  seeking reliable product sourcing, a growing organization
                  optimizing supply operations, or a large institution managing
                  complex contracts, we possess the expertise and insight to
                  deliver measurable value. <br /> We take pride in providing
                  personalized and comprehensive support to every client. From
                  identifying the most efficient production and supply
                  strategies to executing large-scale contracts, we collaborate
                  closely with you to understand your unique objectives and
                  deliver tailored solutions that enhance performance, reduce
                  risk, and strengthen competitiveness. <br /> At Jeniamy
                  Concepts, our commitment to excellence, integrity, and
                  partnership defines everything we do. We don’t just deliver
                  products and services — we deliver consistency, confidence,
                  and lasting impact.
                </p>
              </div>
              {/** History content */}
              <div
                className={
                  toggleTab === 2 ? "content active-content" : "content"
                }
              >
                <span className="sub-heading">Our History</span>
                <p>
                  Founded six years ago, Jeniamy Concepts was established with a
                  clear vision — to provide exceptional production, supply, and
                  contracting solutions that meet the evolving needs of
                  businesses and communities. From humble beginnings, we have
                  grown into a trusted name in food production and processing,
                  sales and supply of consumer and non-consumer goods, and
                  general merchandise and contracts. <br /> A key figure in our
                  story is Mrs Yesufu Jennifer, the driving force behind our
                  company’s foundation and growth. With a strong background in
                  business development and operations management, Mrs Yesufu
                  envisioned a company built on integrity, efficiency, and
                  excellence. Her strategic foresight and commitment to quality
                  have shaped our culture and propelled our expansion across
                  industries. <br /> Under her leadership, Jeniamy Concepts has
                  developed a strong team of professionals dedicated to
                  delivering consistent value and measurable results. Over the
                  past six years, we have partnered with organizations of
                  varying scales from emerging enterprises to established
                  corporations helping them strengthen their supply chains,
                  improve operational performance, and achieve sustainable
                  growth. <br /> Our journey has been defined by innovation,
                  resilience, and a steadfast commitment to client satisfaction.
                  As we continue to grow, we remain focused on our founding
                  mission: to deliver quality products and services that inspire
                  trust, drive efficiency, and support long-term success.
                </p>
              </div>
              {/** History content */}
              <div
                className={
                  toggleTab === 3 ? "content active-content" : "content"
                }
              >
                {/** History content */}
                <span className="sub-heading">Our Vision and Mission</span>
                <br />
                <span className="M-V-text">Mission:</span>
                <p>
                  At Jeniamy Concepts, our mission is to deliver quality-driven
                  production, reliable supply solutions, and efficient
                  contracting services that empower businesses to operate
                  seamlessly and grow sustainably. Through our comprehensive
                  range of services including food production and processing,
                  sales and supply of consumer and non-consumer goods, and
                  general merchandise and contracts — we work closely with our
                  clients to understand their specific operational needs and
                  provide solutions that create measurable impact. We are
                  committed to delivering exceptional value, consistency, and
                  professionalism in every engagement. By combining industry
                  expertise, innovative processes, and a deep understanding of
                  our clients’ goals, we ensure that every partnership reflects
                  our dedication to excellence, trust, and long-term success."
                </p>
                <span className="M-V-text">Vision:</span>
                <p>
                  At Jeniamy Concepts, our vision is to be the trusted partner
                  of choice for businesses seeking excellence in production,
                  supply, and contract management. We aim to redefine industry
                  standards by providing innovative, reliable, and value driven
                  solutions that support organizations at every stage of their
                  growth. We envision a future where businesses and communities
                  benefit from efficient supply chains, high-quality products,
                  and sustainable operations fostering progress, stability, and
                  shared success. Through dedication, innovation, and integrity,
                  we aspire to build a lasting legacy of excellence, trust, and
                  impact in every market we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
export default AboutCard;
