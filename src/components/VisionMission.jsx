import React from "react";
import banner from "../assets/new.jpeg";
import "../styles/VisionMission.css";

const VisionMission = () => {
  return (
    <section id="vision-mission" className="vision-mission-section">
      <div className="container">
        <h2 className="section-title">Vision & Mission</h2>
        <p className="section-text">
          Our vision is to redefine creativity and establish new benchmarks in
          innovation and quality across all projects. At DS STUDIOS, we aim to
          create a legacy of exceptional storytelling, artistry, and technology
          that transforms the way people experience content and creativity.
        </p>
        <p className="section-text">
          Our mission is to empower brands and individuals to achieve their
          goals through bespoke creative solutions. From groundbreaking design
          to state-of-the-art technology, we are committed to delivering
          experiences that inspire, captivate, and leave a lasting impact.
        </p>
        <p className="section-text">
          We believe in pushing boundaries, challenging conventions, and
          fostering innovation. Our team of experts works relentlessly to bring
          fresh ideas and perspectives to every project, ensuring every story we
          tell is unique and impactful.
        </p>
        <div className="banner-container">
          <img
            src={banner}
            alt="Vision & Mission Banner"
            className="banner-image"
          />
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
