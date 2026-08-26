import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Gallery() {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-white text-center overflow-hidden">
      <p className="text-gray-500 text-sm font-semibold mb-1">
        {t('gallery.subtitle')}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-[#3A3A3A] mb-8">
        {t('gallery.title')}
      </h2>

      {/* Grid foto galereya */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4 max-w-[1400px] mx-auto items-center">
        <div className="flex flex-col gap-4">
          <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=500" className="w-full h-48 object-cover rounded-md" alt="gallery" />
          <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=500" className="w-full h-64 object-cover rounded-md" alt="gallery" />
        </div>
        <div className="flex flex-col gap-4">
          <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=500" className="w-full h-72 object-cover rounded-md" alt="gallery" />
          <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=500" className="w-full h-40 object-cover rounded-md" alt="gallery" />
        </div>
        <div className="col-span-2 md:col-span-1">
          <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600" className="w-full h-80 object-cover rounded-md" alt="gallery" />
        </div>
        <div className="flex flex-col gap-4">
          <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=500" className="w-full h-64 object-cover rounded-md" alt="gallery" />
          <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=500" className="w-full h-48 object-cover rounded-md" alt="gallery" />
        </div>
        <div className="flex flex-col gap-4">
          <img src="https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=500" className="w-full h-44 object-cover rounded-md" alt="gallery" />
          <img src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=500" className="w-full h-60 object-cover rounded-md" alt="gallery" />
        </div>
      </div>
    </section>
  );
}