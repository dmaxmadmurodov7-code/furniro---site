import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';

export default function ShopHero() {
  const { t } = useTranslation();

  return (
    <div 
      className="w-full h-[316px] bg-cover bg-center flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600')`
      }}
    >
      {/* Blur overlay */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]"></div>

      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-medium text-black mb-2">
          {t('shop.title')}
        </h1>
        <div className="flex items-center justify-center gap-2 text-sm font-semibold text-black">
          <span className="font-bold">{t('shop.breadcrumb')}</span>
          <ChevronRight className="w-4 h-4 text-black" />
          <span className="text-gray-600 font-normal">{t('shop.title')}</span>
        </div>
      </div>
    </div>
  );
}