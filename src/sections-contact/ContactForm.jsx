import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function ContactForm() {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="py-20 px-6 md:px-14 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Sarlavha va Subtitr */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
            {t('contact.heading')}
          </h2>
          <p className="text-[#9F9F9F] text-sm md:text-base leading-relaxed">
            {t('contact.subheading')}
          </p>
        </div>

        {/* Asosiy qism */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          {/* Chap tomon: Kontakt Ma'lumotlari */}
          <div className="w-full lg:w-[40%] flex flex-col gap-10 pl-0 lg:pl-6">
            
            {/* Manzil */}
            <div className="flex items-start gap-6">
              <MapPin className="w-7 h-7 text-black shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold text-black mb-1">{t('contact.addressTitle')}</h3>
                <p className="text-black text-sm max-w-[220px] leading-relaxed">{t('contact.addressText')}</p>
              </div>
            </div>

            {/* Telefon */}
            <div className="flex items-start gap-6">
              <Phone className="w-7 h-7 text-black shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold text-black mb-1">{t('contact.phoneTitle')}</h3>
                <p className="text-black text-sm">{t('contact.phoneMobile')}</p>
                <p className="text-black text-sm">{t('contact.phoneHotline')}</p>
              </div>
            </div>

            {/* Ish Vaqti */}
            <div className="flex items-start gap-6">
              <Clock className="w-7 h-7 text-black shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold text-black mb-1">{t('contact.workingTimeTitle')}</h3>
                <p className="text-black text-sm max-w-[240px]">{t('contact.workingTimeWeekdays')}</p>
                <p className="text-black text-sm max-w-[240px]">{t('contact.workingTimeWeekends')}</p>
              </div>
            </div>

          </div>

          {/* O'ng tomon: Forma */}
          <div className="w-full lg:w-[60%]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-9">
              
              <div className="flex flex-col gap-3">
                <label className="text-black font-medium text-base">{t('contact.yourName')}</label>
                <input 
                  type="text" 
                  placeholder="Abc"
                  className="w-full h-18 border border-[#9F9F9F] rounded-xl px-6 focus:outline-none focus:border-[#B88E2F] text-black"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-black font-medium text-base">{t('contact.emailAddress')}</label>
                <input 
                  type="email" 
                  placeholder="Abc@def.com"
                  className="w-full h-18 border border-[#9F9F9F] rounded-xl px-6 focus:outline-none focus:border-[#B88E2F] text-black"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-black font-medium text-base">{t('contact.subject')}</label>
                <input 
                  type="text" 
                  placeholder={t('contact.subjectPlaceholder')}
                  className="w-full h-18 border border-[#9F9F9F] rounded-xl px-6 focus:outline-none focus:border-[#B88E2F] text-black"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-black font-medium text-base">{t('contact.message')}</label>
                <textarea 
                  rows="4" 
                  placeholder={t('contact.messagePlaceholder')}
                  className="w-full border border-[#9F9F9F] rounded-xl p-6 focus:outline-none focus:border-[#B88E2F] text-black resize-none"
                ></textarea>
              </div>

              <div>
                <button 
                  type="submit" 
                  className="w-[237px] h-[55px] bg-[#B88E2F] hover:bg-[#a07b27] text-white text-base font-normal rounded-md transition duration-300"
                >
                  {t('contact.submit')}
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}