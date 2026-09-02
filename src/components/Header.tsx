import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, X, Menu } from 'lucide-react';
import { Product } from '../types';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenAccount: () => void;
  onOpenAppDownload: () => void;
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  allProducts: Product[];
  onSelectProduct: (product: Product) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenAccount,
  onOpenAppDownload,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  allProducts,
  onSelectProduct,
}) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'men', label: 'Men' },
    { id: 'women', label: 'Women' },
    { id: 'kids', label: 'Kids' },
    { id: 'brands', label: 'Brands' },
    { id: 'sports', label: 'Sports' },
    { id: 'offers', label: 'Offers' },
  ];

  const filteredSearchSuggestions = searchQuery.trim()
    ? allProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.brand.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <header className="bg-pure-white border-b border-outline-variant w-full sticky top-0 z-50 shadow-xs">
      {/* Top Black Bar */}
      <div className="bg-ink-black text-pure-white text-center py-2 text-xs font-bold tracking-wider">
        <button
          id="btn-top-download-app"
          onClick={onOpenAppDownload}
          className="hover:text-neon-accent transition-colors uppercase cursor-pointer"
        >
          Download The JD App Now!
        </button>
      </div>

      {/* Main Header Container */}
      <div className="flex flex-col w-full max-w-[1440px] mx-auto px-4 md:px-12 py-3 md:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Mobile Menu Button */}
          <button
            id="btn-mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 text-ink-black hover:text-[#5d6300] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <button
            id="brand-logo"
            onClick={() => {
              onSelectCategory('all');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-ink-black cursor-pointer text-left"
          >
            JD SPORTS
          </button>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:block relative flex-grow max-w-md mx-6">
            <div className="flex items-center border border-ink-black px-3.5 py-2 bg-pure-white transition-all focus-within:border-2 focus-within:border-ink-black">
              <input
                id="search-input-desktop"
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                placeholder="Search sneakers, apparel, brands..."
                className="bg-transparent border-none outline-none w-full text-sm placeholder:text-gray-500"
              />
              {searchQuery ? (
                <button
                  id="btn-clear-search"
                  onClick={() => onSearchChange('')}
                  className="text-gray-400 hover:text-ink-black mr-1"
                >
                  <X className="w-4 h-4" />
                </button>
              ) : null}
              <Search className="w-4 h-4 ml-1 text-ink-black flex-shrink-0" />
            </div>

            {/* Live Search Autocomplete Dropdown */}
            {isSearchFocused && filteredSearchSuggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-pure-white border-2 border-ink-black shadow-xl z-50 max-h-80 overflow-y-auto">
                <div className="p-2 border-b border-gray-200 bg-concrete-gray text-[11px] font-bold uppercase tracking-wider text-gray-600">
                  Matching Products ({filteredSearchSuggestions.length})
                </div>
                {filteredSearchSuggestions.map((prod) => (
                  <button
                    key={prod.id}
                    id={`search-item-${prod.id}`}
                    onClick={() => {
                      onSelectProduct(prod);
                      setIsSearchFocused(false);
                    }}
                    className="w-full text-left p-3 hover:bg-concrete-gray flex items-center gap-3 border-b border-gray-100 last:border-b-0 cursor-pointer transition-colors"
                  >
                    <img
                      src={prod.imageUrl}
                      alt={prod.name}
                      className="w-12 h-12 object-contain bg-concrete-gray p-1 border border-gray-200"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs uppercase font-bold text-gray-500">{prod.brand}</p>
                      <p className="text-sm font-bold text-ink-black truncate">{prod.name}</p>
                    </div>
                    <div className="text-sm font-extrabold text-ink-black">
                      ${prod.price.toFixed(2)}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Icons: Account, Wishlist, Bag */}
          <div className="flex items-center gap-5 md:gap-6">
            <button
              id="btn-account"
              onClick={onOpenAccount}
              className="text-ink-black hover:text-[#5d6300] transition-colors cursor-pointer p-1"
              title="Account"
              aria-label="User Account"
            >
              <User className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <button
              id="btn-wishlist"
              onClick={onOpenWishlist}
              className="relative text-ink-black hover:text-[#5d6300] transition-colors cursor-pointer p-1"
              title="Wishlist"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5 md:w-6 md:h-6" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-neon-accent text-ink-black text-[10px] font-extrabold px-1.5 py-0.5 border border-ink-black leading-none">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              id="btn-shopping-bag"
              onClick={onOpenCart}
              className="relative text-ink-black hover:text-[#5d6300] transition-colors cursor-pointer p-1"
              title="Shopping Bag"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-ink-black text-pure-white text-[10px] font-extrabold px-1.5 py-0.5 border border-pure-white leading-none">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search input */}
        <div className="mt-3 md:hidden">
          <div className="flex items-center border border-ink-black px-3 py-1.5 bg-pure-white">
            <input
              id="search-input-mobile"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search sneakers, apparel..."
              className="bg-transparent border-none outline-none w-full text-xs"
            />
            <Search className="w-4 h-4 ml-2 text-ink-black" />
          </div>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 mt-3">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`nav-cat-${cat.id}`}
                onClick={() => onSelectCategory(cat.id)}
                className={`text-sm font-bold uppercase transition-colors pb-1 border-b-2 cursor-pointer ${
                  isActive
                    ? 'border-ink-black text-ink-black font-extrabold'
                    : 'border-transparent text-on-surface-variant hover:text-ink-black hover:border-gray-300'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-outline-variant bg-pure-white px-4 py-4 space-y-3">
          <div className="text-xs font-bold text-gray-500 uppercase">Categories</div>
          <div className="grid grid-cols-2 gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`mobile-nav-cat-${cat.id}`}
                onClick={() => {
                  onSelectCategory(cat.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left text-sm font-bold uppercase p-2 border ${
                  activeCategory === cat.id
                    ? 'bg-ink-black text-pure-white border-ink-black'
                    : 'bg-concrete-gray text-ink-black border-transparent'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Ticker Banner */}
      <div className="bg-neon-accent py-2 overflow-hidden flex whitespace-nowrap border-t border-b border-ink-black">
        <div className="animate-marquee flex gap-12 font-bold text-sm text-ink-black uppercase tracking-wider">
          <span>Just Do It: Shop Nike Air Force 1</span>
          <span>•</span>
          <span>Fastest way to shop: Click Now, Collect Quick</span>
          <span>•</span>
          <span>Run on Clouds: Shop On Running Cloud 6</span>
          <span>•</span>
          <span>Free Standard Delivery Above $120 SGD</span>
          <span>•</span>
          <span>Just Do It: Shop Nike Air Force 1</span>
          <span>•</span>
          <span>Fastest way to shop: Click Now, Collect Quick</span>
          <span>•</span>
          <span>Run on Clouds: Shop On Running Cloud 6</span>
          <span>•</span>
          <span>Free Standard Delivery Above $120 SGD</span>
        </div>
      </div>
    </header>
  );
};
