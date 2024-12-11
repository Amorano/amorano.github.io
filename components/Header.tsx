'use client';

import React from 'react';

export default function Header() {
  return (
    <header className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Alexander G. Morano</h1>
          <div className="space-x-6">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#music" className="hover:text-blue-400 transition">Music</a>
            <a href="#gallery" className="hover:text-blue-400 transition">Images</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}