import photo1 from "../../assets/photo1.jpg";
import "./Cardservice2.css";
import { Cardbutton } from "../../Components";

const Cardservice2 = () => {
  return (
    <div>
      <section className="card-sevice2">
        <div className="card-service2-row">
          <div className="card-service2-column">
            <img className="card-service2-img" src={photo1} />
          </div>
          <div
            className="card-service2-column"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="card-service2-info">
              <h2 className="card-service2-heading">Proof Of Funds</h2>
              <p className="card-service2-text">
                At Jeniamy Concepts, our Proof of Funds service is designed to
                empower businesses in food production, processing, and general
                merchandise to secure contracts and trade opportunities with
                confidence. We provide verified financial instruments that
                demonstrate funding capability for large-scale supply deals and
                project bids. Through our trusted banking network, clients can
                access secure proof of capital to support transactions, build
                credibility, and strengthen business partnerships. Our process
                ensures transparency, compliance, and reliability positioning
                you for success in both local and international markets.
              </p>

              <Cardbutton />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cardservice2;
