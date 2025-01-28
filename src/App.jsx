// Importing necessary libraries
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "./assets/new.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import image0 from "./assets/0.jpg";
import image1 from "./assets/1.jpg";
import image2 from "./assets/2.jpg";
import image3 from "./assets/3.jpg";
import image4 from "./assets/4.jpg";
import image5 from "./assets/5.jpg";
import image6 from "./assets/6.jpg";
import image7 from "./assets/7.jpg";
import image8 from "./assets/8.jpg";
import client1 from "./assets/c1.jpeg";
import client2 from "./assets/c2.jpeg";
import client3 from "./assets/c3.jpeg";
import client4 from "./assets/c4.jpeg";
import client5 from "./assets/c5.jpeg";
import client6 from "./assets/c6.jpeg";
import client7 from "./assets/c7.jpeg";
import client8 from "./assets/c8.jpeg";
import client9 from "./assets/c9.jpeg";
import client10 from "./assets/c10.jpeg";
import client11 from "./assets/c11.jpeg";
import client12 from "./assets/c12.jpeg";
import client13 from "./assets/c13.jpeg";
import client14 from "./assets/c14.jpeg";

import "./App.css";
import logo from "./assets/logo.svg";

const App = () => {
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
      image: image0,
    },
    {
      title: "Web Development",
      description:
        "Modern, responsive websites to elevate your online presence.",
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
      description: "Professional Video Editing .",
      image: image8,
    },
  ];

  const clientLogos = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
    client9,
    client10,
    client11,
    client12,
    client13,
    client14,
  ];

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
            <h1 className="site-title mb-0">DS STUDIOS</h1>
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
              Welcome to <strong>DS STUDIOS</strong>, where creativity meets
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

      {/* Vision & Mission Section */}
      <section id="vision-mission" className="vision-mission-section">
        <div className="container">
          <h2 className="section-title">Vision & Mission</h2>
          <p className="section-text">
            Our vision is to redefine creativity and establish new benchmarks in
            innovation and quality across all projects. At DS STUDIOS, we aim to
            create a legacy of exceptional storytelling, artistry, and
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
          <div className="banner-container">
            <LazyLoadImage
              src={banner}
              alt="Vision & Mission Banner"
              className="banner-image"
              effect="blur"
            />
          </div>
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
                  <LazyLoadImage
                    src={service.image}
                    alt={service.title}
                    className="card-img-top service-image"
                    effect="blur"
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
                    // effect="blur"
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
      <section id="connect" class="connect-section py-5 bg-light">
        <div class="iframe-container">
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
              &copy; {new Date().getFullYear()} DS STUDIOS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
