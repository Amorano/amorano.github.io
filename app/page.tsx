import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/About';
import GallerySection from '../components/Gallery';
import ProjectsSection from '../components/Projects';
import ContactSection from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Header />
      <HeroSection />
      <GallerySection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}