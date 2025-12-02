import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#f5f5f5] text-neutral-600 py-12 px-6">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <h2 className="font-serif text-2xl text-black mb-4">Ingrid Aszkenasy</h2>
          <p className="text-sm">Tokyo, Japan</p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8 text-sm uppercase tracking-wider">
          <a href="#" className="hover:text-black">Instagram</a>
          <a href="#" className="hover:text-black">Facebook</a>
          <a href="mailto:contact@ingridaszkenasy.com" className="hover:text-black">Contact</a>
        </div>
        
        <div className="text-xs text-neutral-400">
          <p>&copy; {new Date().getFullYear()} Ingrid Aszkenasy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;