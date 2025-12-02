import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Simple grid logic
  const gridSpan = 
    project.size === 'large' ? 'md:col-span-2' : 'md:col-span-1';

  const aspectRatio = 
    project.size === 'large' ? 'aspect-[16/9]' : 'aspect-[4/5]';

  return (
    <div className={`group relative ${gridSpan} cursor-pointer mb-12`}>
      <div className={`relative w-full overflow-hidden bg-neutral-900 mb-4 ${aspectRatio}`}>
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="flex flex-col items-start">
        <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-1 text-white group-hover:text-neutral-400 transition-colors">
          {project.title}
        </h3>
        <div className="flex items-center space-x-2 text-neutral-500 text-xs uppercase tracking-widest font-medium">
          <span>{project.category}</span>
          <span className="w-1 h-1 bg-neutral-700 rounded-full" />
          <span>{project.year}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;