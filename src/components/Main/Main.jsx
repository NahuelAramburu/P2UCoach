import React from "react";
import CardMain from "../CardMain/CardMain";
import SocialBar from "../SocialBar/SocialBar";
import ContactForm from "../ContactForm/ContactForm";
import "./Main.css";

const Main = () => {
  return (
    <div className="container-scroll">
      <div className="section-scroll">
        <CardMain />
        <div className="spacer"></div>
      </div>
      <div className="section-scroll margin-bottom">
        <ContactForm />
        <div className="spacer"></div>
      </div>
      <div className="social-bar">
        <SocialBar />
      </div>
    </div>
  );
};

export default Main;
