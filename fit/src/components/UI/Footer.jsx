import React from "react";
import "../../styles/footer.css";
import logo from "../../assets/img/dumble.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__box">
            <div className="logo">
              <div className="logo_img">
                <img src={logo} alt="" />
              </div>
              <h2>Fitness-Camy</h2>
            </div>
            <p>
              Are you ready to transform your life through fitness? Discover the
              key to a healthier life, full of energy and vitality. Are you up
              for the challenge?
            </p>
          </div>
          <div className="footer__box">
            <h4 className="footer__title"> Company</h4>
            <ul className="footer__links">
              <li>
                <a href="#">Our Program</a>
              </li>
              <li>
                <a href="#">Our Plan</a>
              </li>
              <li>
                <a href="#">Become a menu</a>
              </li>
            </ul>
          </div>

          <div className="footer__box">
            <h4 className="footer__title"> Quick Links</h4>
            <ul className="footer__links">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>

          <div className="footer__box">
            <h4 className="footer__title"> Quick Links</h4>
            <ul className="footer__links">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="copyright">
          Copyright - {year} develpode by Camila Cancela. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
