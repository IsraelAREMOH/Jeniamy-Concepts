import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo1 from "../../assets/photo1.jpg";
import "./Testimonial.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Testimonial = () => {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <Slider className="test" {...settings}>
      <div>
        <div className="testimonial_wrap">
          <div className="testimonial_container">
            <div className="testimonial_slider">
              <div className="testimonial_item">
                <div className="inner_testimonial">
                  <div className="testimonial_img">
                    <img src={photo1} alt="contact-img" />
                  </div>
                  <div className="excert-text">
                    <p>
                      Our company was facing financial challenges, but the team
                      at Jeniamy Concepts Advisory helped us restructure our
                      capital and implement cost-saving measures that have
                      significantly improved our bottom line reserves. We
                      couldn't have done it without them.
                    </p>
                  </div>
                  <div className="testimonial__info">
                    <p>
                      <i>
                        <FontAwesomeIcon icon={faQuoteRight} />
                      </i>
                      <a href="#">Tolu</a>
                      <span className="client-span">CEO WestEnd</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="testimonial_wrap">
          <div className="testimonial_container">
            <div className="testimonial_slider">
              <div className="testimonial_item">
                <div className="inner_testimonial">
                  <div className="testimonial_img">
                    <img src={photo1} alt="contact-img" />
                  </div>
                  <div className="excert-text">
                    <p>
                      Our company was facing financial challenges, but the team
                      at Jeniamy helped us restructure our capital and implement
                      cost-saving measures that have significantly improved our
                      bottom line reserves. We couldn't have done it without
                      them.
                    </p>
                  </div>
                  <div className="testimonial__info">
                    <p>
                      <i>
                        <FontAwesomeIcon icon={faQuoteRight} />
                      </i>
                      <a href="#">Wale</a>
                      <span className="client-span"></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="testimonial_wrap">
          <div className="testimonial_container">
            <div className="testimonial_slider">
              <div className="testimonial_item">
                <div className="inner_testimonial">
                  <div className="testimonial_img">
                    <img src={photo1} alt="contact-img" />
                  </div>
                  <div className="excert-text">
                    <p>
                      Thanks @team jeniamy for all the help securing loan for my
                      Agro business
                    </p>
                  </div>
                  <div className="testimonial__info">
                    <p>
                      <i>
                        <FontAwesomeIcon icon={faQuoteRight} />
                      </i>
                      <a href="#">Joseph</a>
                      <span className="client-span">FS</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="testimonial_wrap">
          <div className="testimonial_container">
            <div className="testimonial_slider">
              <div className="testimonial_item">
                <div className="inner_testimonial">
                  <div className="testimonial_img">
                    <img src={photo1} alt="contact-img" />
                  </div>
                  <div className="excert-text">
                    <p>
                      Our company was facing financial challenges, but the team
                      at GCU Advisory helped us restructure our capital and
                      implement cost-saving measures that have significantly
                      improved our bottom line reserves. We couldn't have done
                      it without them.
                    </p>
                  </div>
                  <div className="testimonial__info">
                    <p>
                      <i>
                        <FontAwesomeIcon icon={faQuoteRight} />
                      </i>
                      <a href="#">OJO</a>
                      <span className="client-span">Wilsambod</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="testimonial_wrap">
          <div className="testimonial_container">
            <div className="testimonial_slider">
              <div className="testimonial_item">
                <div className="inner_testimonial">
                  <div className="testimonial_img">
                    <img src={photo1} alt="contact-img" />
                  </div>
                  <div className="excert-text">
                    <p>
                      Our company was facing financial challenges, but the team
                      at GCU Advisory helped us restructure our capital and
                      implement cost-saving measures that have significantly
                      improved our bottom line reserves. We couldn't have done
                      it without them.
                    </p>
                  </div>
                  <div className="testimonial__info">
                    <p>
                      <i>
                        <FontAwesomeIcon icon={faQuoteRight} />
                      </i>
                      <a href="#">James</a>
                      <span className="client-span">Traloaded</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="testimonial_wrap">
          <div className="testimonial_container">
            <div className="testimonial_slider">
              <div className="testimonial_item">
                <div className="inner_testimonial">
                  <div className="testimonial_img">
                    <img src={photo1} alt="contact-img" />
                  </div>
                  <div className="excert-text">
                    <p>
                      Our company was facing financial challenges, but the team
                      at GCU Advisory helped us restructure our capital and
                      implement cost-saving measures that have significantly
                      improved our bottom line reserves. We couldn't have done
                      it without them.
                    </p>
                  </div>
                  <div className="testimonial__info">
                    <p>
                      <i>
                        <FontAwesomeIcon icon={faQuoteRight} />
                      </i>
                      <a href="#">Remi</a>
                      <span className="client-span">TCL</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
