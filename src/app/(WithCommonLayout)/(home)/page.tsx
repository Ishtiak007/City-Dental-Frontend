import Banner from "@/components/modules/HomePage/Banner";
import { ThreeDCardDemo } from "@/components/modules/HomePage/ThreeDCard";
import CnCProgramming from "@/components/modules/HomePage/VideoTest";
import React from "react";

const Home = () => {
  return (
    <div>
      <Banner />
      <CnCProgramming />
      <ThreeDCardDemo />
    </div>
  );
};

export default Home;
