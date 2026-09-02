import React, { useState } from 'react';
import { X, User, ShieldCheck, Gift, Award } from 'lucide-react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [isLoginView, setIsLoginView] = useState(true);
  const [email, setEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-ink-black/85 backdrop-blur-xs overflow-y-auto">
      <div
        className="relative bg-pure-white w-full max-w-md border-2 border-ink-black shadow-2xl my-auto animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between p-5 border-b-2 border-ink-black bg-concrete-gray">
          <div>
            <h3 className="text-xl font-black uppercase text-ink-black tracking-tight">
              {isLoggedIn ? 'JDX Member Dashboard' : isLoginView ? 'Sign In to JD' : 'Join JDX Rewards'}
            </h3>
            <p className="text-xs uppercase text-gray-500 font-bold">
              King of Trainers • Singapore
            </p>
          </div>
          <button
            id="btn-close-account"
            onClick={onClose}
            className="p-1.5 border border-ink-black bg-pure-white hover:bg-neon-accent transition-colors cursor-pointer"
            aria-label="Close account modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {isLoggedIn ? (
            <div className="space-y-6">
              <div className="p-4 bg-ink-black text-pure-white border border-black flex items-center gap-4">
                <div className="p-3 bg-neon-accent text-ink-black font-black text-xl">JD</div>
                <div>
                  <div className="text-xs font-bold text-neon-accent uppercase">
                    Tier: Platinum Baller
                  </div>
                  <div className="text-sm font-black uppercase">{email || 'Member #SG-8829'}</div>
                  <div className="text-xs text-gray-400">1,450 JDX Points Available</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-bold uppercase">
                <div className="p-3 bg-concrete-gray border border-gray-300 flex flex-col gap-1">
                  <Gift className="w-4 h-4 text-ink-black" />
                  <span>$20 Birthday Voucher</span>
                </div>
                <div className="p-3 bg-concrete-gray border border-gray-300 flex flex-col gap-1">
                  <Award className="w-4 h-4 text-ink-black" />
                  <span>Early Raffle Access</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  setEmail('');
                }}
                className="w-full py-3 border border-ink-black text-ink-black text-xs font-bold uppercase hover:bg-concrete-gray transition-colors"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-ink-black mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full text-sm p-3 border border-ink-black focus:ring-2 focus:ring-neon-accent outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-ink-black mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full text-sm p-3 border border-ink-black focus:ring-2 focus:ring-neon-accent outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-ink-black text-pure-white py-3.5 font-black uppercase text-xs tracking-wider hover:bg-neon-accent hover:text-ink-black border-2 border-ink-black transition-colors"
              >
                {isLoginView ? 'Sign In' : 'Create Account'}
              </button>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setIsLoginView(!isLoginView)}
                  className="text-xs font-bold text-ink-black hover:underline uppercase tracking-wider"
                >
                  {isLoginView
                    ? "Don't have an account? Join JDX"
                    : 'Already have an account? Sign In'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
