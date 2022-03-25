import React, { Component } from "react";

import Navbar from "./components/navbar";
import Card from "./components/card";

import california from "./images/california.png";
import dragon from "./images/dragon.png";
import dynamite from "./images/dynamite.png";
import philadelphia from "./images/philadelphia.png";
import rainbow from "./images/rainbow.png";
import shrimp from "./images/shrimp.png";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <h1>Cosa desideri ordinare ?</h1>
          <hr />
          <div className="row">
            <Card immagine={california} nome="California" prezzo={1.99} />
            <Card immagine={dragon} nome="Dragon" prezzo={0.99} />
            <Card immagine={dynamite} nome="Dynamite" prezzo={2.99} />
            <Card immagine={philadelphia} nome="Philadelphia" prezzo={3.99} />
            <Card immagine={rainbow} nome="Rainbow" prezzo={1.99} />
            <Card immagine={shrimp} nome="Shrimp" prezzo={4.99} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
