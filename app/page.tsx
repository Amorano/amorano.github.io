import React from 'react';
import Header from '../components/Header';
import AboutSection from '../components/About';
import GallerySection from '../components/Gallery';
import ProjectsSection from '../components/Projects';
import ContactSection from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white">
      <Header />
      <AboutSection />
      <ProjectsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}