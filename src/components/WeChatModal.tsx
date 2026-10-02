import React, { useState } from 'react';
import { X, Copy, Check, QrCode, MessageSquare, ExternalLink } from 'lucide-react';

interface WeChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WeChatModal: React.FC<WeChatModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const wechatId = 'naijadogeagency';

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(wechatId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-sm bg-[#0B1728] border border-[#D4AF37]/30 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(212,175,55,0.15)] text-center text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-1.5 text-[#B8C4D3] hover:text-white bg-[#11253E] rounded-full border border-white/10 cursor-pointer transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* WeChat Icon Header */}
        <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M8.5 2C4.36 2 1 4.91 1 8.5c0 1.99 1.04 3.77 2.68 4.96L3 17l4.13-1.65c.44.1.9.15 1.37.15.22 0 .43-.02.64-.04C8.75 14.88 8.5 14.22 8.5 13.5c0-3.31 3.13-6 7-6 .17 0 .34 0 .5.02C15.17 4.39 12.13 2 8.5 2zm-2 4.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5 4.5c-3.31 0-6 2.24-6 5s2.69 5 6 5c.38 0 .75-.04 1.1-.12L20 22l-.77-2.69c1.65-1.07 2.77-2.58 2.77-4.31 0-2.76-2.69-5-6-5zm-2 3.5c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zm4 0c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75z" />
          </svg>
        </div>

        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] block mb-1">
          Official WeChat Channel
        </span>
        <h3 className="text-xl font-bold font-display text-white mb-2">Connect on WeChat</h3>
        <p className="text-xs text-[#B8C4D3] leading-relaxed mb-5">
          Scan the WeChat ID or copy the handle below to chat directly with our Asian desk & token settlement representatives.
        </p>

        {/* Copyable WeChat ID Card */}
        <div className="bg-[#11253E] border border-white/10 rounded-xl p-3 flex items-center justify-between gap-3 mb-4">
          <div className="text-left">
            <span className="text-[9px] uppercase tracking-wider text-[#B8C4D3] block">WeChat ID</span>
            <span className="text-sm font-mono font-bold text-white selection:bg-[#D4AF37]/30">
              @{wechatId}
            </span>
          </div>
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 bg-[#D4AF37] hover:bg-[#E8D38A] text-[#07111F] text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy ID</span>
              </>
            )}
          </button>
        </div>

        {/* Direct Action Link */}
        <a
          href="https://wa.me/22897317115?text=Hello%20Naijadoge%2C%20I%20am%20reaching%20out%20via%20WeChat%20%40naijadogeagency"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 px-4 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold rounded-xl border border-white/15 flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
          <span>Alternate VIP WhatsApp Contact</span>
        </a>
      </div>
    </div>
  );
};
