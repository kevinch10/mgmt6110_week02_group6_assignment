import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'footwear' | 'apparel'>('footwear');

  const footwearSizes = [
    { uk: 'UK 6', us: 'US 6.5', eu: 'EU 39.5', cm: '24.5 cm' },
    { uk: 'UK 6.5', us: 'US 7', eu: 'EU 40', cm: '25.0 cm' },
    { uk: 'UK 7', us: 'US 7.5', eu: 'EU 40.5', cm: '25.5 cm' },
    { uk: 'UK 7.5', us: 'US 8', eu: 'EU 41', cm: '26.0 cm' },
    { uk: 'UK 8', us: 'US 8.5', eu: 'EU 42', cm: '26.5 cm' },
    { uk: 'UK 8.5', us: 'US 9', eu: 'EU 42.5', cm: '27.0 cm' },
    { uk: 'UK 9', us: 'US 9.5', eu: 'EU 43', cm: '27.5 cm' },
    { uk: 'UK 9.5', us: 'US 10', eu: 'EU 44', cm: '28.0 cm' },
    { uk: 'UK 10', us: 'US 10.5', eu: 'EU 44.5', cm: '28.5 cm' },
    { uk: 'UK 10.5', us: 'US 11', eu: 'EU 45', cm: '29.0 cm' },
    { uk: 'UK 11', us: 'US 11.5', eu: 'EU 46', cm: '29.5 cm' },
  ];

  const apparelSizes = [
    { size: 'XS', chest: '34 - 36 in', waist: '28 - 30 in', hips: '34 - 36 in' },
    { size: 'S', chest: '36 - 38 in', waist: '30 - 32 in', hips: '36 - 38 in' },
    { size: 'M', chest: '38 - 40 in', waist: '32 - 34 in', hips: '38 - 40 in' },
    { size: 'L', chest: '40 - 42 in', waist: '34 - 36 in', hips: '40 - 42 in' },
    { size: 'XL', chest: '42 - 44 in', waist: '36 - 38 in', hips: '42 - 44 in' },
    { size: 'XXL', chest: '44 - 46 in', waist: '38 - 40 in', hips: '44 - 46 in' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-ink-black/85 backdrop-blur-xs overflow-y-auto">
      <div
        className="relative bg-pure-white w-full max-w-2xl border-2 border-ink-black shadow-2xl my-auto animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between p-5 border-b-2 border-ink-black bg-concrete-gray">
          <div>
            <h3 className="text-xl font-black uppercase text-ink-black tracking-tight">
              Official Size Guide
            </h3>
            <p className="text-xs uppercase text-gray-500 font-bold">
              UK / US / EU / CM Conversion Matrix
            </p>
          </div>
          <button
            id="btn-close-size-guide"
            onClick={onClose}
            className="p-1.5 border border-ink-black bg-pure-white hover:bg-neon-accent transition-colors cursor-pointer"
            aria-label="Close size guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex gap-2 mb-6 border-b border-gray-200 pb-2">
            <button
              onClick={() => setActiveTab('footwear')}
              className={`px-4 py-2 font-black text-xs uppercase tracking-wider transition-colors ${
                activeTab === 'footwear'
                  ? 'bg-ink-black text-pure-white'
                  : 'bg-concrete-gray text-ink-black hover:bg-neon-accent'
              }`}
            >
              Footwear Sizing
            </button>
            <button
              onClick={() => setActiveTab('apparel')}
              className={`px-4 py-2 font-black text-xs uppercase tracking-wider transition-colors ${
                activeTab === 'apparel'
                  ? 'bg-ink-black text-pure-white'
                  : 'bg-concrete-gray text-ink-black hover:bg-neon-accent'
              }`}
            >
              Apparel Sizing
            </button>
          </div>

          <div className="overflow-x-auto">
            {activeTab === 'footwear' ? (
              <table className="w-full text-left border-collapse border border-gray-300 text-xs sm:text-sm">
                <thead>
                  <tr className="bg-ink-black text-pure-white uppercase font-black">
                    <th className="p-2.5 border border-gray-400">UK (JD Standard)</th>
                    <th className="p-2.5 border border-gray-400">US Men's</th>
                    <th className="p-2.5 border border-gray-400">EU</th>
                    <th className="p-2.5 border border-gray-400">Foot Length (CM)</th>
                  </tr>
                </thead>
                <tbody>
                  {footwearSizes.map((row, idx) => (
                    <tr
                      key={idx}
                      className={`font-semibold ${
                        idx % 2 === 0 ? 'bg-pure-white' : 'bg-concrete-gray'
                      } hover:bg-neon-accent/30`}
                    >
                      <td className="p-2.5 border border-gray-300 font-bold">{row.uk}</td>
                      <td className="p-2.5 border border-gray-300">{row.us}</td>
                      <td className="p-2.5 border border-gray-300">{row.eu}</td>
                      <td className="p-2.5 border border-gray-300 font-mono">{row.cm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <table className="w-full text-left border-collapse border border-gray-300 text-xs sm:text-sm">
                <thead>
                  <tr className="bg-ink-black text-pure-white uppercase font-black">
                    <th className="p-2.5 border border-gray-400">Size</th>
                    <th className="p-2.5 border border-gray-400">Chest</th>
                    <th className="p-2.5 border border-gray-400">Waist</th>
                    <th className="p-2.5 border border-gray-400">Hips</th>
                  </tr>
                </thead>
                <tbody>
                  {apparelSizes.map((row, idx) => (
                    <tr
                      key={idx}
                      className={`font-semibold ${
                        idx % 2 === 0 ? 'bg-pure-white' : 'bg-concrete-gray'
                      } hover:bg-neon-accent/30`}
                    >
                      <td className="p-2.5 border border-gray-300 font-bold">{row.size}</td>
                      <td className="p-2.5 border border-gray-300">{row.chest}</td>
                      <td className="p-2.5 border border-gray-300">{row.waist}</td>
                      <td className="p-2.5 border border-gray-300">{row.hips}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <div className="mt-6 p-4 bg-concrete-gray border border-gray-200 text-xs text-gray-700">
            <p className="font-bold uppercase text-ink-black mb-1">Fitting Tip:</p>
            <p>
              For On Running & Asics models, consider ordering half a size up for a roomier fit. For
              classic adidas Sambas and Nike Air Force 1s, we recommend true to size (TTS).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
