import React from 'react';
import { GithubIcon, MailIcon, LinkedinIcon } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="fixed w-full bg-gray-900/80 backdrop-blur-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Amorano</h1>
            <div className="space-x-6">
              <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
              <a href="#about" className="hover:text-blue-400 transition">About</a>
              <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-6xl font-bold mb-6">
            Hello, I&apos;m <span className="text-blue-400">Amorano</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Software Developer & Creative Technologist
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/Amorano"
               className="p-2 hover:text-blue-400 transition">
              <GithubIcon size={24} />
            </a>
            <a href="#contact" className="p-2 hover:text-blue-400 transition">
              <MailIcon size={24} />
            </a>
            <a href="#linkedin" className="p-2 hover:text-blue-400 transition">
              <LinkedinIcon size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Card */}
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-800"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project Title</h3>
                <p className="text-gray-400 mb-4">
                  Project description goes here. Explain what makes this project special.
                </p>
                <a href="#" className="text-blue-400 hover:underline">
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <p className="text-gray-300 text-lg mb-6">
            Write your bio here. Share your experience, skills, and what drives you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-300 mb-8">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
          <a href="mailto:your@email.com"
             className="inline-block bg-blue-500 hover:bg-blue-600 transition px-8 py-3 rounded-lg">
            Send Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          © {new Date().getFullYear()} Amorano. All rights reserved.
        </div>
      </footer>
    </div>
  );
}