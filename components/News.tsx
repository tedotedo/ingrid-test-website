import React from 'react';
import { NEWS_ITEMS } from '../constants';

const News: React.FC = () => {
  return (
    <section id="news" className="bg-white py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          {NEWS_ITEMS.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-baseline border-b border-transparent pb-4 hover:border-neutral-100 transition-colors">
              <span className="text-lg md:text-xl text-neutral-800 font-light min-w-[140px] mb-2 md:mb-0 font-sans">
                {item.date}
              </span>
              <p className="text-base md:text-lg text-neutral-700 font-light">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;