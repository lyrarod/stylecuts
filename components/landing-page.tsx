import React from "react";
import {
  About,
  Contact,
  Features,
  Hero,
  Newsletter,
  Services,
} from "./sections";

export function LandingPage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Features />
      <Contact />
      <Newsletter />
    </>
  );
}
