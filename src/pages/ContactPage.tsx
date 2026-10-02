import React, { useState } from 'react';
import { PageType } from '../types';
import { SocialLinks } from '../components/SocialLinks';
import { submitToFormspree } from '../services/formspree';
import {
  Mail,
  Phone,
  MessageSquare,
  Globe,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Send,
  Building2,
  Clock,
  Lock,
  ArrowRight,
  Copy,
  Check,
  AlertCircle,
  Loader2,
  Tv,
  ChevronLeft,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageType) => void;
  onOpenWeChat: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenWeChat }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'Nigeria',
    platform: 'Bigo Live',
    inquiryType: 'Host Recruitment',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

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

  const validate = () => {
    if (!formData.name.trim()) return 'Please enter your full legal name.';
    if (!formData.email.trim() || !formData.email.includes('@')) return 'Please provide a valid email address.';
    if (!formData.phone.trim() || formData.phone.length < 7) return 'Please provide a valid WhatsApp phone number.';
    if (!formData.platform) return 'Please choose a target streaming platform.';
    if (!formData.message.trim()) return 'Please enter your message or inquiry details.';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setErrorMessage(validationError);
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const res = await submitToFormspree({
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      country: formData.country,
      platform: formData.platform,
      inquiryType: formData.inquiryType,
      message: formData.message.trim(),
    });

    if (res.ok) {
      setStatus('success');
    } else {
      setStatus('error');
      setErrorMessage(res.error || 'Unable to submit at this time. Please chat directly on WhatsApp.');
    }
  };

  const directWhatsAppUrl = `https://wa.me/22897317115?text=${encodeURIComponent(
    `Hello NaijaDoge Executive Desk, I sent an inquiry regarding ${formData.inquiryType} on ${formData.platform} (${formData.name}). Please review under RC 9075257.`
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
      focus: 'Multilingual Streaming & Currency Clearing',
      status: 'Active 24/7 Operations',
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#07111F] text-white pt-24 sm:pt-32 pb-24 overflow-hidden">
      {/* Background ambience */}
      <div className="absolute top-20 right-1/3 w-[500px] h-[500px] bg-[#008751]/15 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 left-10 w-[600px] h-[600px] bg-[#11253E]/40 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Navigation Breadcrumb back to independent Home */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#008751] hover:text-[#10B981] transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to Home Page</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="space-y-4 max-w-3xl text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1B2A] border border-[#008751]/30 text-xs text-[#6EE7B7]">
            <span className="w-2 h-2 rounded-full bg-[#008751]" />
            <span className="font-semibold text-white">Direct Executive Communications</span>
            <span className="text-white/30">•</span>
            <span className="font-mono text-[#D4AF37] font-bold">RC 9075257</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-display text-white tracking-tight leading-[1.08] uppercase">
            CONNECT WITH <br />
            <span className="text-[#008751]">NAIJADOGE EXECUTIVE DESK</span>
          </h1>

          <p className="text-base sm:text-lg text-[#B8C4D3] leading-relaxed">
            Whether applying for host verification, setting up a licensed sub-agency on Bigo, TikTok, Olamet, Chamet, Tandoo, or Emma, purchasing wholesale tokens, or negotiating streaming platform distribution rights across Africa.
          </p>
        </div>

        {/* ================= MAIN CONTACT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDE: DIRECT OFFICIAL CHANNELS & HUBS */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Primary Verified Channels Card */}
            <div className="luxury-card p-6 sm:p-8 rounded-2xl space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#008751] block">
                Official Contact Direct Channels
              </span>

              {/* WhatsApp Item */}
              <div className="p-4 bg-[#0D1B2A] border border-white/10 rounded-xl flex items-center justify-between gap-4 group hover:border-[#008751]/50 transition-all">
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
                    className="p-2 text-[#B8C4D3] hover:text-white bg-[#11253E] rounded-lg border border-white/10 cursor-pointer"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href="https://wa.me/22897317115"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-emerald-500/30 transition-all flex items-center gap-1"
                  >
                    <span>Chat</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Email Item */}
              <div className="p-4 bg-[#0D1B2A] border border-white/10 rounded-xl flex items-center justify-between gap-4 group hover:border-[#5B8DEF]/50 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#5B8DEF]/10 border border-[#5B8DEF]/30 flex items-center justify-center text-[#5B8DEF]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#B8C4D3] font-bold block">
                      Executive Correspondence
                    </span>
                    <span className="text-sm sm:text-base font-mono font-bold text-white">
                      info@naijadoge.com
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy('info@naijadoge.com', 'email')}
                    className="p-2 text-[#B8C4D3] hover:text-white bg-[#11253E] rounded-lg border border-white/10 cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href="mailto:info@naijadoge.com"
                    className="px-3 py-2 bg-[#5B8DEF]/20 text-[#5B8DEF] border border-[#5B8DEF]/40 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#5B8DEF]/30 transition-all flex items-center gap-1"
                  >
                    <span>Mail</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Social Channels Section */}
              <div className="p-4 bg-[#0D1B2A] border border-white/10 rounded-xl space-y-3">
                <span className="text-[10px] uppercase tracking-wider text-[#008751] font-bold block">
                  Official Social Handles
                </span>
                <SocialLinks onOpenWeChat={onOpenWeChat} iconSize="md" />
              </div>

              {/* Legal Registration Card */}
              <div className="p-4 bg-[#07111F] rounded-xl border border-white/10 space-y-2 text-xs text-[#B8C4D3]">
                <div className="flex items-center justify-between text-white font-mono">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Incorporation Status:</span>
                  </span>
                  <span className="text-[#008751] font-bold">Active & Verified</span>
                </div>
                <div className="flex items-center justify-between font-mono">
                  <span>Corporate Registry Number:</span>
                  <span className="text-white font-bold">RC 9075257</span>
                </div>
                <div className="flex items-center justify-between font-mono">
                  <span>Jurisdiction:</span>
                  <span>Federal Republic of Nigeria & West African Desk</span>
                </div>
              </div>
            </div>

            {/* Regional Hubs */}
            <div className="luxury-card p-6 sm:p-8 rounded-2xl space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#008751] block">
                Regional Operations Network
              </span>
              <div className="space-y-3">
                {regionalHubs.map((hub, idx) => (
                  <div key={idx} className="p-3 bg-[#0D1B2A] rounded-xl border border-white/5 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">{hub.region}</span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                        {hub.status}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#008751] font-medium">{hub.location}</p>
                    <p className="text-[11px] text-[#B8C4D3]">{hub.focus}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: FORMSPREE INTEGRATED OFFICIAL CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className="luxury-card p-6 sm:p-10 rounded-2xl space-y-6 text-left">
              <div className="space-y-2 border-b border-white/10 pb-5">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#008751] block">
                  Encrypted Dispatch Form
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  Direct Inquiries to Executive Management
                </h3>
                <p className="text-xs sm:text-sm text-[#B8C4D3]">
                  All inquiries route directly to our executive inbox via Formspree with guaranteed 2-hour response during African business hours.
                </p>
              </div>

              {status === 'success' ? (
                <div className="py-10 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2 max-w-md mx-auto">
                    <h4 className="text-2xl font-bold text-white font-display">Transmission Successful</h4>
                    <p className="text-xs sm:text-sm text-[#B8C4D3] leading-relaxed">
                      Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry regarding <strong className="text-[#008751]">{formData.inquiryType}</strong> on <strong className="text-white">{formData.platform}</strong> has been received by NaijaDoge Executive Desk.
                    </p>
                  </div>

                  <div className="p-4 bg-[#07111F] rounded-xl border border-white/10 text-xs text-[#B8C4D3] max-w-md mx-auto text-left space-y-1.5 font-mono">
                    <div className="flex justify-between">
                      <span>Sender:</span>
                      <span className="text-white">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Target Platform:</span>
                      <span className="text-[#008751]">{formData.platform}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>WhatsApp:</span>
                      <span className="text-white">{formData.phone}</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={directWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#008751] hover:bg-[#007043] text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Instant VIP WhatsApp Fast-Track</span>
                    </a>
                    <button
                      onClick={() => {
                        setStatus('idle');
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          country: 'Nigeria',
                          platform: 'Bigo Live',
                          inquiryType: 'Host Recruitment',
                          message: '',
                        });
                      }}
                      className="px-6 py-3 bg-[#11253E] hover:bg-white/10 text-white font-medium rounded-xl text-xs uppercase tracking-wider border border-white/10"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl flex items-center gap-2.5 text-xs text-rose-300">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#B8C4D3] mb-1.5">
                        Full Legal Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Samuel Adeleke"
                        className="w-full bg-[#0D1B2A] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#008751] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#B8C4D3] mb-1.5">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+234 800 000 0000"
                        className="w-full bg-[#0D1B2A] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#008751] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#B8C4D3] mb-1.5">
                        Corporate / Personal Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full bg-[#0D1B2A] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#008751] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#B8C4D3] mb-1.5">
                        Selected Platform (Official 6) *
                      </label>
                      <select
                        name="platform"
                        value={formData.platform}
                        onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                        className="w-full bg-[#0D1B2A] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#008751] transition-all"
                      >
                        <option value="Bigo Live">Bigo Live</option>
                        <option value="TikTok Live">TikTok Live</option>
                        <option value="Olamet">Olamet</option>
                        <option value="Chamet">Chamet</option>
                        <option value="Tandoo">Tandoo</option>
                        <option value="Emma">Emma</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#B8C4D3] mb-1.5">
                        Inquiry Nature *
                      </label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full bg-[#0D1B2A] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#008751] transition-all"
                      >
                        <option value="Host Recruitment">Host Recruitment & Onboarding</option>
                        <option value="Agent Recruitment">Regional Sub-Agency Licensing</option>
                        <option value="Token Reseller Desk">Wholesale Token / Coin Purchase</option>
                        <option value="Salary Agency Clearing">Salary Clearing Desk</option>
                        <option value="Media Buying Campaign">Enterprise Media Buying</option>
                        <option value="Executive Partnership">General Executive Partnership</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#B8C4D3] mb-1.5">
                        Country of Operation
                      </label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full bg-[#0D1B2A] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#008751] transition-all"
                      >
                        <option value="Nigeria">Nigeria 🇳🇬</option>
                        <option value="Ghana">Ghana 🇬🇭</option>
                        <option value="Kenya">Kenya 🇰🇪</option>
                        <option value="South Africa">South Africa 🇿🇦</option>
                        <option value="Togo">Togo 🇹🇬</option>
                        <option value="Ivory Coast">Ivory Coast 🇨🇮</option>
                        <option value="Cameroon">Cameroon 🇨🇲</option>
                        <option value="Senegal">Senegal 🇸🇳</option>
                        <option value="Egypt">Egypt 🇪🇬</option>
                        <option value="Uganda">Uganda 🇺🇬</option>
                        <option value="Other African Country">Other African Nation 🌍</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#B8C4D3] mb-1.5">
                      Message / Business Inquiry *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Detail your streaming background, sub-host network size, token volume required, or agency proposal..."
                      className="w-full bg-[#0D1B2A] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#008751] transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col gap-3">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-4 px-6 bg-[#008751] hover:bg-[#007043] disabled:opacity-50 text-white font-black text-xs uppercase tracking-[0.16em] rounded-xl transition-all cursor-pointer shadow-[0_4px_25px_rgba(0,135,81,0.4)] flex items-center justify-center gap-2 active:scale-98"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Dispatching to Formspree...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Secure Executive Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-between text-[11px] text-[#B8C4D3]/70 px-1 pt-1">
                      <span className="flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Formspree TLS 1.3 Endpoint Active</span>
                      </span>
                      <span className="font-mono">RC 9075257 Verified</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
