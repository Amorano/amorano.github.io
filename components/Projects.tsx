'use client';
import React from 'react';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 bg-gray-800/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="h-48 bg-gray-800"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Project Title</h3>
              <p className="text-gray-400 mb-2">
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
  );
}