import React from "react";
import "../styles/Connect.css";

const Connect = () => {
  return (
    <section id="connect" className="connect-section py-5 bg-light">
      <div className="iframe-container">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSc2ZKrHqeEfL5aabLCrahcrM2B_sPgbqws-n4yvS94LNDROvA/viewform?embedded=true"
          title="Connect Form"
        >
          Loading…
        </iframe>
      </div>
    </section>
  );
};

export default Connect;
