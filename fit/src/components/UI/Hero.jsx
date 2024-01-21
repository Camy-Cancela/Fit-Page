import React from "react";
import heroImg from "../../assets/img/hero.png";
import dumbleIcon from "../../assets/img/dumble.png";
import { FaPlay } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaHeartbeat } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <h2>
              Exercise is the key to a
              <span className="highlights"> Healthy</span> Lifestyle
            </h2>
            <p>
              Healthy living involves habits such as a balanced diet, regular
              exercise, adequate sleep, stress management, hydration, positive
              relationships, and mental care. <br /> These promote physical and
              emotional well-being for a fulfilling life.
            </p>
            <div className="hero__btns">
              <button className="register__btn">Get Started</button>
              <button className="watch__btn">
                <span>
                  <FaPlay />
                </span>
                Watch video
              </button>
            </div>
          </div>

          <div className="hero__img">
            <div className="hero__img-wrapper">
              <div className="box-01">
                <div className="box-02">
                  <div className="box-03">
                    <div className="box__img">
                      <img src={heroImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="heart__rate">
                <h5>Heart Rate</h5>
                <span>
                  <FaHeartbeat />
                </span>
                <h5>2567 BPM</h5>
              </div>

              <div className="gym__location">
                <span>
                  <FaLocationDot />
                </span>
                <h5>
                  Find a new <br />
                  gym near you
                </h5>
              </div>

              <div className="dumble__icon">
                <img src={dumbleIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
