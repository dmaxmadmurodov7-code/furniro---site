import React from 'react';
import { useTranslation } from 'react-i18next';
import { Trophy, ShieldCheck, Truck, Headphones } from 'lucide-react';

export default function ShopFeatures() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Trophy className="w-14 h-14 text-black stroke-[1.3]" />,
      title: t('features.highQuality'),
      desc: t('features.highQualityDesc')
    },
    {
      icon: <ShieldCheck className="w-14 h-14 text-black stroke-[1.3]" />,
      title: t('features.warranty'),
      desc: t('features.warrantyDesc')
    },
    {
      icon: <Truck className="w-14 h-14 text-black stroke-[1.3]" />,
      title: t('features.shipping'),
      desc: t('features.shippingDesc')
    },
    {
      icon: <Headphones className="w-14 h-14 text-black stroke-[1.3]" />,
      title: t('features.support'),
      desc: t('features.supportDesc')
    }
  ];

  return (
    <div className="w-full bg-[#FAF3EA] py-20 px-6 md:px-14 my-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            {item.icon}
            <div>
              <h4 className="text-xl font-bold text-[#242424] mb-1">{item.title}</h4>
              <p className="text-gray-500 text-sm font-medium">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}