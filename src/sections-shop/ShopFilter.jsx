import React from 'react';
import { useTranslation } from 'react-i18next';
import { SlidersHorizontal, LayoutGrid, List } from 'lucide-react';

export default function ShopFilter() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#F9F1E7] py-5 px-4 sm:px-8 md:px-14 flex flex-col lg:flex-row items-center justify-between gap-5">
      
      {/* 1-QATOR (Mobilda): Filtr, ikonkalar va natija */}
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6 w-full lg:w-auto">
        <button className="flex items-center gap-2 text-black font-medium hover:text-[#B88E2F] transition text-sm sm:text-base">
          <SlidersHorizontal className="w-5 h-5" />
          <span>{t('shop.filter')}</span>
        </button>

        <div className="flex items-center gap-2">
          <button className="p-1 hover:text-[#B88E2F] transition" aria-label="Grid view">
            <LayoutGrid className="w-5 h-5" />
          </button>
          <button className="p-1 hover:text-[#B88E2F] transition" aria-label="List view">
            <List className="w-5 h-5" />
          </button>
        </div>

        <div className="h-5 w-[1px] bg-gray-400 hidden sm:block"></div>

        <span className="text-xs sm:text-sm font-normal text-black text-center">
          {t('shop.showing')}
        </span>
      </div>

      {/* 2-QATOR (Mobilda): Show va Sort inputlar */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm w-full lg:w-auto">
        
        {/* Show */}
        <div className="flex items-center gap-2">
          <span className="whitespace-nowrap font-medium">{t('shop.show')}</span>
          <input 
            type="text" 
            defaultValue="16" 
            className="w-12 sm:w-14 h-9 sm:h-12 bg-white text-center text-gray-700 font-medium rounded-sm border border-transparent focus:border-[#B88E2F] focus:outline-none shadow-sm"
          />
        </div>

        {/* Sort By */}
        <div className="flex items-center gap-2">
          <span className="whitespace-nowrap font-medium">{t('shop.sortBy')}</span>
          <select className="h-9 sm:h-12 bg-white px-2 sm:px-4 text-gray-700 font-medium rounded-sm border border-transparent focus:border-[#B88E2F] focus:outline-none cursor-pointer shadow-sm max-w-[180px] sm:max-w-none">
            <option>{t('shop.default')}</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

      </div>

    </div>
  );
}