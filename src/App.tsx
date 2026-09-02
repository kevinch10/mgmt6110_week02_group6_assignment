/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ShopByCategory } from './components/ShopByCategory';
import { SecondaryBanner } from './components/SecondaryBanner';
import { MostWanted } from './components/MostWanted';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { ArticleModal } from './components/ArticleModal';
import { StoreFinderModal } from './components/StoreFinderModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { AppDownloadModal } from './components/AppDownloadModal';
import { AccountModal } from './components/AccountModal';
import { HelpModal } from './components/HelpModal';

import {
  MOST_WANTED_PRODUCTS,
  BLOG_ARTICLES,
} from './data/mockData';
import { Product, CartItem, Article } from './types';
import { Check, X, SlidersHorizontal } from 'lucide-react';

export default function App() {
  // State
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('jd_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('jd_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modal States
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [cartDrawerOpen, setCartDrawerOpen] = useState<boolean>(false);
  const [wishlistDrawerOpen, setWishlistDrawerOpen] = useState<boolean>(false);
  const [storeFinderOpen, setStoreFinderOpen] = useState<boolean>(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState<boolean>(false);
  const [appDownloadOpen, setAppDownloadOpen] = useState<boolean>(false);
  const [accountModalOpen, setAccountModalOpen] = useState<boolean>(false);
  const [helpModalData, setHelpModalData] = useState<{
    isOpen: boolean;
    title: string;
    content: string;
  }>({
    isOpen: false,
    title: '',
    content: '',
  });

  // Notification Toast
  const [toast, setToast] = useState<{ message: string; visible: boolean }>({
    message: '',
    visible: false,
  });

  const showToast = (message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 3000);
  };

  // Sync state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('jd_cart', JSON.stringify(cartItems));
    } catch {
      // storage quota or private browsing fallback
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('jd_wishlist', JSON.stringify(wishlistIds));
    } catch {
      // fallback
    }
  }, [wishlistIds]);

  // Cart Handlers
  const handleAddToCart = (product: Product, size: string, quantity = 1) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (it) => it.product.id === product.id && it.selectedSize === size
      );
      if (existingIdx > -1) {
        const copy = [...prev];
        copy[existingIdx].quantity += quantity;
        return copy;
      }
      return [...prev, { product, selectedSize: size, quantity }];
    });
    showToast(`Added ${product.name} (${size}) to Bag`);
  };

  const handleQuickAdd = (product: Product) => {
    const defaultSize = product.sizes[0] || 'UK 8';
    handleAddToCart(product, defaultSize, 1);
  };

  const handleUpdateQuantity = (productId: string, size: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveFromCart(productId, size);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.product.id === productId && item.selectedSize === size) {
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const handleRemoveFromCart = (productId: string, size: string) => {
    setCartItems((prev) =>
      prev.filter((it) => !(it.product.id === productId && it.selectedSize === size))
    );
    showToast('Item removed from Bag');
  };

  // Wishlist Handlers
  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) => {
      const exists = prev.includes(product.id);
      if (exists) {
        showToast(`Removed ${product.name} from Wishlist`);
        return prev.filter((id) => id !== product.id);
      } else {
        showToast(`Saved ${product.name} to Wishlist`);
        return [...prev, product.id];
      }
    });
  };

  const handleMoveWishlistToBag = (product: Product) => {
    const defaultSize = product.sizes[0] || 'UK 8';
    handleAddToCart(product, defaultSize, 1);
    setWishlistIds((prev) => prev.filter((id) => id !== product.id));
  };

  // Filtered Products
  const filteredProducts = MOST_WANTED_PRODUCTS.filter((prod) => {
    // Category filter
    if (activeCategory === 'men' && prod.category !== 'men' && prod.category !== 'unisex') {
      return false;
    }
    if (activeCategory === 'women' && prod.category !== 'women' && prod.category !== 'unisex') {
      return false;
    }
    if (activeCategory === 'kids' && prod.category !== 'kids') {
      return false;
    }
    if (activeCategory === 'offers' && !prod.originalPrice && !prod.badge) {
      return false;
    }
    // Search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const matchName = prod.name.toLowerCase().includes(query);
      const matchBrand = prod.brand.toLowerCase().includes(query);
      const matchCategory = prod.category.toLowerCase().includes(query);
      return matchName || matchBrand || matchCategory;
    }
    return true;
  });

  const wishlistProducts = MOST_WANTED_PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col font-sans selection:bg-neon-accent selection:text-ink-black">
      {/* Toast Notification */}
      {toast.visible && (
        <div className="fixed bottom-6 right-6 z-50 bg-ink-black text-pure-white border-2 border-neon-accent px-5 py-3 shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="w-2.5 h-2.5 bg-neon-accent rounded-full animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider">{toast.message}</span>
        </div>
      )}

      {/* Header */}
      <Header
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setCartDrawerOpen(true)}
        onOpenWishlist={() => setWishlistDrawerOpen(true)}
        onOpenAccount={() => setAccountModalOpen(true)}
        onOpenAppDownload={() => setAppDownloadOpen(true)}
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          if (cat !== 'all') {
            scrollToSection('most-wanted-section');
          }
        }}
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          if (q.trim()) {
            scrollToSection('most-wanted-section');
          }
        }}
        allProducts={MOST_WANTED_PRODUCTS}
        onSelectProduct={(prod) => setSelectedProduct(prod)}
      />

      {/* Active Filter Notice Bar if filtered */}
      {(activeCategory !== 'all' || searchQuery.trim() !== '') && (
        <div className="bg-concrete-gray border-b border-ink-black py-2.5 px-4 md:px-12">
          <div className="max-w-[1440px] mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink-black">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>
                Active Filter:{' '}
                <span className="bg-ink-black text-neon-accent px-2 py-0.5">
                  {activeCategory !== 'all' ? activeCategory.toUpperCase() : 'SEARCH'}
                </span>
                {searchQuery && ` matching "${searchQuery}"`}
              </span>
            </div>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-ink-black hover:text-red-600 uppercase flex items-center gap-1 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" /> Clear Filter
            </button>
          </div>
        </div>
      )}

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          onShopAdidas={() => {
            setActiveCategory('men');
            setSearchQuery('adidas');
            scrollToSection('most-wanted-section');
          }}
        />

        {/* Shop By Category Bento Grid */}
        <ShopByCategory
          onSelectCategoryFilter={(cat) => {
            setActiveCategory(cat);
            scrollToSection('most-wanted-section');
          }}
        />

        {/* Secondary Banner */}
        <SecondaryBanner
          onShopNewBalance={() => {
            setSearchQuery('New Balance');
            scrollToSection('most-wanted-section');
          }}
        />

        {/* Most Wanted Section */}
        <div id="most-wanted-section">
          <MostWanted
            products={filteredProducts.length > 0 ? filteredProducts : MOST_WANTED_PRODUCTS}
            onSelectProduct={(product) => setSelectedProduct(product)}
            onQuickAdd={handleQuickAdd}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlistIds}
          />
        </div>

        {/* Blog / Editorial Section */}
        <div id="blog-section">
          <BlogSection
            articles={BLOG_ARTICLES}
            onSelectArticle={(article) => setSelectedArticle(article)}
          />
        </div>
      </main>

      {/* Footer */}
      <Footer
        onOpenSizeGuide={() => setSizeGuideOpen(true)}
        onOpenStoreFinder={() => setStoreFinderOpen(true)}
        onOpenAppDownload={() => setAppDownloadOpen(true)}
        onOpenHelpModal={(title, content) =>
          setHelpModalData({ isOpen: true, title, content })
        }
        onScrollToBlog={() => scrollToSection('blog-section')}
      />

      {/* Modals and Drawers */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={selectedProduct ? wishlistIds.includes(selectedProduct.id) : false}
        onOpenSizeGuide={() => setSizeGuideOpen(true)}
      />

      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckoutSuccess={() => {
          setCartItems([]);
          setCartDrawerOpen(false);
          showToast('Order confirmed! Receipt sent to your email.');
        }}
      />

      <WishlistDrawer
        isOpen={wishlistDrawerOpen}
        onClose={() => setWishlistDrawerOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveFromWishlist={(id) =>
          setWishlistIds((prev) => prev.filter((itemId) => itemId !== id))
        }
        onMoveToBag={handleMoveWishlistToBag}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <StoreFinderModal
        isOpen={storeFinderOpen}
        onClose={() => setStoreFinderOpen(false)}
      />

      <SizeGuideModal
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
      />

      <AppDownloadModal
        isOpen={appDownloadOpen}
        onClose={() => setAppDownloadOpen(false)}
      />

      <AccountModal
        isOpen={accountModalOpen}
        onClose={() => setAccountModalOpen(false)}
      />

      <HelpModal
        isOpen={helpModalData.isOpen}
        title={helpModalData.title}
        content={helpModalData.content}
        onClose={() =>
          setHelpModalData({ isOpen: false, title: '', content: '' })
        }
      />
    </div>
  );
}
