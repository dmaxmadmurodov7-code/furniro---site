import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-white border-t border-[#D9D9D9] pt-12 pb-8 px-6 md:px-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-[#D9D9D9]">
        
        {/* Brand Name & Address */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-black">Funiro.</h2>
          <p className="text-[#9F9F9F] text-sm leading-relaxed max-w-[285px]">
            {t('footer.address')}
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-6">
          <span className="text-[#9F9F9F] font-medium text-base">{t('footer.links')}</span>
          <ul className="flex flex-col gap-4 font-medium text-black text-sm">
            <li><Link to="/" className="hover:text-[#B88E2F] transition">{t('footer.home')}</Link></li>
            <li><Link to="/shop" className="hover:text-[#B88E2F] transition">{t('footer.shop')}</Link></li>
            <li><Link to="/blog" className="hover:text-[#B88E2F] transition">{t('footer.about')}</Link></li>
            <li><Link to="/contact" className="hover:text-[#B88E2F] transition">{t('footer.contact')}</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div className="flex flex-col gap-6">
          <span className="text-[#9F9F9F] font-medium text-base">{t('footer.help')}</span>
          <ul className="flex flex-col gap-4 font-medium text-black text-sm">
            <li><a href="#" className="hover:text-[#B88E2F] transition">{t('footer.paymentOptions')}</a></li>
            <li><a href="#" className="hover:text-[#B88E2F] transition">{t('footer.returns')}</a></li>
            <li><a href="#" className="hover:text-[#B88E2F] transition">{t('footer.privacyPolicies')}</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-6">
          <span className="text-[#9F9F9F] font-medium text-base">{t('footer.newsletter')}</span>
          <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
            <input 
              type="email" 
              placeholder={t('footer.placeholder')} 
              className="border-b border-black text-xs py-1 px-1 focus:outline-none w-full"
            />
            <button 
              type="submit" 
              className="border-b border-black text-xs font-semibold py-1 px-1 hover:text-[#B88E2F] hover:border-[#B88E2F] transition uppercase"
            >
              {t('footer.subscribe')}
            </button>
          </form>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto pt-8 text-left text-[#000000] text-sm">
        <p>{t('footer.rights')}</p>
      </div>
    </footer>
  );
}