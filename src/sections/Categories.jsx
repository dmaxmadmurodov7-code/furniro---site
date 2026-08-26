import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Categories() {
  const { t } = useTranslation();

  const categories = [
    {
      id: 1,
      titleKey: 'categories.dining',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800'
    },
    {
      id: 2,
      titleKey: 'categories.living',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800'
    },
    {
      id: 3,
      titleKey: 'categories.bedroom',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800'
    }
  ];

  return (
    <section className="py-16 px-6 md:px-14 bg-white text-center">
      {/* Sarlavha va Tavsif */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#333333]">
        {t('categories.title')}
      </h2>
      <p className="text-gray-500 text-sm md:text-base mt-1 mb-12">
        {t('categories.subtitle')}
      </p>

      {/* 3 ta Kategoriya Kartochkasi */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((item) => (
          <div key={item.id} className="flex flex-col items-center group cursor-pointer">
            <div className="w-full h-[480px] overflow-hidden rounded-xl bg-gray-100">
              <img
                src={item.image}
                alt={t(item.titleKey)}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-[#333333]">
              {t(item.titleKey)}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}