import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import speakers from '../data/speakers';
import ParticlesBackground from '../components/ParticlesBackground';
import { CalendarDays, MapPin } from "lucide-react";


export default function Home() {
  const navigate = useNavigate();
  const targetDate = new Date('2025-12-20T00:00:00');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Create a duplicated list for seamless infinite scrolling
  const marqueeSpeakers = [...speakers, ...speakers];

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white text-ted-black selection:bg-ted-red selection:text-white">
      
      {/* Custom Styles for Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        /* Removed hover pause rule */
      `}</style>

      {/* --- HERO SECTION (DARK + PARTICLES) --- */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-black text-white">
        
        {/* Particle Background Layer */}
        <div className="absolute inset-0 z-0">
          <ParticlesBackground />
        </div>
        
        <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none"></div>

        <div className="relative z-10 animate-fade-in-up max-w-5xl mx-auto flex flex-col items-center">
          <div className="text-lg md:text-xl font-bold tracking-[0.15em] mb-6 text-gray-300">
            <span className="text-ted-red">TEDx</span>IKGPTU
          </div>
          
          <div className="mb-8 w-full max-w-2xl px-4">
             <img 
               src="/Theme.png" 
               alt="MindForge Theme" 
               className="w-full h-auto object-contain drop-shadow-2xl mx-auto"
               style={{ maxHeight: '200px' }} 
             />
          </div>

          <div className="flex justify-center gap-6 md:gap-10 mb-10">
             {Object.keys(timeLeft).length > 0 ? (
               <>
                 {['days', 'hours', 'minutes'].map((unit) => (
                   <div key={unit} className="flex flex-col items-center">
                     <span className="text-2xl md:text-4xl font-bold text-white font-heading">
                       {String(timeLeft[unit]).padStart(2, '0')}
                     </span>
                     <span className="text-xs uppercase tracking-widest text-ted-red mt-1">
                       {unit}
                     </span>
                   </div>
                 ))}
               </>
             ) : (
               <div className="text-2xl font-bold text-ted-red">Event is Live!</div>
             )}
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center text-gray-400 font-medium tracking-wide mb-10 text-sm md:text-base">
  <span className="flex items-center gap-2">
    <CalendarDays className="w-4 h-4 text-ted-red" />
    Saturday, 20 Dec 2025
  </span>
  <span className="hidden md:inline text-gray-700">|</span>
  <span className="flex items-center gap-2">
    <MapPin className="w-4 h-4 text-ted-red" />
    Chandigarh
  </span>
</div>



          <button 
            onClick={() => navigate('/nomination')}
            className="bg-ted-red hover:bg-red-700 text-white text-base md:text-lg font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-red-900/50"
          >
            Nominate a Speaker
          </button>
        </div>
      </section>

      {/* --- INFO SECTION --- */}
      <section className="py-20 bg-white text-ted-black border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight text-black">
              About The Organization
            </h2>
            <div className="w-16 h-1 bg-ted-red mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* What is TED */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-ted-red">What is TED?</h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                TED is a non-profit organization dedicated to spreading powerful and inspiring ideas that can change the world. Founded in 1984 as a small conference that brought together visionaries from Technology, Entertainment, and Design, TED has since evolved into a global movement. Through its renowned TED Talks, the organization provides a platform for thought leaders to share their insights in accessible ways.
              </p>
            </div>

            {/* What is TEDx */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-ted-red">What is TEDx?</h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                TEDx is a grassroots initiative, created in the spirit of TED's mission to research and discover "ideas worth spreading." TEDx brings the spirit of TED to local communities around the globe through TEDx events. These events are organized by passionate individuals who seek to uncover new ideas and to share the latest research in their local areas that spark conversations in their communities.
              </p>
            </div>

            {/* What is TEDxIKGPTU */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-ted-red">TEDxIKGPTU</h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                TEDxIKGPTU stands as a platform where ideas find shape, purpose, and direction. Rooted in the spirit of exploration, the event serves as a space for thinkers and change-makers to challenge conventional ways of seeing the world. In alignment with the theme <strong>MindForge</strong>, it becomes a ground where ideas are strengthened, perspectives are reshaped, and the power of the human mind is celebrated.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button 
                onClick={() => navigate('/about')}
                className="text-ted-red font-bold text-base hover:text-black transition-colors flex items-center justify-center gap-2 mx-auto"
              >
                Read More About The Theme <span>&rarr;</span>
            </button>
          </div>
        </div>
      </section>

      {/* --- SPEAKERS TEASER (Infinite Marquee) --- */}
      <section className="py-20 bg-gray-50 text-ted-black overflow-hidden">
        <div className="max-w-[100%] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 px-6 max-w-7xl mx-auto w-full">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">Meet the Speakers</h2>
              <p className="text-gray-600">Thinkers, creators, and change-makers.</p>
            </div>
            <button 
              onClick={() => navigate('/speakers')}
              className="hidden md:block text-ted-red border border-gray-300 px-6 py-2 rounded-full hover:bg-ted-red hover:text-white transition-all text-sm font-semibold"
            >
              View All
            </button>
          </div>

          {/* Marquee Container */}
          <div className="w-full overflow-hidden pb-8">
            {/* Removed hover:[animation-play-state:paused] to keep it moving */}
            <div className="flex w-max animate-marquee gap-6 px-6">
              {marqueeSpeakers.map((sp, index) => (
                <div 
                  key={`${sp.name}-${index}`} 
                  onClick={() => navigate('/speakers')}
                  className="min-w-[260px] w-[260px] bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-ted-red transition-all cursor-pointer group shadow-sm hover:shadow-md"
                >
                  <div className="h-64 overflow-hidden bg-gray-100">
                    <img 
                      src={sp.img} 
                      alt={sp.name} 
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" 
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-black mb-1 group-hover:text-ted-red transition-colors">{sp.name}</h3>
                    <p className="text-xs text-gray-500 line-clamp-2">{sp.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-4 md:hidden text-center px-6">
            <button 
              onClick={() => navigate('/speakers')}
              className="text-ted-red border border-gray-300 px-8 py-3 rounded-full hover:bg-ted-red hover:text-white transition-all w-full text-sm font-semibold"
            >
              View All Speakers
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}