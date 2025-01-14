import React from "react";
import { Hero } from "../components/home/Hero";
import { MissionVision } from "../components/home/MissionVision";
import { NewsList } from "../components/news/NewsList";
import { Values } from "../components/home/Values";

import { StaffSection } from "../components/home/StaffSection";
export const Home = () => {
  return (
    <div>
      <Hero />
      <MissionVision />
      <Values />
      <StaffSection />
      <NewsList />
    </div>
  );
};
