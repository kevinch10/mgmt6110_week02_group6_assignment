import React, { useState } from 'react';
import { X, MapPin, Clock, Phone, Navigation, Check } from 'lucide-react';
import { SINGAPORE_STORES } from '../data/mockData';

interface StoreFinderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoreFinderModal: React.FC<StoreFinderModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [selectedStoreId, setSelectedStoreId] = useState(SINGAPORE_STORES[0].id);
  const selectedStore = SINGAPORE_STORES.find((s) => s.id === selectedStoreId) || SINGAPORE_STORES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-ink-black/85 backdrop-blur-xs overflow-y-auto">
      <div
        className="relative bg-pure-white w-full max-w-4xl border-2 border-ink-black shadow-2xl my-auto animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between p-5 border-b-2 border-ink-black bg-concrete-gray">
          <div>
            <h3 className="text-xl font-black uppercase text-ink-black tracking-tight">
              JD Sports Singapore Store Finder
            </h3>
            <p className="text-xs uppercase text-gray-500 font-bold">
              Find your nearest King of Trainers flagship & collection points
            </p>
          </div>
          <button
            id="btn-close-store-finder"
            onClick={onClose}
            className="p-1.5 border border-ink-black bg-pure-white hover:bg-neon-accent transition-colors cursor-pointer"
            aria-label="Close store finder"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[75vh]">
          {/* Store List */}
          <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-gray-200 overflow-y-auto p-4 space-y-3">
            {SINGAPORE_STORES.map((store) => {
              const isSelected = store.id === selectedStoreId;
              return (
                <button
                  key={store.id}
                  id={`store-item-${store.id}`}
                  onClick={() => setSelectedStoreId(store.id)}
                  className={`w-full text-left p-4 border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-ink-black text-pure-white border-ink-black'
                      : 'bg-concrete-gray text-ink-black border-transparent hover:border-gray-400'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <h4 className="font-black text-sm uppercase leading-tight">{store.name}</h4>
                    {isSelected && (
                      <span className="bg-neon-accent text-ink-black text-[9px] font-black px-1.5 py-0.5 uppercase">
                        Selected
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-xs mt-1.5 ${
                      isSelected ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {store.address}
                  </p>
                  <div
                    className={`mt-2 text-[11px] font-bold ${
                      isSelected ? 'text-neon-accent' : 'text-[#5d6300]'
                    }`}
                  >
                    MRT: {store.mrt}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Store Details View */}
          <div className="md:col-span-7 p-6 flex flex-col justify-between overflow-y-auto bg-pure-white">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase bg-neon-accent text-ink-black px-2 py-0.5 border border-ink-black">
                  Official Retail Store
                </span>
                <h2 className="text-2xl font-black uppercase text-ink-black mt-2">
                  {selectedStore.name}
                </h2>
                <p className="text-sm font-bold text-gray-600 mt-1">{selectedStore.address}</p>
                <p className="text-xs text-gray-500 font-mono">{selectedStore.postalCode}</p>
              </div>

              <div className="space-y-3 bg-concrete-gray p-4 border border-gray-200">
                <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-ink-black">
                  <Clock className="w-4 h-4 text-gray-700 flex-shrink-0" />
                  <span>{selectedStore.hours}</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-ink-black">
                  <Phone className="w-4 h-4 text-gray-700 flex-shrink-0" />
                  <span>{selectedStore.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-ink-black">
                  <Navigation className="w-4 h-4 text-gray-700 flex-shrink-0" />
                  <span>Nearest Station: {selectedStore.mrt}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-black uppercase text-ink-black mb-2 tracking-wider">
                  Store Services & Amenities
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedStore.features.map((feature, i) => (
                    <span
                      key={i}
                      className="bg-pure-white border border-ink-black px-3 py-1.5 text-xs font-bold text-ink-black flex items-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5 text-green-700" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200 flex gap-3">
              <button
                onClick={() =>
                  alert(`Directions to ${selectedStore.name} opened in your maps application.`)
                }
                className="flex-1 bg-ink-black text-pure-white py-3 text-xs font-black uppercase tracking-wider hover:bg-neon-accent hover:text-ink-black border-2 border-ink-black transition-colors"
              >
                Get Directions
              </button>
              <button
                onClick={onClose}
                className="px-6 py-3 border-2 border-ink-black text-ink-black text-xs font-bold uppercase tracking-wider hover:bg-concrete-gray transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
