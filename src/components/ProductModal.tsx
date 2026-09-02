import React, { useState } from 'react';
import { X, Heart, ShoppingBag, Truck, RotateCcw, ShieldCheck, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, quantity: number) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
  onOpenSizeGuide: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onOpenSizeGuide,
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'UK 8');
  const [quantity, setQuantity] = useState<number>(1);
  const [addedSuccess, setAddedSuccess] = useState<boolean>(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, quantity);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-ink-black/85 backdrop-blur-xs overflow-y-auto">
      <div
        className="relative bg-pure-white w-full max-w-4xl border-2 border-ink-black shadow-2xl my-auto animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          id="btn-close-product-modal"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-pure-white border border-ink-black hover:bg-neon-accent transition-colors cursor-pointer"
          aria-label="Close product view"
        >
          <X className="w-5 h-5 text-ink-black" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Product Media Gallery */}
          <div className="bg-concrete-gray p-6 sm:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-outline-variant relative">
            {product.badge && (
              <span className="self-start bg-neon-accent text-ink-black font-bold text-xs px-3 py-1 uppercase tracking-wider mb-4 border border-ink-black">
                {product.badge}
              </span>
            )}
            <div className="w-full aspect-square flex items-center justify-center my-auto p-4">
              <img
                src={product.imageUrl}
                alt={product.imageAlt}
                className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-center text-xs text-gray-500 font-bold uppercase tracking-wider mt-4">
              Colorway: <span className="text-ink-black font-bold">{product.color}</span>
            </div>
          </div>

          {/* Right: Product Actions & Specs */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold uppercase text-gray-500 tracking-wider">
                    {product.brand} • {product.category.toUpperCase()}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black uppercase text-ink-black mt-1 leading-tight">
                    {product.name}
                  </h2>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mt-3">
                <span className="text-2xl sm:text-3xl font-black text-ink-black">
                  ${product.price.toFixed(2)} SGD
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    ${product.originalPrice.toFixed(2)} SGD
                  </span>
                )}
                <span className="text-[11px] font-bold bg-green-100 text-green-800 px-2 py-0.5 uppercase">
                  In Stock
                </span>
              </div>

              {/* Sizing Selector */}
              <div className="mt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold uppercase text-ink-black">Select Size</span>
                  <button
                    id="btn-modal-size-guide"
                    onClick={onOpenSizeGuide}
                    className="text-xs font-bold text-ink-black underline hover:text-[#5d6300] cursor-pointer"
                  >
                    Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      id={`btn-select-size-${size.replace(/\s+/g, '-')}`}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 text-xs font-bold border transition-colors cursor-pointer ${
                        selectedSize === size
                          ? 'bg-ink-black text-pure-white border-ink-black'
                          : 'bg-pure-white text-ink-black border-outline-variant hover:border-ink-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mt-4 flex items-center gap-4">
                <span className="text-xs font-bold uppercase text-ink-black">Quantity</span>
                <div className="flex items-center border border-ink-black">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 text-sm font-bold hover:bg-concrete-gray"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 text-xs font-bold min-w-8 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 text-sm font-bold hover:bg-concrete-gray"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6 border-t border-gray-200 pt-4">
                <h4 className="text-xs font-black uppercase text-ink-black mb-2">
                  Product Overview
                </h4>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {product.description}
                </p>
                {product.features && (
                  <ul className="mt-2 space-y-1">
                    {product.features.map((feat, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-ink-black rounded-full" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-4 border-t border-gray-200">
              <div className="flex gap-3">
                <button
                  id="btn-add-to-bag-modal"
                  onClick={handleAdd}
                  className={`flex-1 py-4 font-black uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all cursor-pointer border-2 border-ink-black ${
                    addedSuccess
                      ? 'bg-neon-accent text-ink-black'
                      : 'bg-ink-black text-pure-white hover:bg-neon-accent hover:text-ink-black'
                  }`}
                >
                  {addedSuccess ? (
                    <>
                      <Check className="w-4 h-4" /> Added to Bag
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" /> Add To Bag • ${(product.price * quantity).toFixed(2)}
                    </>
                  )}
                </button>

                <button
                  id="btn-modal-toggle-wishlist"
                  onClick={() => onToggleWishlist(product)}
                  className={`p-4 border-2 border-ink-black transition-colors cursor-pointer ${
                    isWishlisted
                      ? 'bg-ink-black text-neon-accent'
                      : 'bg-pure-white text-ink-black hover:bg-concrete-gray'
                  }`}
                  title={isWishlisted ? 'Saved in wishlist' : 'Save to wishlist'}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-neon-accent' : ''}`} />
                </button>
              </div>

              {/* Service Badges */}
              <div className="grid grid-cols-3 gap-2 pt-2 text-center text-[10px] uppercase font-bold text-gray-600">
                <div className="flex flex-col items-center gap-1 p-2 bg-concrete-gray">
                  <Truck className="w-4 h-4 text-ink-black" />
                  <span>Free SG Delivery &gt; $120</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2 bg-concrete-gray">
                  <RotateCcw className="w-4 h-4 text-ink-black" />
                  <span>30-Day Returns</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2 bg-concrete-gray">
                  <ShieldCheck className="w-4 h-4 text-ink-black" />
                  <span>100% Authentic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
