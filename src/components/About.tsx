import React from 'react';
import { Code, Brain, Coffee } from 'lucide-react';
import sushil1 from "./rijal.jpg"
const About = () => {
  return (
    <section id="about" className="py-20 text-white px-4 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
          <Brain className="w-8 h-8" />
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-6">
              <Code className="w-6 h-6 text-purple-300 mt-1" />
              <p className="text-lg text-purple-200 leading-relaxed">
                I am a passionate Computer Engineering student with a keen interest in technology and innovation. 
                Currently pursuing my degree, I am dedicated to learning and implementing new technologies to create 
                meaningful solutions that make a difference.
              </p>
            </div>
           
          </div>
          <div className="relative group">
            <img
              src={sushil1}
              alt="Coding"
              className="rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;