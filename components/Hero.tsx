import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden bg-neutral-900">
      {/* Background Image - Studio/Gallery Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2671&auto=format&fit=crop" 
          alt="Ingrid Aszkenasy Gallery Studio" 
          className="w-full h-full object-cover opacity-80"
        />
        {/* Slight gradient to ensure text readability if needed, though screenshot shows raw image look */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pb-12">
        {/* White Logo Card */}
        <div className="bg-white p-8 md:p-12 mb-8 shadow-lg max-w-[280px] md:max-w-[400px] aspect-[4/3] flex items-center justify-center animate-slide-up">
          <div className="text-center">
            <h1 className="font-brush text-3xl md:text-5xl text-[#cc0000] leading-tight transform -rotate-2 break-words">
              INGRID<br />ASZKENASY
            </h1>
          </div>
        </div>

        {/* Name Title */}
        <h2 className="text-3xl md:text-5xl font-serif text-black font-medium tracking-wide drop-shadow-sm animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Ingrid Aszkenasy
        </h2>
      </div>
    </section>
  );
};

export default Hero;