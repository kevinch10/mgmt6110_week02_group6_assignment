import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Check, Tag } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, size: string, newQty: number) => void;
  onRemoveItem: (productId: string, size: string) => void;
  onCheckoutSuccess: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckoutSuccess,
}) => {
  if (!isOpen) return null;

  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [promoError, setPromoError] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [deliveryType, setDeliveryType] = useState<'standard' | 'collect'>('standard');

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const freeDeliveryThreshold = 120;
  const isFreeDelivery = subtotal >= freeDeliveryThreshold || deliveryType === 'collect';
  const deliveryFee = subtotal === 0 || isFreeDelivery ? 0 : 5.0;

  const discountAmount = subtotal * appliedDiscount;
  const total = Math.max(0, subtotal - discountAmount + deliveryFee);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'JD10') {
      setAppliedDiscount(0.1);
      setPromoError('');
    } else if (promoCode.trim().toUpperCase() === 'NEON20') {
      setAppliedDiscount(0.2);
      setPromoError('');
    } else {
      setPromoError('Invalid promo code. Try "JD10" or "NEON20"');
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      onCheckoutSuccess();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-ink-black/80 backdrop-blur-xs">
      <div
        className="relative bg-pure-white w-full max-w-md h-full flex flex-col border-l-2 border-ink-black shadow-2xl animate-in slide-in-from-right duration-300"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between p-5 border-b-2 border-ink-black bg-concrete-gray">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-ink-black" />
            <h3 className="text-lg font-black uppercase text-ink-black tracking-tight">
              Your Bag ({cartItems.reduce((acc, it) => acc + it.quantity, 0)})
            </h3>
          </div>
          <button
            id="btn-close-cart-drawer"
            onClick={onClose}
            className="p-1.5 border border-ink-black bg-pure-white hover:bg-neon-accent transition-colors cursor-pointer"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Meter */}
        <div className="bg-ink-black text-pure-white p-3 text-xs">
          {subtotal >= freeDeliveryThreshold ? (
            <div className="flex items-center gap-1.5 text-neon-accent font-bold uppercase">
              <Check className="w-4 h-4" /> You've unlocked FREE Standard Delivery!
            </div>
          ) : (
            <div>
              <span className="font-bold text-gray-300">
                Add{' '}
                <span className="text-neon-accent font-extrabold">
                  ${(freeDeliveryThreshold - subtotal).toFixed(2)}
                </span>{' '}
                more for FREE Singapore Delivery
              </span>
              <div className="w-full bg-gray-800 h-1.5 mt-2 overflow-hidden">
                <div
                  className="bg-neon-accent h-full transition-all duration-300"
                  style={{ width: `${Math.min(100, (subtotal / freeDeliveryThreshold) * 100)}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-4 divide-y divide-gray-200">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="p-4 bg-concrete-gray border border-gray-300 rounded-none">
                <ShoppingBag className="w-10 h-10 text-gray-400" />
              </div>
              <p className="font-black text-lg uppercase text-ink-black">Your bag is empty</p>
              <p className="text-xs text-gray-500 max-w-xs">
                Explore the latest footwear releases, apparel, and accessories from JD Sports.
              </p>
              <button
                id="btn-empty-cart-shop"
                onClick={onClose}
                className="bg-ink-black text-pure-white px-6 py-3 font-bold text-xs uppercase tracking-wider hover:bg-neon-accent hover:text-ink-black transition-colors"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={`${item.product.id}-${item.selectedSize}-${index}`}
                className="py-4 flex gap-3.5 first:pt-0"
              >
                <img
                  src={item.product.imageUrl}
                  alt={item.product.name}
                  className="w-20 h-20 object-contain bg-concrete-gray p-2 border border-gray-200 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] font-bold uppercase text-gray-500">
                        {item.product.brand}
                      </p>
                      <h4 className="text-xs sm:text-sm font-bold text-ink-black truncate">
                        {item.product.name}
                      </h4>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.product.id, item.selectedSize)}
                      className="text-gray-400 hover:text-red-600 transition-colors p-1"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-xs text-gray-600 mt-0.5">
                    Size: <span className="font-bold text-ink-black">{item.selectedSize}</span>
                  </p>

                  <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center border border-ink-black bg-pure-white">
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.product.id, item.selectedSize, item.quantity - 1)
                        }
                        className="px-2 py-0.5 text-xs font-bold hover:bg-concrete-gray"
                      >
                        -
                      </button>
                      <span className="px-2 py-0.5 text-xs font-bold min-w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.product.id, item.selectedSize, item.quantity + 1)
                        }
                        className="px-2 py-0.5 text-xs font-bold hover:bg-concrete-gray"
                      >
                        +
                      </button>
                    </div>

                    <p className="text-sm font-black text-ink-black">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Summary */}
        {cartItems.length > 0 && (
          <div className="p-4 border-t-2 border-ink-black bg-pure-white space-y-3">
            {/* Delivery Method Selector */}
            <div className="grid grid-cols-2 gap-2 text-xs font-bold uppercase">
              <button
                type="button"
                onClick={() => setDeliveryType('standard')}
                className={`py-2 border text-center transition-colors ${
                  deliveryType === 'standard'
                    ? 'bg-ink-black text-pure-white border-ink-black'
                    : 'bg-concrete-gray text-ink-black border-transparent'
                }`}
              >
                Delivery ({isFreeDelivery ? 'FREE' : '$5.00'})
              </button>
              <button
                type="button"
                onClick={() => setDeliveryType('collect')}
                className={`py-2 border text-center transition-colors ${
                  deliveryType === 'collect'
                    ? 'bg-ink-black text-pure-white border-ink-black'
                    : 'bg-concrete-gray text-ink-black border-transparent'
                }`}
              >
                Click & Collect (FREE)
              </button>
            </div>

            {/* Promo Code Box */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Promo Code (e.g. JD10)"
                  className="w-full text-xs uppercase font-bold p-2 border border-gray-300 focus:border-ink-black outline-none"
                />
                <Tag className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-2.5" />
              </div>
              <button
                type="submit"
                className="bg-concrete-gray text-ink-black text-xs font-bold px-4 border border-ink-black hover:bg-neon-accent transition-colors uppercase"
              >
                Apply
              </button>
            </form>
            {promoError && <p className="text-[10px] text-red-600 font-bold">{promoError}</p>}
            {appliedDiscount > 0 && (
              <p className="text-[10px] text-green-700 font-bold">
                ✓ Promo applied: {appliedDiscount * 100}% off subtotal!
              </p>
            )}

            {/* Calculations */}
            <div className="space-y-1.5 text-xs pt-1 border-t border-gray-200">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-bold text-ink-black">${subtotal.toFixed(2)}</span>
              </div>
              {appliedDiscount > 0 && (
                <div className="flex justify-between text-green-700">
                  <span>Discount ({appliedDiscount * 100}%)</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="font-bold text-ink-black">
                  {deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-base font-black text-ink-black pt-1 border-t border-gray-200">
                <span>TOTAL (SGD)</span>
                <span className="text-lg">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              id="btn-checkout"
              disabled={isCheckingOut}
              onClick={handleCheckout}
              className="w-full bg-ink-black text-pure-white py-4 font-black uppercase text-sm tracking-wider hover:bg-neon-accent hover:text-ink-black border-2 border-ink-black transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isCheckingOut ? (
                <span>Processing Order...</span>
              ) : (
                <>
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
