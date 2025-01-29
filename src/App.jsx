import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import VisionMission from "./components/VisionMission";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <VisionMission />
      <Services />
      <Clients />
      <Connect />
      <Footer />
    </div>
  );
};

export default App;
