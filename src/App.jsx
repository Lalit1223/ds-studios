// Importing necessary libraries
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner from "./assets/new.png";

import "./App.css";
import {
  serviceImages,
  clientLogos,
  workfolioImages,
  logo,
} from "./imageLoader";

const App = () => {
  // Settings for react-slick carousel
  const sliderSettings = {
    dots: true, // Enables dots for navigation
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust number of slides visible
    slidesToScroll: 1,
    arrows: false, // Disables navigation arrows
  };

  // workfoli chnages when ask to implement
  // const workfolioProjects = [
  //   {
  //     title: "Project Alpha",
  //     description: "An innovative app that revolutionizes user interaction.",
  //     image: workfolioImages[0], // Replace with actual image paths
  //     link: "https://example.com/project-alpha", // Replace with actual links
  //   },
  //   {
  //     title: "Creative Design Studio",
  //     description:
  //       "A branding project with a modern and minimalistic approach.",
  //     image: workfolioImages[1],
  //     link: "https://example.com/creative-design-studio",
  //   },
  //   {
  //     title: "Dynamic Animation Reel",
  //     description: "A vibrant animation portfolio for impactful storytelling.",
  //     image: workfolioImages[2],
  //     link: "https://example.com/animation-reel",
  //   },
  //   {
  //     title: "Webfolio XYZ",
  //     description: "A sleek and responsive website design for a tech startup.",
  //     image: workfolioImages[3],
  //     link: "https://example.com/webfolio-xyz",
  //   },
  //   {
  //     title: "Ad Campaign 360",
  //     description: "A powerful ad campaign that drives engagement.",
  //     image: workfolioImages[4],
  //     link: "https://example.com/ad-campaign-360",
  //   },
  //   {
  //     title: "Film Production Showcase",
  //     description:
  //       "A high-end film production portfolio for cinematic excellence.",
  //     image: workfolioImages[5],
  //     link: "https://example.com/film-production-showcase",
  //   },
  // ];

  const services = [
    {
      title: "App Development",
      description: "Custom app development tailored to your needs.",
      image: serviceImages[0],
    },
    {
      title: "Web Development",
      description:
        "Modern, responsive websites to elevate your online presence.",
      image: serviceImages[0],
    },
    {
      title: "Software Development",
      description: "Comprehensive software solutions for all platforms.",
      image: serviceImages[0],
    },
    {
      title: "Graphic Designing",
      description: "Creative graphics that captivate your audience.",
      image: serviceImages[0],
    },
    {
      title: "UI/UX Design",
      description:
        "Intuitive and engaging user interface and experience designs.",
      image: serviceImages[0],
    },
    {
      title: "Animation",
      description: "High-quality animations to bring your ideas to life.",
      image: serviceImages[0],
    },
    {
      title: "VFX",
      description: "Stunning visual effects for impactful storytelling.",
      image: serviceImages[0],
    },
    {
      title: "Film Shoot / Ad Shoot",
      description: "Professional shoots for films and advertisements.",
      image: serviceImages[0],
    },
    {
      title: "Video Editing",
      description: "Professional shoots for films and advertisements.",
      image: serviceImages[0],
    },
  ];

  const clientNames = ["Client 1", "Client 2", "Client 3", "Client 4"];

  return (
    <div>
      {/* Header Section */}
      <header className="navbar navbar-expand-lg header">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <img
              src={logo}
              alt="DS Studios Logo"
              className="navbar-logo me-2"
            />
            <h1 className="site-title mb-0">D.S. STUDIOS</h1>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <nav>
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#vision-mission">
                    Vision & Mission
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">
                    Services
                  </a>
                </li>

                {/* workfoli chnages when ask to implement

                <li className="nav-item">
                  <a className="nav-link" href="#workfolio">
                    Workfolio
                  </a>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link" href="#clients">
                    Collaboration & Clients
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#connect">
                    Connect
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* About Us Section */}
      {/* About Us Section */}
      <section id="about" className="py-5 about-section">
        <div className="container">
          <h2 className="section-title text-center mb-4">About Us</h2>
          <div className="section-content text-justify">
            <p className="section-text">
              Welcome to <strong>D.S. STUDIOS</strong>, where creativity meets
              innovation!
            </p>
            <p className="section-text">
              We are a full-service creative powerhouse specializing in
              delivering cutting-edge solutions tailored to meet the diverse
              needs of corporate and government clients. With a passion for
              excellence, we turn ideas into impactful results, providing an
              array of services designed to elevate your brand and projects to
              the next level
            </p>
            <p className="section-text">
              From app development to graphic design, animations to film shoots,
              our team of talented professionals works tirelessly to bring your
              ideas to life. at D.S. STUDIOS, we don’t just create projects; we
              create memorable experiences tailored to your vision and goals.
            </p>

            <p className="section-text text-center font-italic mt-4">
              Join us in shaping the future of creativity and technology. Let’s
              make your dream project a reality!
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision-mission" className="vision-mission-section">
        <div className="container py-5">
          <h2 className="section-title">Vision & Mission</h2>
          <p className="section-text">
            Our vision is to redefine creativity and establish new benchmarks in
            innovation and quality across all projects. at D.S. STUDIOS, we aim
            to create a legacy of exceptional storytelling, artistry, and
            technology that transforms the way people experience content and
            creativity.
          </p>
          <p className="section-text">
            Our mission is to empower brands and individuals to achieve their
            goals through bespoke creative solutions. From groundbreaking design
            to state-of-the-art technology, we are committed to delivering
            experiences that inspire, captivate, and leave a lasting impact.
          </p>
          <p className="section-text">
            We believe in pushing boundaries, challenging conventions, and
            fostering innovation. Our team of experts works relentlessly to
            bring fresh ideas and perspectives to every project, ensuring every
            story we tell is unique and impactful.
          </p>
        </div>
        {/* Banner Image */}
        <div className="banner-container">
          <img
            src={banner} /* Replace with your image path */
            alt="Vision & Mission Banner"
            className="banner-image"
          />
        </div>
      </section>

      {/* Services Section */}
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

      {/* Workfolio Section */}
      {/* workfoli chnages when ask to implement */}
      {/* <section id="workfolio" className="py-5 workfolio-section">
        <div className="container">
          <h2 className="section-title text-center mb-4">Workfolio</h2>
          <div className="row">
            {workfolioProjects.map((project, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card project-card">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-img-top portfolio-image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Collaboration and Clients Section */}
      <section id="clients" className="py-5 bg-light clients-section">
        <div className="container">
          <h2 className="section-title text-center">Collaboration & Clients</h2>
          <p className="section-text">
            We take pride in collaborating with some of the most innovative and
            forward-thinking brands across the industry. Here's a showcase of
            our esteemed partners and clients.
          </p>
          <div className="ticker">
            <div className="ticker-content">
              {/* Render the original content */}
              {clientLogos.map((logo, index) => (
                <div key={`original-${index}`} className="ticker-item">
                  <img
                    src={logo}
                    alt={`Client ${index + 1}`}
                    className="client-logo"
                  />
                </div>
              ))}
              {/* Render duplicate content for a seamless effect */}
              {clientLogos.map((logo, index) => (
                <div key={`duplicate-${index}`} className="ticker-item">
                  <img
                    src={logo}
                    alt={`Client Duplicate ${index + 1}`}
                    className="client-logo"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-5 bg-light">
        <div className="iframe-container">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSc2ZKrHqeEfL5aabLCrahcrM2B_sPgbqws-n4yvS94LNDROvA/viewform?embedded=true"
            title="Connect Form"
          >
            Loading…
          </iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5 className="footer-title">Our Locations</h5>
              <p className="footer-text">
                <strong>Ahilyanagar:</strong> Poonam Moti Nagar, Behind Market
                Yard, Ahilyanagar 414001
              </p>
              <p className="footer-text">
                <strong>Pune:</strong> Mahesh Society, Bibvewadi, Pune 411037
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <h5 className="footer-title">Contact Us</h5>
              <p className="footer-text">
                Phone:{" "}
                <a href="tel:+919028753334" className="footer-link">
                  +91 9028753334
                </a>
              </p>
              <p className="footer-text">
                Email:{" "}
                <a href="mailto:info@dsstudios.com" className="footer-link">
                  info@dsstudios.com
                </a>
              </p>
            </div>
          </div>
          <div className="text-center last">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} D.S. STUDIOS. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
