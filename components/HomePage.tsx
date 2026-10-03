"use client";

import type { JSX } from "react";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Cta } from "@/components/sections/Cta";
import { Footer } from "@/components/sections/Footer";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Nav } from "@/components/sections/Nav";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { useParallax } from "@/lib/use-parallax";
import { useReveal } from "@/lib/use-reveal";

export const HomePage = (): JSX.Element => {
  useReveal();
  useParallax();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
        <About />
        <Process />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </>
  );
};
