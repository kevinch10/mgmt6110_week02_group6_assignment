import React from 'react';
import { HERO_IMAGE } from '../data/mockData';

interface HeroSectionProps {
  onShopAdidas: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onShopAdidas }) => {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-black">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-102"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        role="img"
        aria-label="Dynamic shot of athlete performing dance routine, multiplied in stroboscopic effect across high contrast black background."
      />

      {/* Subtle bottom gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

      {/* Bottom Right CTA */}
      <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 z-10 flex flex-col items-end">
        <button
          id="btn-hero-shop-adidas"
          onClick={onShopAdidas}
          className="bg-pure-white text-ink-black px-8 py-4 font-bold text-sm md:text-base uppercase tracking-wider hover:bg-neon-accent hover:border-ink-black transition-colors cursor-pointer border border-transparent shadow-lg"
        >
          Shop adidas
        </button>
      </div>
    </section>
  );
};
