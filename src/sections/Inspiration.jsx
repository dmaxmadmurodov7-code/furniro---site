import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

export default function Inspiration() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#FCF8F3] py-16 px-6 md:px-14">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        
        {/* Chap tomon: Matnlar va Tugma */}
        <div className="w-full lg:w-[35%] flex flex-col items-start">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3A3A3A] leading-tight mb-3">
            {t('inspiration.title')}
          </h2>
          <p className="text-[#616161] text-sm md:text-base leading-relaxed mb-6">
            {t('inspiration.subtitle')}
          </p>
          <button className="bg-[#B88E2F] hover:bg-[#a07b27] text-white font-semibold py-3 px-9 rounded-sm transition duration-300">
            {t('inspiration.button')}
          </button>
        </div>

        {/* O'ng tomon: Karusel / Rasmlar */}
        <div className="w-full lg:w-[65%] flex flex-col sm:flex-row gap-6 items-center overflow-hidden">
          
          {/* Asosiy card */}
          <div className="relative w-full sm:w-[404px] h-[582px] shrink-0 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800" 
              alt="Inspiration" 
              className="w-full h-full object-cover"
            />
            
            {/* Rasm ustidagi matn kartochkasi */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-6 flex items-end gap-4 rounded-sm">
              <div>
                <span className="text-[#616161] text-sm flex items-center gap-2">
                  01 <span className="w-7 h-[1px] bg-[#616161]"></span> {t('inspiration.roomType')}
                </span>
                <h3 className="text-2xl font-semibold text-[#3A3A3A] mt-1">
                  {t('inspiration.roomName')}
                </h3>
              </div>
              <button className="bg-[#B88E2F] text-white p-3 hover:bg-[#a07b27] transition">
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Qo'shimcha rasm */}
          <div className="w-full sm:w-[372px] h-[486px] shrink-0 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800" 
              alt="Inspiration 2" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}