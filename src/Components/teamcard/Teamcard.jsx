import Potokri from "../../assets/Potokri.jpg";
import Israel from "../../assets/Israel.jpg";
import Blessing from "../../assets/Blessing.jpg";
import Jennifer from "../../assets/Jennifer.jpg";
import "./Teamcard.css";

const Teamcard = () => {
  return (
    <div>
      <div className="container card-cont py-5">
        <h1 className="team-heading">Our team of professionals</h1>
        <p className="text-center card-p mt-2">
          In today's competitive business environment, effective financial
          management is key to achieving success. Let us help you make informed
          decisions about your debt and capital needs and achieve your long-term
          financial objectives.
        </p>
        <div className="row row-cols-1 row-cols-md-2 g-4 py-5">
          <div className="col">
            <div className="card mb-4">
              <div className="row no-gutters">
                <div className="col-md-4 col-card">
                  <img src={Jennifer} className="card-img" alt="card image" />
                </div>
                <div className="col-md-4 card-col">
                  <div className="card-body">
                    <h5 className="card-title">
                      Mrs. Jennifer Aimanoshi Yesufu
                    </h5>
                    <p className="card-text">CEO/Chairman.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4 col-card">
                  <img src={Israel} className="card-img" alt="card image" />
                </div>
                <div className="col-md-4 card-col">
                  <div className="card-body">
                    <h5 className="card-title">Mr. Israel Aremoh</h5>
                    <p className="card-text">Head Of Operation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4 col-card">
                  <img src={Potokri} className="card-img" alt="card image" />
                </div>
                <div className="col-md-4 card-col">
                  <div className="card-body">
                    <h5 className="card-title">Mrs. Irene Onome Potokri</h5>
                    <p className="card-text">Head Of Finance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4 col-card">
                  <img src={Blessing} className="card-img" alt="card image" />
                </div>
                <div className="col-md-4 card-col">
                  <div className="card-body">
                    <h5 className="card-title">
                      Mrs. Onomen Blessing Augustine
                    </h5>
                    <p className="card-text">Head Of ICT/Analyst</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teamcard;
