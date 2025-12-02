import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import News from './components/News';
import ProjectGrid from './components/ProjectGrid';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Hero />
      <Header />
      <News />
      <ProjectGrid />
      <Footer />
    </div>
  );
};

export default App;