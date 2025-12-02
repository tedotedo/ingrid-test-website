import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-black text-white">
      <div className="container mx-auto border-t border-neutral-800 pt-24">
        <div className="flex flex-col md:flex-row">
          {/* Left Column - Heading */}
          <div className="md:w-1/3 mb-12 md:mb-0">
            <h2 className="text-xs uppercase tracking-widest font-bold text-neutral-500 mb-4">Profile</h2>
          </div>

          {/* Right Column - Content */}
          <div className="md:w-2/3">
            <h3 className="text-2xl md:text-4xl leading-snug mb-12 font-medium max-w-2xl">
              I am a multidisciplinary designer focusing on digital products, branding, and art direction. I believe in design that is honest, functional, and aesthetic.
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-neutral-400">Services</h4>
                <ul className="space-y-4 text-neutral-300">
                  <li className="flex items-center justify-between border-b border-neutral-800 pb-3">
                    <span>Art Direction</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-neutral-800 pb-3">
                    <span>Web Design & Development</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-neutral-800 pb-3">
                    <span>Brand Identity</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-neutral-800 pb-3">
                    <span>Content Strategy</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-neutral-400">Clients</h4>
                <p className="text-neutral-300 leading-relaxed mb-8">
                  Google, Nike, Sony Music, Monocle, Aesop, Herman Miller, and various startups and cultural institutions.
                </p>
                <a href="#" className="text-sm uppercase font-bold border-b border-white hover:border-neutral-500 hover:text-neutral-500 transition-colors pb-1">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;