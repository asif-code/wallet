import React, { Component } from "react";
import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import ParticlesBg from "particles-bg";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome ">
        <ParticlesBg
          color="#FAF9F6"
          num={30}
          type="cobweb"
          bg={{
            density: {
              enable: true,
              value_area: 800,
            },
            position: "fixed ",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zindex: -1,
          }}
        />
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
