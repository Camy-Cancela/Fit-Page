import React from "react";
import "../../styles/start.css";
import trainerImg from "../../assets/img/trainer.png";

const Start = () => {
  return (
    <section id="classes">
      <div className="container">
        <div className="start__wrapper">
          <div className="start_img">
            <img src={trainerImg} alt="" />
          </div>

          <div className="start__content">
            <h2 className="section title">
              Ready to make a <span className="highlights">change?</span>
            </h2>
            <p>
              Your journey to greatness begins with the first step. Embrace the
              challenge, and let every small effort bring you closer to your
              goals!
            </p>
            <button className="register__btn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
