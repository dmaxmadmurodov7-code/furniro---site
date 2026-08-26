import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600',
      tagline: t('hero.tagline'),
      title: t('hero.title'),
      description: t('hero.description'),
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600',
      tagline: t('hero.tagline'),
      title: t('hero.title'),
      description: t('hero.description'),
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1600',
      tagline: t('hero.tagline'),
      title: t('hero.title'),
      description: t('hero.description'),
    }
  ];

  // Avtomatik 5 soniyada almashish
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full h-[calc(100vh-80px)] min-h-[600px] relative overflow-hidden flex items-center justify-end px-6 md:px-14">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        />
      ))}

      {/* Dark Overlay for contrast */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Banner Card */}
      <div className="bg-[#FFF3E3]/95 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-lg max-w-[643px] w-full z-10 shadow-xl transition-all duration-500">
        <span className="text-black font-semibold text-xs sm:text-sm md:text-base tracking-[3px] uppercase mb-1 block">
          {slides[currentSlide].tagline}
        </span>
        
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#B88E2F] leading-tight mb-3 md:mb-4">
          {slides[currentSlide].title}
        </h1>

        <p className="text-[#333333] text-xs sm:text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
          {slides[currentSlide].description}
        </p>

        <button className="bg-[#B88E2F] hover:bg-[#a07b27] text-white font-bold py-3 sm:py-4 px-8 sm:px-12 rounded uppercase text-xs sm:text-sm md:text-base transition duration-300 shadow-md">
          {t('hero.button')}
        </button>
      </div>

      {/* Arrow Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 hover:bg-white text-black flex items-center justify-center transition shadow-md"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 hover:bg-white text-black flex items-center justify-center transition shadow-md"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators (Dots) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-[#B88E2F] w-8' : 'bg-white/70 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}