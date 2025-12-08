import React from 'react';

export default function About() {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-ted-black pt-10 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-ted-red font-bold tracking-widest text-sm uppercase">About Us</span>
          <h1 className="text-3xl md:text-5xl font-black mt-3 mb-6">TEDxIKGPTU</h1>
          <div className="w-20 h-1.5 bg-ted-red mx-auto rounded-full"></div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          
          {/* Section 1: About Event */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="text-ted-red">The Event</span> 
            </h2>
            <div className="prose prose-lg text-gray-700 leading-relaxed text-justify">
              <p className="mb-4">
                TEDxIKGPTU stands as a platform where ideas find shape, purpose, and direction. Rooted in the spirit of exploration and intellectual courage, the event serves as a space for thinkers, creators, and change-makers to come up with ideas worth sharing and challenge conventional ways of seeing the world. It embodies a culture of question, reflection, and reinvention — encouraging human thought process to move beyond passive learning and toward active creation. TEDxIKGPTU is not just an event; it is an experience that sparks critical thinking, fuels imagination, and empowers individuals to recognize their capacity to transform thought into action. In alignment with the theme MindForge, it becomes a ground where ideas are strengthened, perspectives are reshaped, and the power of the human mind is celebrated in its purest, most intentional form.

              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-200 w-full mb-12"></div>

          {/* Section 2: About Theme */}
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="text-ted-red">The Theme: MindForge</span> 
            </h2>
            <div className="prose prose-lg text-gray-700 leading-relaxed text-justify">
              <p className="mb-4">
                MindForge represents a space where ideas are not merely conceived, but deliberately crafted, refined, and transformed into innovation. It is a powerful metaphor for the human mind as a living workshop — a place where curiosity ignites, creativity is intensified, and thoughts are shaped through determination, experimentation, and courageous thinking. In a world overwhelmed by information and fleeting inspiration, MindForge celebrates the ability to filter, sculpt, and elevate raw thoughts into meaningful solutions that can influence the future. It honors the journey of creation — where failures become lessons, attempts become progress, and insights become breakthroughs. It reflects the belief that imagination, when combined with intention and action, becomes impact, and that every individual carries within them a personal forge, capable of molding ideas into reality. MindForge is not just a theme; it is a call to think deeply, create purposefully, and build ideas with the power to move the world forward.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}