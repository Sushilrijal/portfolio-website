import React, { useEffect, useState } from 'react';
import sushil2 from "./sushil.jpg"
const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const words = ['Developer', 'Student', 'Engineer'];
  const period = 2000;
  const [delta, setDelta] = useState(100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % words.length;
    let fullText = words[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-purple-900/90 to-pink-900/90" />
      </div>

      <div className="relative z-10 text-center px-4">
        <div className="mb-8">
          <img
            src={sushil2}s
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto border-4 border-purple-400 shadow-xl"
          />
        </div>
        <h1 className="text-6xl font-bold mb-4 font-['Playfair_Display'] text-white animate-fade-in">
          Sushil Rijal
        </h1>
        <div className="text-2xl text-purple-200 mb-8 h-8">
          I am a <span className="text-purple-300">{text}</span>
          <span className="animate-blink">|</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;