import React from 'react';
import { X, Calendar, Clock, User, Share2, Tag } from 'lucide-react';
import { Article } from '../types';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  onSelectTag?: (tag: string) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-ink-black/85 backdrop-blur-xs overflow-y-auto">
      <div
        className="relative bg-pure-white w-full max-w-3xl border-2 border-ink-black shadow-2xl my-auto animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <button
          id="btn-close-article-modal"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-pure-white border border-ink-black hover:bg-neon-accent transition-colors cursor-pointer"
          aria-label="Close article"
        >
          <X className="w-5 h-5 text-ink-black" />
        </button>

        <div className="max-h-[85vh] overflow-y-auto">
          {/* Article Header Image */}
          <div className="relative w-full h-64 sm:h-80 bg-surface-variant overflow-hidden">
            <img
              src={article.imageUrl}
              alt={article.imageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-pure-white">
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-neon-accent uppercase tracking-wider mb-2">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {article.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {article.readTime}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5" /> {article.author}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase leading-tight text-pure-white">
                {article.title}
              </h2>
            </div>
          </div>

          {/* Article Body */}
          <div className="p-6 sm:p-10 space-y-6">
            <p className="text-base sm:text-lg font-bold text-ink-black leading-relaxed border-l-4 border-neon-accent pl-4">
              {article.subtitle}
            </p>

            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              {article.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Tags */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-black uppercase text-ink-black flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5" /> Tags:
                </span>
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-concrete-gray text-ink-black text-xs font-bold px-3 py-1 border border-gray-300 uppercase"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share / Action bar */}
            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
              <button
                onClick={() => alert('Article link copied to clipboard!')}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink-black hover:text-[#5d6300] cursor-pointer"
              >
                <Share2 className="w-4 h-4" /> Share Article
              </button>
              <button
                onClick={onClose}
                className="bg-ink-black text-pure-white px-6 py-2 text-xs font-bold uppercase tracking-wider hover:bg-neon-accent hover:text-ink-black transition-colors"
              >
                Back to Feed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
