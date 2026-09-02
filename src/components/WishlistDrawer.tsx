import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onMoveToBag: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveFromWishlist,
  onMoveToBag,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-ink-black/80 backdrop-blur-xs">
      <div
        className="relative bg-pure-white w-full max-w-md h-full flex flex-col border-l-2 border-ink-black shadow-2xl animate-in slide-in-from-right duration-300"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between p-5 border-b-2 border-ink-black bg-concrete-gray">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-ink-black fill-neon-accent" />
            <h3 className="text-lg font-black uppercase text-ink-black tracking-tight">
              Saved Items ({wishlistProducts.length})
            </h3>
          </div>
          <button
            id="btn-close-wishlist-drawer"
            onClick={onClose}
            className="p-1.5 border border-ink-black bg-pure-white hover:bg-neon-accent transition-colors cursor-pointer"
            aria-label="Close wishlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 divide-y divide-gray-200">
          {wishlistProducts.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="p-4 bg-concrete-gray border border-gray-300">
                <Heart className="w-10 h-10 text-gray-400" />
              </div>
              <p className="font-black text-lg uppercase text-ink-black">Your wishlist is empty</p>
              <p className="text-xs text-gray-500 max-w-xs">
                Save your favorite sneakers, track tops, and limited drops to view them anytime.
              </p>
              <button
                id="btn-empty-wishlist-explore"
                onClick={onClose}
                className="bg-ink-black text-pure-white px-6 py-3 font-bold text-xs uppercase tracking-wider hover:bg-neon-accent hover:text-ink-black transition-colors"
              >
                Explore Most Wanted
              </button>
            </div>
          ) : (
            wishlistProducts.map((product) => (
              <div key={product.id} className="py-4 flex gap-3.5 first:pt-0">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-20 h-20 object-contain bg-concrete-gray p-2 border border-gray-200 flex-shrink-0"
                />
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <p className="text-[10px] font-bold uppercase text-gray-500">
                        {product.brand}
                      </p>
                      <button
                        onClick={() => onRemoveFromWishlist(product.id)}
                        className="text-gray-400 hover:text-red-600 transition-colors p-1"
                        title="Remove from wishlist"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-ink-black truncate">
                      {product.name}
                    </h4>
                    <p className="text-sm font-black text-ink-black mt-1">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>

                  <button
                    onClick={() => onMoveToBag(product)}
                    className="mt-2 w-full bg-ink-black text-pure-white py-2 text-xs font-bold uppercase tracking-wider hover:bg-neon-accent hover:text-ink-black border border-ink-black transition-colors flex items-center justify-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Move to Bag
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
