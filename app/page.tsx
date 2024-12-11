import React from 'react';
import Header from '../components/Header';
import AboutSection from '../components/About';
import ProjectsSection from '../components/Projects';
import MusicSection from '../components/Music';
import GallerySection from '../components/Gallery';
import ContactSection from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white">
      <Header />
      <AboutSection />
      <ProjectsSection />
      <MusicSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}