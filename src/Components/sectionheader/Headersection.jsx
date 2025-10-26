import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import VEGETATION from "../../assets/VEGETATION.jpg";
import verticalfarming from "../../assets/verticalfarming.webp";
import vegetables from "../../assets/vegetables.jpg";
import "./Headersection.css";
const Headersection = () => {
  const [activeImage, setActiveImage] = useState(VEGETATION);

  return (
    <>
      {/* Desktop Carousel */}
      <Carousel
        fade
        onSelect={(selectedIndex) => {
          const images = [VEGETATION, verticalfarming, vegetables];
          setActiveImage(images[selectedIndex]);
        }}
      >
        <Carousel.Item>
          <img className="d-block w-100" src={VEGETATION} alt="First slide" />
          <Carousel.Caption
            className="carousel-caption text-white d-none d-md-block col-6"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <span className="c-sub-heading">
              Better Financing for Global Trade
            </span>
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
              <a href="#" className="link">
                Contact Us
              </a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={verticalfarming}
            alt="Second slide"
          />
          <Carousel.Caption
            className="carousel-caption text-white d-none d-md-block col-6"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <span className="c-sub-heading">
              Better Financing for Global Trade
            </span>
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
              <a href="#" className="link">
                Contact Us
              </a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={vegetables} alt="Third slide" />
          <Carousel.Caption
            className="carousel-caption text-white d-none d-md-block col-6"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <span className="c-sub-heading">
              Better Financing for Global Trade
            </span>
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
              <a href="#" className="link">
                Contact Us
              </a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Mobile Caption Alternative */}
      <div
        className="carousel-option d-block d-md-none"
        style={{
          backgroundImage: `url(${activeImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mobile-overlay">
          <span className="c-sub-heading">
            Better Financing for Global Trade
          </span>
          <h3>Start Growing Your Global Trade Portfolio</h3>
          <p>
            Jeniamy Concepts is an integrated production, supply, and
            contracting firm established to manage and deliver end-to-end
            solutions across the value chain of trade, procurement, and project
            execution. We are dedicated to simplifying operational complexities
            and ensuring seamless coordination in production, logistics, and
            supply management for businesses across diverse industries.
          </p>
          <p>
            <a href="#" className="link">
              Contact Us
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Headersection;
