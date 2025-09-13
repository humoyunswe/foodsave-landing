'use client';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
      setAtTop(window.scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClasses = `fixed w-full z-50 transition-all duration-500 ease-in-out ${
    atTop 
      ? 'text-white py-5 bg-gradient-to-b from-[#005251] to-[#006260]' 
      : 'bg-white text-gray-800 shadow-md py-3'
  }`;

  const linkClasses = (path: string) => 
    `px-4 py-2 rounded-md font-medium transition-colors ${
      atTop 
        ? 'text-white hover:bg-white/10' 
        : 'text-gray-700 hover:text-primary hover:bg-gray-100'
    }`;

  return (
    <header className="w-full">
      <div className={navbarClasses}>
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <Link to="/" className="text-2xl font-bold">
                  FoodSave
                </Link>
              </div>
              
              <nav className="hidden md:flex items-center space-x-2">
                <Link to="/app" className={linkClasses('/app')}>
                  ПРИЛОЖЕНИЕ
                </Link>
                <Link to="/business" className={linkClasses('/business')}>
                  ДЛЯ БИЗНЕСА
                </Link>
                <Link to="/about" className={linkClasses('/about')}>
                  О НАС
                </Link>
                <Link to="/foodwaste" className={linkClasses('/foodwaste')}>
                  О ФУДВЕЙСТЕ
                </Link>
              </nav>

              <div className="flex items-center space-x-4">
                <Button 
                  variant={atTop ? 'outline' : 'default'}
                  className={`${atTop ? 'border-white text-[#005251] bg-white hover:bg-white/90' : ''}`}
                >
                  СКАЧАТЬ ПРИЛОЖЕНИЕ
                </Button>
                <Button 
                  variant={atTop ? 'outline' : 'secondary'}
                  className={`${atTop ? 'border-white text-[#005251] bg-white hover:bg-white/90' : ''}`}
                >
                  РЕГИСТРАЦИЯ БИЗНЕСА
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
