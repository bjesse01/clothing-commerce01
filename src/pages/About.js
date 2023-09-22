import React from "react";
import TheStory from "../components/TheStory";
import TheMission from "../components/TheMission";
import image1 from "../assets/story.jpg";
import image2 from "../assets/mission.jpg";
import bgImg from "../assets/about.jpg";
import Header from "../components/Header";

export const About = () => {
  return (
    <div className="p-5">
      <Header image={bgImg} title="About Us" />
      <div>
        <TheStory image={image1} />
        <TheMission image={image2} />
      </div>
    </div>
  );
};
