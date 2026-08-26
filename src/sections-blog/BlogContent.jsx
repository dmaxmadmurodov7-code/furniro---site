import React from 'react';
import { useTranslation } from 'react-i18next';
import { User, Calendar, Tag, Search } from 'lucide-react';

export default function BlogContent() {
  const { t } = useTranslation();

  const posts = [
    {
      id: 1,
      title: t('blog.post1Title'),
      desc: t('blogg.post1.excerpt'),
      author: t('blog.admin'),
      date: '14 Oct 2023',
      category: t('blog.catWood'),
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1000'
    },
    {
      id: 2,
      title: t('blog.post2Title'),
      desc: t('blogg.post2.excerpt'),
      author: t('blog.admin'),
      date: '14 Oct 2023',
      category: t('blog.catHandmade'),
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000'
    },
    {
      id: 3,
      title: t('blog.post3Title'),
      desc: t('blogg.post3.excerpt'),
      author: t('blog.admin'),
      date: '14 Oct 2023',
      category: t('blog.catWood'),
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000'
    }
  ];

  const categories = [
    { name: t('blog.catCrafts'), count: 2 },
    { name: t('blog.catDesign'), count: 8 },
    { name: t('blog.catHandmade'), count: 7 },
    { name: t('blog.catInterior'), count: 1 },
    { name: t('blog.catWood'), count: 6 }
  ];

  const recentPosts = [
    { id: 1, title: t('blog.recent1'), date: '03 Aug 2023', image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=200' },
    { id: 2, title: t('blog.recent2'), date: '03 Aug 2023', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=200' },
    { id: 3, title: t('blog.recent3'), date: '03 Aug 2023', image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=200' },
    { id: 4, title: t('blog.recent4'), date: '03 Aug 2023', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=200' },
    { id: 5, title: t('blog.recent5'), date: '03 Aug 2023', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=200' }
  ];

  return (
    <section className="py-12 px-6 md:px-14 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* Chap tomon: Postlar ro'yxati */}
        <div className="w-full lg:w-[70%] flex flex-col gap-14">
          {posts.map((post) => (
            <div key={post.id} className="flex flex-col">
              <div className="w-full h-[400px] overflow-hidden rounded-lg mb-4">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>

              {/* Meta ma'lumotlar */}
              <div className="flex items-center gap-6 text-[#9F9F9F] text-sm mb-3">
                <div className="flex items-center gap-2"><User className="w-4 h-4" /> <span>{post.author}</span></div>
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> <span>{post.date}</span></div>
                <div className="flex items-center gap-2"><Tag className="w-4 h-4" /> <span>{post.category}</span></div>
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-3">{post.title}</h2>
              <p className="text-[#9F9F9F] text-sm md:text-base leading-relaxed mb-6">{post.desc}</p>
              
              <div>
                <a href="#" className="border-b border-black text-black font-medium text-sm pb-1 hover:text-[#B88E2F] hover:border-[#B88E2F] transition">
                  {t('blog.readMore')}
                </a>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex justify-end items-center gap-6 mt-6">
            <button className="w-12 h-12 rounded-lg bg-[#B88E2F] text-white font-medium text-base">1</button>
            <button className="w-12 h-12 rounded-lg bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white text-black font-medium text-base transition">2</button>
            <button className="w-12 h-12 rounded-lg bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white text-black font-medium text-base transition">3</button>
            <button className="rounded-lg bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white text-black font-light text-base px-6 py-3 transition">
              {t('shop.next')}
            </button>
          </div>
        </div>

        {/* O'ng tomon: Sidebar */}
        <div className="w-full lg:w-[30%] flex flex-col gap-10">
          
          {/* Search box */}
          <div className="relative">
            <input 
              type="text" 
              className="w-full h-14 border border-[#9F9F9F] rounded-lg px-4 pr-12 focus:outline-none"
            />
            <Search className="w-6 h-6 absolute right-4 top-1/2 -translate-y-1/2 text-black cursor-pointer" />
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-6">{t('blog.categoriesTitle')}</h3>
            <div className="flex flex-col gap-6 text-[#9F9F9F] font-normal text-base">
              {categories.map((cat, idx) => (
                <div key={idx} className="flex justify-between items-center cursor-pointer hover:text-[#B88E2F]">
                  <span>{cat.name}</span>
                  <span>{cat.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-6">{t('blog.recentPostsTitle')}</h3>
            <div className="flex flex-col gap-6">
              {recentPosts.map((item) => (
                <div key={item.id} className="flex items-center gap-4 cursor-pointer group">
                  <img src={item.image} alt={item.title} className="w-20 h-20 rounded-lg object-cover" />
                  <div>
                    <h4 className="font-semibold text-sm max-w-[180px] group-hover:text-[#B88E2F] transition line-clamp-2 text-black">
                      {item.title}
                    </h4>
                    <span className="text-xs text-[#9F9F9F]">{item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}