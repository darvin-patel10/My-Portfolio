import React from "react";
import "./Hero.css";
import profileImage from "/Darvin.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        {/* LEFT */}
        <div className="hero-left">
          <h1>
            Hi, I'm <span>Darvin Padariya</span>
          </h1>

          <h2>MERN Stack Developer</h2>

          <p>
            I build modern, responsive, and scalable web applications using
            React, Node.js, Express, and MongoDB.
          </p>

          <div className="hero-buttons">
            <a href="https://drive.google.com/file/d/1ylRSyzEhP-m31mCm7bc0Lrtde2ABXPj_/view?usp=sharing" target="_blank" className="btn primary">
              Resume
            </a>
            <a href="#contact" className="btn secondary">
              Contact
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <div className="profile-image">
            <img src={profileImage} alt="Darvin Padariya" />
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;
