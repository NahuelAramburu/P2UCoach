import React from "react";
import CardMain from "../CardMain/CardMain";
import SocialBar from "../SocialBar/SocialBar";
import Carrusel from "../Carrusel/Carrusel";
import ContactForm from "../ContactForm/ContactForm";
import Bio from "../Bio/Bio";
import "./Main.css";
import CardExtRow from "../CardExt/CardExtRow";
import CarruselExp from "../CardExp/CarruselExp";
import WhatsApp from "../WhatsApp/WhatsApp";
import Slider1Comp from "../Slider1/Slider1Comp";

const Main = () => {
  return (
    <div className="container">
      <div className="Row "></div>

      <div id="inicio" className="col-12">
        <CardMain />
        <WhatsApp />
        <div className="minspacer"></div>
      </div>

      <div className="minspacer"></div>
      <div id="newsection" className="col-12">
        <CardExtRow />
        <div className="minspacer"></div>
      </div>

      <div id="bio" className="sec-box col-12">
        <h2>Bio</h2>
        <Bio />
        <div className="minspacer"></div>
      </div>

      <div id="experiencias" className="sec-box col-12">
        <h2>EXPERIENCIAS</h2>
        <CarruselExp />
        <div className="minspacer"></div>
      </div>

      <div id="contacto" className="col-12 margin-bottom">
        <ContactForm />
      </div>

      <div id="clientes" className="col-12">
        <Carrusel />
        <div className="minspacer"></div>
      </div>

      <div id="style={{ zIndex: 9999 }}">
        <SocialBar />
      </div>
    </div>
  );
};

export default Main;
