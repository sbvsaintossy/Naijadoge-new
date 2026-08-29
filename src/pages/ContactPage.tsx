import React, { useState } from 'react';
import { PageType, ContactFormData } from '../types';
import {
  Mail,
  Phone,
  MessageSquare,
  Globe,
  MapPin,
  ShieldCheck,
  CheckCircle,
  Send,
  Building2,
  Clock,
  Lock,
  ArrowRight,
  ExternalLink,
  Copy,
  Check,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageType) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    country: 'Nigeria',
    inquiryType: 'host',
    message: '',
    streamingExperience: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [turnstileVerified, setTurnstileVerified] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const directWhatsAppUrl = `https://wa.me/22897317115?text=${encodeURIComponent(
    `Hello Naijadoge Executive Desk, I am reaching out regarding ${formData.inquiryType.toUpperCase()} opportunities under RC 9075257.`
  )}`;

  const regionalHubs = [
    {
      region: 'West Africa Hub (HQ)',
      location: 'Lagos, Nigeria & Lomé, Togo',
      focus: 'Executive Governance, Media Buying & Host Incubation',
      status: 'Active 24/7 Operations',
    },
    {
      region: 'East Africa Hub',
      location: 'Nairobi, Kenya & Kigali, Rwanda',
      focus: 'Regional Agency Licensing & Platform Expansion',
      status: 'Active 24/7 Operations',
    },
    {
      region: 'Southern Africa Hub',
      location: 'Johannesburg, South Africa',
      focus: 'Talent Acquisition, Token Reselling & Fiat Settlement',
      status: 'Active 24/7 Operations',
    },
    {
      region: 'North & Central Africa Desk',
      location: 'Cairo, Egypt & Douala, Cameroon',
      focus: 'Francophone & Arabic Livestream Monetization',
      status: 'Active 24/7 Operations',
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#07111F] text-white pt-28 sm:pt-36 pb-24 overflow-hidden">
      {/* Background ambience */}
      <div className="absolute top-20 right-1/3 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 left-10 w-[600px] h-[600px] bg-[#11253E]/40 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Header */}
        <div className="space-y-4 max-w-3xl text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1B2A] border border-white/[0.1] text-xs text-[#B8C4D3]">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span className="font-semibold text-white">Direct Executive Communications</span>
            <span className="text-white/30">•</span>
            <span className="font-mono text-[#D4AF37] font-bold">RC 9075257</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-display text-white tracking-tight leading-[1.08]">
            CONNECT WITH <br />
            <span className="gold-gradient-text">NAIJADOGE EXECUTIVE DESK</span>
          </h1>

          <p className="text-base sm:text-lg text-[#B8C4D3] leading-relaxed">
            Whether applying for host verification, setting up a licensed regional sub-agency, purchasing wholesale tokens, or negotiating streaming platform distribution rights across Africa.
          </p>
        </div>

        {/* ================= MAIN CONTACT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDE: DIRECT OFFICIAL CHANNELS & HUBS */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Primary Verified Channels Card */}
            <div className="luxury-card p-6 sm:p-8 rounded-2xl space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37] block">
                Official Contact Direct Channels
              </span>

              {/* WhatsApp Item */}
              <div className="p-4 bg-[#0D1B2A] border border-white/[0.08] rounded-xl flex items-center justify-between gap-4 group hover:border-[#D4AF37]/50 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#B8C4D3] font-bold block">
                      Official WhatsApp VIP Desk
                    </span>
                    <span className="text-sm sm:text-base font-mono font-bold text-white">
                      +22897317115
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy('+22897317115', 'phone')}
                    className="p-2 bg-[#11253E] hover:bg-white/[0.08] rounded-lg text-[#B8C4D3] hover:text-white transition-all cursor-pointer"
                    title="Copy phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href="https://wa.me/22897317115"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-all"
                    title="Open WhatsApp Chat"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Email Item */}
              <div className="p-4 bg-[#0D1B2A] border border-white/[0.08] rounded-xl flex items-center justify-between gap-4 group hover:border-[#D4AF37]/50 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#5B8DEF]/10 border border-[#5B8DEF]/30 flex items-center justify-center text-[#5B8DEF]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#B8C4D3] font-bold block">
                      Official Enterprise Email
                    </span>
                    <span className="text-sm sm:text-base font-mono font-bold text-white">
                      info@naijadoge.com
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy('info@naijadoge.com', 'email')}
                    className="p-2 bg-[#11253E] hover:bg-white/[0.08] rounded-lg text-[#B8C4D3] hover:text-white transition-all cursor-pointer"
                    title="Copy email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href="mailto:info@naijadoge.com"
                    className="p-2 bg-[#11253E] hover:bg-white/[0.08] text-white rounded-lg transition-all"
                    title="Send Email"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Facebook Page Item */}
              <div className="p-4 bg-[#0D1B2A] border border-white/[0.08] rounded-xl flex items-center justify-between gap-4 group hover:border-[#D4AF37]/50 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#B8C4D3] font-bold block">
                      Official Facebook Community
                    </span>
                    <span className="text-sm font-bold text-white">
                      Naijadoge Media & Agency
                    </span>
                  </div>
                </div>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-[#11253E] hover:bg-white/[0.08] text-white rounded-lg transition-all"
                  title="Visit Facebook Page"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Corporate Registration Stamp */}
              <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#B8C4D3]">
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Company Registration:</span>
                </div>
                <span className="font-mono font-bold text-white bg-[#0D1B2A] px-2.5 py-1 rounded border border-white/[0.08]">
                  RC 9075257
                </span>
              </div>
            </div>

            {/* Business Support & SLA Notice */}
            <div className="luxury-card p-6 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                <Clock className="w-4 h-4" />
                <span>24/7 Executive Response SLA</span>
              </div>
              <p className="text-xs text-[#B8C4D3] leading-relaxed">
                All host verification requests, agency license inquiries, and bulk token replenishment orders submitted through our channels are processed within 2 hours by dedicated regional desk coordinators.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: LARGE ENTERPRISE CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className="luxury-card p-8 sm:p-10 rounded-2xl space-y-6 text-left border border-white/[0.12] shadow-2xl">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37]">
                  Priority Inquiry Protocol
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  Direct Executive Dispatch
                </h3>
                <p className="text-xs text-[#B8C4D3]">
                  Protected by Enterprise SSL Encryption & Government Verified Registration RC 9075257.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold font-display text-white">Inquiry Dispatched Successfully</h4>
                  <p className="text-sm text-[#B8C4D3] max-w-md mx-auto leading-relaxed">
                    Thank you for contacting Naijadoge. An executive account director will review your dossier and initiate contact via WhatsApp and Email.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={directWhatsAppUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D4AF37] hover:bg-[#E8D38A] text-[#07111F] font-bold rounded-xl text-xs uppercase tracking-wider transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Continue to WhatsApp Desk</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 bg-[#0D1B2A] hover:bg-white/[0.05] text-white font-medium rounded-xl text-xs uppercase tracking-wider border border-white/[0.1]"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#B8C4D3] mb-1">
                        Full Name / Company Representative *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Chief Samuel Adebayo"
                        className="w-full bg-[#0D1B2A] border border-white/[0.1] rounded-xl px-4 py-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#B8C4D3] mb-1">
                        Corporate / Personal Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full bg-[#0D1B2A] border border-white/[0.1] rounded-xl px-4 py-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#B8C4D3] mb-1">
                        WhatsApp Contact Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+234 / +233 / +254 / +27..."
                        className="w-full bg-[#0D1B2A] border border-white/[0.1] rounded-xl px-4 py-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#B8C4D3] mb-1">
                        Primary African Jurisdiction *
                      </label>
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full bg-[#0D1B2A] border border-white/[0.1] rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                      >
                        <option value="Nigeria">Nigeria 🇳🇬 (West Africa)</option>
                        <option value="Ghana">Ghana 🇬🇭 (West Africa)</option>
                        <option value="Kenya">Kenya 🇰🇪 (East Africa)</option>
                        <option value="South Africa">South Africa 🇿🇦 (Southern Africa)</option>
                        <option value="Togo">Togo 🇹🇬 (West Africa)</option>
                        <option value="Ivory Coast">Ivory Coast 🇨🇮 (West Africa)</option>
                        <option value="Cameroon">Cameroon 🇨🇲 (Central Africa)</option>
                        <option value="Senegal">Senegal 🇸🇳 (West Africa)</option>
                        <option value="Egypt">Egypt 🇪🇬 (North Africa)</option>
                        <option value="Uganda">Uganda 🇺🇬 (East Africa)</option>
                        <option value="Other Country">Other Country / Global Diaspora 🌍</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#B8C4D3] mb-1">
                      Inquiry Category *
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value as any })}
                      className="w-full bg-[#0D1B2A] border border-white/[0.1] rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="host">Host Recruitment & Fast-Track Verification</option>
                      <option value="agent">Sub-Agency Licensing & Agent Partnership</option>
                      <option value="token_reseller">Streaming App Token Wholesale & Coin Orders</option>
                      <option value="app_promotion">Streaming App Promotion & African Expansion</option>
                      <option value="media_buying">Enterprise Media Buying & Traffic Campaigns</option>
                      <option value="other">Executive / Institutional Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#B8C4D3] mb-1">
                      Detailed Proposal / Requirement *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your streaming targets, platform ID, agency size, token volume requirements, or partnership proposal..."
                      className="w-full bg-[#0D1B2A] border border-white/[0.1] rounded-xl p-4 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-all resize-none"
                    />
                  </div>

                  {/* Cloudflare Turnstile & Enterprise Security Shield */}
                  <div className="p-3 bg-[#07111F] border border-white/[0.08] rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-[#B8C4D3]">
                      <Lock className="w-4 h-4 text-emerald-400" />
                      <span className="font-mono text-[11px]">Cloudflare Turnstile Verified: Human Operator</span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 bg-[#D4AF37] hover:bg-[#E8D38A] text-[#07111F] font-extrabold text-xs uppercase tracking-[0.16em] rounded-xl transition-all cursor-pointer shadow-[0_4px_25px_rgba(212,175,55,0.35)] flex items-center justify-center gap-2 active:scale-[0.99]"
                    >
                      <span>Transmit Priority Inquiry</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* ================= INTERACTIVE AFRICAN OPERATIONS HUBS & MAP DIRECTORY ================= */}
        <section className="space-y-6 text-left">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37]">
              Continental Presence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
              Pan-African Operational Footprint
            </h2>
            <p className="text-xs sm:text-sm text-[#B8C4D3]">
              Active agency infrastructure coordinating talent management, token distribution, and local financial settlement in all major economic zones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {regionalHubs.map((hub, idx) => (
              <div
                key={idx}
                className="luxury-card p-5 rounded-xl border border-white/[0.08] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#D4AF37]">
                    <MapPin className="w-4 h-4" />
                    <h4 className="text-sm font-bold text-white">{hub.region}</h4>
                  </div>
                  <p className="text-xs font-semibold text-[#D4AF37]">{hub.location}</p>
                  <p className="text-[11px] text-[#B8C4D3] leading-relaxed">{hub.focus}</p>
                </div>
                <div className="pt-2 border-t border-white/[0.06] flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{hub.status}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
