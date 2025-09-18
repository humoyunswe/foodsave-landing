'use client';

import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import "./Navbar.mobile.css";
import { useCTAs } from "@/hooks/use-ctas";
import BusinessRegistrationDialog from "@/components/BusinessRegistrationDialog";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBizDialogOpen, setIsBizDialogOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { openGooglePlay, scrollToId } = useCTAs();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
      setAtTop(window.scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const openDialog = () => setIsBizDialogOpen(true);
    window.addEventListener('open-biz-dialog', openDialog as EventListener);
    return () => window.removeEventListener('open-biz-dialog', openDialog as EventListener);
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

  // Handlers map
  const handleNavApp = () => scrollToId('how-it-works');
  const handleNavAbout = () => scrollToId('mission');
  const handleNavFoodwaste = () => scrollToId('foodwaste');
  const handleNavBusiness = () => setIsBizDialogOpen(true);

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
                  <button className={linkClasses('/app')} onClick={handleNavApp}>ПРИЛОЖЕНИЕ</button>
                  <button className={linkClasses('/business')} onClick={handleNavBusiness}>ДЛЯ БИЗНЕСА</button>
                  <button className={linkClasses('/about')} onClick={handleNavAbout}>О НАС</button>
                  <button className={linkClasses('/foodwaste')} onClick={handleNavFoodwaste}>О ФУДВЕЙСТЕ</button>
                </nav>

                <div className="hidden md:flex items-center space-x-4">
                  <Button 
                    variant={atTop ? 'outline' : 'default'}
                    className={`${atTop ? 'border-white text-[#005251] bg-white hover:bg-white/90' : ''}`}
                    onClick={openGooglePlay}
                  >
                    СКАЧАТЬ ПРИЛОЖЕНИЕ
                  </Button>
                  <Button 
                    variant={atTop ? 'outline' : 'secondary'}
                    className={`${atTop ? 'border-white text-[#005251] bg-white hover:bg-white/90' : ''}`}
                    onClick={handleNavBusiness}
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
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div 
            ref={menuRef}
            id="mobile-menu"
            className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}
          >
            <nav className="mobile-nav">
              <button onClick={() => { handleNavApp(); setIsMenuOpen(false); }}>ПРИЛОЖЕНИЕ</button>
              <button onClick={() => { handleNavBusiness(); setIsMenuOpen(false); }}>ДЛЯ БИЗНЕСА</button>
              <button onClick={() => { handleNavAbout(); setIsMenuOpen(false); }}>О НАС</button>
              <button onClick={() => { handleNavFoodwaste(); setIsMenuOpen(false); }}>О ФУДВЕЙСТЕ</button>
              
              <div className="mobile-buttons">
                <button 
                  className="btn btn-primary"
                  onClick={() => { openGooglePlay(); setIsMenuOpen(false); }}
                >
                  СКАЧАТЬ ПРИЛОЖЕНИЕ
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={() => { handleNavBusiness(); setIsMenuOpen(false); }}
                >
                  РЕГИСТРАЦИЯ БИЗНЕСА
                </button>
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

      <BusinessRegistrationDialog open={isBizDialogOpen} onOpenChange={setIsBizDialogOpen} />
      
      {/* Add padding to account for fixed navbar */}
      <div className="h-16 md:hidden" />
    </>
  );
};

export default Navbar;
