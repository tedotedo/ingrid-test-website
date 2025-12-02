import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation Strip */}
      <div className="hidden md:block w-full bg-[#333333] text-white">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center items-center h-14 space-x-8 lg:space-x-12">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[15px] font-normal hover:text-neutral-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center bg-[#333333] text-white p-4 sticky top-0 z-50">
        <span className="font-serif font-bold">Ingrid Aszkenasy</span>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#333333] z-40 flex flex-col justify-center items-center transition-all duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <nav className="flex flex-col space-y-6 text-center text-white">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-2xl font-normal"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;