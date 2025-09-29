'use client';

import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  const { openGooglePlay, scrollToId, scrollToTop } = useCTAs();
  const location = useLocation();
  const navigate = useNavigate();

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

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const goHomeThen = (cb: () => void) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(cb, 0);
    } else cb();
  };

  const handleNavApp = () => goHomeThen(() => { scrollToTop(); scrollToId('how-it-works'); });
  const handleNavAbout = () => goHomeThen(() => { scrollToTop(); scrollToId('mission'); });
  const handleNavFoodwasteSection = () => goHomeThen(() => { scrollToTop(); scrollToId('foodwaste'); });
  const openBusinessDialog = () => setIsBizDialogOpen(true);
  const goBusinessPage = () => { navigate('/business'); setTimeout(scrollToTop, 0); };
  const goFoodWastePage = () => { navigate('/about-food-waste'); setTimeout(scrollToTop, 0); };

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50">
        <div className={`hidden md:block fixed top-0 left-0 w-full ${atTop ? 'bg-gradient-to-b from-[#005251] to-[#006260]' : 'bg-white shadow-md'}`}>
          <div className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex-shrink-0">
                  <Link to="/" className={`text-2xl font-bold ${atTop ? 'text-white' : 'text-[#005251]'}`} onClick={scrollToTop}>
                    FoodSave
                  </Link>
                </div>
                
                <nav className="hidden md:flex items-center space-x-2">
                  <button className={linkClasses('/app')} onClick={handleNavApp}>ПРИЛОЖЕНИЕ</button>
                  <button className={linkClasses('/business')} onClick={goBusinessPage}>ДЛЯ БИЗНЕСА</button>
                  <button className={linkClasses('/about')} onClick={handleNavAbout}>О НАС</button>
                  <button className={linkClasses('/foodwaste')} onClick={goFoodWastePage}>О ФУДВЕЙСТЕ</button>
                </nav>

                <div className="hidden md:flex items-center space-x-4">
                  <Button variant={atTop ? 'outline' : 'default'} className={`${atTop ? 'border-white text-[#005251] bg-white hover:bg-white/90' : ''}`} onClick={() => { scrollToTop(); openGooglePlay(); }}>
                    СКАЧАТЬ ПРИЛОЖЕНИЕ
                  </Button>
                  <Button variant={atTop ? 'outline' : 'secondary'} className={`${atTop ? 'border-white text-[#005251] bg-white hover:bg-white/90' : ''}`} onClick={openBusinessDialog}>
                    РЕГИСТРАЦИЯ БИЗНЕСА
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`md:hidden fixed top-0 left-0 w-full navbar-mobile ${scrolled ? 'navbar-scrolled' : 'bg-gradient-to-b from-[#005251] to-[#006260]'}`}>
          <div className="navbar-container">
            <Link to="/" className={`logo ${scrolled ? 'scrolled' : ''}`} style={{ color: scrolled ? '#005251' : 'white' }} onClick={scrollToTop}>
              FoodSave
            </Link>
            <button className={`menu-button ${scrolled ? 'scrolled' : ''}`} onClick={toggleMenu} aria-label="Меню" aria-expanded={isMenuOpen} aria-controls="mobile-menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div ref={menuRef} id="mobile-menu" className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            <nav className="mobile-nav">
              <button onClick={() => { handleNavApp(); setIsMenuOpen(false); }}>ПРИЛОЖЕНИЕ</button>
              <button onClick={() => { goBusinessPage(); setIsMenuOpen(false); }}>ДЛЯ БИЗНЕСА</button>
              <button onClick={() => { handleNavAbout(); setIsMenuOpen(false); }}>О НАС</button>
              <button onClick={() => { goFoodWastePage(); setIsMenuOpen(false); }}>О ФУДВЕЙСТЕ</button>
              <div className="mobile-buttons">
                <button className="btn btn-primary" onClick={() => { scrollToTop(); openGooglePlay(); setIsMenuOpen(false); }}>СКАЧАТЬ ПРИЛОЖЕНИЕ</button>
                <button className="btn btn-secondary" onClick={() => { openBusinessDialog(); setIsMenuOpen(false); }}>РЕГИСТРАЦИЯ БИЗНЕСА</button>
              </div>
            </nav>
          </div>
          <div className={`backdrop ${isMenuOpen ? 'visible' : ''}`} onClick={() => setIsMenuOpen(false)} />
        </div>
      </header>

      <BusinessRegistrationDialog open={isBizDialogOpen} onOpenChange={setIsBizDialogOpen} />
      <div className="h-16 md:hidden" />
    </>
  );
};

export default Navbar;
