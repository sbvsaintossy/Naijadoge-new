import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck, Sparkles, MessageSquare, DollarSign, Award } from 'lucide-react';

interface ApplicationModalProps {
  isOpen: boolean;
  type: 'host' | 'agent';
  onClose: () => void;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  type,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: 'Nigeria',
    experience: 'Beginner (Ready for Training)',
    appPreference: 'TikTok Live / Poppo / Bigo Live',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const isHost = type === 'host';

  const directWhatsAppUrl = `https://wa.me/22897317115?text=${encodeURIComponent(
    `Hello Naijadoge VIP Desk, I want to apply as a ${isHost ? 'Host / Streamer' : 'Talent Agent / Sub-Agency'} under RC 9075257.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        id="application-modal-dialog"
        className="relative w-full max-w-lg bg-[#0D1B2A] border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(212,175,55,0.15)] text-left"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#B8C4D3] hover:text-white bg-[#11253E] rounded-full border border-white/[0.08] cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-display text-white">Application Dispatched</h3>
            <p className="text-sm text-[#B8C4D3] max-w-sm mx-auto leading-relaxed">
              Your credentials have been queued for Tier-1 evaluation by Naijadoge agency directors. You will receive an official onboarding confirmation via WhatsApp within 2 hours.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D4AF37] hover:bg-[#E8D38A] text-[#07111F] font-bold rounded-xl text-xs uppercase tracking-wider transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp VIP Fast-Track</span>
              </a>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-[#11253E] hover:bg-white/[0.05] text-white font-medium rounded-xl text-xs uppercase tracking-wider border border-white/[0.08]"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-[11px] font-bold tracking-wide uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isHost ? 'Official Host Enrollment' : 'Certified Agent Partnership'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                {isHost ? 'Step Into The Global Spotlight' : 'Build A Million-Dollar Agency'}
              </h2>
              <p className="text-xs sm:text-sm text-[#B8C4D3] mt-1.5 leading-relaxed">
                {isHost
                  ? 'Join 5,000+ top-earning African streamers with verified agency contracts, guaranteed salary payouts, and algorithmic promotion.'
                  : 'Manage sub-hosts, access discounted token packages, and earn highest-tier agency rev-share across 25+ African nations.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#B8C4D3] mb-1">
                    Full Legal Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Amara Okafor"
                    className="w-full bg-[#11253E] border border-white/[0.1] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#B8C4D3] mb-1">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+234 / +233 / +254..."
                    className="w-full bg-[#11253E] border border-white/[0.1] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#B8C4D3] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full bg-[#11253E] border border-white/[0.1] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#B8C4D3] mb-1">
                    Country of Residence
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full bg-[#11253E] border border-white/[0.1] rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
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
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#B8C4D3] mb-1">
                  Primary Streaming Target / Experience
                </label>
                <select
                  value={formData.appPreference}
                  onChange={(e) => setFormData({ ...formData, appPreference: e.target.value })}
                  className="w-full bg-[#11253E] border border-white/[0.1] rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="TikTok Live Ecosystem">TikTok Live (Global Tier)</option>
                  <option value="Poppo Live Agency">Poppo Live (High Commission)</option>
                  <option value="Bigo Live Agency">Bigo Live (Enterprise)</option>
                  <option value="Tango / Likee / Uplive">Tango / Likee / Uplive</option>
                  <option value="New Platform Promotion">New Platform Launch Campaign</option>
                </select>
              </div>

              <div className="pt-2 flex flex-col gap-3">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-[#D4AF37] hover:bg-[#E8D38A] text-[#07111F] font-bold text-xs uppercase tracking-[0.15em] rounded-xl transition-all cursor-pointer shadow-[0_4px_20px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2"
                >
                  <span>Submit Tier-1 Application</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-between text-[10px] text-[#B8C4D3]/70 px-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Government Registered RC 9075257
                  </span>
                  <span>100% Payout Guaranteed</span>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
