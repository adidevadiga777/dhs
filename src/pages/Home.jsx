import React from "react";
import ScrollFrameSequence from "../components/animations/ScrollFrameSequence";
import Hero from "../components/home/Hero";
import Info from "../components/home/Info";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className="w-full min-h-screen m-0 p-0">
      <Navbar />
      <Hero />
      <ScrollFrameSequence
        frameDir="/frames/malong"
        framePrefix="ezgif-frame-"
        frameExt="png"
        startFrame={4}
        endFrame={181}
        zeroPad={3}
        scrollLength={10}
      />
      <Info />
      <Footer />
    </main>
  );
};

export default Home;
