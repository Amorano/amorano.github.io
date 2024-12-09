'use client';
import React from 'react';
import Image from 'next/image';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-gray-800/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/images/projects/logo-jovimetrix.png"
                alt="Jovimetrix"
                fill
                className="object-contain bg-gray-800"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Jovimetrix</h3>
              <p className="text-gray-400 mb-2">
                ComfyUI node suite for composition, stream webcams or media files in and out, animation, flow control, making masks, shapes and textures like Houdini and Substance Designer, read MIDI devices. Also has colorization options for workflow nodes via regex, groups and each node.
              </p>
              <a href="https://github.com/Amorano/Jovimetrix"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline">
                View Project →
              </a>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/images/projects/logo-comfyui-crt.png"
                alt="comfyui-crt"
                fill
                className="object-contain bg-gray-800"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">ComfyUI-CRT</h3>
              <p className="text-gray-400 mb-2">
                Simulating CRT Monitors. It is based upon the work done at <a href="https://int10h.org/blog/2021/01/simulating-crt-monitors-ffmpeg-pt-1-color/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline">Simulating crt monitors using FFMpeg</a>. This was lifted into ComfyUI and removed FFMpeg as the main driver for the look of each shader.
              </p>
              <a href="https://github.com/Amorano/ComfyUI-CRT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline">
                View Project →
              </a>
            </div>

          </div>
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/images/projects/logo-unrealengine.png"
                alt="Textales"
                fill
                className="object-contain bg-gray-800"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Textales</h3>
              <p className="text-gray-400 mb-2">
                General material library for Unreal Engine. Contains a master material and various support functions commonly used to accomplish most material shading tasks in Unreal Engine.
              </p>
              <a href="https://github.com/Amorano/textales"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline">
                View Project →
              </a>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/images/projects/logo-a1111.png"
                alt="Automatic1111's Laiser"
                fill
                className="object-contain bg-gray-800"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">a1-ext-laiser </h3>
              <p className="text-gray-400 mb-2">
                Allows the user to download prompts from latent image browsing services (like PromptHero) and load them directly inside of Automatic1111 webui.
              </p>
              <a href="https://github.com/Amorano/a1-ext-laiser"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline">
                View Project →
              </a>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/images/projects/logo-dearpygui.png"
                alt="Dearpygui Examples"
                fill
                className="object-contain bg-gray-800"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">dpg-examples</h3>
              <p className="text-gray-400 mb-2">
                DearPyGUI API examples. Includes code for animating elements, playing media files, fractal generation and two games (Brickout and Tile slide puzzle).
              </p>
              <a href="https://github.com/Amorano/dpg-examples"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline">
                View Project →
              </a>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/images/projects/logo-dearpygui.png"
                alt="Adheya"
                fill
                className="object-contain bg-gray-800"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Adheya</h3>
              <p className="text-gray-400 mb-2">
                Given the nature of Immediate Mode GUIs not maintaing state, this is a simple lightweight Object Oriented wrapper for Dear PyGUI.
              </p>
              <a href="https://github.com/Amorano/adheya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline">
                View Project →
              </a>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/images/projects/logo-btep.png"
                alt="BTEP"
                fill
                className="object-contain bg-gray-800"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">BTEP</h3>
              <p className="text-gray-400 mb-2">
                A fun project to test stable diffusion. It was used to generate a batch of Battletech Company Emblems and Commander Portraits.
              </p>
              <a href="https://github.com/Amorano/BTEP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline">
                View Project →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}