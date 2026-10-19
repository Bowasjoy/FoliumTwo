/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStrip } from './components/TechStrip';
import { Services } from './components/Services';
import { CustomSolutions } from './components/CustomSolutions';
import { Packages } from './components/Packages';
import { Projects } from './components/Projects';
import { Delivery } from './components/Delivery';
import { About } from './components/About';
import { Team } from './components/Team';
import { ToolsTechnologies } from './components/ToolsTechnologies';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#07120C] text-[#FAF8F5] font-sans antialiased selection:bg-[#10B981]/30 selection:text-[#FAF8F5]">
      {/* Contemporary Fixed Header Navigation */}
      <Navbar />

      {/* Main Content Experience with Alternating Dark & Light Sections */}
      <main className="flex-1">
        {/* Hero Section: Dark with Custom Animated Paddy Grain to Emerald Leaves & Interface Frames */}
        <Hero />

        {/* Scrolling Technology Ticker Strip */}
        <TechStrip />

        {/* Services: Light / Warm Ivory with Visually Distinct Interactive Cards */}
        <Services />

        {/* Custom Apps & Business Solutions: Dark with 5 Tailored Solutions */}
        <CustomSolutions />

        {/* Packages: Light / Warm Ivory with Ruby, Sapphire, Emerald (Explicitly Website Packages) */}
        <Packages />

        {/* Projects: Dark with CASTLE UK In Development */}
        <Projects />

        {/* Delivery Timelines: Light / Warm Ivory with Clear Schedules */}
        <Delivery />

        {/* About: Dark with Founder & Studio Profile */}
        <About />

        {/* Team: Collaboration Profile Cards for Bowas Joy & Joel Joy */}
        <Team />

        {/* Tools & Technologies: Dark with Confirmed Tool Groups */}
        <ToolsTechnologies />

        {/* Contact: Light / Warm Ivory with Email Us & Chat on WhatsApp */}
        <Contact />
      </main>

      {/* Dark Studio Footer */}
      <Footer />
    </div>
  );
}
