import React from 'react';
import { CATEGORY_IMAGES } from '../data/mockData';

interface ShopByCategoryProps {
  onSelectCategoryFilter: (category: 'men' | 'women' | 'kids', subcategory?: 'footwear' | 'clothing' | 'accessories') => void;
}

export const ShopByCategory: React.FC<ShopByCategoryProps> = ({ onSelectCategoryFilter }) => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-12 py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6 md:mb-8 text-ink-black">
        Shop By Category
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {/* Category 1: Men's Footwear */}
        <button
          id="cat-card-mens-footwear"
          onClick={() => onSelectCategoryFilter('men', 'footwear')}
          className="group relative block aspect-square overflow-hidden bg-concrete-gray cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-ink-black"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url('${CATEGORY_IMAGES.mensFootwear}')` }}
            role="img"
            aria-label="Men's Footwear"
          />
          <div className="absolute inset-0 bg-ink-black/20 group-hover:bg-ink-black/10 transition-colors" />
          <div className="absolute bottom-6 left-6 right-6 text-center">
            <span className="inline-block bg-ink-black text-pure-white font-bold text-sm uppercase px-6 py-3 tracking-wide w-full border border-pure-white group-hover:bg-neon-accent group-hover:text-ink-black group-hover:border-ink-black transition-colors">
              Men's Footwear
            </span>
          </div>
        </button>

        {/* Category 2: Women's Clothing */}
        <button
          id="cat-card-womens-clothing"
          onClick={() => onSelectCategoryFilter('women', 'clothing')}
          className="group relative block aspect-square overflow-hidden bg-concrete-gray cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-ink-black"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url('${CATEGORY_IMAGES.womensClothing}')` }}
            role="img"
            aria-label="Women's Clothing"
          />
          <div className="absolute inset-0 bg-ink-black/20 group-hover:bg-ink-black/10 transition-colors" />
          <div className="absolute bottom-6 left-6 right-6 text-center">
            <span className="inline-block bg-ink-black text-pure-white font-bold text-sm uppercase px-6 py-3 tracking-wide w-full border border-pure-white group-hover:bg-neon-accent group-hover:text-ink-black group-hover:border-ink-black transition-colors">
              Women's Clothing
            </span>
          </div>
        </button>

        {/* Category 3: Kids' Accessories */}
        <button
          id="cat-card-kids-accessories"
          onClick={() => onSelectCategoryFilter('kids', 'accessories')}
          className="group relative block aspect-square overflow-hidden bg-concrete-gray cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-ink-black"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url('${CATEGORY_IMAGES.kidsAccessories}')` }}
            role="img"
            aria-label="Kids' Accessories"
          />
          <div className="absolute inset-0 bg-ink-black/20 group-hover:bg-ink-black/10 transition-colors" />
          <div className="absolute bottom-6 left-6 right-6 text-center">
            <span className="inline-block bg-ink-black text-pure-white font-bold text-sm uppercase px-6 py-3 tracking-wide w-full border border-pure-white group-hover:bg-neon-accent group-hover:text-ink-black group-hover:border-ink-black transition-colors">
              Kids' Accessories
            </span>
          </div>
        </button>
      </div>
    </section>
  );
};
