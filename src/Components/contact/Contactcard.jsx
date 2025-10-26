import { useState, useRef, useEffect } from "react";
import "./Contactcard.css";
import SiteLogo from "../../assets/SiteLogo.png";
import flat_location_logo from "../../assets/flat_location_logo.png";

const Contactcard = () => {
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const numberRef = useRef(null);
  const messageRef = useRef(null);

  // Automatically clear success message after 4 seconds
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 4000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const validateForm = () => {
    let formErrors = {};

    if (!nameRef.current.value.trim()) formErrors.name = "Name is required";
    if (!emailRef.current.value.trim()) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(emailRef.current.value)) {
      formErrors.email = "Email is invalid";
    }
    if (!numberRef.current.value.trim()) {
      formErrors.number = "Phone number is required";
    } else if (!/^\d{11}$/.test(numberRef.current.value)) {
      formErrors.number = "Phone number must be 11 digits";
    }
    if (!messageRef.current.value.trim())
      formErrors.message = "Message is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const resetForm = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
    numberRef.current.value = "";
    messageRef.current.value = "";

    [nameRef, emailRef, numberRef, messageRef].forEach((ref) => {
      ref.current.parentElement.classList.remove("focus");
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    setIsSending(true);
    setSuccessMessage("");

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      number: numberRef.current.value,
      message: messageRef.current.value,
    };

    try {
      const API_BASE_URL =
        import.meta.env.MODE === "development"
          ? "http://localhost:5000"
          : "https://jeniamy-concepts.onrender.com";

      const response = await fetch(`${API_BASE_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      let result;
      try {
        result = await response.json();
      } catch {
        result = {};
      }

      if (response.ok && result.success) {
        setSuccessMessage("✅ Email sent successfully!");
        resetForm();
      } else {
        setSuccessMessage("❌ Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Network or server error:", error);
      setSuccessMessage("⚠️ An error occurred. Please try again later.");
    }

    setIsSending(false);
    setFormSubmitted(true);
    setErrors({});
  };

  const handleFocus = (ref) => {
    ref.current.parentElement.classList.add("focus");
  };

  const handleBlur = (ref) => {
    if (!ref.current.value.trim()) {
      ref.current.parentElement.classList.remove("focus");
    }
  };

  return (
    <div className="contact-cont">
      <span className="circle-bg"></span>
      <div className="contactForm">
        <div className="contact-info">
          <h3 className="title">Drop by or email us.</h3>
          <p>Do not hesitate, We are eager to understand your business goals</p>
          <div className="info">
            <div className="information">
              <img src={flat_location_logo} className="icon" alt="location" />
              <p>7, Adijatu Adisa Agodo Ikotun Lagos Nigeria</p>
            </div>
            <div className="information">
              <img src={SiteLogo} className="icon" alt="logo" />
              <p>
                7, Azugbene Street, Off Refinery Road, Ekpan Warri, Delta state
                Nigeria.
              </p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form onSubmit={handleSubmit}>
            <div className="form-title">
              <h3>Request Quote Form</h3>
            </div>

            <div className="input-box">
              <input
                ref={nameRef}
                className="input"
                type="text"
                onFocus={() => handleFocus(nameRef)}
                onBlur={() => handleBlur(nameRef)}
              />
              <label>Username</label>
              {formSubmitted && errors.name && (
                <span className="error">{errors.name}</span>
              )}
            </div>

            <div className="input-box">
              <input
                ref={emailRef}
                className="input"
                type="email"
                onFocus={() => handleFocus(emailRef)}
                onBlur={() => handleBlur(emailRef)}
              />
              <label>Email</label>
              {formSubmitted && errors.email && (
                <span className="error">{errors.email}</span>
              )}
            </div>

            <div className="input-box">
              <input
                ref={numberRef}
                className="input"
                type="tel"
                onFocus={() => handleFocus(numberRef)}
                onBlur={() => handleBlur(numberRef)}
              />
              <label>Phone</label>
              {formSubmitted && errors.number && (
                <span className="error">{errors.number}</span>
              )}
            </div>

            <div className="input-box">
              <textarea
                ref={messageRef}
                className="input"
                onFocus={() => handleFocus(messageRef)}
                onBlur={() => handleBlur(messageRef)}
              ></textarea>
              <label>Message</label>
              {formSubmitted && errors.message && (
                <span className="error">{errors.message}</span>
              )}
            </div>

            <button className="contact-btn" type="submit" disabled={isSending}>
              {isSending ? (
                <span className="sending">
                  <span className="spinner"></span> Sending...
                </span>
              ) : (
                "Submit"
              )}
            </button>
          </form>

          {successMessage && (
            <div
              className="success-message"
              style={{
                opacity: successMessage ? 1 : 0,
                transition: "opacity 0.4s ease-in-out",
                marginTop: "10px",
              }}
            >
              {successMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contactcard;
