import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Article } from '../types';

interface BlogSectionProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ articles, onSelectArticle }) => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-12 py-12 md:py-16">
      <div className="flex justify-between items-end mb-8 border-b-2 border-ink-black pb-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase text-ink-black tracking-tight">
            Blog
          </h2>
          <p className="text-xs uppercase text-gray-500 font-bold mt-1 tracking-wider">
            Editorials, Launch Guides & Singapore Sneaker Culture
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {articles.map((article) => (
          <article
            key={article.id}
            id={`blog-card-${article.id}`}
            onClick={() => onSelectArticle(article)}
            className="flex flex-col bg-concrete-gray group border border-outline-variant hover:border-ink-black transition-all cursor-pointer"
          >
            {/* Image Area */}
            <div className="aspect-square overflow-hidden bg-surface-variant relative">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${article.imageUrl}')` }}
                role="img"
                aria-label={article.imageAlt}
              />
              <div className="absolute top-3 right-3 bg-ink-black text-pure-white text-[10px] font-bold uppercase px-2 py-1">
                {article.readTime}
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 flex flex-col flex-grow justify-between bg-concrete-gray">
              <div>
                <div className="text-[11px] font-bold uppercase text-gray-500 mb-2">
                  {article.date} • {article.author}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-ink-black leading-snug mb-3 group-hover:text-[#5d6300] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-on-surface-variant mb-6 line-clamp-3 leading-relaxed">
                  {article.subtitle}
                </p>
              </div>

              <div className="inline-flex items-center text-ink-black font-bold text-xs md:text-sm uppercase tracking-wider group-hover:text-[#5d6300] transition-colors">
                <span>Find out more</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1.5" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
