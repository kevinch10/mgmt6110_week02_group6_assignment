import React from 'react';
import { Download, Smartphone, Globe, Instagram, Facebook, Youtube } from 'lucide-react';

interface FooterProps {
  onOpenSizeGuide: () => void;
  onOpenStoreFinder: () => void;
  onOpenAppDownload: () => void;
  onOpenHelpModal: (title: string, content: string) => void;
  onScrollToBlog: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenSizeGuide,
  onOpenStoreFinder,
  onOpenAppDownload,
  onOpenHelpModal,
  onScrollToBlog,
}) => {
  return (
    <footer className="bg-ink-black text-pure-white w-full border-t-2 border-neon-accent mt-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full max-w-[1440px] mx-auto py-12 px-4 md:px-12">
        {/* Column 1 */}
        <div className="flex flex-col gap-3 md:gap-4">
          <h4 className="text-base md:text-lg font-black uppercase mb-1 md:mb-2 text-pure-white tracking-wider">
            Shopping with JD
          </h4>
          <button
            id="footer-link-size-guides"
            onClick={onOpenSizeGuide}
            className="text-gray-300 text-xs md:text-sm font-medium hover:text-neon-accent transition-colors text-left cursor-pointer"
          >
            Size Guides
          </button>
          <button
            id="footer-link-store-finder"
            onClick={onOpenStoreFinder}
            className="text-gray-300 text-xs md:text-sm font-medium hover:text-neon-accent transition-colors text-left cursor-pointer"
          >
            Store Finder
          </button>
          <button
            id="footer-link-jd-blog"
            onClick={onScrollToBlog}
            className="text-gray-300 text-xs md:text-sm font-medium hover:text-neon-accent transition-colors text-left cursor-pointer"
          >
            JD Blog
          </button>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-3 md:gap-4">
          <h4 className="text-base md:text-lg font-black uppercase mb-1 md:mb-2 text-pure-white tracking-wider">
            Help & Customer Care
          </h4>
          <button
            id="footer-link-faqs"
            onClick={() =>
              onOpenHelpModal(
                'Frequently Asked Questions',
                'Orders placed before 2:00 PM are dispatched on the same business day. Delivery across Singapore takes 1-3 working days. In-store Click & Collect is ready within 1 hour at selected locations.'
              )
            }
            className="text-gray-300 text-xs md:text-sm font-medium hover:text-neon-accent transition-colors text-left cursor-pointer"
          >
            FAQs
          </button>
          <button
            id="footer-link-returns"
            onClick={() =>
              onOpenHelpModal(
                'Returns & Refunds',
                'Enjoy hassle-free 30-day returns for all unworn footwear and apparel with original tags and packaging. Return via mail or drop off at any JD Sports Singapore retail store.'
              )
            }
            className="text-gray-300 text-xs md:text-sm font-medium hover:text-neon-accent transition-colors text-left cursor-pointer"
          >
            Returns & Refunds
          </button>
          <button
            id="footer-link-contact"
            onClick={() =>
              onOpenHelpModal(
                'Help & Contact Us',
                'Reach our Singapore support concierge at +65 6509 0920 or email support@jdsports.com.sg. Available Monday to Sunday from 9:00 AM to 9:00 PM SGT.'
              )
            }
            className="text-gray-300 text-xs md:text-sm font-medium hover:text-neon-accent transition-colors text-left cursor-pointer"
          >
            Help & Contact Us
          </button>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-3 md:gap-4">
          <h4 className="text-base md:text-lg font-black uppercase mb-1 md:mb-2 text-pure-white tracking-wider">
            About Us
          </h4>
          <button
            id="footer-link-terms"
            onClick={() =>
              onOpenHelpModal(
                'Terms & Conditions',
                'JD Sports Singapore Pte Ltd. All prices are in SGD and inclusive of 9% GST. Limited edition sneaker releases are limited to one pair per customer.'
              )
            }
            className="text-gray-300 text-xs md:text-sm font-medium hover:text-neon-accent transition-colors text-left cursor-pointer"
          >
            Terms & Conditions
          </button>
          <button
            id="footer-link-privacy"
            onClick={() =>
              onOpenHelpModal(
                'Privacy Policy',
                'We respect your privacy. We process personal data strictly in compliance with Singapore Personal Data Protection Act (PDPA) standards.'
              )
            }
            className="text-gray-300 text-xs md:text-sm font-medium hover:text-neon-accent transition-colors text-left cursor-pointer"
          >
            Privacy Policy
          </button>
          <button
            id="footer-link-careers"
            onClick={() =>
              onOpenHelpModal(
                'Careers at JD Sports',
                'Join the undisputed King of Trainers. We are expanding across Southeast Asia and hiring passionate retail specialists, store managers, and digital marketers.'
              )
            }
            className="text-gray-300 text-xs md:text-sm font-medium hover:text-neon-accent transition-colors text-left cursor-pointer"
          >
            Careers
          </button>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="text-base md:text-lg font-black uppercase mb-3 text-pure-white tracking-wider">
              Download our app
            </h4>
            <div className="flex gap-3">
              <button
                id="footer-btn-download-ios"
                onClick={onOpenAppDownload}
                className="bg-pure-white/10 p-2.5 border border-pure-white/20 hover:bg-neon-accent hover:text-ink-black hover:border-ink-black transition-colors cursor-pointer"
                title="Apple App Store"
                aria-label="Download on App Store"
              >
                <Download className="w-5 h-5" />
              </button>
              <button
                id="footer-btn-download-android"
                onClick={onOpenAppDownload}
                className="bg-pure-white/10 p-2.5 border border-pure-white/20 hover:bg-neon-accent hover:text-ink-black hover:border-ink-black transition-colors cursor-pointer"
                title="Google Play Store"
                aria-label="Download on Google Play"
              >
                <Smartphone className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase mb-2 text-gray-400 tracking-wider">
              Follow Us
            </h4>
            <div className="flex gap-3">
              <a
                id="footer-social-web"
                href="#global"
                onClick={(e) => {
                  e.preventDefault();
                  alert('JD Sports Singapore Official Portal');
                }}
                className="p-2 bg-pure-white/10 border border-pure-white/20 hover:bg-neon-accent hover:text-ink-black transition-colors"
                aria-label="Global Site"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                id="footer-social-instagram"
                href="#instagram"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Follow @jdsportssg on Instagram for drop announcements!');
                }}
                className="p-2 bg-pure-white/10 border border-pure-white/20 hover:bg-neon-accent hover:text-ink-black transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                id="footer-social-facebook"
                href="#facebook"
                onClick={(e) => {
                  e.preventDefault();
                  alert('JD Sports Singapore Official Facebook Page');
                }}
                className="p-2 bg-pure-white/10 border border-pure-white/20 hover:bg-neon-accent hover:text-ink-black transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                id="footer-social-youtube"
                href="#youtube"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Watch exclusive sneaker review videos on JD Sports YouTube');
                }}
                className="p-2 bg-pure-white/10 border border-pure-white/20 hover:bg-neon-accent hover:text-ink-black transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-pure-white/20 py-6 text-center px-4">
        <p className="text-xs font-medium text-gray-400 tracking-wider">
          Copyright © 2026 JD Sports Singapore Pte Ltd. All rights reserved. King of Trainers.
        </p>
      </div>
    </footer>
  );
};
