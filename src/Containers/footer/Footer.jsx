import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faHomeAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagramSquare,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import SiteLogo from "../../assets/SiteLogo.png";

const Footer = () => {
  return (
    <div className="text-md-start mt-5 footer__box">
      {/*Grid row*/}
      <div className="row mt-3">
        {/* Grid column*/}
        <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
          <a>
            <img src={SiteLogo} width={"50px"} height={"50px"} />
          </a>
          {/*Content*/}
          <p>
            © 2025 Jeniamy Concepts. At Jeniamy Concepts, our purpose is to
            deliver quality, reliability, and innovation across every aspect of
            food production, supply, and contracting. We are a growing
            enterprise with a network of strategic partners and a team of
            dedicated professionals committed to operational excellence and
            client success.
          </p>
          <p>
            Through integrity, efficiency, and industry expertise, we continue
            to build trust, strengthen relationships, and create lasting value
            for businesses across local and international markets.
          </p>
          <div className="footer-icon">
            <i className="nav-item">
              <FontAwesomeIcon icon={faTwitter} />
            </i>
            <i className="nav-item">
              <FontAwesomeIcon icon={faFacebook} />
            </i>
            <i className="nav-item">
              <FontAwesomeIcon icon={faInstagramSquare} />
            </i>
            <i className="nav-item">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </i>
          </div>
        </div>

        {/* Grid column */}

        {/*Grid column */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text">
          {/* Links */}
          <h5 className="text-uppercase tops-title fw-bold mb-4">Links</h5>
          <p>
            <a href="#!" className="text-reset">
              About
            </a>
          </p>
          <p>
            <a href="#!" className="text-reset">
              Service
            </a>
          </p>
          <p>
            <a href="#!" className="text-reset">
              Contact
            </a>
          </p>
        </div>
        {/*Grid column*/}

        {/*Grid column */}
        <div className="col-md-4 col-lg-3 col-xl-4 mx-auto mb-4 text">
          {/*Links */}

          <h5 className="text-uppercase tops-title fw-bold mb-4">
            Quick Contact
          </h5>
          <p>
            <i className="f-icon">
              <FontAwesomeIcon icon={faPhone} />
            </i>
            +2349056322199
          </p>
          <p>
            <i className="f-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
            support_concepts@jeniamy.com
          </p>
          <p>
            <i className="f-icon">
              <FontAwesomeIcon icon={faHomeAlt} />
            </i>
            7, Azugbene Street, Off Refinery Road, Ekpan Warri, Delta state.
          </p>
        </div>
        {/* Grid column */}
      </div>
      {/*Grid row*/}
    </div>
  );
};

export default Footer;
