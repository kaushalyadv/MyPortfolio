import React, { useState } from "react";
import "./Contact.scss";
// const Message = require('../../../../Backend/models/sendMessage')
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";

function Contact(props) {
  const [isToggledA, setToggledA] = useState(false);

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleToggleInHome = () => {
    setToggledA(!isToggledA);
  };

  // sending the user to Home page is the auth-token is correct
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = credentials;
    const response = await fetch("http://localhost:5000/api/auth/sendMessage", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      navigate("/");
      props.showAlert("I Got It!", "success");
    } 
 
    else {
      props.showAlert("Invalid credentials", "danger");
      setCredentials({name: '', email: '', message: ''});
    }

  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className={`main-con ${isToggledA ? 'bg-ch-d' : 'bg-ch-l'}`}>
      <Header handleToggleInHome={handleToggleInHome} />
      <div className="main-con-ch">
        <h1 className={isToggledA ? "textsW " : ""}>Contact.</h1>
        <span id="text" className={isToggledA ? "textsW-d " : "textsB"}>
          Get in touch or shoot me an email directly on{" "}
          <span id="mail" className={isToggledA ? "textsW " : "textB"}>
            hellocodewonders@gmail.com
          </span>
        </span>

        {/* form ----------------------------------------------------------------------------------------------------- */}

        <div className="form">
          <form onSubmit={handleSubmit}>
            <input
              placeholder="name"
              className={isToggledA ? "light-b ltext " : "dark-b btext"}
              type="name"
              onChange={onChange}
              value={credentials.name}
              name="name"
              id="name"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className={isToggledA ? "light-b ltext" : "dark-b btext"}
              name="email"
              value={credentials.email}
              onChange={onChange}
              id="email"
              required
            />
            <textarea
              name="message"
              value={credentials.message}
              onChange={onChange}
              className={isToggledA ? "light-b ltext" : "dark-b btext"}
              id="message"
              type="message"
              placeholder="Enter A Message"
              cols="30"
              rows="10"
              required
            ></textarea>

            <button
              type="submit"
              className={isToggledA ? "lightBg " : "darkBg textsW"}
            >
              Send Message
            </button>
          </form>
        </div>

        <span
          id="Home"
          className={isToggledA ? "textsW " : "textsB"}
          onClick={() => navigate("/")}
        >
          Go Back Home{" "}
          <span id="arrow">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </span>
        <div className="social">
          <a
            href="www.google.com"
            className={isToggledA ? "textsW " : "textsB"}
          >
            <FontAwesomeIcon icon={faTwitter} />{" "}
          </a>
          <a
            href="www.google.com"
            className={isToggledA ? "textsW " : "textsB"}
          >
            <FontAwesomeIcon icon={faFacebook} />{" "}
          </a>
          <a
            href="www.google.com"
            className={isToggledA ? "textsW " : "textsB"}
          >
            <FontAwesomeIcon icon={faLinkedin} />{" "}
          </a>
          <a
            href="www.google.com"
            className={isToggledA ? "textsW " : "textsB"}
          >
            <FontAwesomeIcon icon={faGithub} />{" "}
          </a>
          <a
            href="www.google.com"
            className={isToggledA ? "textsW " : "textsB"}
          >
            <FontAwesomeIcon icon={faInstagram} />{" "}
          </a>
        </div>

        {/* <div className="tpas">
        {backendData.users.length === 0 ? (
          <p>Loading...</p>
        ) : (
          backendData.users.map((user, i) => <p key={i}>{user}</p>)
        )}
      </div> */}
      </div>
    </div>
  );
}

export default Contact;
