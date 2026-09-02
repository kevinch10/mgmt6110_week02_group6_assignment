import React from 'react';
import { SECONDARY_BANNER_IMAGE } from '../data/mockData';

interface SecondaryBannerProps {
  onShopNewBalance: () => void;
}

export const SecondaryBanner: React.FC<SecondaryBannerProps> = ({ onShopNewBalance }) => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-12 py-4 md:py-8">
      <div
        className="relative w-full h-[32vh] md:h-[44vh] bg-cover bg-center overflow-hidden border border-gray-200"
        style={{ backgroundImage: `url('${SECONDARY_BANNER_IMAGE}')` }}
        role="img"
        aria-label="A promotional banner showcasing a new release of a chunky white New Balance 530 sneaker against a light gray grid background."
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/10 pointer-events-none" />
        <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8">
          <button
            id="btn-shop-new-balance"
            onClick={onShopNewBalance}
            className="bg-pure-white text-ink-black px-6 py-3 font-bold text-xs md:text-sm uppercase tracking-wider hover:bg-neon-accent transition-colors border-2 border-ink-black cursor-pointer shadow-md"
          >
            Shop New Balance
          </button>
        </div>
      </div>
    </section>
  );
};
