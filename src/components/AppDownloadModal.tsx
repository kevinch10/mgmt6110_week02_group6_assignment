import React from 'react';
import { X, Smartphone, Download, Check, QrCode } from 'lucide-react';

interface AppDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppDownloadModal: React.FC<AppDownloadModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-ink-black/85 backdrop-blur-xs overflow-y-auto">
      <div
        className="relative bg-pure-white w-full max-w-lg border-2 border-ink-black shadow-2xl my-auto animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <button
          id="btn-close-app-download"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-pure-white border border-ink-black hover:bg-neon-accent transition-colors cursor-pointer"
          aria-label="Close download modal"
        >
          <X className="w-5 h-5 text-ink-black" />
        </button>

        <div className="p-6 sm:p-8 text-center">
          <div className="inline-flex p-3 bg-neon-accent border-2 border-ink-black mb-4">
            <Smartphone className="w-8 h-8 text-ink-black" />
          </div>

          <h3 className="text-2xl font-black uppercase text-ink-black tracking-tight">
            Download The JD App
          </h3>
          <p className="text-xs uppercase text-gray-500 font-bold mt-1 tracking-wider">
            First access to raffles, instant drop notifications & JDX rewards
          </p>

          {/* QR Box */}
          <div className="my-6 p-6 bg-concrete-gray border-2 border-ink-black inline-block">
            <div className="w-36 h-36 bg-pure-white p-2 mx-auto border border-gray-300 flex flex-col items-center justify-center">
              <QrCode className="w-28 h-28 text-ink-black" />
            </div>
            <p className="text-[10px] uppercase font-bold text-gray-600 mt-2">
              Scan with your phone camera
            </p>
          </div>

          <div className="space-y-2 text-left bg-concrete-gray p-4 border border-gray-200 mb-6 text-xs font-bold text-ink-black">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-700" />
              <span>Instant Drop Alerts & Sneaker Raffles</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-700" />
              <span>1-Hour Click & Collect Store Reservation</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-700" />
              <span>Exclusive 10% Welcome Discount Voucher</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => alert('Redirecting to Apple App Store...')}
              className="bg-ink-black text-pure-white py-3 px-4 font-black uppercase text-xs tracking-wider hover:bg-neon-accent hover:text-ink-black border border-ink-black transition-colors"
            >
              App Store (iOS)
            </button>
            <button
              onClick={() => alert('Redirecting to Google Play Store...')}
              className="bg-ink-black text-pure-white py-3 px-4 font-black uppercase text-xs tracking-wider hover:bg-neon-accent hover:text-ink-black border border-ink-black transition-colors"
            >
              Google Play (Android)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
