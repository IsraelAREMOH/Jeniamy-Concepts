import { Carousel } from "react-bootstrap";
import photo1 from "../../assets/photo1.jpg";
import "./Aboutheader.css";

const Aboutheader = () => {
  return (
    <div>
      <div>
        <Carousel fade>
          <Carousel.Item style={{ height: "1000px" }}>
            <img
              className="d-block w-100"
              src={photo1}
              alt="First slide"
              style={{ height: "500px" }}
            />
            <Carousel.Caption className="carousel-caption text-white d-none d-md-block col-6">
              <span>Better Financing for Global Trade</span>
              <h3>Start Growing Your Global Trade Portfolio</h3>
              <p>
                Jeniamy Concepts is an integrated production, supply, and
                contracting firm established to manage and deliver end-to-end
                solutions across the value chain of trade, procurement, and
                project execution. We are dedicated to simplifying operational
                complexities and ensuring seamless coordination in production,
                logistics, and supply management for businesses across diverse
                industries.
              </p>
              <p>
                <a href="#" className="btn-link">
                  Contact Us
                </a>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "1000px" }}>
            <img
              className="d-block w-100"
              src={photo1}
              alt="Second slide"
              style={{ height: "500px" }}
            />

            <Carousel.Caption className="carousel-caption text-white d-none d-md-block col-6">
              <span>Better Financing for Global Trade</span>
              <h3>Start Growing Your Global Trade Portfolio</h3>
              <p>
                Jeniamy Concepts is an integrated production, supply, and
                contracting firm established to manage and deliver end-to-end
                solutions across the value chain of trade, procurement, and
                project execution. We are dedicated to simplifying operational
                complexities and ensuring seamless coordination in production,
                logistics, and supply management for businesses across diverse
                industries.
              </p>
              <p>
                <a href="#" className="btn-link">
                  Contact Us
                </a>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "1000px" }}>
            <img
              className="d-block w-100"
              src={photo1}
              alt="Third slide"
              style={{ height: "500px" }}
            />

            <Carousel.Caption className="carousel-caption text-white d-none d-md-block col-6">
              <span>Better Financing for Global Trade</span>
              <h3>Start Growing Your Global Trade Portfolio</h3>
              <p>
                Jeniamy Concepts is an integrated production, supply, and
                contracting firm established to manage and deliver end-to-end
                solutions across the value chain of trade, procurement, and
                project execution. We are dedicated to simplifying operational
                complexities and ensuring seamless coordination in production,
                logistics, and supply management for businesses across diverse
                industries.
              </p>
              <p>
                <a href="#" className="btn-link">
                  Contact Us
                </a>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Aboutheader;
