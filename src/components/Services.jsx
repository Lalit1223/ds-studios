import React from "react";
import image0 from "../assets/0.jpg";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpg";
import image6 from "../assets/6.jpg";
import image7 from "../assets/7.jpg";
import image8 from "../assets/8.jpg";
import "../styles/Services.css";

const services = [
  {
    title: "App Development",
    description: "Custom app development tailored to your needs.",
    image: image0,
  },
  {
    title: "Web Development",
    description: "Modern, responsive websites to elevate your online presence.",
    image: image1,
  },
  {
    title: "Software Development",
    description: "Comprehensive software solutions for all platforms.",
    image: image2,
  },
  {
    title: "Graphic Designing",
    description: "Creative graphics that captivate your audience.",
    image: image3,
  },
  {
    title: "UI/UX Design",
    description:
      "Intuitive and engaging user interface and experience designs.",
    image: image4,
  },
  {
    title: "Animation",
    description: "High-quality animations to bring your ideas to life.",
    image: image5,
  },
  {
    title: "VFX",
    description: "Stunning visual effects for impactful storytelling.",
    image: image6,
  },
  {
    title: "Film Shoot / Ad Shoot",
    description: "Professional shoots for films and advertisements.",
    image: image7,
  },
  {
    title: "Video Editing",
    description: "Professional Video Editing.",
    image: image8,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <div
              className="col-md-6 col-lg-4 mb-4 d-flex justify-content-center"
              key={index}
            >
              <div className="card service-card">
                <img
                  src={service.image}
                  alt={service.title}
                  className="card-img-top service-image"
                />
                <div className="card-body">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
