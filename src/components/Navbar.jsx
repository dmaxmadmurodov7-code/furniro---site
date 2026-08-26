import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { User, Search, Heart, ShoppingCart, Menu, X } from 'lucide-react';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sahifa birinchi marta yuklanganda tilni localStorage dan olish
  useEffect(() => {
    const savedLang = localStorage.getItem('app_language');
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  // Til o'zgarganda localStorage ga saqlash
  const changeLanguage = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    localStorage.setItem('app_language', newLang);
  };

  return (
    <header className="sticky top-0 z-50 bg-white py-4 md:py-6 px-4 md:px-14 flex items-center justify-between shadow-sm border-b border-gray-100">
      
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#B88E2F] flex items-center justify-center rounded-sm">
          <span className="text-white text-xs font-bold">F</span>
        </div>
        <span className="text-xl md:text-2xl font-bold tracking-tight text-black font-sans">
          Furniro
        </span>
      </Link>

      {/* Navigation Links (Desktop) */}
      <nav className="hidden md:flex items-center gap-8 lg:gap-12 font-medium text-base text-black">
        <Link to="/" className="hover:text-[#B88E2F] transition-colors">{t('nav.home')}</Link>
        <Link to="/shop" className="hover:text-[#B88E2F] transition-colors">{t('nav.shop')}</Link>
        <Link to="/blog" className="hover:text-[#B88E2F] transition-colors">{t('nav.about')}</Link>
        <Link to="/contact" className="hover:text-[#B88E2F] transition-colors">{t('nav.contact')}</Link>
      </nav>

      {/* Icons, Select & Mobile Burger */}
      <div className="flex items-center gap-3 sm:gap-5 text-black">
        
        {/* Language Selector */}
        <select 
          onChange={changeLanguage} 
          value={i18n.language.slice(0, 2)}
          className="bg-gray-100 text-xs font-semibold px-2 py-1.5 rounded border border-gray-300 focus:outline-none cursor-pointer hover:border-[#B88E2F]"
        >
          <option value="en">EN</option>
          <option value="uz">UZ</option>
          <option value="ru">RU</option>
        </select>

        {/* Action Icons */}
        <button title="Account" className="hover:text-[#B88E2F] transition-colors hidden sm:block">
          <User className="w-5 h-5 md:w-6 md:h-6 stroke-[1.8]" />
        </button>
        <button title="Search" className="hover:text-[#B88E2F] transition-colors">
          <Search className="w-5 h-5 md:w-6 md:h-6 stroke-[1.8]" />
        </button>
        <button title="Favorites" className="hover:text-[#B88E2F] transition-colors hidden sm:block">
          <Heart className="w-5 h-5 md:w-6 md:h-6 stroke-[1.8]" />
        </button>
        <button title="Cart" className="hover:text-[#B88E2F] transition-colors">
          <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 stroke-[1.8]" />
        </button>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden ml-1 p-1 text-black hover:text-[#B88E2F]"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg md:hidden flex flex-col p-6 gap-4 font-medium text-black z-50">
          <Link 
            to="/" 
            onClick={() => setIsMenuOpen(false)} 
            className="hover:text-[#B88E2F] transition-colors py-1"
          >
            {t('nav.home')}
          </Link>
          <Link 
            to="/shop" 
            onClick={() => setIsMenuOpen(false)} 
            className="hover:text-[#B88E2F] transition-colors py-1"
          >
            {t('nav.shop')}
          </Link>
          <Link 
            to="/blog" 
            onClick={() => setIsMenuOpen(false)} 
            className="hover:text-[#B88E2F] transition-colors py-1"
          >
            {t('nav.about')}
          </Link>
          <Link 
            to="/contact" 
            onClick={() => setIsMenuOpen(false)} 
            className="hover:text-[#B88E2F] transition-colors py-1"
          >
            {t('nav.contact')}
          </Link>
        </div>
      )}

    </header>
  );
}