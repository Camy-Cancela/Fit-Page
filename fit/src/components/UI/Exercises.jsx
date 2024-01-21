import React from "react";
import "../../styles/exercises.css";
import lunges from "../../assets/img/lunges.png";
import yoga from "../../assets/img/yoga.png";
import extended from "../../assets/img/extended.png";

const Exercises = () => {
  return (
    <section id="schedule">
      <div className="container exercise__container">
        <div className="exercise__top">
          <h2 className="section__title">
            Benefits of <span className="highlights">Exercise</span>
          </h2>
          <p>
            Regular exercise offers a wide range of health benefits, including
            improved cardiovascular health, weight control, muscle and bone
            strengthening, enhanced flexibility and mobility, diabetes
            management, mood improvement, stress reduction, promotion of
            healthier sleep, reinforcement of the immune system, boosted
            self-esteem and confidence, and the promotion of longevity.
            <br />
            Consistency in exercise is crucial to experiencing these benefits
            optimally, and it is advisable to consult with a healthcare
            professional before starting a new exercise program.
          </p>
        </div>

        <div className="exercise__wrapper">
          <div className="exercise__item">
            <span className="exercise__icon">
              <img src={lunges} alt="" />
            </span>
            <div className="exercise__content">
              <h4>Healthy Life</h4>
              <p>
                Mobility enhances agility and flexibility, optimizing physical
                performance and reducing the risk of injuries.
              </p>
            </div>
          </div>
          <div className="exercise__item">
            <span className="exercise__icon">
              <img src={yoga} alt="" />
            </span>
            <div className="exercise__content">
              <h4>Increased Flexibility</h4>
              <p>
                Increased flexibility enhances joint mobility, reduces
                stiffness, and improves overall physical performance.
              </p>
            </div>
          </div>
          <div className="exercise__item">
            <span className="exercise__icon">
              <img src={extended} alt="" />
            </span>
            <div className="exercise__content">
              <h4>Reducing Blood Pressure</h4>
              <p>
                Reducing blood pressure positively impacts cardiovascular
                health, lowering the risk of heart disease and promoting overall
                well-being.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exercises;
