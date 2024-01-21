import React from "react";
import "../../styles/testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import avatar01 from "../../assets/img/avatar01.png";
import avatar02 from "../../assets/img/avatar02.png";

export default function Testimonial() {
  return (
    <>
      <section>
        <div className="container sliders">
          <h2 className="section__title">Testimonials</h2>
          <div className="swiper-container mySwiper">
            <div className="swiper-wrapper">
              <Swiper effect={"cards"} grabCursor={true} className="mySwiper">
                <SwiperSlide>
                  <div className="slide__item">
                    <div className="slide__img-01">
                      <img src={avatar01} alt="" />
                    </div>
                    <h4>Malena Rodriguez</h4>
                    <p>
                      Incorporating exercise into my daily routine has been a
                      transformative decision. I've lost weight, gained strength
                      and endurance, and my self-esteem has reached levels I
                      never imagined. Healthy living is not just a choice but a
                      constant source of joy and balance in my everyday life.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__item">
                    <div className="slide__img-02">
                      <img src={avatar02} alt="" />
                    </div>
                    <h4>Natalia Perez</h4>
                    <p>
                      Discovering the value of a healthy life and regular
                      exercise has been like finding the key to happiness. I
                      feel stronger, more centered, and more capable of facing
                      daily challenges. Each day unfolds with a new sense of
                      vitality and well-being, and I'm grateful for making
                      health a priority in my life.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__item">
                    <div className="slide__img-03">
                      <img src={avatar01} alt="" />
                    </div>
                    <h4>Ana Gonzales</h4>
                    <p>
                      Embracing a healthy lifestyle and exercising regularly has
                      completely transformed my life. I feel more energetic, my
                      overall health has improved, and I've experienced greater
                      mental clarity. These positive changes have not only
                      influenced my physical well-being but also my happiness
                      and quality of life.
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
