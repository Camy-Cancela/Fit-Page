import React, { useEffect, useRef } from "react";
import "../../styles/header.css";
import logo from "../../assets/img/dumble.png";
import "../../styles/hero.css";
import { FiMenu } from "react-icons/fi";

const navLinks = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#schedule",
    display: "Schedule",
  },
  {
    path: "#classes",
    display: "Classes",
  },
  {
    path: "#pricing",
    display: "Pricing",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("sticky__header");
    } else {
      headerRef.current.classList.remove("sticky__header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute("href");
    const targetElement = document.querySelector(targetAttr);

    if (targetElement) {
      const location = targetElement.offsetTop;

      window.scrollTo({
        left: 0,
        top: location - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav_wrapper">
          <div className="logo">
            <div className="logo_img">
              <img src={logo} alt="" />
            </div>
            <h2>Fitness-Camy</h2>
          </div>

          <div className="navigation">
            <ul className="menu">
              {navLinks.map((item, index) => (
                <li className="nav__item" key={index}>
                  <a onClick={handleClick} href={item.path}>
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav__right">
            <button className="register__btn">Register</button>
            <span className="mobile__menu">
              <FiMenu />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
