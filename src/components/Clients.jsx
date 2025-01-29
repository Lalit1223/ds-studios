import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client1 from "../assets/c1.jpeg";
import client2 from "../assets/c2.jpeg";
import client3 from "../assets/c3.jpeg";
import client4 from "../assets/c4.jpeg";
import client5 from "../assets/c5.jpeg";
import client6 from "../assets/c6.jpeg";
import client7 from "../assets/c7.jpeg";
import client8 from "../assets/c8.jpeg";
import client9 from "../assets/c9.jpeg";
import client10 from "../assets/c10.jpeg";
import client11 from "../assets/c11.jpeg";
import client12 from "../assets/c12.jpeg";
import client13 from "../assets/c13.jpeg";
import client14 from "../assets/c14.jpeg";
import "../styles/Clients.css";

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

const Clients = () => {
  const settings = {
    infinite: true, // Keeps scrolling infinitely
    speed: 3000, // Speed of transition
    slidesToShow: 5, // Adjust for responsiveness
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Continuous scrolling
    cssEase: "linear", // Smooth animation
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section id="clients" className="py-5 bg-light clients-section">
      <div className="container">
        <h2 className="section-title text-center">Collaboration & Clients</h2>
        <p className="section-text">
          We take pride in collaborating with some of the most innovative and
          forward-thinking brands across the industry.
        </p>
        <Slider {...settings}>
          {clientLogos.map((logo, index) => (
            <div key={index} className="client-logo-container">
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="client-logo"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Clients;
