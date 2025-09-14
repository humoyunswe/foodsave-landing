'use client';

import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import "./Navbar.mobile.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Toggle body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50">
        {/* Desktop Navigation */}
        <div className={`hidden md:block fixed top-0 left-0 w-full ${atTop ? 'bg-gradient-to-b from-[#005251] to-[#006260]' : 'bg-white shadow-md'}`}>
          <div className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex-shrink-0">
                  <Link 
                    to="/" 
                    className={`text-2xl font-bold ${atTop ? 'text-white' : 'text-[#005251]'}`}
                  >
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

                <div className="hidden md:flex items-center space-x-4">
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

        {/* Mobile Navigation */}
        <div className={`md:hidden fixed top-0 left-0 w-full navbar-mobile ${scrolled ? 'navbar-scrolled' : 'bg-gradient-to-b from-[#005251] to-[#006260]'}`}>
          <div className="navbar-container">
            <Link 
              to="/" 
              className={`logo ${scrolled ? 'scrolled' : ''}`}
              style={{ color: scrolled ? '#005251' : 'white' }}
            >
              FoodSave
            </Link>
            <button 
              className={`menu-button ${scrolled ? 'scrolled' : ''}`}
              onClick={toggleMenu}
              aria-label="Меню"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div 
            ref={menuRef}
            className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}
          >
            <nav className="mobile-nav">
              <Link to="/app" onClick={() => setIsMenuOpen(false)}>ПРИЛОЖЕНИЕ</Link>
              <Link to="/business" onClick={() => setIsMenuOpen(false)}>ДЛЯ БИЗНЕСА</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>О НАС</Link>
              <Link to="/foodwaste" onClick={() => setIsMenuOpen(false)}>О ФУДВЕЙСТЕ</Link>
              
              <div className="mobile-buttons">
                <Link 
                  to="/download" 
                  className="btn btn-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  СКАЧАТЬ ПРИЛОЖЕНИЕ
                </Link>
                <Link 
                  to="/business/register" 
                  className="btn btn-secondary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  РЕГИСТРАЦИЯ БИЗНЕСА
                </Link>
              </div>
            </nav>
          </div>

          {/* Backdrop */}
          <div 
            className={`backdrop ${isMenuOpen ? 'visible' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
      </header>
      
      {/* Add padding to account for fixed navbar */}
      <div className="h-16 md:hidden" />
    </>
  );
};

export default Navbar;
