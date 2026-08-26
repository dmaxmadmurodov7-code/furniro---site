import React from 'react';
import { useTranslation } from 'react-i18next';
import { Share2, ArrowRightLeft, Heart } from 'lucide-react';

export default function ShopProducts() {
  const { t } = useTranslation();

  const shopItems = [
    {
      id: 1,
      name: t('shopProducts.items.p1.name'),
      desc: t('shopProducts.items.p1.desc'),
      price: 'Rp 2.500.000',
      oldPrice: 'Rp 3.500.000',
      badge: '-30%',
      badgeBg: 'bg-[#E97171]',
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800'
    },
    {
      id: 2,
      name: t('shopProducts.items.p2.name'),
      desc: t('shopProducts.items.p2.desc'),
      price: 'Rp 1.800.000',
      oldPrice: null,
      badge: null,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDmBqRAj_6uK2SXbARkTR33FtXYw-LbIrdhuvAuDez-JT3nCaoxQjsNrYa&s=10'
    },
    {
      id: 3,
      name: t('shopProducts.items.p3.name'),
      desc: t('shopProducts.items.p3.desc'),
      price: 'Rp 7.000.000',
      oldPrice: 'Rp 14.000.000',
      badge: '-50%',
      badgeBg: 'bg-[#E97171]',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800'
    },
    {
      id: 4,
      name: t('shopProducts.items.p4.name'),
      desc: t('shopProducts.items.p4.desc'),
      price: 'Rp 500.000',
      oldPrice: null,
      badge: 'New',
      badgeBg: 'bg-[#2EC1AC]',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800'
    },
    {
      id: 5,
      name: t('shopProducts.items.p5.name'),
      desc: t('shopProducts.items.p5.desc'),
      price: 'Rp 1.500.000',
      oldPrice: null,
      badge: null,
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800'
    },
    {
      id: 6,
      name: t('shopProducts.items.p6.name'),
      desc: t('shopProducts.items.p6.desc'),
      price: 'Rp 150.000',
      oldPrice: null,
      badge: 'New',
      badgeBg: 'bg-[#2EC1AC]',
      image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800'
    },
    {
      id: 7,
      name: t('shopProducts.items.p7.name'),
      desc: t('shopProducts.items.p7.desc'),
      price: 'Rp 7.000.000',
      oldPrice: 'Rp 14.000.000',
      badge: '-50%',
      badgeBg: 'bg-[#E97171]',
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800'
    },
    {
      id: 8,
      name: t('shopProducts.items.p8.name'),
      desc: t('shopProducts.items.p8.desc'),
      price: 'Rp 500.000',
      oldPrice: null,
      badge: 'New',
      badgeBg: 'bg-[#2EC1AC]',
      image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800'
    }
  ];

  return (
    <section className="py-12 px-6 md:px-14 bg-white">
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {shopItems.map((item) => (
          <div key={item.id} className="relative bg-[#F4F5F7] group overflow-hidden rounded-md">
            
            {/* Rasm va Badge */}
            <div className="relative w-full h-[301px]">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              {item.badge && (
                <div className={`absolute top-5 right-5 w-12 h-12 rounded-full ${item.badgeBg} text-white font-medium text-sm flex items-center justify-center`}>
                  {item.badge}
                </div>
              )}
            </div>

            {/* Mahsulot Ma'lumotlari */}
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-2xl font-semibold text-[#3A3A3A]">{item.name}</h3>
              <p className="text-[#898989] text-base font-medium">{item.desc}</p>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[#3A3A3A] font-semibold text-lg">{item.price}</span>
                {item.oldPrice && (
                  <span className="text-[#B0B0B0] text-sm line-through">{item.oldPrice}</span>
                )}
              </div>
            </div>

            {/* Hover overlay va Tugmalar */}
            <div className="absolute inset-0 bg-[#3A3A3A]/75 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center p-3 sm:p-4">
              <button className="bg-white text-[#B88E2F] font-semibold py-3 px-6 sm:px-8 rounded-sm mb-5 hover:bg-[#B88E2F] hover:text-white transition text-sm">
                {t('products.addToCart')}
              </button>

              {/* Grid orqali 2 qatorga tartibli joylashtirish */}
              <div className="grid grid-cols-2 gap-y-2.5 gap-x-1 text-white font-medium text-xs sm:text-sm w-full px-1">
                <button className="flex items-center justify-center gap-1 hover:text-[#B88E2F] transition whitespace-nowrap">
                  <Share2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{t('products.share')}</span>
                </button>

                <button className="flex items-center justify-center gap-1 hover:text-[#B88E2F] transition whitespace-nowrap">
                  <Heart className="w-3.5 h-3.5 shrink-0" />
                  <span>{t('products.like')}</span>
                </button>

                <button className="col-span-2 flex items-center justify-center gap-1 hover:text-[#B88E2F] transition whitespace-nowrap pt-0.5">
                  <ArrowRightLeft className="w-3.5 h-3.5 shrink-0" />
                  <span>{t('products.compare')}</span>
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Pagination (Sahifalash) */}
      <div className="flex justify-center items-center gap-4 sm:gap-8 mt-16 flex-wrap">
        <button className="w-12 h-12 sm:w-15 sm:h-15 rounded-lg bg-[#B88E2F] text-white text-lg sm:text-xl flex items-center justify-center font-normal">
          1
        </button>
        <button className="w-12 h-12 sm:w-15 sm:h-15 rounded-lg bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white text-black text-lg sm:text-xl flex items-center justify-center transition">
          2
        </button>
        <button className="w-12 h-12 sm:w-15 sm:h-15 rounded-lg bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white text-black text-lg sm:text-xl flex items-center justify-center transition">
          3
        </button>
        <button className="px-5 py-3 sm:px-7 sm:py-4 rounded-lg bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white text-black text-lg sm:text-xl font-light transition">
          {t('shopProducts.next')}
        </button>
      </div>
    </section>
  );
}