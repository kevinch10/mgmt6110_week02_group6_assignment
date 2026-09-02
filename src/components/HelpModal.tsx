import React from 'react';
import { X, Info } from 'lucide-react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-ink-black/85 backdrop-blur-xs overflow-y-auto">
      <div
        className="relative bg-pure-white w-full max-w-lg border-2 border-ink-black shadow-2xl my-auto animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between p-5 border-b-2 border-ink-black bg-concrete-gray">
          <div className="flex items-center gap-2">
            <Info className="w-5 h-5 text-ink-black" />
            <h3 className="text-lg font-black uppercase text-ink-black tracking-tight">{title}</h3>
          </div>
          <button
            id="btn-close-help"
            onClick={onClose}
            className="p-1.5 border border-ink-black bg-pure-white hover:bg-neon-accent transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>{content}</p>
          <div className="p-4 bg-concrete-gray border border-gray-200 text-xs font-bold text-ink-black">
            For further assistance, chat with our team in-store or reach our Customer Care helpline
            at +65 6509 0920.
          </div>
        </div>

        <div className="p-4 bg-pure-white border-t border-gray-200 text-right">
          <button
            onClick={onClose}
            className="bg-ink-black text-pure-white px-6 py-2.5 text-xs font-black uppercase tracking-wider hover:bg-neon-accent hover:text-ink-black transition-colors"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
