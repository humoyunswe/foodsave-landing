'use client';

import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const navbarRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
      setAtTop(window.scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navbarClasses = `fixed w-full z-50 transition-all duration-500 ease-in-out ${
    atTop 
      ? 'text-white bg-gradient-to-b from-[#005251] to-[#006260]' 
      : 'bg-white text-gray-800 shadow-md'
  } ${isOpen ? 'h-screen md:h-auto' : 'h-16 md:h-auto'}`;

  const linkClasses = (path: string) => 
    `block w-full px-4 py-3 text-left text-base font-medium rounded-md transition-colors ${
      atTop && !isOpen
        ? 'text-white hover:bg-white/10' 
        : 'text-gray-800 hover:bg-gray-100'
    }`;

  const navItems = [
    { to: "/app", label: "ПРИЛОЖЕНИЕ" },
    { to: "/about", label: "О НАС" },
    { to: "/partners", label: "ПАРТНЁРАМ" },
    { to: "/faq", label: "FAQ" },
  ];

  return (
    <header className="w-full" ref={navbarRef}>
      <div className={navbarClasses}>
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link 
                  to="/" 
                  className="text-xl md:text-2xl font-bold whitespace-nowrap"
                  onClick={() => setIsOpen(false)}
                >
                  FoodSave
                </Link>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-4">
                {navItems.map((item) => (
                  <Link 
                    key={item.to} 
                    to={item.to} 
                    className={linkClasses(item.to)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex items-center space-x-2 ml-4">
                  <Button 
                    variant={atTop ? 'outline' : 'default'}
                    className={`${atTop ? 'border-white text-[#005251] bg-white hover:bg-white/90' : ''} whitespace-nowrap`}
                  >
                    СКАЧАТЬ ПРИЛОЖЕНИЕ
                  </Button>
                  <Button 
                    variant={atTop ? 'outline' : 'secondary'}
                    className={`${atTop ? 'border-white text-[#005251] bg-white hover:bg-white/90' : ''} whitespace-nowrap`}
                  >
                    РЕГИСТРАЦИЯ БИЗНЕСА
                  </Button>
                </div>
              </nav>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div 
              className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'
              }`}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={linkClasses(item.to)}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 mt-4 space-y-3 border-t border-gray-200">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    size="lg"
                  >
                    Скачать приложение
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary/10"
                    size="lg"
                  >
                    Регистрация бизнеса
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add padding to account for fixed navbar */}
      <div className="h-16"></div>
    </header>
  );
};

export default Navbar;
