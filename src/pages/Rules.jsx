import React from "react";

export default function Rules() {
  return (
    <div className="w-full min-h-screen bg-white text-black py-16 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-10 pb-4 border-b border-gray-200">
          Rules & Guidelines
        </h1>

        {/* Content Container */}
        <div className="space-y-12">
          
          {/* Section 1: General */}
          <section>
            <h2 className="text-xl font-bold text-ted-red mb-4 uppercase tracking-wide">
              General Guidelines
            </h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-800 leading-relaxed text-base md:text-lg">
              <li>All attendees must register prior to the event and carry a valid photo ID (Government or University issued).</li>
              <li>Please arrive at least 30 minutes before the session begins. Late entry may be restricted during ongoing talks to avoid disturbance.</li>
              <li>Maintain decorum at all times. Respect speakers, performers, and fellow participants.</li>
              <li>Mobile phones must be kept on silent mode inside the venue. Flash photography is not permitted during talks.</li>
            </ul>
          </section>

          {/* Section 2: Prohibited Items */}
          <section>
            <h2 className="text-xl font-bold text-ted-red mb-4 uppercase tracking-wide">
              Prohibited Items
            </h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-800 leading-relaxed text-base md:text-lg">
              <li>Outside food and drinks are not allowed inside the auditorium.</li>
              <li>Possession or consumption of alcohol, tobacco, e-cigarettes, or illegal substances is strictly prohibited on campus.</li>
              <li>Banners, placards, or unsolicited promotional materials are not permitted.</li>
              <li>Sharp objects, flammable materials, or any item deemed dangerous by security will be confiscated.</li>
            </ul>
          </section>

          {/* Section 3: Safety & Security */}
          <section>
            <h2 className="text-xl font-bold text-ted-red mb-4 uppercase tracking-wide">
              Safety & Security
            </h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-800 leading-relaxed text-base md:text-lg">
              <li>Cooperate with security personnel during entry checks. Random bag checks may be conducted.</li>
              <li>Access to backstage, technical areas, or restricted zones is strictly prohibited.</li>
              <li>In case of an emergency, please remain calm and follow instructions given by the volunteers and security staff.</li>
              <li>The organizers reserve the right to refuse admission or ask any person to leave for behavioral reasons or safety concerns.</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}