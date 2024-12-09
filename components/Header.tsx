'use client';

import React from 'react';

export default function Header() {
  return (
    <header className="fixed w-full bg-gray-900/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Amorano</h1>
          <div className="space-x-6">
            <a href="#gallery" className="hover:text-blue-400 transition">Gallery</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}