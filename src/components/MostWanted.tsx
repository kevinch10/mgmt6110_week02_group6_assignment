import React, { useState } from 'react';
import { Heart, Plus, Eye } from 'lucide-react';
import { Product } from '../types';

interface MostWantedProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
}

export const MostWanted: React.FC<MostWantedProps> = ({
  products,
  onSelectProduct,
  onQuickAdd,
  onToggleWishlist,
  wishlistIds,
}) => {
  const [activeTab, setActiveTab] = useState<'men' | 'women' | 'kids'>('men');
  const [showAll, setShowAll] = useState(false);

  // Filter based on active gender tab or show all
  const filteredProducts = products.filter((p) => {
    if (activeTab === 'men') return p.category === 'men' || p.category === 'unisex';
    if (activeTab === 'women') return p.category === 'women' || p.category === 'unisex';
    if (activeTab === 'kids') return p.category === 'kids';
    return true;
  });

  const displayProducts = showAll ? filteredProducts : filteredProducts.slice(0, 4);

  return (
    <section className="bg-concrete-gray py-12 md:py-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        {/* Header and Tabs */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 border-b-2 border-ink-black pb-4 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-black uppercase text-ink-black tracking-tight">
              Most Wanted
            </h2>
            <p className="text-xs uppercase text-gray-500 font-bold mt-1 tracking-wider">
              Trending Drops & Essential Silhouettes
            </p>
          </div>

          <div className="flex gap-2 sm:gap-4 flex-wrap">
            <button
              id="tab-most-wanted-men"
              onClick={() => setActiveTab('men')}
              className={`px-4 py-2 font-bold text-xs md:text-sm uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'men'
                  ? 'bg-ink-black text-pure-white'
                  : 'bg-transparent border border-ink-black text-ink-black hover:bg-neon-accent'
              }`}
            >
              Men's
            </button>
            <button
              id="tab-most-wanted-women"
              onClick={() => setActiveTab('women')}
              className={`px-4 py-2 font-bold text-xs md:text-sm uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'women'
                  ? 'bg-ink-black text-pure-white'
                  : 'bg-transparent border border-ink-black text-ink-black hover:bg-neon-accent'
              }`}
            >
              Women's
            </button>
            <button
              id="tab-most-wanted-kids"
              onClick={() => setActiveTab('kids')}
              className={`px-4 py-2 font-bold text-xs md:text-sm uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'kids'
                  ? 'bg-ink-black text-pure-white'
                  : 'bg-transparent border border-ink-black text-ink-black hover:bg-neon-accent'
              }`}
            >
              Kids'
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {displayProducts.map((product) => {
            const isWishlisted = wishlistIds.includes(product.id);
            return (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="bg-pure-white p-3 md:p-4 flex flex-col justify-between border border-outline-variant hover:border-ink-black transition-all group relative cursor-pointer"
                onClick={() => onSelectProduct(product)}
              >
                {/* Wishlist Button */}
                <button
                  id={`btn-wishlist-${product.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleWishlist(product);
                  }}
                  className={`absolute top-5 right-5 z-20 p-2 border transition-all cursor-pointer ${
                    isWishlisted
                      ? 'bg-ink-black text-neon-accent border-ink-black'
                      : 'bg-pure-white/90 text-ink-black border-gray-200 hover:bg-neon-accent hover:border-ink-black opacity-80 group-hover:opacity-100'
                  }`}
                  title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                  aria-label="Wishlist toggle"
                >
                  <Heart
                    className={`w-4 h-4 ${isWishlisted ? 'fill-neon-accent' : ''}`}
                  />
                </button>

                {/* Product Image Area */}
                <div className="relative aspect-square bg-concrete-gray mb-4 p-4 flex items-center justify-center overflow-hidden">
                  {product.badge && (
                    <span className="absolute top-2 left-2 bg-neon-accent text-ink-black text-[11px] font-bold px-2 py-0.5 uppercase tracking-wider z-10">
                      {product.badge}
                    </span>
                  )}
                  <div
                    className="w-full h-full bg-contain bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-108"
                    style={{ backgroundImage: `url('${product.imageUrl}')` }}
                    role="img"
                    aria-label={product.imageAlt}
                  />

                  {/* Quick Action Overlay on desktop hover */}
                  <div className="hidden md:flex absolute inset-x-2 bottom-2 gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      id={`btn-quick-view-${product.id}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(product);
                      }}
                      className="flex-1 bg-pure-white text-ink-black py-2 px-2 text-xs font-bold uppercase tracking-wider border border-ink-black hover:bg-neon-accent transition-colors flex items-center justify-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      View
                    </button>
                    <button
                      id={`btn-quick-add-${product.id}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuickAdd(product);
                      }}
                      className="flex-1 bg-ink-black text-pure-white py-2 px-2 text-xs font-bold uppercase tracking-wider border border-ink-black hover:bg-neon-accent hover:text-ink-black transition-colors flex items-center justify-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Add
                    </button>
                  </div>
                </div>

                {/* Product Meta */}
                <div className="pt-1">
                  <p className="text-[11px] uppercase font-bold text-gray-400 mb-0.5 tracking-wider">
                    {product.brand}
                  </p>
                  <h3 className="text-sm md:text-base font-bold text-ink-black truncate group-hover:text-[#5d6300] transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mt-1.5">
                    <p className="text-lg md:text-xl font-black text-ink-black">
                      ${product.price.toFixed(2)}
                    </p>
                    {product.originalPrice && (
                      <p className="text-xs text-gray-400 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-8 md:mt-10">
          <button
            id="btn-view-all-products"
            onClick={() => setShowAll(!showAll)}
            className="border-2 border-ink-black text-ink-black px-8 py-3 font-bold text-xs md:text-sm uppercase tracking-wider hover:bg-ink-black hover:text-pure-white transition-colors cursor-pointer bg-pure-white"
          >
            {showAll ? 'Show Less' : 'View All'}
          </button>
        </div>
      </div>
    </section>
  );
};
