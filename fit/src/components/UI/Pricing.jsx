import React from "react";
import "../../styles/pricing.css";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

const Pricing = () => {
  return (
    <section id="pricing">
      <div className="container">
        <div className="pricing__top">
          <h2 className="section title">
            Gym <span className="highlights"> Pricing </span>
            Plan
          </h2>
          <p>
            Explore our Gym Pricing Plans for fitness options that fit your
            lifestyle and goals. Start your journey to a healthier you today!
          </p>
        </div>

        <div className="pricing__wrapper">
          <div className="pricing__item">
            <div className="pricing__card-top">
              <h2>Regular Member</h2>
              <h2 className="pricing">
                $50 <span>/month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>
                  Unlimited acces to the gym
                </li>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>
                  Customer support
                </li>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>
                  Personal trainer
                </li>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>
                  Standard options
                </li>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>
                  5 clasess per week
                </li>
              </ul>
              <button className="register__btn">Join Now</button>
            </div>
          </div>
          <div className="pricing__item pricing__item-02">
            <div className="pricing__card-top">
              <h2>Premium Member</h2>
              <h2 className="pricing">
                $70 <span>/month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>
                  Unlimited acces to the gym
                </li>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>
                  Customer support
                </li>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>
                  Personal trainer
                </li>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>
                  Standard options
                </li>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>
                  5 clasess per week
                </li>
              </ul>
              <button className="register__btn">Join Now</button>
            </div>
          </div>

          <div className="pricing__item pricing__item-03">
            <div className="pricing__card-top">
              <h2>Standard Member</h2>
              <h2 className="pricing">
                $100 <span>/month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>
                  Unlimited acces to the gym
                </li>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>
                  Customer support
                </li>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>
                  Personal trainer
                </li>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>
                  Standard options
                </li>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>
                  5 clasess per week
                </li>
              </ul>
              <button className="register__btn">Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
