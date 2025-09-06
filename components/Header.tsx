import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from './icons';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinkClasses = "text-gray-700 dark:text-gray-300 hover:text-suzuki-red dark:hover:text-suzuki-red font-medium transition-all duration-200 ease-in-out transform hover:-translate-y-px";
  const mobileNavLinkClasses = "block text-lg py-3 text-gray-700 dark:text-gray-300 hover:text-suzuki-red dark:hover:text-suzuki-red font-semibold transition-colors duration-200 text-center";

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <a href="#/" className="flex-shrink-0 cursor-pointer flex items-center" onClick={closeMenu}>
            <img src="https://i.imghippo.com/files/ELuJ8250EfE.png" alt="Suzuki Logo" className="h-10 sm:h-12 mr-2 sm:mr-3" />
            <div>
              <div className="text-xl sm:text-2xl font-bold text-suzuki-blue dark:text-blue-400">SUZUKI BANDUNG</div>
              <p className="text-xs text-gray-600 dark:text-gray-400 hidden sm:block">PT. NUSANTARA JAYA SENTOSA</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center md:space-x-8">
            <a href="#/" className={navLinkClasses}>Beranda</a>
            <a href="#/#pricelist" className={navLinkClasses}>Daftar Mobil</a>
            <a href="#/kredit" className={navLinkClasses}>Simulasi Kredit</a>
            <a href="#/test-drive" className={navLinkClasses}>Test Drive</a>
          </nav>
          
          <div className="flex items-center">
             {/* Theme Toggle */}
            <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800 focus:ring-suzuki-blue"
                aria-label="Toggle theme"
            >
                {theme === 'light' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden ml-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
                aria-label="Open menu"
              >
                {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>

        </div>
      </div>
      
      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-white dark:bg-gray-800 z-50 p-6 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a href="#/" onClick={closeMenu} className={mobileNavLinkClasses}>Beranda</a>
            <a href="#/#pricelist" onClick={closeMenu} className={mobileNavLinkClasses}>Daftar Mobil</a>
            <a href="#/kredit" onClick={closeMenu} className={mobileNavLinkClasses}>Simulasi Kredit</a>
            <a href="#/test-drive" onClick={closeMenu} className={mobileNavLinkClasses}>Test Drive</a>
          </nav>
        </div>
      )}

    </header>
  );
};

export default Header;
