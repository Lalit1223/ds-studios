import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="row">
          {/* Locations Section */}
          <div className="col-md-6">
            <h5 className="footer-title">Our Locations</h5>
            <p className="footer-text">
              <strong>Pune:</strong> Mahesh Society, Bibvewadi, Pune 411037
            </p>
            <p className="footer-text">
              <strong>Ahilyanagar:</strong> Poonam Moti Nagar, Behind Market
              Yard, Ahilyanagar 414001
            </p>
          </div>
          {/* Contact Section */}
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
        {/* Copyright */}
        <div className="text-center last">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} DS STUDIOS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
