'use client';
import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-4 bg-gray-800/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <p className="text-gray-300 mb-8">
          Feel free to reach out for collaborations or just a friendly hello
        </p>
        <a href="mailto:amorano@gmail.com"
           className="inline-block bg-blue-500 hover:bg-blue-600 transition px-8 py-3 rounded-lg">
          Send Email
        </a>
      </div>
    </section>
  );
}