import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="py-5 about-section">
      <div className="container">
        <h2 className="section-title text-center mb-4">About Us</h2>
        <div className="section-content text-justify">
          <p className="section-text">
            Welcome to <strong>DS STUDIOS</strong>, where creativity meets
            innovation!
          </p>
          <p className="section-text">
            We are a full-service creative powerhouse specializing in delivering
            cutting-edge solutions tailored to meet the diverse needs of
            corporate and government clients. With a passion for excellence, we
            turn ideas into impactful results, providing an array of services
            designed to elevate your brand and projects to the next level
          </p>
          <p className="section-text">
            From app development to graphic design, animations to film shoots,
            our team of talented professionals works tirelessly to bring your
            ideas to life. at DS STUDIOS, we don’t just create projects; we
            create memorable experiences tailored to your vision and goals.
          </p>

          <p className="section-text text-center font-italic mt-4">
            Join us in shaping the future of creativity and technology. Let’s
            make your dream project a reality!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
