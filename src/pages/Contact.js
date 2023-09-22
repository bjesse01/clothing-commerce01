import React from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import bgImg from "../assets/contact.jpg";

export const Contact = () => {
  return (
    <div>
      <Header image={bgImg} title="Contact Us" />
      <Card />
    </div>
  );
};
