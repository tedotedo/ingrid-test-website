import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

const ProjectGrid: React.FC = () => {
  return (
    <section id="sculpture" className="px-6 md:px-12 py-24 bg-white text-black border-t border-neutral-100">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Selected Works</h2>
          <div className="w-12 h-0.5 bg-neutral-300 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 max-w-6xl mx-auto">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="overflow-hidden mb-4">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <h3 className="text-lg font-medium">{project.title}</h3>
              <p className="text-sm text-neutral-500 mt-1">{project.year} / {project.category}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <a href="#" className="inline-block px-8 py-3 border border-black hover:bg-black hover:text-white transition-colors text-sm tracking-widest uppercase">
            View All Archive
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;